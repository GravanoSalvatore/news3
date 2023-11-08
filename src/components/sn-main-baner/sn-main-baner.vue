<template lang="">
    <div>
        <section class="intro-news-area section-padding-100-0 mb-70">
        <div class="container">
            <div class="row justify-content-center">
                <!-- Intro News Tabs Area -->
                <div class="col-12 col-lg-8">
                    <div class="intro-news-tab">

                        <!-- Intro News Filter -->
                        <div class="intro-news-filter d-flex justify-content-between" style="background-color:black">
                           
                            <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist"  style="background-color:white">
                                    <a class="nav-item nav-link fw-bold active" id="nav1"  data-toggle="tab" href="#nav-1" role="tab" aria-controls="nav-1" aria-selected="true" style="color:gold;background-color:black">Health</a>
                                    <router-link to="/Business" class="nav-item nav-link fw-bold" id="nav2" data-toggle="tab" href="#nav-2" role="tab" aria-controls="nav-2" aria-selected="false">Business</router-link>
                                     <router-link to="/Tech" class="nav-item nav-link fw-bold" id="nav3" data-toggle="tab" href="#nav-3" role="tab" aria-controls="nav-3" aria-selected="false">Technology</router-link>
                                     <router-link to="/Crypto" class="nav-item nav-link fw-bold" id="nav4" data-toggle="tab" href="#nav-4" role="tab" aria-controls="nav-4" aria-selected="false">Cryptocurrency</router-link>
                                     <router-link to="/Sport" class="nav-item nav-link fw-bold" id="nav5" data-toggle="tab" href="#nav-5" role="tab" aria-controls="nav-5" aria-selected="false">Sport</router-link>
                                     <router-link to="/Science" class="nav-item nav-link fw-bold" id="nav6" data-toggle="tab" href="#nav-6" role="tab" aria-controls="nav-6" aria-selected="false">Science</router-link>
                                     <router-link to="/Entertainment" class="nav-item nav-link fw-bold" id="nav7" data-toggle="tab" href="#nav-7" role="tab" aria-controls="nav-7" aria-selected="false">Entertainment</router-link>
                                     <!-- <router-link to="/Health" class="nav-item nav-link fw-bold" id="nav8" data-toggle="tab" href="#nav-8" role="tab" aria-controls="nav-8" aria-selected="false">Health</router-link> -->
                                   
                                </div>
                            </nav>
                        </div>

<br/>
                        
                        <div class="tab-content mt-4" id="nav-tabContent">






                          




                          <div class="tab-panel fade show " id="nav-1" role="tabpanel" aria-labelledby="nav1">
                                
                             
                                <div class="row">
                                    
                                 
                                  <div class="col-12 col-sm-6"
                                    
                                    v-for="item in articles"
                                    :key="item"
                                    >
                                        <div class="single-blog-post style-2 mb-5">
                                          


                                            <div class="blog-thumbnail">
                                                <a href="#"><img v-if="item.urlToImage" :src="item.urlToImage" alt="">
                                    <img v-else src="https://www.indiablooms.com/life_pic/2016/news-1471859267.jpg" alt="">
                                </a>
                                            </div>

                                           
                                            <div class="blog-content">
                                                <span class="post-date"></span>
                                                <a :href="item.url" class="post-title fw-bold" target="_blank" >{{item.title}}</a>
                                               
                                               <span class="post-date"> <a href="#" class="post-author"><span class="post-date"> 
                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
 <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
 <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>  
                             
                             <u> {{ formatDateTime(item.publishedAt) }}</u></span> </a></span><br/>
                           
                             <a v-if="item.author" href="#" style="color:black" class="post-author">
                              
                              
                              
                              
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
                              
                              
                              
                              
                              
                              :{{item.author}}</a>
                                                <a v-else href="#" style="color:black"  class="post-author">author:Mr X</a>
                                            </div>
                                        </div>
                                    </div>

                           <div class="col-12 col-sm-6"
                                  v-for="item in articlesMin"
                                    >
                                        <div class="single-blog-post d-flex style-4 mb-30">
                                           
                                            <div class="blog-thumbnail">
                                                <a href="#"><img v-if="item.urlToImage" :src="item.urlToImage" alt="">
                                    <img v-else src="https://www.indiablooms.com/life_pic/2016/news-1471859267.jpg" alt="">
                                </a>
                                            </div>

                                            
                                            <div class="blog-content">
                                              <a :href="item.url" style="font-size:12px" class="post-title fw-bold" target="_blank" >{{item.title}}</a>
                                               
                                                <span class="post-date"> <a href="#" class="post-author"><span class="post-date"> 
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>  
                              
                              <u  style="color:black;font-size:11px"> {{ formatDateTime(item.publishedAt) }}</u></span> </a></span><br/>
                            
                              <a v-if="item.author" href="#" style="color:black;font-size:11px" class="post-author"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>:{{item.author}}</a>
                                                 <a v-else href="#" style="color:black;font-size:11px"  class="post-author">author:Mr X</a>
                                                 
                                            </div>
                                        </div>
                                    </div>

                                 
                                  </div>
                              </div>
  
                             
              
                            </div>

</div>
</div>



 
 


















               
                <div class="col-12 col-sm-9 col-md-6 col-lg-4" style="color:black">
                      <div class="sidebar-area"
                        v-for="item in articles2"
                    :key="item">
                 
                        
                         
  
                          
                          <div class="single-widget-area add-widget " >
                            <br/>
                            <h5 class="text-center" style=""><a  class="fw-bold" style="color:red;font-size:30px" :href="item.url" target="_blank">{{item.title}}</a></h5>
                            <div class="single-widget-area newsletter-widget mb-10" >
                              <!-- <h5 style="color:black"  class="fw-bold">{{item.description}}</h5> -->
                            <a href="#"><img v-if="item.urlToImage" :src="item.urlToImage" alt="">
                                      <img v-else src="https://www.indiablooms.com/life_pic/2016/news-1471859267.jpg" alt="">
                                  </a>
                            <p style="color:white" class="mt-3 fw-bold">{{item.content}}.</p>
                            <a  v-if="item.author" href="#" class="post-author">author:{{item.author}}</a>
                                                 <a  v-else href="#" class="post-author">author:Mr X</a>
                            <p  ><span class="post-date"> 
                              
                              
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>  
                              
                              
                              <u> {{ formatDateTime(item.publishedAt) }}</u></span> </p>
                        </div>

                            </div>
                          </div>     </div>
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
     
      articlesMin: [],
      articles2: [],
     
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
      
    //   const apiKey = "1fb27fc9978d48ecadb4bdc77705325e";
      const pageSize = 6;

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
    async getDataMin() {
      
      //   const apiKey = "1fb27fc9978d48ecadb4bdc77705325e";
        const pageSize = 44;
  
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
      async fetchNewsMin() {
        const articles = await this.getDataMin();
        this.articlesMin = articles;
        this.totalPages = Math.ceil(articles.length / this.rows);
      },
  
   async getData2() {
      
      //   const apiKey = "1fb27fc9978d48ecadb4bdc77705325e";
        const pageSize = 7;
  
        try {
          const response = await fetch(
              `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=10&Language=14&Page=1&PageSize=${pageSize}`
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
  


   
  

    















    
    
  },
  mounted() {
    this.fetchNews();
   
    this.fetchNews2();
    this.fetchNewsMin();
   


  },
};
</script>
    <style lang="scss" scoped>
    u{
      text-decoration: none;
    }
.intro-news-filter{
  // position: fixed;
  // // z-index: 300;
  //  top:125px;
   
}
</style>