<template lang="">
    
        <div class="col-12 col-sm-6" 
                                      v-for="item in paginatedArticles2"
                                      >
                                          <div class="single-blog-post style-2 mb-5">
                                             
                                              <div class="blog-thumbnail">
                                                 <a href="#"><img v-if="item.imageurl" :src="item.imageurl" alt="">
                                      <img v-else src="https://pressclubswfl.org/wp-content/uploads/2023/08/News.jpg" alt="">
                                  </a>
                                  <div class="blog-content">
                                                <a href="#" class="post-author"><span class="post-date"> 
                                                  
                                                 
                                                 </span> </a>
                                                  <a  :href="item.url" target="_blank" class="post-title fw-bold">{{item.title}}</a>
                                                
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
               rows: 12,
        }
    },
    computed: {
             paginatedArticles2() {
               
               const start = (this.currentPage - 1) * this.rows;
               const end = start + this.rows;
               return this.articles.slice(start, end);
             },
           },
           methods: {
            
             async getData() {
               
               // const apiKey = 'd205e0353aed4e42b97d11c1a88207f0'
             
               const pageSize = 48;
               
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