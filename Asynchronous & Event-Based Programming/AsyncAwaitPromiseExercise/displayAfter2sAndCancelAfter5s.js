// Write a javascript function that displays a number every two seconds and stops displaying after 5 seconds

// we use a setInterval and timeout

function displayNumber(){
  const interval = setInterval(()=>{
    console.log(12);
  }, 2000);
  setTimeout(()=>{
    clearInterval(interval)
      console.log('Stoped after 5 seconds')
    },5000)
}
displayNumber()