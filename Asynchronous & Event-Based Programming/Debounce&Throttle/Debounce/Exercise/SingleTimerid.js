function debounceSimple(fn, wait = 100){
  let timerid = null;
  return function (...args){
    clearTimeout(timerid)
    timerid = setTimeout(()=>{
      fn.apply(this, args);
    }, wait);
  }
}
const log = debounceSimple((msg) => console.log('called', msg), 200);
log('A')
log('B')