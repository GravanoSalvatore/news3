
<template lang="">
  <div>
      <div id="intro2" class="bg-image shadow-2-strong">
    <div class="mask" style="background-color: rgba(0, 0, 0, 0.5);">
      <div class="container d-flex align-items-center justify-content-center text-center h-100">
       
        <div class="text-white">
          <price/>
           
           
            <router-link to="/Crypto/News" class="btn btn-outline-light btn-lg m-2"  role="button"
              rel="nofollow" ><strong class="text-secondary">CryptoNews</strong></router-link>
           
           
              
          </div>
       
       
        
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import price from '@/views/CryptoPrice.vue'
export default {
  components:{
    price
  }
}
</script>
<style lang="css" scoped>
  #intro2 {
     
      background-image: url("https://www.lavenpartners.com/media/uploads/files/cryptocurrency-gac2bc3fda_1920.jpg");
      height: 120vh;
    }
    .text-white{
      margin-top: 300px;
    }
    h1{
      font-size: 45px;
    }
</style>