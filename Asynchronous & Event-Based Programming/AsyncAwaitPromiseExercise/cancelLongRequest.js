// Implement a timeout for an asynchronous fetch request. If the request takes longer than 3 milliseconds, it should be aborted.
// https://restcountries.eu/rest/v2/all


async function cancelLongRequest(){
  const controller = new AbortController();
  const timeout = setTimeout(()=>{ 
    controller.abort();
  }, 3000);
try{
const response = await fetch('https://restcountries.eu/rest/v2/all',{signal:controller.signal});
const data = await response.json();
console.log(data);
}catch(error){
  if(error.name === 'AbortError'){
    console.log(`Request took 3 seconds so it was cancelled`);
  }
}


}
cancelLongRequest();