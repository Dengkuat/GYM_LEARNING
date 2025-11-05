then, catch and finally exercise 

Resolving a promise 

```bash
const successfullPromise = new Promise((resolve, reject) => {

setTimeout(()=>resolve("Data fetch successfull"), 2000)

})

successfullPromise

.then(result => console.log('This is ur result'))

.catch(error => console.error('Error'))

.finally(()=> console.log('Operation is done'))

output

Data fetched successfully

Operation finished

Explanation?

So we create a promsie with either resolve or reject state as the 2 paramter to the Promise

The Promise keyword is an object that create a Promise so with new keyword then we have created a new promise

So we wrap a setTimeOut of 2 seconds inside the promise so  after 2 seconds then it resolved the meaning it was successfull so if we had an  error then it would reject

So then we start consuming the promise

then if the promise was successfull

catch is the promise was rejected

finally for no matter what runs either successfull or failur
```

Rejected Promise 

```bash
const failedPromise = new Promise ((resolve, reject) => {

setTimeout(()=> reject("Error: Something went wrong"), 2000);

});

failedPromise

.then(result => console.log(result))

.catch(error => console.error(error))

.finally(()=> console.log("Operation finished"))

output

Error: Something went wrong

Operation finished

Explanation?

So its the same as the resolved explanation only that catch acctaully catched the error
```

ChainingPromise 

```bash
const chainedPromise = new Promise((resolve) => {

resolve(2);

});

chainedPromise

.then(num => num*2)

.then(num => num+3)

.then(num => console.log(num))

.finally(()=>console.log("Operation is complete"))

output

7

Operation finished

Explanation?

so we created a new promise with a parameter resolve value of 2

then when we start consuming promise the first then recived 2 and gives the solution of 4 so that 4 will now automatically passed to the next then in the chain and the third chain logs the final result
```