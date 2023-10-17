<template lang="">
    <div>
       
        <baner/>
        <!-- <router-view></router-view> -->
        <v-crypto3/>
        <br/><br/>
       <carousel/>
        <v-crypto1/>
        <br/><br/>
       <carousel2/>
        <v-crypto4/>
        <v-crypto2/>
        <router-view></router-view>
    </div>
</template>
<script>
import Breadcrumbs from "@/components/BreadCrams/v-bread-crams.vue"; 

import sport from "../pages/sport.vue"
import baner from '../components/CryptoMainPage/v-baner.vue';
import vCrypto5 from '../components/CryptoMainPage/v-crypto5.vue';
import vCrypto4 from '../components/CryptoMainPage/v-crypto4.vue';
import carousel from '../components/CryptoMainPage/v-crypto-carousel.vue';
import carousel2 from '../components/CryptoMainPage/v-crypto-carousel-2.vue';
import vCrypto3 from '../components/CryptoMainPage/v-crypto3.vue';
import vCrypto2 from '../components/CryptoMainPage/v-crypto2.vue';
import vCrypto1 from '../components/CryptoMainPage/v-crypto1.vue';
export default {
    components:{
        sport,
        vCrypto4,
        vCrypto2,
        vCrypto1,
        vCrypto3,
        vCrypto5,
        baner,
        carousel,
        carousel2,
        Breadcrumbs
       
        
    }
    
}
</script>
<style lang="">
    
</style>