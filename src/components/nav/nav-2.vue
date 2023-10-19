
<template lang="">
  
  <header>
   
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  
  <div class="modal-dialog">
<div class="modal-content">
  <div class="modal-header">
    <h1 class="modal-title fs-5" id="exampleModalLabel">Donate</h1>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <img class="img-donate" :src="btc"><span>17Mrtxxq2iXfyGKf9QY1oUtFezUQ1DZUS8</span><br/>
    <img class="img-donate" :src="eth"><span>17Mrtxxq2iXfyGKf9QY1oUtFezUQ1DZUS8</span><br/>
    <img class="img-donate" :src="usdt"><span>17Mrtxxq2iXfyGKf9QY1oUtFezUQ1DZUS8</span><br/>
    <img class="img-donate" :src="payPal"><span>17Mrtxxq2iXfyGKf9QY1oUtFezUQ1DZUS8</span><br/>
    
    
    

  </div>
  <!-- <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
  </div> -->
</div>
</div>


</div>


<div class="modal fade" style="background-color:black" id="exampleModal-2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" >
<div class="modal-content">
  <div class="modal-header" >
    <h1 class="modal-title fs-5" id="exampleModalLabel"> <a class="navbar-brand " href="#"><img style="width:70px" :src="logo"></a></h1>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body text-white" style="background-color:rgb( 92,187,246)">
   <p><strong>Global News Hub</strong>   are your trusted source for up-to-the-minute news covering the world of cryptocurrencies and the dynamic realm of business. Our mission is to provide our readers with the freshest and most reliable information needed to make informed decisions in the fields of investment, finance, and technology.</p>
  <p><strong>Global News Hub</strong> monitor the latest developments in the cryptocurrency world, analyze the market, and provide reviews of leading digital assets. Whether you're an experienced trader or a newcomer to the crypto space, our content will help you stay informed about crucial events.</p>
  <p><strong>Global News Hub</strong> keep tabs on business news and trends that can impact the global economy. Our articles offer analytical insights into significant happenings in the business world, corporate innovations, and global trends.
</p>
  <p><strong>Global News Hub</strong> adhere to the highest standards of journalism and strive to deliver trustworthy information. Our team of professional journalists and experts ensures that you receive only high-quality content.
</p>
  <p><strong>Global News Hub</strong> update our website as soon as important information surfaces, ensuring you're always in the know.
</p>
  <p><strong>Global News Hub</strong> cover a wide range of subjects, from cryptocurrencies and finance to technology and business, catering to the interests of all our readers.</p>
  <p><strong>Global News Hub</strong> provide an analytical perspective on events, along with expert commentary to help you understand their implications.</p>
  <p>With us, you gain access to a world of news and information that can empower you to make informed decisions. Welcome to our website, where information becomes knowledge, and knowledge is power.</p>
  </div>
  <!-- <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
  </div> -->
</div>
</div>
</div>



<div class="modal fade" id="exampleModal-3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

<div class="modal-dialog">
<div class="modal-content" style="background-color: #040d1d">
<div class="modal-header">
<h1 class="modal-title fs-5 text-white" id="exampleModalLabel">Contact</h1>
<button type="button" style="background-color:white" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body " style="color:white">
globalnewshub@gmail.com<br/>
New York, NY 10012, US<br/>



</div>

</div>
</div>


</div>











    <nav id="main-navbar" class="navbar navbar-expand-md fixed-top navbar-before-scroll shadow-0">
    
 <div class="container-fluid">
   
   <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
           data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
           aria-label="Toggle navigation">
     <i class="fas fa-bars"></i>
   </button>








   
  
   <div class="collapse navbar-collapse" id="navbarSupportedContent">
     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <router-link  @click="change" to="/"><img style="width:70px" :src="logo"></router-link>
    
    <vtime/>
      <div class="dropdown">
      
<button
 class="btn mt-4  "
 
 
>
<router-link @click="change" to="/" class="text-secondary">Home</router-link>
</button>
<!-- <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
 <li><a class="dropdown-item" href="#">Action</a></li>
 <li><a class="dropdown-item" href="#">Another action</a></li>
 <li><a class="dropdown-item" href="#">Something else here</a></li>
</ul> -->
</div> 
<div class="dropdown">
<button
 class="btn mt-4  dropdown-toggle"
 type="button"
 id="dropdownMenuButton"
 data-mdb-toggle="dropdown"
 aria-expanded="false"
 
>
 News
