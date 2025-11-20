async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) throw new Error(response.status);
    const data = await response.json();
    console.log(data.name);
  }catch(error){
    console.log(error);
  }
  
}
fetchData();

/*
Create a function fetchData that:
	•	Uses fetch('https://jsonplaceholder.typicode.com/users/1')
	•	Converts response to JSON
	•	Logs the user’s name
	•	Handles errors using try/catch
*/