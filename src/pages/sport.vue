<template lang="">
    <div>
       
      <!-- Background image -->
      <div id="intro" class="bg-image vh-100 shadow-1-strong">
        <video style="min-width: 100%; min-height: 100%;" playsinline autoplay muted loop>
          <source class="h-100" src="../videos/istockphoto-1002409896-640_adpp_is.mp4" type="video/mp4" />
        </video>
        <div class="mask"     style="
        /* background: linear-gradient(
          45deg,
          rgba(29, 236, 197, 0.7),
          rgba(91, 14, 214, 0.7) 100%
        ); */
      ">
          <div class="container d-flex align-items-center justify-content-center text-center h-100">
            <div class="text-white">








<!-- <cryptoPage/> -->








              <h1 class="mb-3"><strong>Crypto World</strong></h1>
              <h5 class="mb-4"><strong>The world of crypto news, blockchain, interesting articles, artificial intelligence and everything related to the digital world</strong></h5>
              <router-link  to="/Crypto"
                class="btn btn-outline-light btn-lg m-2 link"
               
              
                target="_blank"
               
                > <strong>Crypto News</strong></router-link>
              
              <span
                class="btn btn-outline-light btn-lg m-2"
               
                target="_blank"
                role="button"
                ><strong>Crypto Guide</strong></span
              >
            </div>
          </div>
        </div>
      </div>
     
    <main class="mt-5">
      <div class="container">
       
        <section class="text-center">
         
          <div class="row">
            <div class="col-lg-3 col-md-12 mb-4"
            
            v-for="item in  paginatedArticles"
             :key="item.id"
            >
              <div class="card">
                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                  <img
                    :src="item.imageurl"
                    class="img-fluid"
                  />
                  <a href="#!">
                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title"><strong><a :href="item.url" target="_blank">{{item.title}}</a></strong></h5>
                  <p class="card-text">
                   <!-- {{item.description}} -->
                  </p>
                  <!-- <span class="text-success"> {{ item.source_info.name }}</span>
               <span class="text-secondary"> {{ item.categories }}</span> -->
               
                </div>
              </div>
             
            </div>
          </div>
          <div class="pagination">
                 <button class="prev-bt" @click="prevPage" :disabled="currentPage === 1">Previous</button>
                 <span class="page-numbers">{{ currentPage }} / {{ totalPages }}</span>
                 <button class="next-bt" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
               </div>
        </section>
       
       
<hr/>
        
       
        <cryptoNav/>
        





      

        <hr class="my-5" />

       
      </div>
      <cryptoPage/>
    </main>
   

    
    </div>
</template>
<script>
import cryptoNav from '../pages/nav.vue'
import cryptoPage from '../views/CryptoPage.vue'
export default {
 components:{
    cryptoPage,
    cryptoNav
 },
 data() {
       return {
         articles: [],       
         currentPage: 1,   
         totalPages: 1,     
         rows: 4,          
       };
     },
     computed: {
       paginatedArticles() {
         
         const start = (this.currentPage - 1) * this.rows;
         const end = start + this.rows;
         return this.articles.slice(start, end);
       },
     },
     methods: {
       async getData() {
         
         // const apiKey = 'd205e0353aed4e42b97d11c1a88207f0'
       
         const pageSize = 100;
         
         try {
           const response = await fetch(
             'https://min-api.cryptocompare.com/data/v2/news/?categories=Technology,Blockchain&excludeCategories=Regulation,Mining'
           );
           const data = await response.json();
           return data.Data;
         } catch (error) {
           console.error('Error fetching news:', error);
           return [];
         }
       },
       async fetchNews() {
         
         const articles = await this.getData();
         this.articles = articles;
         this.totalPages = Math.ceil(articles.length / this.rows);
       },
       nextPage() {
         
         if (this.currentPage < this.totalPages) {
           this.currentPage++;
         }
       },
       prevPage() {
         
         if (this.currentPage > 1) {
           this.currentPage--;
         }
       },
     },
     mounted() {
      
       this.fetchNews();
     },}






</script>
<style lang="scss" scoped>
.pagination{
  margin-top: 40px;
}
.link{
    color:white;
}
.link:hover{
    color:black;
    background-color: white;
    text-decoration: none;
}
a:hover{
    text-decoration: underline;
}
a{
    text-decoration: none;
    color:black;
}
.prev-bt:hover,
.next-bt:hover {
  background-image: linear-gradient(to right, #040d1d, #053684);
  color: white;
}
.prev-bt,
.next-bt {
  margin: 13px;
  // background-color: white;
  color: rgb(248, 2, 2);
  // box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  border-radius: 2px;
  padding: 7px;
  font-weight: bold;
}
h1{
    font-size: 70px;
}
.page-numbers{
    margin-top: 20px;
}
     @media (min-width: 992px) {
          #intro {
            margin-top: -58.59px;
          }
        }

        .navbar .nav-link {
          color: #fff !important;
        }
        .card,.row{
          // background-image: linear-gradient(to right, #040d1d, #053684);
           
            border: none !important;
              box-shadow: none !important;
        }
        h1{
            @media screen and (max-width: 350px){
                font-size: 30px;
            }
        }
        .card-body{
             overflow-x: hidden;
             overflow-y: auto;
             height: 90px;
        }
</style>