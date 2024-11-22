// ---------------------------------------------- \\

async function iterateWithAsyncWait() {
  const myArray = ["one", "two", "three", "four", "five"];

  for (const value of myArray) {
    await new Promise((resolve) => setTimeout(resolve, 100)); // Simulates a delay
    console.log(value);
  }
}

iterateWithAsyncWait();

// ---------------------------------------------- \\

async function parallelCalls(urls) {
  try {
    const responses = await Promise.all(
      urls.map((url) => fetch(url).then((response) => response.json()))
    );

    console.log("Responses:", responses);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/users/2",
];

parallelCalls(urls);

// ---------------------------------------------- \\

async function awaitCall() {
  const url = "https://jsonplaceholder.typicode.com/users";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Log the data
    console.log("Fetched Data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
awaitCall();
