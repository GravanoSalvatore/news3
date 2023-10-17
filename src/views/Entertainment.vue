<template lang="">
  <!-- <br/><br/> -->
  <div>
    <!-- <br/> -->
   <baner/>
   
   
    
    <div class="enter-3">
      <br/><br/>
      <enter2/>
      <enter6/>
      <br/><br/><br/>
    <carousel/>
    <enter/>
   
    <br/><br/><br/>
    <carousel2/>
    </div>
<br/><br/>
 <enter3/>
    <!-- <enter4/> -->

 
  </div>
  <br/><br/>
</template>
<script>
import carousel from '../components/EntertainmentMainPage/v-carousel-ent.vue'
import carousel2 from '../components/EntertainmentMainPage/v-carousel-enter-2.vue'
import baner from '../components/EntertainmentMainPage/v-baner-ent.vue'
import enter from '../components/EntertainmentMainPage/v-enter.vue'
import enter2 from '../components/EntertainmentMainPage/v-enter-2.vue'
import enter3 from '../components/EntertainmentMainPage/v-enter-3.vue'
import enter4 from '../components/EntertainmentMainPage/v-enter-4.vue'
import enter6 from '../components/EntertainmentMainPage/v-enter-6.vue'
export default {
  components:{
    carousel,
    carousel2,
    enter,
    enter2,
    enter3,
    enter4,
    baner,
    enter6
  }}
  

</script>
<style lang="scss">
  // .enter-3{
  //   @media screen and(max-width: 350px){
  //     display: none;
  //   }
  // }
</style>