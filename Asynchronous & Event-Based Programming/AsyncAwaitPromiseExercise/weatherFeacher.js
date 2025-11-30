// You’re writing a small “Weather Fetcher.”
// It should:
// Try to get weather data from a fake API like
// 👉 https://invalid-weather-api.com/data
// (it will fail on purpose 👀). but alternatively I could use https://api.open-meteo.com/v1/forecast?latitude=51.5072&longitude=0.1276&current_weather=true…
// Retry 3 times with a 1-second delay before giving up.
// Log messages like:
// “Attempt 1 failed… retrying in 1s”
// “All attempts failed. Please try again later.”
// Goal:
// Use your understanding of retries, try...catch, and setTimeout with await.

async function weatherFether(){
  const maxAttempt = 3;
  let currentAttempt = 0;
  while(currentAttempt<maxAttempt){
    try{
        const response = await fetch(`https://invalid-weather-api.com/data`);
        if(!response.ok) throw new Error(response.status);
        const data = await response.json();
        console.log(data);
        return data;
    }catch(error){
      currentAttempt++;
      console.log(`Attempt ${currentAttempt} failed… retrying in 1s`);
      
      if(currentAttempt===maxAttempt){
        console.log(`All attempts failed. Please try again later.`);
      }else{
       await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
  }

}
weatherFether();
