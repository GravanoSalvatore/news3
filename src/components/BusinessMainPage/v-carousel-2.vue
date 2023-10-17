<template lang="">
    <div id="introCarousel-2" class="carousel slide carousel-fade shadow-2-strong" data-mdb-ride="carousel">
  
  <ol class="carousel-indicators">
    <li data-mdb-target="#introCarousel-2" data-mdb-slide-to="0" class="active"></li>
    <li data-mdb-target="#introCarousel-2" data-mdb-slide-to="1"></li>
    <li data-mdb-target="#introCarousel-2" data-mdb-slide-to="2"></li>
  </ol>

 
  <div class="carousel-inner">
  
    <div class="carousel-item active">
      <!-- <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);"> -->
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white text-center">
            <router-link to="/Tech" > <h1 class="mb-3"></h1></router-link>
            <h5 class="mb-4"></h5>
           
          </div>
        <!-- </div> -->
      </div>
    </div>

   
    <div class="carousel-item">
      <!-- <div class="mask" style="background-color: rgba(0, 0, 0, 0.3);"> -->
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white text-center">
            <router-link to="/Tech" > <h1 class="mb-3"></h1></router-link>
           
          </div>
        </div>
      <!-- </div> -->
    </div>

   
    <div class="carousel-item">
      <div
        class="mask"
        style="
         
        "
      >
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white text-center">
            <router-link to="/Business" > <h1 class="mb-3"></h1></router-link>
           
           
          </div>
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
#introCarousel-2,
    .carousel-inner,
    .carousel-item,
    .carousel-item.active {
      height: 100vh;
    }

    .carousel-item:nth-child(1) {
      background-image: url("https://poonawallafincorp.com/pfca/assets/blog_banner/blog_banner-desktop-nature-of-business.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }
    .carousel-item:nth-child(2) {
      background-image: url('https://media.zenfs.com/en/insidermonkey.com/5e8e147ea4a6c9a3457b194391481628');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }
    .carousel-item:nth-child(3) {
      background-image: url('https://d2tyltutevw8th.cloudfront.net/CACHE/images/media/image/largest-companies-2022-1663089331/1f42e3f4314423a0ee7d6a556e664d35.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }

 
    @media (min-width: 992px) {
      #introCarousel-2 {
        margin-top: -58.59px;
      }
      #introCarousel-2,
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