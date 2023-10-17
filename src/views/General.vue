<template lang="">
    <baner/>
      <general2/>
     <general5/>
     <br/><br/>
   <carousel/>
   <br/><br/>
     <general/>
     <br/><br/>
   <carousel2/>
   <br/><br/>
      <general3/> 
    <br/><br/>
  </template>
  <script>
  import baner from '../components/GeneralMainPage/v-baner.vue'
  import carousel from '../components/GeneralMainPage/v-carousel.vue'
  import carousel2 from '../components/GeneralMainPage/v-carousel-2.vue'
  import general from '../components/GeneralMainPage/v-general.vue'
  import general2 from '../components/GeneralMainPage/v-general-2.vue'
  import general3 from '../components/GeneralMainPage/v-general-3.vue'
  import general5 from '../components/GeneralMainPage/v-general-5.vue'
  export default {
    components:{
      general,
      general2,
      general3,
      general5,
      carousel,
      carousel2,
      baner
    }
    
  }
  </script>
  <style lang="">
    
  </style>