</button>
<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <!-- <li><router-link to="/General" class="dropdown-item" href="#">General</router-link></li> -->
  <li><router-link  @click="businessChangeBaner" to="/Business" class="dropdown-item" href="#">Business</router-link></li>
 
  <li><router-link @click="techChangeBaner" to="/Tech" class="dropdown-item" href="#">Technology</router-link></li>
 
 <li><router-link @click="sportChangeBaner" to="/Sport" class="dropdown-item" href="#">Sport</router-link></li>
 
 <li><router-link @click="healthChangeBaner" to="/Health" class="dropdown-item" href="#">Health</router-link></li>
 <li><router-link @click="scienceChangeBaner" to="/Science" class="dropdown-item" href="#">Science</router-link></li>
 <li><router-link @click="enterChangeBaner" to="/Entertainment" class="dropdown-item" href="#">Entertainment</router-link></li>
 
</ul>
</div> 
<div class="dropdown">
<button
 class="btn mt-4  dropdown-toggle"
 type="button"
 id="dropdownMenuButton"
 data-mdb-toggle="dropdown"
 aria-expanded="false"
 
>
 Crypto
</button>
<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <li><router-link to="/Crypto" class="dropdown-item" href="#">Crypto</router-link></li>
  <li><router-link to="/Crypto/News" class="dropdown-item" href="#">News</router-link></li>

  <li><router-link to="/Crypto/People" class="dropdown-item" href="#">People of crypto</router-link></li>
 <li><router-link to="/Crypto/Nft" class="dropdown-item" href="#">NFT</router-link></li>
 <li><router-link to="/Crypto/Defi" class="dropdown-item" href="#">Defi</router-link></li>
 <li><router-link to="/Crypto/CryptoPage" class="dropdown-item" href="#">TOP</router-link></li>


</ul>
</div> 
     
       <div class="dropdown">
<button
 class="btn mt-4  dropdown-toggle"
 type="button"
 id="dropdownMenuButton"
 data-mdb-toggle="dropdown"
 aria-expanded="false"
 
>
 More
</button>
<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="#">Articles</a></li>






          <li type="button" data-bs-toggle="modal" data-bs-target="#exampleModal-2"    >
        <a class="dropdown-item" href="#">ABOUT</a>
      </li>
          
          <li type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal-3"><a class="dropdown-item" href="#">CONTACT</a></li>
          
         
          <li type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal"><a class="dropdown-item" href="#">DONATE</a></li>
        </ul>

</div> 
<div class="container-fluid">
    <ul class="navbar-nav">
    
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="flag-united-kingdom flag m-0"></i>
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <a class="dropdown-item" href="#"
              ><i class="flag-united-kingdom flag"></i>English
              <i class="fa fa-check text-success ms-2"></i
            ></a>
          </li>
          <li><hr class="dropdown-divider" /></li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-poland flag"></i>Polski</a>
          </li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-china flag"></i>中文</a>
          </li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-japan flag"></i>日本語</a>
          </li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-germany flag"></i>Deutsch</a>
          </li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-france flag"></i>Français</a>
          </li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-spain flag"></i>Español</a>
          </li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-russia flag"></i>Русский</a>
          </li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-portugal flag"></i>Português</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
     </ul>
     
     <span class=" mt-8"> <bread/></span>
    <!-- <search/> -->

     <form class="d-flex" role="search">
   <input     
       v-model="searchT" 
       placeholder="Search news" 
       v-on:input="onSearchType"  
       class="form-control me-2"  
       aria-label="Search"  
       style="height:20px;color:white;border:2px solid white;"  
       type="search"
       
       
       >
   
 </form>
    
 
 
 
 
 
 
 <!-- <ul class="navbar-nav flex-row">
     
       <li class="nav-item">
         <a class="nav-link pe-2" href="#!">
           <i class="fab fa-youtube"></i>
         </a>
       </li>
       <li class="nav-item">
         <a class="nav-link px-2" href="#!">
           <i class="fab fa-facebook-f"></i>
         </a>
       </li>
       <li class="nav-item">
         <a class="nav-link px-2" href="#!">
           <i class="fab fa-twitter"></i>
         </a>
       </li>
       <li class="nav-item">
         <a class="nav-link ps-2" href="#!">
           <i class="fab fa-instagram"></i>
         </a>
       </li>
     </ul> -->
   </div>
  

 </div>

</nav>
<div class="wrap">
<div class="div "> 
    <button @click="searchClose" class="close"><img style="width:14px" src="../../assets/1.png"></button> 
  
  <div v-for="item in news"
  
  :key="item">
  
