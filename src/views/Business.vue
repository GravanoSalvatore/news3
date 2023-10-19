
<template lang="">
  <!-- <baner/> -->
 
    <br/>
    <business2/>
   <business6/>
   <br/><br/><br/>
   <carousel/>
   <br/><br/>
<business/>
<br/><br/>
<carousel2/>
<br/><br/>
<business3/>

</template>
<script>
import baner from '../components/BusinessMainPage/v-baner-bus.vue'
import carousel from '../components/BusinessMainPage/v-carousel-bus.vue'
import carousel2 from '../components/BusinessMainPage/v-carousel-2.vue'

import business6 from '../components/BusinessMainPage/v-business-6.vue'
import business from '../components/BusinessMainPage/v-business.vue'
import business2 from '../components/BusinessMainPage/v-business-2.vue'
import business3 from '../components/BusinessMainPage/v-business-3.vue'
export default {
  components:{
    business6,
    business,
    business2,
    business3,
    baner,
    carousel,
    carousel2
  }
  
}
</script>
<style lang="">
  
</style>