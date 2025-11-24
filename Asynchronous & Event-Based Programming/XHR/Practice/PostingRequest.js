const request = new XMLHttpRequest();
request.open('POST', 'https://jsonplaceholder.typicode.com/posts');
request.setRequestHeader('Content-Type', 'aplication/json');
request.onload = function(){
  console.log(request.responseText);
};

request.send(JSON.stringify({
  title:"Hello XHR",
  body:'Learning XHR POST Request',
  userId:5
}));


// output
// '{
//   "id": 101
// }'