<ul>
   
 <a class="title" :href="item.url" 
         target="_blank "><li class="text-white">{{item.title}}</li></a>
      
        </ul>   
  
  </div> 
  </div>
</div>
</header>

</template>
<script>
import search from '@/views/Search.vue'
import vtime from '../../views/Time.vue'
import bread from '../../components/BreadCrams/v-bread-crams.vue'
import axios from 'axios'
export default {
  components:{bread,vtime,search},
  data(){
      return{
          news:[],
          searchT:'',
          logo:'https://play-lh.googleusercontent.com/SOkLgfrJZHsnx2aHtTdsGleK3CG98VXUMAmJ8qP3P_p43Gx4nzXfBwqU0f8VPVyF9oQ',
          btc:'https://media.istockphoto.com/id/1139020309/vector/bitcoin-internet-money-icon-vector.jpg?s=612x612&w=0&k=20&c=vcRUEDzhndMOctdM7PN1qmipo5rY_aOByWFW0IkW8bs=',
          eth:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ethereum_logo_translucent.svg/1449px-Ethereum_logo_translucent.svg.png',
          usdt:'https://png.pngtree.com/png-clipart/20221113/ourmid/pngtree-tether-or-usdt-green-coin-3d-rendering-front-view-cryptocurrency-illustration-png-image_6443096.png',
          payPal:'https://static.vecteezy.com/system/resources/previews/022/100/835/original/paypal-logo-transparent-free-png.png'
      
        }
  },

methods: {
  businessChangeBaner(){
        let changeBusiness = document.getElementById("intro7").style.backgroundImage='url(https://www.gawieleroux.co.za/sites/default/files/2023-03/Blog%20photos_5%20enterprises.jpg)'
        let closeGeneral = document.getElementById('general').style.display="none"
        let closeGeneral2 = document.getElementById('general2').style.display="none"
        let closeGeneral3 = document.getElementById('general3').style.display="none"
        let introCarouselClose2 = document.getElementById('introCarousel-2').style.display="none"
        let introCarouselClose = document.getElementById('introCarousel').style.display="none"
      },
      techChangeBaner(){
        let changeTech = document.getElementById("intro7").style.backgroundImage='url(https://standards.ieee.org/wp-content/uploads/2021/12/Connected-technologies-1920x1080-1.jpg)'
        let closeGeneral = document.getElementById('general').style.display="none"
        let closeGeneral2 = document.getElementById('general2').style.display="none"
        let closeGeneral3 = document.getElementById('general3').style.display="none"
        let introCarouselClose2 = document.getElementById('introCarousel-2').style.display="none"
        let introCarouselClose = document.getElementById('introCarousel').style.display="none"
      },
      sportChangeBaner(){
        let changeSport = document.getElementById("intro7").style.backgroundImage='url(https://www.iro-dogs.com/wp-content/uploads/2021/09/Sports-Vouchers-Program.jpg)'
        let closeGeneral = document.getElementById('general').style.display="none"
        let closeGeneral2 = document.getElementById('general2').style.display="none"
        let closeGeneral3 = document.getElementById('general3').style.display="none"
        let introCarouselClose2 = document.getElementById('introCarousel-2').style.display="none"
        let introCarouselClose = document.getElementById('introCarousel').style.display="none"
      },
      healthChangeBaner(){
        let changeHealth = document.getElementById("intro7").style.backgroundImage='url(https://s7d1.scene7.com/is/image/wbcollab/Health_Background_Nov21)'
        let closeGeneral = document.getElementById('general').style.display="none"
        let closeGeneral2 = document.getElementById('general2').style.display="none"
        let closeGeneral3 = document.getElementById('general3').style.display="none"
        let introCarouselClose2 = document.getElementById('introCarousel-2').style.display="none"
        let introCarouselClose = document.getElementById('introCarousel').style.display="none"
      },
      enterChangeBaner(){
        let changeEnter = document.getElementById("intro7").style.backgroundImage='url(https://eu-assets.simpleview-europe.com/bournemouth/imageresizer/?image=%2Fdbimgs%2FBIC%20Performance.jpg&action=FeaturedItemsGalleryProElite3x2)'
        let closeGeneral = document.getElementById('general').style.display="none"
        let closeGeneral2 = document.getElementById('general2').style.display="none"
        let closeGeneral3 = document.getElementById('general3').style.display="none"
        let introCarouselClose2 = document.getElementById('introCarousel-2').style.display="none"
        let introCarouselClose = document.getElementById('introCarousel').style.display="none"
      },
      scienceChangeBaner(){
        let changeScience = document.getElementById("intro7").style.backgroundImage='url(https://assets.weforum.org/community/image/3v8PB95CCSn86e5fowthRAybW4ajSY18z2FfVPi2spk.jpeg)'
        let closeGeneral = document.getElementById('general').style.display="none"
        let closeGeneral2 = document.getElementById('general2').style.display="none"
        let closeGeneral3 = document.getElementById('general3').style.display="none"
        let introCarouselClose2 = document.getElementById('introCarousel-2').style.display="none"
        let introCarouselClose = document.getElementById('introCarousel').style.display="none"
      },


  change(){
  let change = document.getElementById("intro7").style.backgroundImage='url(https://pressclubswfl.org/wp-content/uploads/2023/08/News.jpg)'
  let openGeneral = document.getElementById('general').style.display="block"
        let openGeneral2 = document.getElementById('general2').style.display="block"
        let openGeneral3 = document.getElementById('general3').style.display="block"
        let openCarouselClose2 = document.getElementById('introCarousel-2').style.display="block"
        let openCarouselClose = document.getElementById('introCarousel').style.display="block"
  },

//   onSearchType: function(){

// const search = document.querySelector('.div').style.display='block'
    
// var url = ' https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&Page=1&&pageSize=100' + '&q=' + this.searchT;  
//       axios
//           .get(url)
//           .then(response=>{
//               this.news = response.data.items
//           })
//           .catch(error=>{
//           console.log(error)
//           });
//   },

onSearchType: function(){
  
  const search = document.querySelector('.div').style.display='block'
      
 // var url = ' https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&Page=1&&pageSize=100' + '&q=' + this.searchT; 
      var url = 'https://newsapi.org/v2/everything?apiKey=eb237649c2594555a26f68e392086d40&pageSize=100' + '&q=' + this.searchT;
        axios
            .get(url)
            .then(response=>{
                this.news = response.data.articles
            })
            .catch(error=>{
            console.log(error)
            });
    },
  searchClose(){
    const searchClosed = document.querySelector('.div').style.display='none'
  }
},
mounted(){
  const navbar = document.getElementById("main-navbar")

window.addEventListener('scroll', function () {
if (window.pageYOffset > 0) {
  navbar.classList.add("navbar-after-scroll")
} else {
  navbar.classList.remove("navbar-after-scroll")
}
})
} 
}
</script>
<style lang="css" scoped>


