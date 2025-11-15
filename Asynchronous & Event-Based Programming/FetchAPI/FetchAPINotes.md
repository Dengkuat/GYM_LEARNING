**What is fetch API?**

- Fetch api is a modern way to make HTTP requests (Get, Post, Put, Delete) from javascript

```bash
fetch("https://api.com/data")
```

- So this returns a promise, which is why we use async and await with it

**What does fetch() return?**

- Fetch always returns a promise that resolves to a response object

```bash
const response = await fetch(url);
so the response is not the data, it just metadata about the request
```

**What is a response object?**

This is an object that contains 

- Status

200 - OK

404 - not found

500 - server error

201 - created

**How do we access this ?**

```bash
reponse.status
```

- Response.ok

Boolean true → status between 200 and 299

          False →any other status

```bash
if(!response.ok){
	throw new Error ('Failed request')
}
```

- Header

Metadata returned by the server

```bash
response.header.get('Content-Type')
```

- Body

This is the actual data although u cannot read it directly

So what do we do to read the data? → we must parse it

**How to read the body(Actual data)?**

Most API’s use data in JSON format

```bash
const data = await response.json();

example
const response = await fetch(url)
const data = await response.json()
```

JSON ⇒ JavaScript object notion, so it is a file extention that indicated a file is using the JSON , json is a standard text-based format for representing structured data that is designd for both human and machine

Real Example

```bash
<!DOCTYPE html>
<html>
  <body>
    <script>
      async function getUsers() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
          throw new Error("Error fetching users");
        }

        const data = await response.json();
        console.log(data);
      }

      getUsers();
    </script>
  </body>
</html>
```

So this will display me something like

```bash
Array (10)
0
{id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", address: Object, …}
1
{id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv", address: Object, …}
2
{id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net", address: Object, …}
3
{id: 4, name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org", address: Object, …}
4
{id: 5, name: "Chelsey Dietrich", username: "Kamren", email: "Lucio_Hettinger@annie.ca", address: Object, …}
5
{id: 6, name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info", address: Object, …}
6
{id: 7, name: "Kurtis Weissnat", username: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz", address: Object, …}
7
{id: 8, name: "Nicholas Runolfsdottir V", username: "Maxime_Nienow", email: "Sherwood@rosamond.me", address: Object, …}
8
{id: 9, name: "Glenna Reichert", username: "Delphine", email: "Chaim_McDermott@dana.io", address: Object, …}
9
{id: 10, name: "Clementina DuBuque", username: "Moriah.Stanton", email: "Rey.Padberg@karina.biz", address: Object, …}

Array Prototype
```

So we used a fake url that contains thoes user data and we turned it into a json so the data is acctaully readable by human
We aswell checked if the response is ok before contuning anything future it will thow that error if anything goes wrong

**Post Request(Sending data)?**

POST - Sending something to a server

We must 

- set method
- set headers
- set body