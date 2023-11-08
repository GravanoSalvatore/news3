<template lang="">
  <div></div>
   
   
  
  
  
  
  
  
  
  
  
  
  <!-- /src/img/bg-img/10.jpg -->
  
 
      <!-- ##### Video Area Start ##### -->
      <section class="video-area bg-img bg-overlay bg-fixed" style="background-image: url(' https://cdn.pixabay.com/photo/2023/03/22/03/51/cosmos-7868601_1280.jpg');">
          <div class="container">
              <div class="row">
                  <!-- Featured Video Area -->
                 <div class="col-12">
                      <div class="featured-video-area d-flex align-items-center justify-content-center">
                          <div class="video-content text-center">
                              <!-- <a href="#" class="video-btn"><i class="fa fa-play" aria-hidden="true"></i></a> -->
                              <!-- <span class="published-date">June 20, 2018</span>
                              <h3 class="video-title">Traffic Problems in Time Square</h3> -->
                          </div>
                      </div>
                  </div> 
              </div>
          </div>
        </section>
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
        
        const apiKey = "1fb27fc9978d48ecadb4bdc77705325e";
        const pageSize = 9;
  
        try {
          const response = await fetch(
            `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=3&CategoryId=3&Language=14&Page=1&PageSize=${pageSize}`
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