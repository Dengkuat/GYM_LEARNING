
// Write a generic function getId that:
// 	•	accepts an object
// 	•	only allows objects with an id: number
// 	•	returns the id


// This should fail:
// getId({ name: "Deng" });

// This should pass:
// getId({ id: 10, name: "Deng" });

function getId<T extends {id:number}>(object: T ):number{
  return object.id;
}
console.log(getId({name: "Deng" }))
console.log(getId({ id: 10, name: "Deng" }))


//so extends determines how the generic return structure should look like
//else then it will not compile if the input has not structure that we want 
//this ensure type and structure safely with generics 