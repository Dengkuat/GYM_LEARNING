function debounce(fn, delay){
  let timer;
  return function(...args){
    clearTimeout(timer)
    timer = setTimeout(()=>{
      fn.apply(this, args);
    }, 2000)
  }
}

const log = debounce((message)=>console.log(message), 200);
log('A')
log('B')