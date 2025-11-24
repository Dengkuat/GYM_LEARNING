1. Create a function called `createAlarm` that generates a wake-up message for a person after a specified time delay. This function should accept two parameters: the person's name and the delay time in seconds.The function should return a promise that resolves with the wake-up message (e.g.Wake up person) but if the delay is less than 2 seconds,the promise should be immediately rejected with an error message stating **Delay is not sufficient**

      **Example of how the function should be used**

```tsx

createAlarm('John', 4).then((message) => {
    console.log(message) // output "Wake up John" after 4 seconds
}).catch((error) => {
    console.error(error)
})

createAlarm('John', 1).then((message) => {
    console.log(message)
}).catch((error) => {
    console.error(error) // output "Delay is not sufficient"
})

```

1. Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises

`HINT: 'Promise.all()'.` 

```jsx
const apiUrls = [
  'https://jsonplaceholder.typicode.com/posts/4',
  'https://jsonplaceholder.typicode.com/posts/5',
  'https://jsonplaceholder.typicode.com/posts/6'
];

fetchMultipleAPIs(apiUrls)
  .then(results => {
    console.log('Combined Results:', results);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });
```

1. Write a javascript function that changes the background color of the body (HTML tag) every 3 seconds.
2. Create a function called `myFetch` that should work as a simple version of the native [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) API. The function `myFetch` should use the [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) to make a `GET` Request and return a promise that resolves with the request’s response and rejects with an error if any.`function myFetch(){ //... your code here
}
myFetch('https://my-random-api.com/data')
.then(data => console.log(data))
.catch(error => console.log('Error:', error));`**Bonus points (optional)**
Make your fetch function perform other request methods like `POST` or receive request options.

 5. Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.

1. You are building a web application that fetches data from multiple APIs to display information about different countries. You need to fetch the country details from one API and the weather information for the capital city from another API.

 **Here are the requirements:**

- Use the fetch API to get the country details from https://restcountries.com/v3.1/name/{countryName}.
- Use the fetch API to get the weather details from https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true.
- The weather API requires the latitude and longitude of the capital city, which you will get from the country details.
- Display the country's name, capital city, and current temperature in the console.

**Example:**

If the user searches for "France", your application should:

- Fetch country details from https://restcountries.com/v3.1/name/France.
- Extract the capital city and its coordinates (latitude and longitude).
- Fetch the current weather for the capital city from the weather API.

**Display the results in the console as follows:**

```jsx

Country: France
Capital: Paris
Current Temperature: 18°C
```

1. Create a function called `fetchUserTodos` that uses the `Promise.all()` method to fetch users and todos concurrently from the provided API endpoints and combine them based on the `userId`. The function should return a promise that resolves with the combined data.
- Users endpoints [`https://jsonplaceholder.typicode.com/users`](https://jsonplaceholder.typicode.com/users)
- Todos endpoints [`https://jsonplaceholder.typicode.com/todos`](https://jsonplaceholder.typicode.com/todos) The returned promise should resolve into an array of users, where each user object has a new key `todos`. This key should contain an array of todos that belong to the user, determined by matching the `userId` of the todo with the `id` of the user. User objects may look like
    
    ```tsx
    
      // User object may look like
      {
          id: 10,
        name: 'Clementina DuBuque',
        ...
      }
    
      // Todo object may look like
      {
          userId: 5,
        completed: false,
          ...
      }
    
      // The result array will have objects that look like
    
      {
          id: 10,
        name: 'Clementina DuBuque',
        todos: [
              {
                  userId: 10,
                completed: false,
                  ...
              },
              {
                  userId: 10,
                completed: false,
                  ...
              }
          ]
          ...
      }
    
    ```