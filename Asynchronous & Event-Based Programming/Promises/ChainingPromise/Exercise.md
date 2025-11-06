// Description

// Simulate 3 steps of cooking using promises and chaining.
// 	•	Step 1: “Boiling water” takes 1 second
// 	•	Step 2: “Adding rice” takes 2 seconds
// 	•	Step 3: “Serving food” takes 1.5 seconds

// Each step should only start after the previous one finishes.

// Expected Output
// Boiling water...
// Water ready
// Adding rice...
// Rice ready
// Serving food...
// Food is ready to eat!

// Write a function delay(time, message) that returns a promise which logs the message after the given time.
// •	Use .then() chaining to link the steps.

```bash
function dalay(time, message) {
  return new Promise((resolve) => {
    console.log(message)
    setTimeout(() => {
      resolve()
    }, time)
  })
}

delay(1000, "Boiling water...")
  .then(() => {
    console.log("Water ready");
    return delay(2000, "Adding rice...");
  })
  .then(() => {
    console.log("Rice ready");
    return delay(1500, "Serving food...");
  })
  .then(() => {
    console.log("Food is ready to eat! ");
  })
  .catch(error => {
    console.error("Something went wrong:", error);
  })
  .finally(() => {
    console.log("Cooking process complete!");
  });
  ```