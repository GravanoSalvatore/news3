<template lang="">
  <div>
   <div class="catagory-featured-post bg-overlay clearfix" style="background-image: url('https://www.globalfocusmagazine.com/wp-content/uploads/2020/02/Engaging_with_technology-scaled.jpg')">
        <div class="container-fluid h-100"
        
        >
              <div class="row h-100 align-items-center">
                  <div class="col-12 col-lg-9"
                  v-for="item in articles"
                  :key="index"
                  >
                     
                      <div class="post-content">
                          <p class="tag " style=" background-image:linear-gradient(#49636b, #577faa);color:cyan"><span >Technology</span></p>
                          <a :href="item.url" target="_blank"  style="font-size:30px" class="post-title  fw-bold">{{item.title}}</a>
                           <!-- <p  class="fw-bold" style="color:black">{{item.content}}</p> -->

                         
                          <span class="post-date"> <a href="#" class="post-author"><span class="post-date">  
                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>  

                            
                            
                            
                            
                            
                            
                            
                            
                            <u> {{ formatDateTime(item.publishedAt) }}</u></span> </a></span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    
   <section class="intro-news-area section-padding-10-0 mb-70">
          <div class="container">
              <div class="row justify-content-center">
                 
                  <div class="col-12 col-lg-8">
                      <div class="intro-news-tab">
  
                         
                          <div class="intro-news-filter d-flex justify-content-between" style=" background-image:linear-gradient(#49636b, #577faa)">
                              <h6 class="fw-bold"  style="color:cyan">Technology news</h6>
                              <nav>
                                  <div class="nav nav-tabs" id="nav-tab" role="tablist"  style="background-color:white">
                                      <a class="nav-item nav-link active fw-bold" id="nav1" data-toggle="tab" href="#nav-1" role="tab" aria-controls="nav-1" aria-selected="true">NEWS</a>
                                      <a class="nav-item nav-link fw-bold" id="nav2" data-toggle="tab" href="#nav-2" role="tab" aria-controls="nav-2" aria-selected="false">AI</a>
                                      <a class="nav-item nav-link fw-bold" id="nav3" data-toggle="tab" href="#nav-3" role="tab" aria-controls="nav-3" aria-selected="false">GPTCHAT</a>
                                      <a class="nav-item nav-link fw-bold" id="nav4" data-toggle="tab" href="#nav-4" role="tab" aria-controls="nav-4" aria-selected="false">CYBERSPORT</a>
                                    
                                    </div>
                              </nav>
                          </div>
  
                          
                          
   <div class="tab-content" id="nav-tabContent">
                            
                            
                              <div class="tab-pane fade show active" id="nav1" role="tabpanel" aria-labelledby="nav1">
                                
                                     
                                <div class="row">
                                    
                              <div class="col-12" 
                                      v-for="(item,index) in articles5.slice(1)"
                                      >
                                          <div class="single-blog-post style-2 mb-5">
                                             
                                              <div class="blog-thumbnail">
                                                 <a href="#"><img v-if="item.urlToImage" :src="item.urlToImage" alt="">
                                      <img v-else src="https://ueh.edu.vn/images/upload/editer/H%E1%BB%99i%20th%E1%BA%A3o%20Khoa%20h%E1%BB%8Dc%20Qu%E1%BB%91c%20t%E1%BA%BF%20Resilience%20by%20Technology%20and%20Design%202022%20(2).jpg" alt="">
                                  </a>
                                              </div>
  
                                             
                                              <div class="blog-content">
                                                <a href="#" class="post-author"><span class="post-date"> 
                                                  
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>
                                                  <u> {{ formatDateTime(item.publishedAt) }}</u></span> </a>
                                                  <a  :href="item.url" target="_blank" class="post-title fw-bold">{{item.title}}</a>
                                                 <a v-if="item.author" href="#" class="post-author">author:{{item.author}}</a>
                                                 <a v-else href="#" class="post-author">author:Mr X</a>
                                                 <p  class="fw-bold" style="color:black">{{item.content}} </p>
                                              </div>
                                          </div>
                                        </div>
                                        
                                        <div class="col-12 col-sm-6"
                                      v-for="(item,index) in articles2.slice(3)"
                                      :key="index"
                                      >
                                          <div class="single-blog-post style-2 mb-5">
                                            
                                              <div class="blog-thumbnail">
                                                <a href="#"><img v-if="item.urlToImage" :src="item.urlToImage" alt="">
                                      <img v-else src="https://ueh.edu.vn/images/upload/editer/H%E1%BB%99i%20th%E1%BA%A3o%20Khoa%20h%E1%BB%8Dc%20Qu%E1%BB%91c%20t%E1%BA%BF%20Resilience%20by%20Technology%20and%20Design%202022%20(2).jpg" alt="">
                                  </a>
                                              </div>
  
                                             
                                              <div class="blog-content">
                                                <a href="#" class="post-author"><span class="post-date">  
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>  
                                                  <u> {{ formatDateTime(item.publishedAt) }}</u></span> </a>
                                                  <a  :href="item.url" target="_blank" class="post-title fw-bold">{{item.title}}</a>
                                                  <a v-if="item.author" href="#" class="post-author">author:{{item.author}}</a>
                                                 <a v-else href="#" class="post-author">author:Mr X</a>
                                              </div>
                                          </div>
                                      </div>
                                 </div>
                              </div>
    </div>
                      </div>
                  </div>
   <div class="col-12 col-sm-9 col-md-6 col-lg-4" style="background-color:grey;color:white">
                      <div class="sidebar-area"
                        v-for="(item,index) in articles3.slice(18)"
                    :key="index">
                 
                        
                          <!-- <div class="single-widget-area newsletter-widget mb-3" style="background-color:black;color:white;">
                           
                          </div> -->
  
                          
                          <div class="single-widget-area add-widget " >
                            <br/>
                            <h5 class="text-center" style="background-color:grey;color:cyan;"><a style="color:cyan;font-size:30px" class="fw-bold" :href="item.url" target="_blank">{{item.title}}</a></h5>
                            <div class="single-widget-area newsletter-widget mb-10" style="background-color:grey;color:white">
                              <h5 style="color:white"  class="fw-bold">{{item.description}}</h5>
                            <a href="#"><img v-if="item.urlToImage" :src="item.urlToImage" alt="">
                                      <img v-else src="https://ueh.edu.vn/images/upload/editer/H%E1%BB%99i%20th%E1%BA%A3o%20Khoa%20h%E1%BB%8Dc%20Qu%E1%BB%91c%20t%E1%BA%BF%20Resilience%20by%20Technology%20and%20Design%202022%20(2).jpg" alt="">
                                  </a>
                            <p style="color:white" class="mt-3 fw-bold">{{item.content}}.</p>
                            <a style="color:white" v-if="item.author" href="#" class="post-author">author:{{item.author}}</a>
                                                 <a style="color:white" v-else href="#" class="post-author">author:Mr X</a>
                            <p style="color:white" ><span class="post-date"> 
                              
                              
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>  
                              
                              
                              <u> {{ formatDateTime(item.publishedAt) }}</u></span> </p>
                        </div>

                            </div>
                            
                            <div class="single-widget-area news-widget mb-3"
                          v-for="(item,index) in articles4.slice(19)"
                          :key="index"
                          >
                             
  
                            
                              <div class="single-blog-post d-flex style-4 mb-3">
                                  <!-- Blog Thumbnail -->
                                  <div class="blog-thumbnail">
                                    <a href="#"><img v-if="item.urlToImage" :src="item.urlToImage" alt="">
                                      <img v-else src="https://ueh.edu.vn/images/upload/editer/H%E1%BB%99i%20th%E1%BA%A3o%20Khoa%20h%E1%BB%8Dc%20Qu%E1%BB%91c%20t%E1%BA%BF%20Resilience%20by%20Technology%20and%20Design%202022%20(2).jpg" alt="">
                                  </a>
                                  </div>
  
                                  <!-- Blog Content -->
                                  <div class="blog-content" style="background-color:grey">
                                    <span class="post-date"> <a href="#" class="post-author"><span class="post-date" style="color:white"> 
                                      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>   -->
                             
                                      
                                      <!-- <u> {{ formatDateTime(item.publishedAt) }}</u> -->
                                    </span> </a></span>
                                      <a  :href="item.url" target="_blank" class="post-title cont fw-bold" style="color:white;">{{item.title}}</a>
                                      <!-- <a style="color:white" v-if="item.author" href="#" class="post-author">author:{{item.author}}</a>
                                                 <a style="color:white" v-else href="#" class="post-author">author:Mr </a>
                                 
                                  -->
                                 
                                    </div>
                              </div>
  
                              </div>
  
                      </div>
                  </div>
              </div>
          </div>
      </section>
     
      
    
  
  
  
  
  </div>
  
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
        articles7: [],
        articles8: [],
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
          
          
          
          async getData() {
            
           
            const pageSize = 1;
      
            try {
              const response = await fetch(
                `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=11&Language=14&Page=1&PageSize=${pageSize}`
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
         
         
         
         
         
         
          async getData2() {
            
           
            const pageSize = 19;
      
            try {
              const response = await fetch(
                `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=11&Language=14&Page=1&PageSize=${pageSize}`
              );
              const data = await response.json();
              return data.items;
            } catch (error) {
              console.error("Error fetching news:", error);
              return [];
            }
          },
            async fetchNews2() {
            const articles = await this.getData2();
            this.articles2 = articles;
            this.totalPages = Math.ceil(articles.length / this.rows);
          },
  
  
      
      
      
      
      
      
          
      
      
      
      
        
  
  
  
  
  
  
  
  
  
  
  
          async getData3() {
            
           
            const pageSize = 19;
      
            try {
              const response = await fetch(
                `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=11&Language=14&Page=1&PageSize=${pageSize}`
              );
              const data = await response.json();
              return data.items;
            } catch (error) {
              console.error("Error fetching news:", error);
              return [];
            }
          },
            async fetchNews3() {
            const articles = await this.getData3();
            this.articles3 = articles;
            this.totalPages = Math.ceil(articles.length / this.rows);
          },
      
      
          async getData4() {
            
           
            const pageSize = 59;
      
            try {
              const response = await fetch(
                `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=11&Language=14&Page=1&PageSize=${pageSize}`
              );
              const data = await response.json();
              return data.items;
            } catch (error) {
              console.error("Error fetching news:", error);
              return [];
            }
          },
            async fetchNews4() {
            const articles = await this.getData4();
            this.articles4 = articles;
            this.totalPages = Math.ceil(articles.length / this.rows);
          },
    
          
  
  
  
  
  
  
  
  
  
  
  
      
          async getData5() {
            
           
            const pageSize = 2;
      
            try {
              const response = await fetch(
                `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=11&Language=14&Page=1&PageSize=${pageSize}`
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
            
           
            const pageSize = 4;
      
            try {
              const response = await fetch(
                `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=6&Page=1&PageSize=${pageSize}`
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
      
  
  
  
  
  
  
      
          async getData7() {
            
           
            const pageSize = 1;
      
            try {
              const response = await fetch(
                `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=10&Page=1&PageSize=${pageSize}`
              );
              const data = await response.json();
              return data.items;
            } catch (error) {
              console.error("Error fetching news:", error);
              return [];
            }
          },
          async fetchNews7() {
            const articles = await this.getData7();
            this.articles7 = articles;
            this.totalPages = Math.ceil(articles.length / this.rows);
          },
      
  
          async getData8() {
            
           
            const pageSize = 4;
      
            try {
              const response = await fetch(
                `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=10&Page=1&PageSize=${pageSize}`
              );
              const data = await response.json();
              return data.items;
            } catch (error) {
              console.error("Error fetching news:", error);
              return [];
            }
          },
          async fetchNews8() {
            const articles = await this.getData8();
            this.articles8 = articles;
            this.totalPages = Math.ceil(articles.length / this.rows);
          },
      
      
  
  
  
        },
         
        mounted() {
          this.fetchNews();
          this.fetchNews2();
          this.fetchNews3();
          this.fetchNews4();
          this.fetchNews5();
          this.fetchNews6();
          this.fetchNews7();
          this.fetchNews8();
         
      
      
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