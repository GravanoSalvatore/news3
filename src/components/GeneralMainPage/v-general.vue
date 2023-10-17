<template lang="">
  <div>
      <!-- <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light">Business News</h1>
          <hr/>
        </div>
      </div>
    </section>
   -->
  
  
  
    <div class="album py-5 bg-light">
      <div class="container">
  
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
          <div class="col" 
          v-for="item in paginatedArticles"
          :key="item"
          >
            <div class="card shadow-sm" >
              <img class="bd-placeholder-img card-img-top" 
              v-if="item.urlToImage"
              :src='item.urlToImage'
              width="320"
               height="180" >
               
               <img v-else src="../../assets/news.jpeg" class="bd-placeholder-img card-img-top" >
  
              <div class="card-body">
                <p class="card-text"><a :href="item.url" target="_blank">{{item.title}}</a></p>
                <u class="text-success"> {{item.source.name}}</u><br/>
                  <u><strong style="font-family:gotic">author({{item.author}})</strong></u><br/>
                  <u> {{item.publishedAt}}</u>
                <div class="d-flex justify-content-between align-items-center">
                  
                 
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  
  
  
  
    <div class="pagination">
              <span class="prev-bt" @click="prevPage" :disabled="currentPage === 1">Previous</span>
              <span class="page-numbers">{{ currentPage }} / {{ totalPages }}</span>
              <span class="next-bt" @click="nextPage" :disabled="currentPage === totalPages">Next</span>
            </div>
 
 
 
            <br/><br/>
  </div>
</template>
<script>
export default {
  data() {
      return {
        articles: [],       
        currentPage: 1,    
        totalPages: 1,     
        rows: 20,          
      };
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
      // const apiKey = '1fb27fc9978d48ecadb4bdc77705325e';
        const pageSize = 100;
        
        try {
          const response = await fetch(
            ` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&Page=1&&pageSize=${pageSize}`
           // `https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${apiKey}&pageSize=${pageSize}`
          );
          const data = await response.json();
          return data.items;
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
u{
text-decoration: none;
}
.pagination{
  margin-left: 80px;
  @media screen and (max-width: 280px){
    margin-left: 30px;
  }
}
  .page-numbers{
    margin-top: 20px;
  }
  a{
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
    a:hover{
      text-decoration: underline;
    } 
    .next-bt,.prev-bt{
            margin: 13px;
            // background-color:white;
            // color: rgb(248, 2, 2);
            box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
            border-radius: 2px;
            padding: 7px;
            font-weight: bold;
            
          }
          .next-bt:hover{
            
            color: rgb(1, 101, 31);
             } 
             .prev-bt:hover{
              color: red;

             }
          .card{
              border: none !important;
              box-shadow: none !important;
          }
          .album{
              background-color: transparent !important;
          }
  </style>