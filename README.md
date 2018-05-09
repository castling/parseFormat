# parseFormat
文字列から変数を抽出します

## 使用方法

```
npm i castling/parseFormat
```

```javascript
let parseFormat = require('parseFormat')
let res = parseFormat(format)
```

## parseFormat(format)

* `format` `{String}` input format string
* return: `{Array<Object>}`
  * name: `{String}` variable name
  * option: `{String}` option [optional]
  * pre: `{String}` flat string before the variable
  * post: `{String}` flat string after the variable

## Format
%{と}で囲われた部分が変数となり、それ以外は平文として扱う。
変数は:optionと記述することでオプションを指定することもできる。

%{var1:opt1} => { name:'var1', option:'opt1' }

## Example
```javascript
parseFormat('/home/hoge/huga/%{var1}/%{var2}%{var3:opt3}.txt')

[
  {
    name: 'var1',
    pre: '/home/hoge/huga/',
    post: '/'
  },
  {
    name: 'var2',
    pre: '/',
    post: ''
  },
  {
    name: 'var3',
    option: 'opt3',
    pre: '',
    post: '.txt'
  }
]

```