<template>
    <div>
      
      
      <span v-if="weatherData">
        <span>  <strong style="font-size:13px">New York</strong>
           <span style=""> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-thermometer-sun" viewBox="0 0 16 16" color="white">
  <path d="M5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585A1.5 1.5 0 0 1 5 12.5z"/>
  <path d="M1 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM3.5 1A1.5 1.5 0 0 0 2 2.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0L5 10.486V2.5A1.5 1.5 0 0 0 3.5 1zm5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5zm4.243 1.757a.5.5 0 0 1 0 .707l-.707.708a.5.5 0 1 1-.708-.708l.708-.707a.5.5 0 0 1 .707 0zM8 5.5a.5.5 0 0 1 .5-.5 3 3 0 1 1 0 6 .5.5 0 0 1 0-1 2 2 0 0 0 0-4 .5.5 0 0 1-.5-.5zM12.5 8a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5zm-1.172 2.828a.5.5 0 0 1 .708 0l.707.708a.5.5 0 0 1-.707.707l-.708-.707a.5.5 0 0 1 0-.708zM8.5 12a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5z"/>
</svg>{{ weatherData.main.temp }}°C</span><br/></span>
          <!-- <strong>Humidity:</strong> {{ weatherData.main.humidity }}%<br/><strong>Weather:</strong> {{ weatherData.weather[0].description }}<br/><strong>Wind Speed:</strong> {{ weatherData.wind.speed }} m/s</span> -->
        <!-- <p><strong>Humidity:</strong> {{ weatherData.main.humidity }}%</p> -->
        <!-- <p><strong>Weather:</strong> {{ weatherData.weather[0].description }}</p> -->
        <!-- <p><strong>Wind Speed:</strong> {{ weatherData.wind.speed }} m/s</p>-->
      </span>
      <span v-else>
        <p>Loading weather data...</p>
      </span>
    </div>
  </template>
  
  <script>
import axios from 'axios';
  
  export default {
    data() {
      return {
        weatherData: null,
      };
    },
    mounted() {
      this.fetchWeatherData();
    },
    methods: {
      async fetchWeatherData() {
        // const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Замените на свой API-ключ OpenWeatherMap
        // const city = 'New York';
        // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        const apiKey = '08b5dec056effb0ef9edae9038f2d95a';
const city = 'New York';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

        try {
          const response = await axios.get(apiUrl);
          this.weatherData = response.data;
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      },
    },
  };
  </script>
  <style scoped>
  div{
    padding: 10px;
  }
  span{
    font-size:10px;
    color: white;
  }
  h6{
    color: white;
    font-size: 12px;
  }
  </style>
  