<template lang="">
   <div class="mt-16">
      <sport3/>
      <sport/>
      <sport4/>
      <sport6/>
     
    <sport2/>
    <sport5/>
  
  
  
  </div>
  
     </template> 
      <script>
  import sport from '../components/SportMainPage/v-sport.vue'
  import sport2 from '../components/SportMainPage/v-sport-2.vue'
  import sport3 from '../components/SportMainPage/v-sport-3.vue'
  import sport4 from '../components/SportMainPage/v-sport-4.vue'
  import sport5 from '../components/SportMainPage/v-sport-5.vue'
  import sport6 from '../components/SportMainPage/v-sport-6.vue'
  export default {
    components: {
     sport,
     sport2,
     sport3,
     sport4,
     sport5,
     sport6
      
    },
    data() {
      return {
       
        
      };
    },
   
  };
  </script>
      <style lang="scss" scoped>
      
  
  </style>