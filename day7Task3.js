// Promise version
const fetchWeatherPromise = (url) => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("API error");
      return response.json();
    })
    .then((data) => {
      console.log("Promise Version:", data.name);
    })
    .catch((error) => console.error(error.message));
};

// Async / Await version
const fetchWeatherAsync = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("API error");

    const data = await response.json();
    console.log("Async/Await Version:", data.name);
  } catch (error) {
    console.error(error.message);
  }
};