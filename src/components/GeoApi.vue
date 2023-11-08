<template>
    <div class="p-2">
      <button @click="startWatchingPosition" class="text-dark">location</button>
      <div v-if="location">
        <p>Lt: {{ location.latitude }}</p>
        <p>Lg: {{ location.longitude }}</p>
      </div>
      <div v-if="error">
        <p>{{ error }}</p>
      </div>
      <div v-if="nearestCity">
        <p>City: {{ nearestCity }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        location: null,
        error: null,
        nearestCity: null,
        watchId: null,
      };
    },
    methods: {
      getLocation() {
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              this.location = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              };
              this.error = null;
              this.findNearestCity();
            },
            (error) => {
              this.error = this.getErrorText(error);
              this.location = null;
            }
          );
        } else {
          this.error = "Geolocation is not supported by your browser.";
        }
      },
      getErrorText(error) {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            return "User denied the request for Geolocation.";
          case error.POSITION_UNAVAILABLE:
            return "Location information is unavailable.";
          case error.TIMEOUT:
            return "The request to get user location timed out.";
          default:
            return "An unknown error occurred.";
        }
      },
      async findNearestCity() {
        const { latitude, longitude } = this.location;
        const apiKey = '47b17f7a984143d889ede9e5f8945e97'; // Replace with your actual OpenCage API key
        const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;
  
        try {
          const response = await axios.get(apiUrl);
          if (response.data.results.length > 0) {
            this.nearestCity = response.data.results[0].components.city || 'Unknown';
          } else {
            this.nearestCity = 'Unknown';
          }
        } catch (error) {
          console.error("Error fetching nearest city:", error);
          this.nearestCity = 'Unknown';
        }
      },
      startWatchingPosition() {
        if ("geolocation" in navigator) {
          const successCallback = (position) => {
            this.location = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            };
            this.error = null;
            this.findNearestCity();
          };
  
          const errorCallback = (error) => {
            this.error = this.getErrorText(error);
            this.location = null;
          };
  
          this.watchId = navigator.geolocation.watchPosition(successCallback, errorCallback);
        } else {
          this.error = "Geolocation is not supported by your browser.";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  p {
    color: rgb(0, 0, 0);
  }
  </style>
  