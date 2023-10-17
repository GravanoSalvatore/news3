<template>
  <div class="container">
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(item, index) in images" :key="index" :class="{ 'carousel-item': true, active: index === 0 }">
          <img v-if="item.urlToImage" :src="item.urlToImage" class="d-block w-100" alt="Image">
          <img v-else src="../../assets/news.jpeg" class="d-block w-100" alt="Image">
          <p> <a :href="item.url" target="_blank">{{ item.title }}</a></p>
        </div>

      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      images: [],
    };
  },
  methods: {
    async fetchData() {
      //const apiKey = '1fb27fc9978d48ecadb4bdc77705325e';
      const pageSize = 100;

      try {
        const response = await axios.get(
          ` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&Page=1&&pageSize=${pageSize}`
          // `https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=${apiKey}&pageSize=${pageSize}`
        );


        this.images = response.data.items.map((article) => ({
          urlToImage: article.urlToImage, title: article.title, url: article.url,
        }));
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.d-block {
  filter: brightness(50%);

}

p {
  position: absolute;
  color: white;
  font-size: 30px;
  top: 0;
  margin: 10px;
  font-weight: bold;
}
</style>
