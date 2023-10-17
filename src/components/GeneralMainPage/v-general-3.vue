<template lang="">
  <main class="container">
      <div class="row"
 
  >
    <div class="col-lg-3"
    v-for='item in  paginatedArticles'
  :key='item'>
      <img  :src="item.urlToImage" class="bd-placeholder-img rounded-circle" width="150" height="150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">

      <h5><a :href="item.url" target="_blank">{{item.title}}</a></h5>
      <!-- <p><strong>{{item.description}}</strong></p> -->
    
    </div>
    <br/>
    <div class="pagination">
          <button class="prev-bt" @click="prevPage" :disabled="currentPage === 1">Previous</button>
          <span class="page-numbers">{{ currentPage }} / {{ totalPages }}</span>
          <button class="next-bt" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
        </div>
       
  </div>


</main>
</template>
<script>
import searchGrid from '@/views/Select-3-grid.vue'
import search2 from '@/views/Select-3.vue'
export default {
components:{
searchGrid,
search2
},
data() {
  return {
    articles: [],      
    currentPage: 1,    
    totalPages: 1,     
    rows: 4,          
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
       // `https://newsapi.org/v2/top-headlines?category=general&language=en&apiKey=${apiKey}&pageSize=${pageSize}`
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
<style lang="scss" scoped>
img{
  margin: 10px;
}
  .next-bt,.prev-bt{
        margin: 13px;
        // background-color:white;
        // color: rgb(248, 2, 2);
        // box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
        // border-radius: 2px;
        padding: 7px;
        font-weight: bold;
        
      }
      
      .next-bt:hover{
            
            color: rgb(1, 101, 31);
             } 
             .prev-bt:hover{
              color: red;

             }
      a{
    text-decoration: none;
    color: rgb(1, 1, 1);
    font-weight: bold;
  }
    a:hover{
      text-decoration: underline;
    } 
    span{
      margin-top: 20px;
    }
    


    .bd-placeholder-img{
      @media screen and(max-width: 250px){
        width: 150px;
        height: 150px;
      }
    }
</style>