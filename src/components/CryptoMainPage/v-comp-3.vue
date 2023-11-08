<template lang="">
   
        <div class="col-12 col-sm-9 col-md-6 col-lg-4">
                      <div class="sidebar-area"
                        v-for="item in paginatedArticles"
                    :key="item">
                 
                        
                          <!-- <div class="single-widget-area newsletter-widget mb-3" style="background-color:black;color:white;">
                           
                          </div> -->
  
                          
                          <div class="single-widget-area add-widget " >
                            <br/>
                            <h5 class="text-center" style="background-color:black;color:white;"><a  class="fw-bold" :href="item.url" target="_blank">{{item.title}}</a></h5>
                            <div class="single-widget-area newsletter-widget mb-10" style="background-color:black;color:white">
                            
                            <a href="#"><img v-if="item.imageurl" :src="item.imageurl" alt="">
                                      <img v-else src="https://pressclubswfl.org/wp-content/uploads/2023/08/News.jpg" alt="">
                                  </a>
                            
                                             
                           
                        </div>

                            </div>
                        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            articles: [],       
               currentPage: 1,  
               totalPages: 1,     
               rows: 8,
        }
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
             
               const pageSize = 1;
               
               try {
                 const response = await fetch(
                  // 'https://min-api.cryptocompare.com/data/v2/news/?categories=BTC,ETH&excludeCategories=Sponsored'
                  'https://min-api.cryptocompare.com/data/v2/news/?categories=Technology,Blockchain&excludeCategories=Defi,Nft'
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
           },



     
}
</script>
<style lang="">
    
</style>