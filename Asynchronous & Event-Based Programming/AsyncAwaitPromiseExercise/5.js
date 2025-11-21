async function downloadContent(){
  const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3' 
  ];
  const response = await Promise.all(
    urls.map(url => fetch(url).then(res => res.json())));
  console.log(response)
}
downloadContent();


// Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.

//  Usage example: 
// const urls = [
//     'https://jsonplaceholder.typicode.com/posts/1',
//     'https://jsonplaceholder.typicode.com/posts/2',
//     'https://jsonplaceholder.typicode.com/posts/3' 