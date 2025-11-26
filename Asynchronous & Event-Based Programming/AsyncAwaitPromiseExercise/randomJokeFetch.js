// Exercise 1
// ## **Random Joke Fetcher (Promises)**

// **Your task:** Implement a function `fetchRandomJokeWithRetries()` that does the following:

// 1. **Fetches a random joke** from the Joke API:
    
//     `https://official-joke-api.appspot.com/random_joke`
    
// 2. If the request fails (network error or non-200 status), retry up to **3 times**.
// 3. Once a successful response is received, **return an object** with:
//     - `setup`: the setup of the joke
//     - `punchline`: the punchline of the joke
// 4. **Log errors** if all retries fail.

// **Tips:**

// - Use `Promise` constructor and `.then()/.catch()` for everything (no async/await yet).
// - Use `fetch(url)` and check `response.ok`.
// - You can simulate delays between retries using `setTimeout`.



//with async and await
async function fetchRandomJokeWithRetries(){
  const maxAtt = 3;
  let att = 0;
  while(att<maxAtt){
    try{
       const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      if(!response.ok) throw new Error(response.status);
      const data = await response.json();
      const setUp = data.setup;
      const punchline = data.punchline;
      return {
        setup:setUp,
        punchline:punchline
      }
    }catch(error){
      att++;
      console.log(`${att} failed to fetch`);
      if(att===maxAtt){
        console.log(`all ${att} have failed to fetch data`)
      }else{
        await new Promise(resolve => {
          setTimeout(()=>{
            resolve();
          }, 2000); 
        });
        continue;
      }
    }
  }
 
}
fetchRandomJokeWithRetries().then(result =>console.log(result));

//with promises
function fetchRandomJokeWithRetries() {
  const maxAttempts = 3;
  let attempt = 0;

  function tryFetch() {
    return fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => {
        if (!response.ok) throw new Error(`HTTP error ${response.status}`);
        return response.json();
      })
      .then(data => {
        const result = {
          setup: data.setup,
          punchline: data.punchline
        };
        console.log(" Joke:", result);
        return result;
      })
      .catch(error => {
        attempt++;
        console.log(` Attempt ${attempt} failed → ${error.message}`);

        if (attempt === maxAttempts) {
          console.log(` All ${maxAttempts} attempts failed. Giving up.`);
          return null;
        }

        return new Promise(res => setTimeout(res, 2000)).then(() => tryFetch());
      });
  }

  return tryFetch();
}

fetchRandomJokeWithRetries();