<template lang="">
  <div class="mt-16">
    
      <health3/>
      <health/>
      <health4/>
      <health6/>
     
    <health2/>
    <health5/>
  
  
  
  </div>
  
     </template> 
      <script>
  import health from '../components/HealthMainPage/v-health.vue'
  import health2 from '../components/HealthMainPage/v-health-2.vue'
  import health3 from '../components/HealthMainPage/v-health-3.vue'
  import health4 from '../components/HealthMainPage/v-health-4.vue'
  import health5 from '../components/HealthMainPage/v-health-5.vue'
  import health6 from '../components/HealthMainPage/v-health-6.vue'
  export default {
    components: {
      health,
      health2,
      health3,
      health4,
      health5,
      health6
      
    },
    data() {
      return {
       
        
      };
    },
   
  };
  </script>
      <style lang="scss" scoped>
      
  
  </style>