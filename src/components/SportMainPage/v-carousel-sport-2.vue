<template lang="">
    <div id="introCarousel-28" class="carousel slide carousel-fade shadow-2-strong" data-mdb-ride="carousel">
  
  <ol class="carousel-indicators">
    <li data-mdb-target="#introCarousel-28" data-mdb-slide-to="0" class="active"></li>
    <li data-mdb-target="#introCarousel-28" data-mdb-slide-to="1"></li>
    <li data-mdb-target="#introCarousel-28" data-mdb-slide-to="2"></li>
  </ol>

 
  <div class="carousel-inner">
  
    <div class="carousel-item active">
      <div class="mask" >
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
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.3);">
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
#introCarousel-28,
    .carousel-inner,
    .carousel-item,
    .carousel-item.active {
      height: 100vh;
    }

    .carousel-item:nth-child(1) {
      background-image: url('https://www.lboro.ac.uk/media/wwwlboroacuk/external/content/newsandevents/news/2020/march/sport-main.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }
    .carousel-item:nth-child(2) {
      background-image: url('https://www.mmu.ac.uk/sites/default/files/styles/page_header_half/public/2022-09/sport.jpeg?h=4eb4501c&itok=geKWWn2C');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }
    .carousel-item:nth-child(3) {
      background-image: url('https://www.mmu.ac.uk/sites/default/files/styles/page_header_half/public/2021-01/elite%20sports.png?h=279670ce&itok=a8je9lyq');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }

 
    @media (min-width: 992px) {
      #introCarousel-28 {
        margin-top: -58.59px;
      }
      #introCarousel-28,
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