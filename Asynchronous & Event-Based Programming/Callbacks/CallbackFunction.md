**Definition (Callback)→** Is a function that is passed into another function as an argument so it can be invoked later

**Invoked meaning →**  This means when a function is called or excecuted 
**NB:** JS callback function excecute in sequence they are called not where they are defined

```bash
Function invoked
function greet(){
console.log("Good morning Deng")
}
greet()

output
 Good morning Deng
 
 note
 greet is a function in a function definition 
 so when greet is invoked then it runs the code or excecute the code 
 
 Callback function, passed function
 function greetUser(name, callback){
	 console.log(`hello, ${name}`);
	 callback(); //invoked callback calling it
 }
 greetUser(Deng, ()=> console.log('have a greet day!');
 
 
```