<template lang="">
    <div id="introCarousel-21" class="carousel slide carousel-fade shadow-2-strong" data-mdb-ride="carousel">
  
  <ol class="carousel-indicators">
    <li data-mdb-target="#introCarousel-21" data-mdb-slide-to="0" class="active"></li>
    <li data-mdb-target="#introCarousel-21" data-mdb-slide-to="1"></li>
    <li data-mdb-target="#introCarousel-21" data-mdb-slide-to="2"></li>
  </ol>

 
  <div class="carousel-inner">
  
    <div class="carousel-item active">
      <div class="mask">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white text-center">
            <router-link to="/Tech" > <h1 class="mb-3"></h1></router-link>
            <h5 class="mb-4"></h5>
            <!-- <a
              class="btn btn-outline-light btn-lg m-2"
              href="https://www.youtube.com/watch?v=c9B4TPnak1A"
              role="button"
              rel="nofollow"
              target="_blank"
              >Start tutorial</a
            > -->
            <!-- <a
              class="btn btn-outline-light btn-lg m-2"
              href="https://mdbootstrap.com/docs/standard/"
              target="_blank"
              role="button"
              >Download MDB UI KIT</a
            > -->
          </div>
        </div>
      </div>
    </div>

   
    <div class="carousel-item">
      <div class="mask" >
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white text-center">
            <router-link to="/Tech" > <h1 class="mb-3"></h1></router-link>
           
          </div>
        </div>
      </div>
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
           
            <!-- <a
              class="btn btn-outline-light btn-lg m-2"
              href="https://mdbootstrap.com/docs/standard/content-styles/masks/"
              target="_blank"
              role="button"
              >Sport</a
            > -->
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
      background-image: url('https://health.ec.europa.eu/sites/default/files/styles/oe_theme_full_width/public/2022-01/public-health-banner1_0.jpg?itok=uu9IKHR1');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }
    .carousel-item:nth-child(2) {
      background-image: url('https://www.exudeinc.com/wp-content/uploads/2017/05/HealthFitness.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }
    .carousel-item:nth-child(3) {
      background-image: url('https://mdbootstrap.com/img/Photos/Others/images/78.jpg');
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