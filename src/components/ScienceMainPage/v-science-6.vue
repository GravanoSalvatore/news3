<template lang="">
  <div>
     
  
  
    <div class="album py-5 bg-light">
      <div class="container">
  
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
          <div class="col" 
          v-for="item in paginatedArticles"
          :key="item"
          >
            <div class="card shadow-sm" >
              <img v-if="item.urlToImage" class="bd-placeholder-img card-img-top" 
              
              :src='item.urlToImage'
              width="320"
               height="180" >
               
              <img v-else  
              width="320"
               height="180" 
               :src="img" 
               class="bd-placeholder-img card-img-top" >
              
  
              <div class="card-body">
                <p class="card-text"><a :href="item.url" target="_blank">{{item.title}}</a></p>
               
                <div class="">
                  <u class="text-success"> {{item.source.name}}</u><br/>
                    <u><strong style="font-family:gotic">author({{item.author}})</strong></u><br/>
                    <u> {{ formatDateTime(item.publishedAt) }}</u>
                 
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  
  
  
  
    <div class="pagination mt-3">
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
      img:'https://www.conchovalleyhomepage.com/wp-content/uploads/sites/83/2015/04/healthnews_1429720857397_104687_ver1.0.png?strip=1&w=640'        
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
    }
    return new Date(dateTime).toLocaleString(undefined, options); 
  },
    async getData() {

      // const apiKey = 'd205e0353aed4e42b97d11c1a88207f0'
      // const apiKey = '1fb27fc9978d48ecadb4bdc77705325e';
      const pageSize = 100;

      try {
        const response = await fetch(
          ` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=9&Page=1&PageSize=${pageSize}`
          // `https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=${apiKey}&pageSize=${pageSize}`
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
.card-body{
  overflow-x: hidden;
  overflow-y: auto;
  height: 90px;
}
u{
  text-decoration: none;
}
.pagination {
  margin-left: 80px;

  @media screen and (max-width: 280px) {
    margin-left: 30px;
  }
}



a {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
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

.next-bt:hover {

  color: rgb(1, 101, 31);
}

.prev-bt:hover {
  color: red;

}

.card {
  border: none !important;
  box-shadow: none !important;
}

.album {
  background-color: transparent !important;
}
</style>