
<template lang="">
 <div class="mt-16">
      <business3/>
      <business/>
      <business4/>
      <business6/>
     
     <!-- <business2/> -->
    <!-- <business5/> -->
  
  
  
  </div>
  
     </template> 
      <script>
  import business from '../components/BusinessMainPage/v-business.vue'
  import business2 from '../components/BusinessMainPage/v-business-2.vue'
  import business3 from '../components/BusinessMainPage/v-business-3.vue'
  import business4 from '../components/BusinessMainPage/v-business-4.vue'
  import business5 from '../components/BusinessMainPage/v-business-5.vue'
  import business6 from '../components/BusinessMainPage/v-business-6.vue'
  export default {
    components: {
      business,
      business2,
      business3,
      business6,
      business4,
      business5
      
    },
    data() {
      return {
       
        
      };
    },
   
  };
  </script>
      <style lang="scss" scoped>
      
  
  </style>