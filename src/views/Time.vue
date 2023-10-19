<template>
    <div class="time-component">
      <div v-for="location in locations" :key="location.name" class="time-box">
        <h6>{{ location.name }}</h6>
        <p>{{ location.time }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        locations: [
          { name: "New York", timezone: "America/New_York" },
          { name: "London", timezone: "Europe/London" },
          { name: "Beijing", timezone: "Asia/Shanghai" },
          { name: "Moscow", timezone: "Europe/Moscow" },
        ],
      };
    },
    methods: {
      updateTime() {
        const now = new Date();
        this.locations.forEach((location) => {
          const timeOptions = {
            timeZone: location.timezone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          };
          location.time = now.toLocaleTimeString("en-US", timeOptions);
        });
      },
    },
    mounted() {
      this.updateTime();
     
      setInterval(this.updateTime, 1000);
    },
  };
  </script>
  
  <style scoped>
  .time-component {
    display: flex;
    justify-content: space-around;
    margin: 3px;
  }
  
  .time-box {
    text-align: center;
    /* border: 1px solid #ccc; */
    padding: 3px;
  }
  h6,p{
    font-size:10px;
    color:white
  }
  </style>
  