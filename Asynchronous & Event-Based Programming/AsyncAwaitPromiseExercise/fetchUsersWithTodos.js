// Create a function called fetchUserTodos that uses the Promise.all() method to fetch users and todos concurrently from the provided API endpoints and combine them based on the userId. The function should return a promise that resolves with the combined data.
// Users endpoints [`https://jsonplaceholder.typicode.com/users`](https://jsonplaceholder.typicode.com/users)
// Todos endpoints [`https://jsonplaceholder.typicode.com/todos`](https://jsonplaceholder.typicode.com/todos) The returned promise should resolve into an array of users, where each user object has a new key todos. This key should contain an array of todos that belong to the user, determined by matching the userId of the todo with the id of the user. User objects may look like 

//   // User object may look like
//   {
//     id: 10,
//   name: 'Clementina DuBuque',
//   ...
// }

// // Todo object may look like
// {
//     userId: 5,
//   completed: false,
//     ...
// }

// The result array will have objects that look like

// {
//     id: 10,
//   name: 'Clementina DuBuque',
//   todos: [
//         {
//             userId: 10,
//           completed: false,
//             ...
//         },
//         {
//             userId: 10,
//           completed: false,
//             ...
//         }
//     ]
//     ...
// }


async function fetchUserTodos(){
  const urls  = [
    `https://jsonplaceholder.typicode.com/users`,
    `https://jsonplaceholder.typicode.com/todos`
  ];
  
  const response = await Promise.all(
   urls.map(url => fetch(url))
  );
  const data = await Promise.all(
  response.map(result => result.json())
  );
  const [users, todos] = data;
    
    const userWithTodos = users.map(user => {
      return {
        user,
        todos: todos.filter(todo => todo.userId === user.id)
      }
    })
    return userWithTodos;
  }
  fetchUserTodos().then(result => console.log(result))