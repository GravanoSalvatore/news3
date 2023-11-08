<template lang="">
    <div class="single-widget-area news-widget mb-3"
    v-for="(item,index) in paginatedArticles.slice(14)"
                    :key="item">
                          
                             
  
                            
                              <div class="single-blog-post d-flex style-4 mb-3">
                                  
                                  <div class="blog-thumbnail">
                                    <a href="#"><img v-if="item.imageurl" :src="item.imageurl" alt="">
                                      <img v-else src="https://ueh.edu.vn/images/upload/editer/H%E1%BB%99i%20th%E1%BA%A3o%20Khoa%20h%E1%BB%8Dc%20Qu%E1%BB%91c%20t%E1%BA%BF%20Resilience%20by%20Technology%20and%20Design%202022%20(2).jpg" alt="">
                                  </a>
                                  </div>
  
                                  
                                  <div class="blog-content" style="">
                                   
                                      <a  :href="item.url" target="_blank" class="post-title cont fw-bold" style="">{{item.title}}</a>
                                     
                                 
                                      <p><img style="width:50px" :src="item.source_info.img"/>{{item.source_info.name}}</p>  
                                            
                                            <p style="font-size:10px">{{item.categories}}</p>
                                              
                                 
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
               rows:30,
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
             
               const pageSize = 30;
               
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