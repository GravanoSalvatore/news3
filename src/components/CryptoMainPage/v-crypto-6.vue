<template lang="">
    <!-- ##### Top News Area Start ##### -->
       <div class="top-news-area section-padding-100">
           <div class="container">
               <div class="row">
   
                   
                   <!-- Single News Area -->
                   <div class="col-12 col-sm-6 col-lg-4"
                   v-for="item in paginatedArticles2"
                   :key="item"
                   
                   >
                       <div class="single-blog-post style-2 mb-5">
                           <!-- Blog Thumbnail -->
                           <div class="blog-thumbnail">
                               <a href="#"><img v-if="item.imageurl" :src="item.imageurl" alt="">
                                   <img v-else src="https://pressclubswfl.org/wp-content/uploads/2023/08/News.jpg" alt="">
                               </a>
                          
                               
                          
                          
                           </div>
   
                           <!-- Blog Content -->
                           <div class="blog-content">
                            
                             <a  :href="item.url" class="post-title fw-bold" target="_blank" >{{item.title}}</a>
                                             
                             <p><img style="width:50px" :src="item.source_info.img"/>{{item.source_info.name}}</p>  
                                            
                          <p style="font-size:10px">{{item.categories}}</p>
                            
                           </div>
                       </div>
                   </div>
   








                   <div class="col-12">
                       <div class="load-more-button text-center">
                           <a href="#" class="btn newsbox-btn">Load More</a>
                       </div>
                   </div>
   
               </div>
           </div>
       </div>
       <!-- ##### Top News Area End ##### -->
   
      
   
   
   
   
   
   
   
      </template> 
  <script>
  export default {
  data(){
      return{
          articles: [],       
             currentPage: 1,  
             totalPages: 1,     
             rows: 18,
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
                'https://min-api.cryptocompare.com/data/v2/news/?categories=BTC,ETH,regulation&extraParams=YourSite'
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
       
       
       <style lang="scss" scoped>
   
   </style>