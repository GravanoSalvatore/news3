<template lang="">
    <div class="container" 
    style=" background-image: linear-gradient(to right, #040d1d, #053684);
;color:white">
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3" 
        
        >


<div class="col d-flex align-items-start" 
v-for="item in articles"
        :key="item">
  <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
    <!-- <img   :src="item.urlToImage" width="10em" height="10em"> -->
  </div>
  <div>
    <h2><a :href="item.url" target="_blanck">{{item.title}}</a></h2>
    <p><strong>{{item.content}}</strong></p>
    <u class="text-success"> {{item.source.name}}</u><br/>
                    <u><strong style="font-family:gotic">author({{item.author}})</strong></u><br/>
                    <u> {{ formatDateTime(item.publishedAt) }}</u>
   
  </div>
</div>

</div>

<!-- <div class="pagination">
            <button class="prev-bt" @click="prevPage" :disabled="currentPage === 1">Previous</button>
            <span class="page-numbers">{{ currentPage }} / {{ totalPages }}</span>
            <button class="next-bt" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
          </div> -->
 
    </div>
</template>
<script>
import searchGrid from '@/views/Select-3-grid.vue'
import search2 from '@/views/Select-3.vue'
export default {
  components: {
    searchGrid,
    search2
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
    return new Date(dateTime).toLocaleString(undefined, options); },
    async getData() {

      // const apiKey = '1fb27fc9978d48ecadb4bdc77705325e';
      //const apiKey = 'd205e0353aed4e42b97d11c1a88207f0'
      const pageSize = 6;

      try {
        const response = await fetch(
          // `https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${apiKey}&pageSize=${pageSize}`
          ` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=11&Page=1&PageSize=${pageSize}`
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
u{
  text-decoration: none;
  color: white;
}
a {
  text-decoration: none;
  color: white;
}

a:hover {
  text-decoration: underline;
}

img {
  margin: 10px;
}

.next-bt,
.prev-bt {
  margin: 13px;
  background-color: white;
  color: rgb(248, 2, 2);
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  border-radius: 2px;
  padding: 7px;
  font-weight: bold;

}

.next-bt:hover,
.prev-bt:hover {
  background-image: linear-gradient(to right, #040d1d, #053684);
  color: white;



}</style>