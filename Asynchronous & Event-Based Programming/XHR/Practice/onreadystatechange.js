const response = new XMLHttpRequest();
response.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
response.onreadystatechange = function(){
  if(response.readyState === 4 && response.status === 200){
  console.log(response.responseText);
}
};
response.send();