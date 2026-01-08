type User = {
  id: number;
  name: string;
};

function getUserName(user?: User) {
  if (!user) {
    return "UNKNOWN";
  }
  return user.name.toUpperCase();
}

const u1 = getUserName({ id: 1, name: "Deng" });
const u2 = getUserName();
const u3 = getUserName({ id: 0, name: "Admin" });

console.log(u1);
console.log(u2);
console.log(u3);

//ok we explixitly defined a type alias user where we have a function getUserName with an optional parameter of user
//so we will then have to check if user exists there wise return undefined or unknown as said there

// Your rules
// 	•	Do not change the function’s purpose
// 	•	Do not use any
// 	•	Fix one issue at a time
// 	•	Keep all function calls
// 	•	Make it TypeScript-safe and runtime-safe