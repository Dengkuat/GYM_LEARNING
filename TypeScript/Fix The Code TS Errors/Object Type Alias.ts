type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};  //oh we working with a type aias of an object type with different properties

function getCurrentUser(user: User): User {    // we initialization the type alias to the function user:User.   
  if (Math.random() > 0.5) {
    return  { 
        id: 1, 
        name: "Alice", 
        isAdmin: true 
        };
  }
}