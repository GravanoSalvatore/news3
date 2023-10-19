<template lang="">
  <main class="container">
      <div class="row"
 
  >
    <div class="col-lg-3 "
    v-for='item in  paginatedArticles'
  :key='item'>
      <!-- <img  :src="item.urlToImage" class="bd-placeholder-img rounded-circle" width="220" height="220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"> -->
      <img  v-if="item.urlToImage" :src="item.urlToImage" class="bd-placeholder-img rounded-circle" width="150" height="150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
<img  v-else :src="img" class="bd-placeholder-img rounded-circle" width="150" height="150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
      
      <h6 class="card-body"><a :href="item.url" target="_blank">{{item.title}}</a></h6>
      <!-- <p><strong>{{item.description}}</strong></p> -->
    
    </div>
    <br/>
    <div class="pagination mt-3">
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
    img:'https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg'                  
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
        ` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=3&Page=1&PageSize=${pageSize}`
      // `https://newsapi.org/v2/top-headlines?category=entertainment&language=en&apiKey=${apiKey}&pageSize=${pageSize}`
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
};
</script>
<style lang="scss" scoped>
.card-body{
  overflow-x: hidden;
  overflow-y: auto;
  height: 130px;
}
.page-numbers {
  margin-top: 10px;
  font-size: 10px;
}
.next-bt,
.prev-bt {
  font-size: 10px;
  margin: 7px;
 
  padding: 3px;
  font-weight: bold;

}
img{
  margin: 10px;
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