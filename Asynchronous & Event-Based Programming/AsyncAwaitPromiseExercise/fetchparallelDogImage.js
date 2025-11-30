// You want to fetch **3 random dog images** all at once, but still handle any individual failure gracefully.

// **API:**

// 👉 `https://dog.ceo/api/breeds/image/random`

// (Response JSON: `{ message: "imageURL", status: "success" }`)

// **Goal:**

// Create a function `getDogImages(count)` that:

// 1. Sends all requests in parallel using `Promise.allSettled()`.
// 2. Logs only successful image URLs.
// 3. At the end, prints:
    
//     > “✅ Fetched X out of Y images successfully.”
//     >

async function randomDogImage(){
  const urls = [
    `https://dog.ceo/api/breeds/image/random`,
    `https://dog.ceo/api/breeds/image/random`,
    `https://dog.ceo/api/breeds/image/random`,
  ]
  const images = [];
  for(let url of urls){
    try{
      const response = await fetch(url);
      if(!response.ok) throw new Error(response.status)
    
      const data = await response.json();
      images.push(data);
      
      }catch(error){
      console.log(error);
    }
  }
  console.log(images);
  return images;
}
randomDogImage();