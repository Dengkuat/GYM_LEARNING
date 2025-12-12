function greet(name: (string|number)): string {
  if(typeof name === 'string'){
      return "Hello" + name.toUpperCase();
  }else{
      return "Hello" + name;
  }
}
const names = ["alice", "bob", 123];
names.forEach(n => console.log(greet(n))); 

//Errors l see
//1. we see that our input case is off different types, l see a string and a number type meaning we need to use the union types since we cant tell the type of that value
//2.again we are just calling the string method which is correct but when it gets to the number we will see errors there we need to compare and have the string method work only for string and not the numbers 

//my steps to solving the errors
//union type represents a value that can be of many multiple distnct types
//so then we will use type narrowing 
//type narrowing is checking what that value could be if it a string or a number then we can use appropriate methods on each
//string methods and number methods are not the same 
//so with that the code shoud be able to print the right output