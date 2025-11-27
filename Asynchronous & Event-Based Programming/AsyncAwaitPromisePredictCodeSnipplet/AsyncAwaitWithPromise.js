// Async/Await with Promises

async function asyncFunction() {
  console.log('Inside async function');
  return 'Async Function Result';
}

console.log('Start');

asyncFunction().then((result) => {
  console.log(result);
});

console.log('End');

//output though 
//async function run asynchronously untill the first await
//console.log('Start'); is synchronous so it will print start fiirst

//asyncFunction().then((result) => {
//   console.log(result);
// }); 
//async returns a promise so the fullfilled value of a promise will be gotten by this .then so it will resolve for console.log('Inside async function'); straignt then after sinece the return is a promise then it is a macro task meaning it goes straight into the callback queue and wait from the callstack to get empty

//console.log('End');
// this is a synchronous code after the async functions o it will run straight 

//then lastly since the callback stack is now empty right the event manager or loop will take that resolved promise or macro task into the callstack to be excecuted so that why we see it come last 

//ouput?
//start
//'Inside async function'
//End
//'Async Function Result'
