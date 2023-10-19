<!-- <template>
  <div>
    <h1>Топ-8 драгоценных металлов по самой высокой цене</h1>
    <ul>
      <li v-for="(metal, index) in topMetals" :key="metal.name">
        {{ index + 1 }}. {{ metal.name }}/ USD:{{ metal.price }} OZT
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      metalsData: [],
      loading: true,
    };
  },
  computed: {
    topMetals() {
      // Сортируем металлы по цене в убывающем порядке и возвращаем топ-8
      return this.metalsData
        .sort((a, b) => b.price - a.price)
        .slice(0, 8);
    },
  },
  mounted() {
    // Замените на URL и ключ вашего API для цен на драгоценные металлы
    const apiUrl = "https://api.metalpriceapi.com/v1/latest";
    const apiKey = "7e5d57584c511e352193e9a514b5131a";
    const baseMetal = "XAU"; // Замените XAU на код вашего базового металла
    const metals = "XAU,XAG,XPT,XPD,XAUUSD,XAGUSD,XPTUSD,XPDUSD"; // Добавьте gold, silver и platinum

    axios
      .get(apiUrl, {
        params: {
          api_key: apiKey,
          base: baseMetal,
          metals: metals,
        },
      })
      .then((response) => {
        this.metalsData = Object.keys(response.data.rates).map((metal) => ({
          name: metal,
          price: response.data.rates[metal],
        }));
        this.loading = false;
      })
      .catch((error) => {
        console.error("Ошибка при получении цен на металлы:", error);
        this.loading = false;
      });
  },
};
</script> -->

<template lang="">
  
  <div>
    <main class="mt-4 mb-5">
    <div class="container">
      <!-- <h4 class="mb-5"><strong>Technology</strong></h4> -->
     
      <div class="row">
       
        <div class="col-md-8 mb-4">
        
          <section class="border-bottom mb-4" 
          
          v-for="item in articles"
      :key="item"
          
          >
            <img  v-if="item.urlToImage" :src="item.urlToImage"
              class="img-fluid shadow-2-strong rounded-5 mb-4" alt="" />
             <img  v-else src="../assets/news.jpeg"
              class="img-fluid shadow-2-strong rounded-5 mb-4" alt="" />

            <div class="row align-items-center mb-4">
              <div class="col-lg-6 text-center text-lg-start mb-3 m-lg-0">
                
               
              </div>

              
            </div>

            
            <p><strong><a :href="item.url" target="_blank">{{item.title}}</a></strong></p>
            
<p>
  {{item.content}}
</p>
<u class="text-success"> {{item.source.name}}</u><br/>
                    <u><strong style="font-family:gotic">author({{item.author}})</strong></u><br/>
                    <u> {{item.publishedAt}}</u>
          </section>
         
      
          
        </div>
       













        <div class="col-md-4 mb-4">
          
          <section class="sticky-top" style="top: 80px;">
          
            <section class="text-center border-bottom pb-4 mb-4">
              <div class="bg-image hover-overlay ripple mb-4">
                <img
                  src="../assets/news.jpeg"
                  class="img-fluid" />
                <a href="https://mdbootstrap.com/docs/standard/" target="_blank">
                  <div class="mask" style="background-color: rgba(57, 192, 237, 0.2);"></div>
                </a>
              </div>
              <h5><strong>Decentralized Finance (DeFi): Revolutionizing the World of Finance</strong></h5>

              <p>
                Decentralized Finance (DeFi) is an emerging and exciting paradigm of financial services that eliminates intermediaries and provides users with freedom and control over their finances. DeFi leverages blockchain technology to create decentralized applications (DApps) that allow users to exchange, lend, earn, and manage their assets without the involvement of traditional financial institutions.
              </p>
              <!-- <a role="button" class="btn btn-secondary" href="https://mdbootstrap.com/docs/standard/"
                target="_blank">Defi</a> -->
            </section>
          
            <section class="text-center">
              <i style="color: #f92601;" class="fa-thin fa-beat-fade" >LIVE</i>

              <div class="embed-responsive embed-responsive-16by9 shadow-4-strong">
                <iframe class="embed-responsive-item rounded-5 video" src="https://www.youtube.com/embed/FNvPrpHWhtA?si=sLzvw-uw3CSRDOY0"
                  allowfullscreen></iframe>
              </div> 
            </section>
           
          </section>
         
        </div>
        
      </div>
     
    </div>
  </main>
  </div>
</template>
<script>
import ai from './Ai.vue'
export default {
  components:{
ai
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
      const pageSize = 20;

      try {
        const response = await fetch(
          ` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=3&Page=1&PageSize=${pageSize}`
          //`https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${apiKey}&pageSize=${pageSize}`
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
}
</script>
<style lang="scss" scoped>
a{
  font-size: 24px;
}
u,a{
  text-decoration: none;
  color: black;
}
a:hover{
  text-decoration: underline;
}

.embed-responsive{ 

list-style: none;
border: none !important;
box-shadow: none !important;
}

.video {
  // @media screen and (max-width: 1105px) {
  //   display: none;
  // }

  // @media screen and (max-width: 767px) {
  //   display: block;
  // }

  @media screen and (max-width: 320px) {
    width: 250px;
  }

  @media screen and (max-width: 280px) {
    width: 200px;
  }
}
</style>
