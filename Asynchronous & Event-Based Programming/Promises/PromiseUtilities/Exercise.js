async function loadDashboard() {
  try {
    const [user, posts, comments] = await Promise, all([
      fetch("/users").then(res => res.json()),
      fetch("/posts").then(res => res.json()),
      fetch("/comments").then(res => res.json())
    ]);
    console.log(users, posts, comments);
  } catch (error) {
    console.error(error)
  }
}

promise.allSettle()
async function checkService() {
  const result = await Promise.allSettled([
    fetch("/service1"),
    fetch("/service2"),
    fetch('/service3')
  ]);
  console.log(result);
}

promise.race()
async function fetchWithTimeout(url, ms) {
  const time = new Promise((_, reject) =>
    setTimeout(() => reject("Timeout"), ms)
  )
  return Promise.race([
    fetch(url),
    time
  ]);
}

fetchWithTimeout("/users", 2000)
  .then(res => console.log("Got it"))
  .then(err => console.log(err))


promise.any()
Promise.any([
  fetch("https://server1.com/data"),
  fetch("https://server2.com/data"),
  fetch("https://server3.com/data"),
])
  .then(res => res.json())
  .then(data => console.log("Fastest success:", data))
  .catch(err => console.log("All failed:", err));
