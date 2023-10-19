<template lang="">
    <div id="introCarousel-2" class="carousel slide carousel-fade shadow-2-strong" data-mdb-ride="carousel">
  
  <ol class="carousel-indicators">
    <li data-mdb-target="#introCarousel-2" data-mdb-slide-to="0" class="active"></li>
    <li data-mdb-target="#introCarousel-2" data-mdb-slide-to="1"></li>
    <li data-mdb-target="#introCarousel-2" data-mdb-slide-to="2"></li>
  </ol>

 
  <div class="carousel-inner">
  
    <div class="carousel-item active">
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.3);">
        <div class="d-flex  h-100">
          <div class="text-white container">
            <router-link to="/Crypto/CryptoPage" > <h1 class="mb-3 mt-4">TOP-100</h1></router-link>
            <h5 class="mb-4"></h5>
            
          </div>
        </div>
      </div>
    </div>

   
    <div class="carousel-item">
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.2);">
        <div class="d-flex  h-100">
          <div class="text-white container">
            <router-link to="/Crypto/People" > <h1 class="mb-3 mt-4">People of crypto</h1></router-link>
            <h5 class="mb-4"></h5>
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
      background-image: url('https://www.ibanet.org/medias/igi-jun-jul-22-crypto-banner.jpg?context=bWFzdGVyfHJvb3R8Nzc3MDR8aW1hZ2UvanBlZ3xhR000TDJnd1lpODRPRGszTlRjeE9URXpOelU0TDJsbmFTMXFkVzR0YW5Wc0xUSXlMV055ZVhCMGJ5MWlZVzV1WlhJdWFuQm58MDNlNDZlM2Q5ZjJiYzNkYTc4NjQ3ZGE1NmEzZjVmZDU4MjYyMzU1M2E3Nzc4MDRkOWMwNmFiMjBjODljMDZhMA');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }
    .carousel-item:nth-child(2) {
      background-image: url('https://coindoo.com/wp-content/uploads/2020/04/crypto-personalities.png');
      background-repeat: no-repeat;
      background-size: cover;
    }
    .carousel-item:nth-child(3) {
      background-image: url('https://imageio.forbes.com/specials-images/imageserve/641223d5e1bacf622ecfd6f9/Digital-security-concept/960x0.jpg?format=jpg&width=960');
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
.mt-4,.p{
    font-family:fantasy;
    font-weight: bold;
}
</style>