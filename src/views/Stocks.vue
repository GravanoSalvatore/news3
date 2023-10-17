<template lang="">
  <div>
    

    <main class="my-5">
  <div class="container">
    <section>
      <div class="row gx-lg-5" 
      
      >
      
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0"
        
        v-for="item in articles"
      :key="item">
         
          <div>
            
            <div class="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4" data-mdb-ripple-color="light"
         
            >
              <img v-if="item.urlToImage" :src="item.urlToImage" class="img-fluid" />
              <img v-else src="../assets/news.jpeg" class="img-fluid" />
              
              <a href="#!">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
              </a>
            </div>

            
            <div class="row mb-3">
              <div class="col-6">
                <!-- <a href="" class="text-info"> -->
                  <!-- <i class="fas fa-plane"></i>
                 General -->
                
                <!-- </a> -->
              </div>

              <!-- <div class="col-6 text-end">
                <u> {{item.publishedAt}}</u>
              </div> -->
            </div>
            
            <a href="" class="text-dark">
              <h5><strong><a :href="item.url" target="_blanck">{{item.title}}</a></strong></h5>

             
              <p>{{item.content}}</p>
            </a>
                   
                   <u class="text-success"> {{item.source.name}}</u><br/>
                    <u><strong style="font-family:gotic">author({{item.author}})</strong></u><br/>
                    <u> {{item.publishedAt}}</u>
            <hr />

          </div>
         
        </div>
</div>
    </section>
   
    <h4 class="mb-5"><strong>Entertainment</strong></h4>
  </div>
</main>

<main class="my-5">
    <div class="container">
     
      <!-- <h4 class="mb-5"><strong>Latest posts</strong></h4> -->
      <section class="text-center"
     
      >
       

        <div class="row"
       
        >
          <div class="col-lg-6 mb-4"  v-for="item in articles"
      :key="item">
            <div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img v-if="item.urlToImage" :src="item.urlToImage"  class="img-fluid img" />

                <img v-else src="../assets/news.jpeg"  class="img-fluid img" />
                <a href="#!">
                  <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title"><strong><a :href="item.url" target="_blanck">{{item.title}}</a></strong></h5>
                <p class="card-text">
                  <u class="text-success"> {{item.source.name}}</u><br/>
                    <u><strong style="font-family:gotic">author({{item.author}})</strong></u><br/>
                    <u> {{item.publishedAt}}</u>
                </p>
               
              </div>
            </div>
          </div>

        
        </div>

       
      </section>
      <h4 class="mb-5"><strong>Sport</strong></h4>
    </div>
   
  </main>
 

<hr/>
  <!-- <ai/> -->
  
 
 

    
  </div>
</template>
<script>
import ai from "./Ai.vue";
export default {
  components: {
    ai,
  },
  data() {
    return {
      articles: [],
      currentPage: 1,
      totalPages: 1,
      rows: 6,
    };
  },
  computed: {
    // paginatedArticles() {
    //   const start = (this.currentPage - 1) * this.rows;
    //   const end = start + this.rows;
    //   return this.articles.slice(start, end);
    // },
  },
  methods: {
    async getData() {
      //const apiKey = 'd205e0353aed4e42b97d11c1a88207f0'
      // const apiKey = '1fb27fc9978d48ecadb4bdc77705325e'
      const pageSize = 6;

      try {
        const response = await fetch(
          ` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&Page=1&&pageSize=${pageSize}`
          //`https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${apiKey}&pageSize=${pageSize}`
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
      // this.totalPages = Math.ceil(articles.length / this.rows);
    },
    // nextPage() {
    //
    //   if (this.currentPage < this.totalPages) {
    //     this.currentPage++;
    //   }
    // },
    // prevPage() {
    //
    //   if (this.currentPage > 1) {
    //     this.currentPage--;
    //   }
    // },
  },
  mounted() {
    this.fetchNews();
  },
};
</script>
<style lang="scss" scoped>
a {
  color: black;
}
a:hover {
  text-decoration: underline;
}
u,
a {
  text-decoration: none;
}
.card {
  border: none !important;
  box-shadow: none !important;
}

.album {
  background-color: transparent !important;
}

.img {
  max-height: 300px;
}
a {
  text-decoration: none;
}

#intro {
  /* Margin to fix overlapping fixed navbar */
  margin-top: 58px;
}

@media (max-width: 991px) {
  #intro {
    /* Margin to fix overlapping fixed navbar */
    margin-top: 45px;
  }
}
</style>