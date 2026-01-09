type User = {
  name: string;
  age?: number;
};

function printAge(user: User) {
    if(user.age !== undefined){
        console.log(user.age.toFixed(2));
    }
}

printAge({ name: "Alex"});


//so we do have a type alias that represents how an object should look like
//name as string and age is optional 

//so the function printsAge user only 
//but we see that the age is optional if it is not there there no Error 
//but in the log we are tryna access the age 

//so we can use an if statment if age does exist in the input then we doing this 
//simply to avoid typeScript shouting
