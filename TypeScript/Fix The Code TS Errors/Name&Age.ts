type user = {
  name:string,
  age:string
};

function printUser(users:user) {
console.log(users.name.toUpperCase());
console.log(Number(users.age) + 1);
}

printUser({ name: "Sara", age: "25" });

//first of all user user has no typechecking right 
//so there will be any gueses in the run time causes usexpected outputs
//we have the age which is a string but we want to increment it by one so we covert that into a number