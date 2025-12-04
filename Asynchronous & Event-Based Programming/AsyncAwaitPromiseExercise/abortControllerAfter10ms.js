
// 1. Write a function that takes a URL and fetches data from that URL but aborts when the request takes more than 10ms
//async and await
//so when it takes time we abort -> abort controller object method
//so it has to take time about 10ms -> setTimeout 100

async function abortFetch(){ 
  const controller = new AbortController();
  const timer = setTimeout(()=>{
    controller.abort();
  }, 10);
  try{
     const response = await fetch('https://jsonplaceholder.typicode.com/users', {signal:controller.signal});
    clearTimeout(timer);
    if(!response.ok) throw new Error (response.status);
    const data = await response.json();
  console.log(data);
  }catch(error){
    if(error.name === 'AbortError'){
      console.log(`The fetch took more than 10ms so it was aborted`);
    }else{
      console.log(error.message);
    }
  }
}
abortFetch();