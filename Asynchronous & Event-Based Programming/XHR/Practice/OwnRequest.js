const reponse = new XMLHttpRequest();
reponse.open('POST', 'https://jsonplaceholder.typicode.com/posts');
reponse.setRequestHeader('Content-Type', 'application/json');
reponseesponse.onload = function(){
  console.log(reponse.responseText);
}
reponse.send(JSON.stringify({
  name:"Deng",
  message:"Creatign XHR",
  id:20
}));