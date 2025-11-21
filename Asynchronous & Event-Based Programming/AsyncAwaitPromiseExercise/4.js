async function getFastPosts(){
  const urls = [
    'https://jsonplaceholder.typicode.com/posts/4',
    'https://jsonplaceholder.typicode.com/posts/5',
     'https://jsonplaceholder.typicode.com/posts/6'
  ];
  
  const response = await Promise.all(urls.map(url => fetch(url).then(response => response.json())));
  const result  = response.map(name => name.title);
  console.log(result);
}
getFastPosts();


// Create a function called `getFastPosts`that fetches posts from multiple endpoints simultaneously and returns data from the fastest source.

// const apiUrls = [
//   'https://jsonplaceholder.typicode.com/posts/4',
//   'https://jsonplaceholder.typicode.com/posts/5',
//   'https://jsonplaceholder.typicode.com/posts/6'
// ];