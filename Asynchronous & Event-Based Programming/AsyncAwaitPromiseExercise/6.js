  async function fetchWeatherInfo() {
  try {
    // Country details
    const countryName = "France";
    const countryResponse = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    if (!countryResponse.ok) throw new Error(countryResponse.status);

    const countryData = await countryResponse.json();
    const country = countryData[0];
    const capital = country.capital[0];
    const [lat, long] = country.capitalInfo.latlng;

    // Weather details
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`;
    const weatherResponse = await fetch(weatherUrl);
    if (!weatherResponse.ok) throw new Error(weatherResponse.status);

    const weatherData = await weatherResponse.json();

    console.log(`Country: ${country.name.common}`);
    console.log(`Capital: ${capital}`);
    console.log(`Weather: ${weatherData.current_weather.temperature}`);

  } catch (error) {
    console.log(`Invalid input: ${error}`);
  }
}

fetchWeatherInfo();


// 1. You are building a web application that fetches data from multiple APIs to display information about different countries. You need to fetch the country details from one API and the weather information for the capital city from another API.

// **Here are the requirements:**

// - Use the fetch API to get the country details from [https://restcountries.com/v3.1/name/{countryName}](https://restcountries.com/v3.1/name/%7BcountryName%7D).
// - Use the fetch API to get the weather details from [https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true](https://api.open-meteo.com/v1/forecast?latitude=%7Blat%7D&longitude=%7Blon%7D&current_weather=true).
// - The weather API requires the latitude and longitude of the capital city, which you will get from the country details.
// - Display the country's name, capital city, and current temperature in the console.

// **Example:**

// If the user searches for "France", your application should:

// - Fetch country details from [https://restcountries.com/v3.1/name/France](https://restcountries.com/v3.1/name/France).
// - Extract the capital city and its coordinates (latitude and longitude).
// - Fetch the current weather for the capital city from the weather API.