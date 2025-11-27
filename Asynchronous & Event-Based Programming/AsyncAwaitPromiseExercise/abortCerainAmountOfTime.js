// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails. Wrap a promise around it.

async function failAfterRetry(url, maxAttempt){
  let attempt = 0;
  
  while(attempt<maxAttempt){
    try{
      const response =  await fetch(url)
      const data = await response.json()
      console.log(data)
      return data
    }catch(error){
      attempt++;
      console.log(`Attempt ${attempt} failed so we are going to retry fetching again`);
      if(attempt === maxAttempt){
        console.log(`Retried fetching ${attempt} times but couldn't`)
        throw error;
      }
      //we wait for 3 seconds before we can retry again;
      await new Promise(resolve =>setTimeout( resolve, 3000));
    }
    

  }
}
// failAfterRetry(`https://jsonplaceholder.typicode.com/users`, 3);
failAfterRetry(`https://this-domain-does-not-exist-12345.com/api`, 3);