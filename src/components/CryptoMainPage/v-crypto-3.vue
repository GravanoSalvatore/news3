<template lang="">
  <div>
    <baner/>
  
    
   <section class="intro-news-area section-padding-10-0 mb-70">
          <div class="container">
              <div class="row justify-content-center">
                 
                  <div class="col-12 col-lg-8">
                      <div class="intro-news-tab">
  
                         
                        <div class="intro-news-filter d-flex justify-content-between" style="background-image:linear-gradient(#dcd50d, #f10505)">
                              <h6 class="fw-bold"  style="color:white;background-color:linear-gradient(#dcd50d, #f10505)">Crypto news</h6>
                              <nav>
                                  <div class="nav nav-tabs" id="nav-tab" role="tablist"  style="background-color:white">
                                      <a class="nav-item nav-link active fw-bold" id="nav1" data-toggle="tab" href="#nav-1" role="tab" aria-controls="nav-1" aria-selected="true">NEWS</a>
                                      <a class="nav-item nav-link fw-bold" id="nav2" data-toggle="tab" href="#nav-2" role="tab" aria-controls="nav-2" aria-selected="false">DEFI&NFT</a>
                                      <a class="nav-item nav-link fw-bold" id="nav3" data-toggle="tab" href="#nav-3" role="tab" aria-controls="nav-3" aria-selected="false">CRYPTO PEOPLE</a>
                                      <router-link to="/Top" class="nav-item nav-link fw-bold" id="nav4" data-toggle="tab" href="#nav-4" role="tab" aria-controls="nav-4" aria-selected="false">TOP</router-link>
                                    
                                    </div>
                              </nav>
                          </div>
  
                          
                          
   <div class="tab-content" id="nav-tabContent">
                            
                            
                              <div class="tab-pane fade show active" id="nav1" role="tabpanel" aria-labelledby="nav1">
                                
                                     
                                <div class="row">
                                    
            <!-- <comp1/> -->
            
            <comp2/>
                                       
                                 </div>
                             
                             
                             
                             
                             
                             
                                </div>
                              </div>
                      </div>
                  </div>
  
  
  
  
                  <div class="col-12 col-sm-9 col-md-6 col-lg-4" >
                      <div class="sidebar-area"
                        v-for="(item,index) in paginatedArticles.slice(13)"
                    :key="index">
                 
                        
                         
  
                          
                          <div class="single-widget-area add-widget " >
                            <br/>
                            <h5 class="text-center" ><a style="font-size:30px" class="fw-bold" :href="item.url" target="_blank">{{item.title}}</a></h5>
                            <p><img style="width:50px" :src="item.source_info.img"/>{{item.source_info.name}}</p>  
                                            
                                            <p style="font-size:10px">{{item.categories}}</p>
                                              

                            </div>
                            















                           <comp4/>




                      </div>
                  </div>
              </div>
          </div>
      </section>
     
      
    
  
  
  
  
  </div>
  
     </template> 
      <script>
  import baner from './v-main-baner.vue'
  import comp1 from './v-comp-1.vue'
  import comp2 from './v-comp-2.vue'
  import comp4 from './v-comp-4.vue'
  export default {
    components: {baner,comp1,comp2,comp4
     
      
    },
    data() {
      return {
        articles: [],
        currentPage: 1,  
               totalPages: 1,  
        rows:14,
        
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
               
       
             
               const pageSize = 14;
               
               try {
                 const response = await fetch(
                  // 'https://min-api.cryptocompare.com/data/v2/news/?categories=BTC,ETH&excludeCategories=Sponsored'
                  'https://min-api.cryptocompare.com/data/v2/news/?categories=Technology,Blockchain&excludeCategories=Defi,Nft&limit=1'

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


          formatDateTime(dateTime) {
          const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          }
          return new Date(dateTime).toLocaleString(undefined, options); },
          
          
          
          
  
  
  
  
  
  
  
        },
        mounted() {
          this.fetchNews();
          
         
      
      
        },
  };
  </script>
      <style lang="scss" scoped>
      .cont{
        overflow-x:hidden;
              overflow-y:auto;
              height: 50px;
             
      }
  
  </style>