 <template lang="">
    <div>



      

        <nav class="navbar navbar-expand-lg navbar-dark " style="background-color:black">
  <!-- Container wrapper -->
  <div class="container">
    <!-- Navbar brand -->
    <router-link to="/" class="navbar-brand" href="#"><img style="width:70px" id="MDB-logo"
        src="https://images.vexels.com/media/users/3/136054/isolated/preview/47732df1770c20fdffe392b8e96f028e-good-news-mailing-logo.png"
        draggable="false" height="30" /></router-link>

    <!-- Toggle button -->
    <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">
      <i class="fas fa-bars"></i>
    </button>

   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
     
      <div class="dropdown">
  <button class="btn btn-black dropdown-toggle" type="button" id="dropdownMenu2" data-mdb-toggle="dropdown" aria-expanded="false">
    <span style="color:white;font-size:18px">NEWS</span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li class="p-2"><router-link class="fw-bold" style="color:gold" to="/Business">BUSINESS</router-link></li>
    <li class="p-2"> <router-link style="color:grey" to="/Tech">TECHNOLOGY</router-link></li>
    <li class="p-2"> <router-link style="color:red" to="/Sport">SPORT</router-link></li>
    <li class="p-2"> <router-link style="color:green" to="/Health">HEALTH</router-link></li>
    <li class="p-2"> <router-link style="color:blue" to="/Science">SCIENCE</router-link></li>
    <li class="p-2"> <router-link style="color:indigo" to="/Entertainment">ENTERTAINMENT</router-link></li>
    <li class="p-2"> <router-link style="color:indigo" to="/Crypto">CRYPTO</router-link></li>
    
  </ul>
</div>
      <!-- Left links -->

      <form class="d-flex align-items-center w-100 form-search">
        <div class="input-group">
          <!-- <button class="btn btn-light dropdown-toggle shadow-0" type="button" data-mdb-toggle="dropdown"
            aria-expanded="false" style="padding-bottom: 0.4rem;">
            All
          </button> -->
          <!-- <ul class="dropdown-menu dropdown-menu-dark fa-ul">
            <li>
              <a class="dropdown-item" href="#"><span class="fa-li pe-2"><i class="fas fa-search"></i></span>All</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"><span class="fa-li pe-2"><i
                    class="fas fa-film"></i></span>Titles</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"><span class="fa-li pe-2"><i class="fas fa-tv"></i></span>TV
                Episodes</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"><span class="fa-li pe-2"><i
                    class="fas fa-user-friends"></i></span>Celebs</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"><span class="fa-li pe-2"><i
                    class="fas fa-building"></i></span>Companies</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"><span class="fa-li pe-2"><i
                    class="fas fa-key"></i></span>Keywords</a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#"><span class="fa-li pe-2"><i
                    class="fas fa-search-plus"></i></span>Advanced
                search<i class="fas fa-chevron-right ps-2"></i></a>
            </li>
          </ul> -->

          <form class="d-flex">
        <input  v-model="searchT" 
       placeholder="Search news" 
       v-on:input="onSearchType"  
       class="form-control me-2 input"  
       aria-label="Search">
       
      </form>




     




       
        </div>
      
      </form>
       
<div >
   <button class="btn btn-black " type="button" >
    <span style="color:white;font-size:15px">Business</span>
  </button>
  </div>
  <div >
   <button class="btn btn-black " type="button" >
    <span style="color:white;font-size:15px">Crypto</span>
  </button>
  </div>
  <div >
   <button class="btn btn-black " type="button" >
    <span style="color:white;font-size:15px">About</span>
  </button>
  </div>
