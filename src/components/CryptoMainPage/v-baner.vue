<!-- <template lang="">
    <div>
        <div id="intro" class="bg-image shadow-2-strong">
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.4);">
        <div class="container d-flex align-items-center justify-content-center text-center h-100">
          <div class="text-white">
            <h1 class="mb-3"><strong>Global News Hub</strong></h1>
            <h5 class="mb-4"><strong>Always the latest news as well as business and cryptocurrency news</strong></h5>
           
           
           
            <router-link to="/CryptoPage" class="btn btn-outline-light btn-lg m-2"  role="button"
              rel="nofollow" ><strong>top crypto</strong></router-link>
           
           
              
          </div>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css" scoped>
.text-white{
  margin-top: 300px;
}
    #intro {
        background-image: url("https://www.lavenpartners.com/media/uploads/files/cryptocurrency-gac2bc3fda_1920.jpg");
        height: 100vh;
      }
      a{
            text-decoration: none;
            color: white;
          }
          a:hover{
            color: black;
          }
</style> -->
<template lang="">
  <div>
      <div id="intro2" class="bg-image shadow-2-strong">
    <div class="mask" style="background-color: rgba(0, 0, 0, 0.5);">
      <div class="container d-flex align-items-center justify-content-center text-center h-100">
       
        <div class="text-white">
          <price/>
            <!-- <h1 class="mb-3 text-secondary"><strong>Global News Hub</strong></h1> -->
            <!-- <h5 class="mb-4 text-secondary"><strong>Always the latest news as well as business and cryptocurrency news</strong></h5>
           
            -->
           
            <router-link to="/Crypto/News" class="btn btn-outline-light btn-lg m-2"  role="button"
              rel="nofollow" ><strong class="text-secondary">CryptoNews</strong></router-link>
           
           
              
          </div>
       
       
        <!-- <div class="text-white ">
          <h1 class="mb-3 text-secondary"><strong>Global News Hub</strong></h1>
          <h5 class="mb-4 text-secondary"><strong>Entertainment news</strong> </h5> -->
          <!-- <a class="btn btn-outline-light btn-lg m-2" href="https://www.youtube.com/watch?v=c9B4TPnak1A" role="button"
            rel="nofollow" target="_blank">News</a> -->
          <!-- <a class="btn btn-outline-light btn-lg m-2 text-secondary" href="https://mdbootstrap.com/docs/standard/" target="_blank"
            role="button"><strong>CryptoNews</strong></a> -->
        <!-- </div> -->
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