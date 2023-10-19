<template lang="">
    <div id="introCarousel-8" class="carousel slide carousel-fade shadow-2-strong" data-mdb-ride="carousel">
  
  <ol class="carousel-indicators">
    <li data-mdb-target="#introCarousel-8" data-mdb-slide-to="0" class="active"></li>
    <li data-mdb-target="#introCarousel-8" data-mdb-slide-to="1"></li>
    <li data-mdb-target="#introCarousel-8" data-mdb-slide-to="2"></li>
  </ol>

 
  <div class="carousel-inner">
  
   
       <div class="carousel-item active">
        <router-link to="/Crypto/Nft" >
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.1);">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white text-center">

           
            
          </div>
        </div>
      </div>
    </router-link>
    </div>

 

  
  <div class="carousel-item">
    <router-link to="/Crypto/Nft" >
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.3);">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white text-center">
           <h1 class="mb-3"></h1>
           
          </div>
        </div>
      </div>
    </router-link>
    </div>

  



  
    <div class="carousel-item">
      <router-link to="/Crypto/Defi" >
      <div
        class="mask"
        style="
          
        "
      >
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white text-center">
            <h1 class="mb-3"></h1>
           
           
          </div>
        </div>
      </div>
    </router-link>
    </div>
 
  </div>

</div>
</template>
<script>
export default {

}
</script>
<style lang="css" scoped>
#introCarousel-8,
    .carousel-inner,
    .carousel-item,
    .carousel-item.active {
      height: 100vh;
    }

    .carousel-item:nth-child(1) {
      background-image: url('https://blog.artsper.com/wp-content/uploads/2021/11/NFT-featured-image-01-min.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }
    .carousel-item:nth-child(2) {
      background-image: url('https://telegra.ph/file/4b05d8fe4c7792756d1a1.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }
    .carousel-item:nth-child(3) {
      background-image: url('https://iusauthor.com/images/DeFi-6.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }

 
    @media (min-width: 992px) {
      #introCarousel-8 {
        margin-top: -58.59px;
      }
      #introCarousel-8,
      .carousel-inner,
      .carousel-item,
      .carousel-item.active {
        height: 50vh;
      }
    }
a{
    text-decoration: none;
    color: white;
}
</style>