<div >
   <button class="btn btn-black " type="button" >
    <span style="color:white;font-size:15px">Articles</span>
  </button>
  </div>

  <div >
   <button class="btn btn-black " type="button" >
    <span style="color:white;font-size:15px">Contact</span>
  </button>
  </div>
  <!-- <div >
   <button class="btn btn-black " type="button" >
    <span style="color:white;font-size:15px">Login</span>
  </button>
  </div> -->
  
     
     
     
     
     
     
     
      <div class="dropdown">
  <button class="btn btn-black dropdown-toggle" type="button" id="dropdownMenu2" data-mdb-toggle="dropdown" aria-expanded="false">
    <span style="color:white;font-size:14px">MORE</span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button class="dropdown-item" type="button">ABOUT</button></li>
    <li><button class="dropdown-item" type="button">CONTACT</button></li>
    <li><button class="dropdown-item" type="button">VIDEO</button></li>
    <li><button class="dropdown-item" type="button">ARTICLES</button></li>
    <li><button class="dropdown-item" type="button">GPT</button></li>
    <li><button class="dropdown-item" type="button">LIVE</button></li>
    <li><button class="dropdown-item" type="button">FOREX</button></li>
    <li><button class="dropdown-item" type="button">DONATE</button></li>
   <api/>
  </ul>
</div>
<vtime/>
    </div>
   
  </div>
  
 
</nav>

<div class="wrap">
<div class="div "> 
    <button @click="searchClose" class="close"><img style="width:24px" src="https://freesvg.org/img/close-button.png"></button> 
  
  <div v-for="item in news"
  
  :key="item">
  
<ul>
   
 <a class="title" :href="item.url" 
         target="_blank "><li>{{item.title}}</li></a>
        </ul>   
  
  </div> 
  </div>
</div>



<span class="marquee"
v-for="item in news2"
:key="item"
>

      <p>
        <!-- <img style="width:200px" :src="item.urlToImage"/> -->
        
        
       <span style="font-size:18px;color:white">{{item.title}}{{item.content}}</span> </p>
      </span>
    </div>
    
 </template>
 <script>
import axios from 'axios'
import api from '../../components/GeoApi.vue'
import vtime from '../../components/time.vue'
 export default {
  components:{vtime,api},
  data(){
      return{
        news2:[],
          news:[],
          searchT:''
      }
  },

methods: {
  onSearchType: function(){

const search = document.querySelector('.div').style.display='block'
     //var url = 'https://newsapi.org/v2/everything?apiKey=1fb27fc9978d48ecadb4bdc77705325e&pageSize=100' + '&q=' + this.searchT;
     var url = 'https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=3&Language=14&Page=1&PageSize=100' + '&q=' + this.searchT;
      axios
          .get(url)
          .then(response=>{
              this.news = response.data.items
          })
          .catch(error=>{
          console.log(error)
          });
  },
  searchClose(){
    const searchClosed = document.querySelector('.div').style.display='none'
    const searchClosed2 = document.querySelector('.input').value=""
  }
},
 mounted(){
axios
.get('https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=3&Language=14&Page=1&PageSize=2')
.then(response=>{
  this.news2 = response.data.items
})
.catch(error=>{
  console.log('error')
})
 },
 }
 </script>
 <style lang="scss" scoped>

.marquee {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgb(1, 0, 0);
  color: white;
  white-space: nowrap;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
   z-index: 100;
 
  padding: 5px 0;
}

.marquee p {
 
  display: inline-block;
  padding-left: 100%; /* Push the text off the screen */
  animation: marquee 25s linear infinite; /* Adjust the animation duration as needed */
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}









 .close{
  position: fixed;
 }
 .navbar{
    position: fixed;
    top:0;
    left:0;
    right:0;
    z-index: 100;
 }
    .navbar-dark .nav-item .nav-link {
  color: #fff;
}

.navbar-dark .nav-item .nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  border-radius: 0.25rem;
  color: #fff;
}

.fa-li {
  position: relative;
  left: 0;
}
.form-control{
  border-radius: none !important;
}
.div{
  // box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  position: fixed;
  border:2px solid white;
 display: none;
  width: 250px;
  margin-left: px;
  margin-right: 30px;
  // margin-top: 15px;
  border-radius:5px;
  // overflow-y: scroll;
 margin-top: 127px;
  padding: 20px;
  // max-height: calc(100vh - 56px);
  height:515px;
    overflow-x: hidden;
    overflow-y: auto;
    background-color:#030303;
    color:rgb(3, 3, 3);
    z-index: 5000;
  //   display: none;
  @media screen and (max-width:767px){
    
    
  }
 }
 .wrap{
  @media screen and (max-width: 767px){
    position: absolute;
    top:0;
    height: 350px;
  }
 }
 .title{
  color: white;
 }
 </style>