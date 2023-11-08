<template lang="">
  
      <!-- ##### Add Area Start ##### -->
        <div class="big-add-area">
            <div class="container-fluid">
                <a href="#"><img src="/src/img/bg-img/add4.png" alt=""></a>
            </div>
        </div>
        <!-- ##### Add Area End ##### -->
    
        <!-- ##### News Area Start ##### -->
        <div class="news-area section-padding-100-70">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-8 col-lg-9"  
                    
                    v-for="(item,index) in  paginatedArticles.slice(30)"
                    :key="index"
                    
                    >
    
                        <!-- Single News Area -->
                        <div class="single-blog-post d-flex flex-wrap style-5 mb-30">
                            <!-- Blog Thumbnail -->
                            <div class="blog-thumbnail">
                              <a href="#"><img v-if="item.imageurl" :src="item.imageurl" alt="">
                                          <img v-else src="https://pressclubswfl.org/wp-content/uploads/2023/08/News.jpg" alt="">
                                      </a>
                            </div>
    
                            <!-- Blog Content -->
                            <div class="blog-content ">
                             <div class="body">
                                <a :href="item.url" class="post-title fw-bold" target="_blank">{{item.title}}</a>
                              <p class="fw-bold" style="font-size:18px"> {{item.body}}</p>
                             
                             </div>
                             
                              <p><img style="width:50px" :src="item.source_info.img"/>{{item.source_info.name}}</p>  
                                            
                          <p style="font-size:10px">{{item.categories}}</p>
                            
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
         
          currentPage: 1,  
               totalPages: 1,  
          articles: [],
          
       
          rows:33,
          
        };
      },
      computed: {
        
             paginatedArticles() {
               
               const start = (this.currentPage - 1) * this.rows;
               const end = start + this.rows;
               return this.articles.slice(start, end);
             },
             paginatedArticles2() {
               
               const start = (this.currentPage2 - 1) * this.rows2;
               const end = start + this.rows2;
               return this.articles2.slice(start, end);
             },
        
      },
      methods: {
          
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
   
            async getData() {
              
             
              const pageSize = 33;
        
              try {
                const response = await fetch(
                  'https://min-api.cryptocompare.com/data/v2/news/?categories=Technology,Blockchain&excludeCategories=Defi,Nft'
                );
                const data = await response.json();
                return data.Data;
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
    .body{
    overflow-x: hidden;
    overflow-y: auto;
     height: 300px;
  }
    </style>