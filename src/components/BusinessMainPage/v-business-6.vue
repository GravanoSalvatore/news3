<template lang="">
  <!-- ##### Top News Area Start ##### -->
     <div class="top-news-area section-padding-100">
         <div class="container">
             <div class="row">
 
                 
                 <!-- Single News Area -->
                 <div class="col-12 col-sm-6 col-lg-4"
                 v-for="(item,index) in articles.slice(49)"
                 :key="index"
                 
                 >
                     <div class="single-blog-post style-2 mb-5">
                         <!-- Blog Thumbnail -->
                         <div class="blog-thumbnail">
                             <a href="#"><img v-if="item.urlToImage" :src="item.urlToImage" alt="">
                                 <img v-else src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpR8e8gMDjDfsHIpq_6bnRx2T4AoWtK_wYYA&usqp=CAU" alt="">
                             </a>
                        
                             
                        
                        
                         </div>
 
                         <!-- Blog Content -->
                         <div class="blog-content">
                          
                           <a :href="item.url" class="post-title fw-bold" target="_blank" >{{item.title}}</a>
                                            
                                            <span class="post-date"> <a href="#" class="post-author"><span class="post-date"> 
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
<path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
<path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>  
                          
                          <u> {{ formatDateTime(item.publishedAt) }}</u></span> </a></span><br/>
                        
                          <a v-if="item.author" href="#" style="color:black" class="post-author">author:{{item.author}}</a>
                                             <a v-else href="#" style="color:black"  class="post-author">author:Mr X</a>
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
   components: {
    
   },
   data() {
     return {
       articles: [],
       articles2: [],
       articles3: [],
       articles4: [],
       articles5: [],
       articles6: [],
       articlesMin: [],
       articlesMin2: [],
       articlesMin3: [],
       articlesMin4: [],
       articlesMin5: [],
       articlesMin6: [],
       // currentPage: 1,
       // totalPages: 1,
       rows: 2,
     };
   },
   computed: {
     
   },
   methods: {
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
     
     
     
     async getData() {
       
      
       const pageSize = 76;
 
       try {
         const response = await fetch(
          `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=3&Language=14&Page=1&PageSize=${pageSize}`
         );
         const data = await response.json();
         return data.items;
       } catch (error) {
         console.error("Error fetching news:", error);
         return [];
       }
     },
     async fetchNews() {
       const articles = await this.getData();
       this.articles = articles;
       this.totalPages = Math.ceil(articles.length / this.rows);
     },
 
 
 
 
 
 
 
     
 
 
 
 
 
 
 
 
 
 
 
 
     
     
   },
   mounted() {
     this.fetchNews();
    
 
 
   },
 };
 </script>
     <style lang="scss" scoped>
 
 </style>