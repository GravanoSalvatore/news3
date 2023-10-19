<template lang="">
    <div class="container">
      <hr style="height:2px" />
        <div class="row mb-2" 
        
        >
        <div class="col-md-6"
        v-for="item in articles"
        :key="item"
        >
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <h5 class="mb-0"><strong> <a :href="item.url" target="_blank" class="stretched-link">{{item.title}}</a></strong></h5>
              <u class="text-success"> {{item.source.name}}</u><br/>
              <u><strong style="font-family:gotic">author({{item.author}})</strong></u><br/>
              <u> {{ formatDateTime(item.publishedAt) }}</u> 
            </div>
            <div class="col-auto d-none d-lg-block">
              <img class="bd-placeholder-img" 
              v-if="item.urlToImage"
              :src="item.urlToImage" 
              width="220" 
              height="140"  
              role="img" 
              aria-label="Placeholder: Thumbnail" 
              preserveAspectRatio="xMidYMid slice" 
              focusable="false">
             
              <img v-else src="../../assets/news.jpeg" width="220" 
              height="140" class="bd-placeholder-img">
        
            </div>
            <hr/>
          </div>
        </div>
      
      </div>
    
    </div>
</template>
<script>
export default {
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

      // const apiKey = 'd205e0353aed4e42b97d11c1a88207f0'
      //const apiKey = '1fb27fc9978d48ecadb4bdc77705325e';
      const pageSize = 8;

      try {
        const response = await fetch(
          // `https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${apiKey}&pageSize=${pageSize}`
          ` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=9&Page=1&PageSize=${pageSize}`
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
a {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: underline;
}

.rounded {
  border: none !important;
  box-shadow: none !important;
}

.album {
  background-color: transparent !important;
}

.d-none {
  display: block !important;

  @media screen and(max-width: 991px) {
    display: none !important;
  }

}

p {
  @media screen and(max-width: 1200px) {
    display: none;
  }

  @media screen and(max-width: 991px) {
    display: block;
  }
}</style>