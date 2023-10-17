<template lang="">
    <div>
        <main class="my-5">
    <div class="container">
     
      <section class="">
        
        <div class="row">
  
          <div class="col-lg-4 col-md-12 mb-4"   
          v-for="item in paginatedArticles"
          :key="item"
          >
            <div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img  :src="item.urlToImage" class="img-fluid" />
                <!-- <img v-else src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" > -->
                <a href="#!">
                  <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title"><a :href="item.url" target="_blank">{{item.title}}</a></h5>
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
      
     
    </div>
  </main> 
  
     
  
  
    </div>
  </template>
  <script>
  
  export default {
  components:{
  
  },
  data() {
  return {
    articles: [],      
    currentPage: 1,    
    totalPages: 1,     
    rows: 12,          
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
   
    //const apiKey = 'd205e0353aed4e42b97d11c1a88207f0'
   // const apiKey = '1fb27fc9978d48ecadb4bdc77705325e';
    const pageSize = 100;
    
    try {
      const response = await fetch(
        ` https://api-epicnews404.azurewebsites.net/Articles?SiteId=1&Query=1&Language=52&Page=1&pageSize=${pageSize}`
       // ` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&Page=1&&pageSize=${pageSize}`
       //`https://newsapi.org/v2/top-headlines?category=general&language=en&apiKey=${apiKey}&pageSize=${pageSize}`
      );
      const data = await response.json();
      return data;
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
  };
  </script>
  <style lang="css" scoped>
  a,u{
  text-decoration: none;
  color: black;
  
  }
  a:hover{
  text-decoration: underline;
  }
  .card{ 
  
  list-style: none;
  border: none !important;
  box-shadow: none !important;
  }
  </style>