.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); 
  z-index: 1000;
  display: none;}

.dropdown-menu{
  background-color:rgb(1, 1, 2);
}
.navbar {
   
   background-color: rgb(1, 1, 2);
 }

  /* .navbar-after-scroll {
   
    background-color: rgb(1, 1, 2);
  } */

  /* .navbar-after-scroll {
  transition: background 2s ease-in-out, padding 2s ease-in-out;
}


.navbar-before-scroll {
  transition: background 1s ease-in-out, padding 1s ease-in-out;
} */
/* navbar.navbar-before-scroll.navbar-after-scroll {
  padding-top: 5px;
  padding-bottom: 5px;
} */
.navbar .nav-link {
        color: rgb(246, 151, 92)  !important;
      }
      .navbar .nav-link {
        color:rgb( 92,187,246)  !important;
      }
      button,input{
        /* border: none !important; */
        box-shadow: none !important;
      }
      input{
        list-style: none;
      }
      button{
        color: rgb( 92,187,246) 
      }
      
      
      a{color:rgb( 92,187,246) ;
        text-decoration: none;
        /* color:rgb( 92,187,246)  */
      }
      .btn{
        font-weight: bold;
        color:rgb( 92,187,246) 
      }

      @media (max-width: 767px){
  .close{
    top: 0px;
  }
 }
.close{
  position: fixed;
  left:230px;
  top:85px
  
}
      .div{
  
  position: fixed;
  border:2px solid white;
 display: none;
  width: 250px;
  margin-left: px;
  margin-right: 30px;
 
  border-radius:5px;
 
 top: 85px;
  padding: 20px;
 
  height:515px;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: rgb(1, 1, 2);
    color:rgb(247, 245, 245);
    z-index: 5000;
  
  
 }
 @media screen and(max-width: 767px){
  .div{
    margin-top: 5px;
  }
 }
 .wrap{
 
 }
 ::placeholder{
  color:rgb(249, 251, 253);
  font-weight: bold;
 }
 .img-donate{
  width: 70px;
 }
 .form-control{
  background-color: black;
 
}
</style>   

