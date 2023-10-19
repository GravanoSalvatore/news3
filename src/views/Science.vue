<template lang="">
 
    <!-- <baner/> -->
    <br/>
    <science2/>
    <science6/>
    <br/><br/>
   <carousel/>
   <br/><br/>
   <science/>
   <br/><br/>
   <carousel2/>
   <br/><br/>
 <science3/>
</template>
<script>
import baner from '../components/ScienceMainPage/v-baner-science.vue'
import carousel from '../components/ScienceMainPage/v-carousel-science.vue'
import carousel2 from '../components/ScienceMainPage/v-carousel-science-2.vue'
import science6 from '../components/ScienceMainPage/v-science-6.vue'
import science from '../components/ScienceMainPage/v-science.vue'
import science2 from '../components/ScienceMainPage/v-science-2.vue'
import science3 from '../components/ScienceMainPage/v-science-3.vue'
///import science4 from '../components/ScienceMainPage/v-science-4.vue'
export default {
  components:{
    science,
    science2,
    science3,
    science6,
    carousel,
    carousel2,
    baner

  }
  
}
</script>
<style lang="">
  
</style>