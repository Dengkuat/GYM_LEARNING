// Practical Question 
// Create a function called fetchUserTodos that uses the Promise.all()  method to fetch users and todos concurrently from the provided API endpoints and combine them based on the userId. The function should return a promise that resolves with the combined data.

// Users endpoints https://jsonplaceholder.typicode.com/users
// Todos endpoints https://jsonplaceholder.typicode.com/todos

// The returned promise should resolve into an array of users, where each user object has a new key todos. This key should contain an array of todos that belong to the user, determined by matching the userId of the todo with the id of the user.

//  User object may look like
// {
//     id: 10,
//   name: 'Clementina DuBuque',
//   ...
// }

//  Todo object may look like
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

//so we fetch concurenetluy right
//with promise.all() we have 2 endpoints correct 
// Users endpoints https://jsonplaceholder.typicode.com/users
// Todos endpoints https://jsonplaceholder.typicode.com/todos
//so the resolved promsie should contain each user and there todos repectively
//so l will use async and await 
//fetch the data concurently
//then return an object conataining users and there todos
//so because we have an array of urls we need to iterate though each l will use map method ;

async function fetchUserTodos() {
  const urls = [
    `https://jsonplaceholder.typicode.com/users`,
    `https://jsonplaceholder.typicode.com/todos`
  ];

  const [users, todos] = await Promise.all(
    urls.map(url => fetch(url).then(res => res.json()))
  );

  const selectedUser = users.find(u => u.id === 1);

  const data = {
    user: selectedUser,
    todos: todos.filter(t => t.userId === selectedUser.id)
  };

  console.log(data);
}

fetchUserTodos();


// output
// {
//   user: {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//       street: 'Kulas Light',
//       suite: 'Apt. 556',
//       city: 'Gwenborough',
//       zipcode: '92998-3874',
//       geo: { lat: '-37.3159', lng: '81.1496' }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//       name: 'Romaguera-Crona',
//       catchPhrase: 'Multi-layered client-server neural-net',
//       bs: 'harness real-time e-markets'
//     }
//   },
//   todos: [
//     {
//       userId: 1,
//       id: 1,
//       title: 'delectus aut autem',
//       completed: false
//     },
//     {
//       userId: 1,
//       id: 2,
//       title: 'quis ut nam facilis et officia qui',
//       completed: false
//     },
//     {
//       userId: 1,
//       id: 3,
//       title: 'fugiat veniam minus',
//       completed: false
//     },
//     {
//       userId: 1,
//       id: 4,
//       title: 'et porro tempora',
//       completed: true
//     },
//     {
//       userId: 1,
//       id: 5,
//       title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
//       completed: false
//     },
//     {
//       userId: 1,
//       id: 6,
//       title: 'qui ullam ratione quibusdam voluptatem quia omnis',
//       completed: false
//     },
//     {
//       userId: 1,
//       id: 7,
//       title: 'illo expedita consequatur quia in',
//       completed: false
//     },
//     {
//       userId: 1,
//       id: 8,
//       title: 'quo adipisci enim quam ut ab',
//       completed: true
//     },
//     {
//       userId: 1,
//       id: 9,
//       title: 'molestiae perspiciatis ipsa',
//       completed: false
//     },
//     {
//       userId: 1,
//       id: 10,
//       title: 'illo est ratione doloremque quia maiores aut',
//       completed: true
//     },
//     {
//       userId: 1,
//       id: 11,
//       title: 'vero rerum temporibus dolor',
//       completed: true
//     },
//     {
//       userId: 1,
//       id: 12,
//       title: 'ipsa repellendus fugit nisi',
//       completed: true
//     },
//     {
//       userId: 1,
//       id: 13,
//       title: 'et doloremque nulla',
//       completed: false
//     },
//     {
//       userId: 1,
//       id: 14,
//       title: 'repellendus sunt dolores architecto voluptatum',
//       completed: true
//     },
//     {
//       userId: 1,
//       id: 15,
//       title: 'ab voluptatum amet voluptas',
//       completed: true
//     },
//     {
//       userId: 1,
//       id: 16,
//       title: 'accusamus eos facilis sint et aut voluptatem',
//       completed: true
//     },
//     {
//       userId: 1,
//       id: 17,
//       title: 'quo laboriosam deleniti aut qui',
//       completed: true
//     },
//     {
//       userId: 1,
//       id: 18,
//       title: 'dolorum est consequatur ea mollitia in culpa',
//       completed: false
//     },
//     {
//       userId: 1,
//       id: 19,
//       title: 'molestiae ipsa aut voluptatibus pariatur dolor nihil',
//       completed: true
//     },
//     {
//       userId: 1,
//       id: 20,
//       title: 'ullam nobis libero sapiente ad optio sint',
//       completed: true
//     }
//   ]
// }
// Promise { <pending> }
