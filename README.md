#  Simple Weather App

A lightweight and simple web app to check the current weather in any city using the [OpenWeather API](https://openweathermap.org/).  
Built with **pure HTML, CSS, and JavaScript**.

---

##  Features

- Search for cities by name
- Displays:
  - City name and country
  - Current temperature
  - Weather description
  - Weather icon
- Responsive design for mobile devices
- Error messages for invalid or repeated city entries

---

## How to Use

1. Clone this repository or download it as a `.zip`:

   ```bash
   git clone https://github.com/Facundo-byte/Weather-checker

2. Open the index.html file in your browser.

3. You’ll need your own OpenWeather API key for the app to work.

## How to Get an API Key
This project uses an API key to fetch live weather data. For security reasons, the key is not included by default.

### Steps:

  1. Sign up at https://openweathermap.org/

  2. Log in and go to your API Keys section

  3. Copy your API key

### Then:

  1. Open the script.js file
  
  2. Find this line:
     #### const apikey = "";
     
  4. Paste your key like this:
     #### const apikey = "YOUR_API_KEY_HERE";
