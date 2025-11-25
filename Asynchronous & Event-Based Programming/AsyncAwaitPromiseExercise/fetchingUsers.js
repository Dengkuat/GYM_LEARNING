async function fetchingUsers(){
  const urls = [
    'https://jsonplaceholder.typicode.com/users/1',
    'https://jsonplaceholder.typicode.com/users/2',
    'https://jsonplaceholder.typicode.com/users/3'
  ];
  const result = await Promise.all(
    urls.map(url => fetch(url).then(r =>r.json())
            )
    );
  const final = result.map(name => name.name);
  console.log(final)
} 
fetchingUsers();

/*
	•	Fetch users 1, 2, and 3 from https://jsonplaceholder.typicode.com/users/{id}
	•	Use Promise.all to get them in parallel
	•	Log all 3 names in one console.log
*/