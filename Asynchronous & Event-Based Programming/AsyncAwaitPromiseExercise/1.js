async function sequentialWait(){
  const twoSeconds = await new Promise(resolve => {
    setTimeout(()=>{
    console.log(`Hello after 2 seconds`)
      resolve();
  }, 2000)
  });
  const oneAfter = await new Promise(resolve => {
    setTimeout(()=>{
    console.log(`Done`)
      resolve()
  }, 1000) 
    
});
}                                  
sequentialWait();


/**
 Write an async function that:
	•	Waits 2 seconds
	•	Then logs "Hello after 2 seconds"
	•	Then waits 1 more second and logs "Done"
 */