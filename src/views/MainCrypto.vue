<template lang="">
  <br/><br/><br/>
   

    <sport/>
 

<!-- <main class="container">
  <div class="p-4 p-md-5 mb-4 text-white rounded " style="background-image:url('https://www.britwise.com/blog/wp-content/uploads/2019/11/Blockchain-Technology-Cryptocurrencies.jpg')">
    <div class="col-md-6 px-0">
      <h1 class="display-4 fst-italic">Blockchain and cryptocurrency look into the future</h1>
       <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
      <p class="lead mb-0"><a href="#" class="text-white fw-bold">Continue reading...</a></p> 
    </div>
  </div>





<div class="album py-5">
  <div class="container">

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
     
      <div class="col">
        <div class="card shadow-sm ">
          <img src="../assets/A-Bitcoin-Graphic-Next-To-Little-Cubes-With-Code-In-The-Background.jpg" class="bd-placeholder-img card-img-top" width="100%" height="425"  role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">

          <div class="card-body">
            <p class="card-text text-center"><router-link to="/CryptoPage">CRYPTO</router-link></p>
            <div class="d-flex justify-content-between align-items-center">
              
              <small class="text-muted"></small>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card shadow-sm">
          <img src="../assets/cryptocurrency-gd0507e3bc_1920.jpg" class="bd-placeholder-img card-img-top" width="100%" height="425"  role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">

          <div class="card-body">
            <p class="card-text text-center"><router-link to="/Crypto" >CryptoNews</router-link>

            </p>
            <div class="d-flex justify-content-between align-items-center">
             
              <small class="text-muted"></small>
            </div>
          </div>
       </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <img src="../assets/mycryptowallet.png" class="bd-placeholder-img card-img-top" width="100%" height="425"  role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">

          <div class="card-body">
            <p class="card-text text-center"><router-link to="/Exchange">Exchange</router-link></p>
            <div class="d-flex justify-content-between align-items-center">
             
              <small class="text-muted"></small>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <img src="../assets//apesprice.webp" class="bd-placeholder-img card-img-top" width="100%" height="425"  role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">

          <div class="card-body">
            <p class="card-text text-center"><router-link to="/Nft" >NFT</router-link></p>
            <div class="d-flex justify-content-between align-items-center">
              
              <small class="text-muted"></small>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <img src="../assets/DeFi-6 (1).jpg" class="bd-placeholder-img card-img-top" width="100%" height="425"  role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">

          <div class="card-body">
            <p class="card-text text-center"><router-link to="/Defi">DEFI</router-link></p>
            <div class="d-flex justify-content-between align-items-center">
              
              <small class="text-muted"></small>
            </div>
          </div>
        </div>
      </div>
     
      <div class="col">
        <div class="card shadow-sm">
          <img src="../assets/crypto-personalities (1).webp" class="bd-placeholder-img card-img-top" width="100%" height="425"  role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">

          <div class="card-body">
            <p class="card-text text-center"><router-link to="/People">Blockchain people</router-link> </p>
            <div class="d-flex justify-content-between align-items-center">
              
              <small class="text-muted"></small>
            </div>
          </div>
        </div>
      </div>

     

      

    </div>
  </div>
</div>

</main> -->
<br/><br/><br/>
</template>
<script>
import sport from '../pages/sport.vue'
export default {
  components:{
    sport
  }
  
}
</script>
<style scoped lang="scss">
.album{
  background-color:#040d1d; 
}
a,p{
  color: white;
}
.card{
  background-color: #112548;
}
img{
  @media screen and(max-width: 900px){
    height: 200px;
  }
  @media screen and(max-width: 575px){
    height: 300px;
  }
  @media screen and(max-width: 400px){
    height: 200px;
  }
}
.card-body p{
  font-size: 40px;
  font-weight: bold;
}
a{
  text-decoration: none;
  color: white;
}
</style>