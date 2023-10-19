<template lang="">

 
  <baner/>
     <general/>
   <router-view></router-view>
   </template>
    <script>


import baner from "../components/Baner/v-baner.vue";

import general from '@/views/General.vue'
export default {
  components: {
    
    baner,
    general
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
      // Fetch articles from the News API
      const apiKey = "1fb27fc9978d48ecadb4bdc77705325e";
      const pageSize = 100;

      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${apiKey}&pageSize=${pageSize}`
        );
        const data = await response.json();
        return data.articles;
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
.video {
  @media screen and (max-width: 320px) {
    width: 250px;
  }

  @media screen and (max-width: 280px) {
    width: 200px;
  }
}
.div-video,
.card {
  border: none !important;
  box-shadow: none !important;
}
.page-numbers {
  margin-top: 20px;
}
a {
  text-decoration: none;
  color: black;
}
a:hover {
  text-decoration: underline;
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
}
.card {
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
}
</style>