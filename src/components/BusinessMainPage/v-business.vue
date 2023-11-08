<template lang="">
  <div>
   
  
 
      <div class="big-add-area">
          <div class="container-fluid">
              <a href="#"><img src="/src/img/bg-img/add4.png" alt=""></a>
          </div>
      </div>
      
  
     
      <div class="news-area section-padding-100-70">
          <div class="container">
              <div class="row">
                  <div class="col-12 col-md-8 col-lg-9"  
                  
                  v-for="(item,index) in articles5.slice(47)"
                  :key="index"
                  
                  >
  
                     
                      <div class="single-blog-post d-flex flex-wrap style-5 mb-30">
                         
                          <div class="blog-thumbnail">
                            <a href="#"><img v-if="item.urlToImage" :src="item.urlToImage" alt="">
                                        <img v-else src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpR8e8gMDjDfsHIpq_6bnRx2T4AoWtK_wYYA&usqp=CAU" alt="">
                                    </a>
                          </div>
  
                        
                          <div class="blog-content">
                            <span class="post-date"> <a href="#" class="post-author"><span class="post-date"> 
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>  
                              
                              <u> {{ formatDateTime(item.publishedAt) }}</u></span> </a></span>
                              <a :href="item.url" class="post-title fw-bold" target="_blank">{{item.title}}</a>
                              <a v-if="item.author" href="#" class="post-author">author:{{item.author}}</a>
                                                 <a v-else href="#" class="post-author">author:Mr X</a>
                              <p  class="fw-bold">{{item.content}}</p>
                          </div>
                      </div>
  
                      
  
                     
  
                  </div>
  
                  <div class="col-12 col-md-4 col-lg-3"
                   
                  v-for="(item,index) in articles6.slice(48)"
                  :key="index"
                  >
  
                                     
  
                      <!-- Single News Area -->
                      <div class="single-blog-post style-6 mb-30">
                          <!-- Blog Thumbnail -->
                          <div class="blog-thumbnail">
                            <a href="#"><img v-if="item.urlToImage" :src="item.urlToImage" alt="">
                                        <img v-else src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpR8e8gMDjDfsHIpq_6bnRx2T4AoWtK_wYYA&usqp=CAU" alt="">
                                    </a>
                              <!-- <a href="#" class="video-btn"><i class="fa fa-play" aria-hidden="true"></i></a> -->
                          </div>
  
                          <!-- Blog Content -->
                          <div class="blog-content">
                            <span class="post-date"> <a href="#" class="post-author"><span class="post-date"> 
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>  
                              
                              <u> {{ formatDateTime(item.publishedAt) }}</u></span> </a></span>
                              <a :href="item.url" class="post-title fw-bold" target="_blank" >{{item.title}}</a>
                              <a v-if="item.author" href="#" class="post-author">author:{{item.author}}</a>
                                                 <a v-else href="#" class="post-author">author:Mr X</a>
                          </div>
                      </div>
                      
                  </div>
              </div>
          </div>
      </div>
      <!-- ##### News Area End ##### -->
  
      
  
  </div>
  
     </template> 
      <script>
  
  
  export default {
    components: {
     
      
    },
    data() {
      return {
        
        articles5: [],
        articles6: [],
        
        rows:2,
        
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
          
        
    
         async getData5() {
            
           
            const pageSize = 48;
      
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
      
          async fetchNews5() {
            const articles = await this.getData5();
            this.articles5 = articles;
            this.totalPages = Math.ceil(articles.length / this.rows);
          },
          
          async getData6() {
            
           
            const pageSize = 49;
      
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
          async fetchNews6() {
            const articles = await this.getData6();
            this.articles6 = articles;
            this.totalPages = Math.ceil(articles.length / this.rows);
          },
    
        },
         
        mounted() {
         
          this.fetchNews5();
          this.fetchNews6();
          
         
      
      
        },
  };
  </script>
      <style lang="scss" scoped>
  
  </style>