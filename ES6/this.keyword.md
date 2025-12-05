Basic of this

this is a refernce to the object that is calling the function

this varies, so how the function is called determines what this point to

Global Context

this is a global scope outside of anyfunction

so in the browser this will print window object

in noide.js this will print {}  depending on the version

**anywhere outside of a function this keyword points to the global object**

In regular functions

in non strict mode - this is a global object

in strick mode using ‘use struct’; this is undefined

In arrow function

arrow function dosnt have their own this

they inherit this fropm the lexical scope where they are defined 

at a global scope , it will behave like a normal global function

In Object methods 

when a function is called as a method of an object then this points to the object before the dot that called it 

this then will point out to the object that called the method which is the one before the dot

In classes

class is a blueprint that creates object with shared properties and methods

so inside of a class method, this points to the isntance of the class