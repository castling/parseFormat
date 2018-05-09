var reshapeTimeformat = function(format) {
  if( format.match(/\[.*\]/) ) {
    return format.split('[').map(d=>{
      var f = d.split(']')
      if( f[1] ) {
        f[1] = `%{time:${f[1]}}`
      }
      return f.join('')
    }).join('')
  }
  return format
}

module.exports = function(format) {
  format = reshapeTimeformat(format)
  var arr = format.match(/[^%]*%\{[^\}]+\}/g).reduce((arr,d)=>{
    f = d.split('%{')
    if( f[1] ) {
      f[1] = f[1].slice(0,-1)
    }
    return arr.concat(f);
  },[])
  arr.push(format.match(/[^%\{\}]*$/)[0])
  var res = []
  for( var i=1; i<arr.length; i+= 2 ) {
    var g = arr[i].match(/([^:]*)(?:(?::)(.*))?/)
    res.push({
      name: g[1],
      option: g[2],
      pre: arr[i-1],
      post: arr[i+1],
    })
  }
  return res
}
