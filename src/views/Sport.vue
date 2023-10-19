<template lang="">
  
 
  <!-- <baner/> -->

  <br/><br/>
  <sport2/>
  <sport6/>
  <br/><br/>
   <carousel/>
   <br/><br/>
   <sport/>
   <br/><br/>
   <carousel2/>
   <br/><br/>
  
   <sport3/>
</template>
<script>

import baner from '../components/SportMainPage/v-baner-sport.vue'
import carousel2 from '../components/SportMainPage/v-carousel-sport-2.vue'
import carousel from '../components/SportMainPage/v-carousel-sport.vue'
import sport6 from '../components/SportMainPage/v-sport-6.vue'
import sport2 from '../components/SportMainPage/v-sport-2.vue'
import sport3 from '../components/SportMainPage/v-sport-3.vue'
import sport4 from '../components/SportMainPage/v-sport-4.vue'
import sport from '../components/SportMainPage/v-sport.vue'
export default {
  components: {
  
    sport2,
    sport3,
    sport4,
    baner,
    carousel,
    carousel2,
    sport6,
    sport
  }

}
</script>
<style lang="">
  
</style>