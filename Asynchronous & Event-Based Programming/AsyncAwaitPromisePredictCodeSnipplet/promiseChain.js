// Promise Chain

const promise = new Promise((resolve, reject) => {
  console.log('Promise created');
  resolve('First resolve');
});

promise
  .then((result) => {
    console.log(result);
    return 'Second resolve';
  }
  .then((result) => {
    console.log(result);
    throw new Error('Error in chain');
  })
  .catch((error) => {
    console.error('Caught:', error.message);
  })
  .then(() => {
    console.log('After catch');
  });


  // output thought
  //when a promise is excecuted it runs immediatly 
  //so here   console.log('Promise created'); this code will run chap chap synchronoysly why? because we log it straight so since the runs straight to the console


  //resolve('First resolve'); then this becames the resolved value of the promise
  //promise
  // .then((result) => {
  //   console.log(result);
  //   return 'Second resolve';
  // } consuming promise .then catches the first resolved value that is fullfulled from the promsie

  // .then((result) => {
  //   console.log(result);
  //   throw new Error('Error in chain');
  // })
  //then this second .then get whatever ouput is returned from the first then so its always a promise and since we throwing an error then the next .then if it was there wont catch that becasue its now a rejected state of apromise meaning we need catch for this now

  // .catch((error) => {
  //   console.error('Caught:', error.message);
  // })
  //so the .catch will handle the erros from the rejected output (promise) then it will print the message of that error

  //  .then(() => {
  //   console.log('After catch');
  // });
  //so now since the errors are caught by catch now this then will print the after catch safely 

  // !output
  //'Promise created'
  //'First resolve'
  //'Caught:', error.message
  //'After catch'



