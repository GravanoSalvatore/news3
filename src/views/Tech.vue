<template lang="">
  <!-- <br/><br/> -->
  <div>
   <!-- <baner/> -->
   <br/>
    <tech2/>
    <tech6/>
    <br/><br/>
   <carousel/>
   <br/><br/>
   <tech/>
   <br/><br/>
   <carousel2/>
   <br/><br/>
   
   
    
   <tech3/>
  </div>
  <br/><br/>
</template>
<script>
import baner from '../components/TechMainPage/v-baner-tech.vue'
import carousel from '../components/TechMainPage/v-carousel-tech.vue'
import carousel2 from '../components/TechMainPage/v-carousel-tech-2.vue'
import tech from '../components/TechMainPage/v-tech.vue'
import tech2 from '../components/TechMainPage/v-tech-2.vue'
import tech3 from '../components/TechMainPage/v-tech-3.vue'
import tech6 from '../components/TechMainPage/v-tech-6.vue'
export default {
  components: {
    tech,
    tech2,
    tech3,
    tech6,
    carousel,
    carousel2,
    baner
  }

}
</script>
<style lang="">
  
</style>