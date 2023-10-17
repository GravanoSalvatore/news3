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
              <img  
              width="320"
             height="220" 
             v-if="item.urlToImage" 
             :src="item.urlToImage" 
             class=" bd-placeholder-img card-img-to" />
               <img v-else 
                width="320"
               height="200"  
                src="../../assets/news.jpeg" > 
              <a href="#!">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
              </a>
            </div>
            <div class="">
              
              <p class="card-text card-body">
                <h5 class="card-title y"><a :href="item.url" target="_blank">{{item.title}}</a></h5>
                  <u class="text-success"> {{item.source.name}}</u><br/>
                  <u><strong style="font-family:gotic">author({{item.author}})</strong></u><br/>
                  <u> {{ formatDateTime(item.publishedAt) }}</u>
              </p>
            
            </div>
          </div>
        </div>

       
      
      </div>

      <div class="pagination mt-3">
            <span class="prev-bt" @click="prevPage" :disabled="currentPage === 1">Previous</span>
            <span class="page-numbers">{{ currentPage }} / {{ totalPages }}</span>
            <span class="next-bt" @click="nextPage" :disabled="currentPage === totalPages">Next</span>
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
  rows: 24,          
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
  formatDateTime(dateTime) {
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  return new Date(dateTime).toLocaleString(undefined, options);
},
async getData() {
 
  //const apiKey = 'd205e0353aed4e42b97d11c1a88207f0'
const apiKey = '1fb27fc9978d48ecadb4bdc77705325e';
  const pageSize = 96;
  
  try {
    const response = await fetch(
     // ` https://api-epicnews404.azurewebsites.net/Articles?SiteId=1&Query=1&Language=52&Page=1&pageSize=${pageSize}`
     ` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&Page=1&&pageSize=${pageSize}`
   // `https://newsapi.org/v2/top-headlines?category=general&language=en&apiKey=${apiKey}&pageSize=${pageSize}`
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
<style lang="css" scoped>
.card-body{
overflow-x: hidden;
overflow-y: auto;
height: 130px;
}
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
</style>