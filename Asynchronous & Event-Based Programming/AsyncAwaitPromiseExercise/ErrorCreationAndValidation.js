// Write a function that returns a promise which resolves with the text "Done" after 3 seconds, but rejects immediately with a custom error type if a boolean argument passed to it is false.
// Handle the error by checking its type and printing:
// "opearation failed due to validation" if it was custome error 
// 	"Unknown failure" for anything else

//customer error
class ValidationError extends Error{
  constructor(message){
    super(message)
    this.name = 'ValidationError';
  }
}

//promise reject when the unput parameter is fasle but when it is true then it resolves
function promiseReject(isValid){
  return new Promise((resolve, reject) => {
    if(!isValid){
      reject(new ValidationError('Invalid input'));
    }else{
       setTimeout(()=>{
      console.log(`Done`)
    }, 2000)
    }
   
  }) 
}

//using consuming methods we catch the result
//so if it is the error we created then we display that message 
promiseReject(false)
.then(result => console.log(result))
.catch(error => {
  if(error.name === 'ValidationError'){
    console.log('opearation failed due to validation');
  }else{
    console.log("Unknown error", error.message)
  }
})
