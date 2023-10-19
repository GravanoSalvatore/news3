<template lang="">
    <div id="introCarousel-212" class="carousel slide carousel-fade shadow-2-strong" data-mdb-ride="carousel">
  
  <ol class="carousel-indicators">
    <li data-mdb-target="#introCarousel-212" data-mdb-slide-to="0" class="active"></li>
    <li data-mdb-target="#introCarousel-212" data-mdb-slide-to="1"></li>
    <li data-mdb-target="#introCarousel-212" data-mdb-slide-to="2"></li>
  </ol>

 
  <div class="carousel-inner">
    <router-link to="/Top" >
    <div class="carousel-item active">
      <div class="mask" style="">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white text-center">
             <h1 class="mb-3"></h1>
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
  </router-link>
   
    <div class="carousel-item">
      <div class="mask" style="">
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
      <router-link to="/Top" >  
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white text-center">
           <h1 class="mb-3"></h1>
           
            <!-- <a
              class="btn btn-outline-light btn-lg m-2"
              href="https://mdbootstrap.com/docs/standard/content-styles/masks/"
              target="_blank"
              role="button"
              >Sport</a
            > -->
          </div>
        </div>
      </router-link>
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
#introCarousel-212,
    .carousel-inner,
    .carousel-item,
    .carousel-item.active {
      height: 100vh;
    }

    .carousel-item:nth-child(1) {
      background-image: url('https://libertex.com/sites/default/files/inline-images/blue-chips-2.jpg');
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
      background-image: url('https://lightyear.com/cms/instruments_o_854a724edb.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }

 
    @media (min-width: 992px) {
      #introCarousel-212 {
        margin-top: -58.59px;
      }
      #introCarousel-212,
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