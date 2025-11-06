- Chaining promise simply means connecting mutiple .then() calls togther, so the result of one promise is the input for the nect one
- So we can say that this is like a sequence of dependent taks each one waits for the previous one to finish

**So why do we chain in promise**

- Asynchronous operations depend on the result of previous one
- We want to avoid callback hell so we use chaining
- We need clean, readable syntax before moving to async and await

**How does it work?**

- **.then()** method returns a new promise, not the original one, so we can attach another **.then()** to handle the result of the first then

```bash
const chainedPromise = new Promise((resolve) => {
    resolve(2)
})
chainedPromise
    .then(num => num*2)
    .then(num => num+4)
    .then(num => num-8)
    .then(num => console.log(num));
    
    ouput
    0
    
    Explanation?
    So we create a new Promise with a resolve value of 2
    So using chained .then()the result of he first then is automatically carried by the next then 
    so that why the output is 0 beacuse 2*2 = 4+4 = 8-8 = 0
```

**So how do we handle errors in a chain?**

so we can catch errors at the end of the chain using .catch()

```bash
fetchData()
  .then(processData)
  .then(saveData)
  .catch(error => console.error("Something went wrong:", error))
  .finally(() => console.log("All done"));
```

so if one .then() catches an error then then the chain will just straight to catch

Practice

Stimulating fetching data, processing it and saving it using chaining

```bash
function fetchData(){
    return new Promise(resolve => {
        setTimeout(()=>resolve('Data Fetched'), 1000);
    });
};

function processData(data){
    return new Promise(resolve => {
        setTimeout(()=>resolve(`${data} and processed`), 2000);
    });
};

function saveData(data){
    return new Promise(resolve=>{
        setTimeout(()=>resolve(`${data} and saved after processed`), 3000);
    });
};

fetchData()
.then(result => processData(result))
.then(result => saveData(result))
.then(result => console.log(result))
.catch(error => console.error(error))
.finally(()=>console.log(`Operatation is complete`))

output
Data Fetched and processed and saved after processed
Operatation is complete
```