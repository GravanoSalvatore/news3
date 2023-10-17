
<!-- <template>
  <div>
    <div>
      <div v-for="metal in metalPrices" :key="metal">
        <h6>{{ metal}}/USD</h6>
         <h4>{{ formatPrice(price) }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      metalPrices: {},
      loading: true,
    };
  },
  mounted() {
    // Replace with your Metal Price API URL and API key
    const apiUrl = "https://api.metalpriceapi.com/v1/latest";
    const apiKey = "7e5d57584c511e352193e9a514b5131a";
    const metals = ["XAU", "XAG", "XPT"]; // Add XAG and XPT

    // Fetch prices for multiple metals in one request
    axios
      .get(apiUrl, {
        params: {
          api_key: apiKey,
          base: "USD", // Set base currency to USD
          currencies: metals.join(","), // Join metals into a comma-separated string
        },
      })
      .then((response) => {
        this.metalPrices = response.data.rates;
        this.loading = false;
      })
      .catch((error) => {
        console.error("Error fetching metal prices:", error);
        this.loading = false;
      });
  },
  methods: {
    formatPrice(price) {
      // Format the price to two decimal places
      return Number(price).toFixed(2);
    },
  },
};
</script> -->

<template lang="">
  <div>
    <br/><br/>
    <main class="my-5">
    <div class="container">
     
      <div class="row">
        
        <div class="col-md-9 mb-4" 
      
        >
         
          <section>
            
            <div class="row"  v-for="item in articles"
      :key="item">
              <div class="col-md-4 mb-4">
                <div class="bg-image hover-overlay shadow-1-strong rounded ripple" data-mdb-ripple-color="light"
                
               >
                  <img v-if="item.urlToImage" :src="item.urlToImage" class="img-fluid" />
                 <img v-else src='../assets/news.jpeg'  class="img-fluid">
                  <a href="#!">
                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                  </a>
                </div>
              </div>

              <div class="col-md-8 mb-4">
                <h5><a :href="item.url" target="_blanck">{{item.title}}</a></h5>
                <p>
                  <u class="text-success"> {{item.source.name}}</u><br/>
                    <u><strong style="font-family:gotic">author({{item.author}})</strong></u><br/>
                    <u> {{item.publishedAt}}</u>
                </p>

              
              </div>
            </div>

            
            
          </section>
         
        </div>
       
  <div class="col-md-3 mb-4">
        
          <section class="sticky-top" style="top: 80px;">
          
            <section class="text-center border-bottom pb-4 mb-4">
              <div class="bg-image hover-overlay ripple mb-4">
                <br/><br/>
                <img
                  src="../assets/news.jpeg"
                  class="img-fluid" />
                <a href="https://mdbootstrap.com/docs/standard/" target="_blank">
                  <div class="mask" style="background-color: rgba(57, 192, 237, 0.2);"></div>
                </a>
              </div>
              <h2><strong>Forex market</strong></h2>

              <p><strong>Forex is the largest financial market in the world, its turnover significantly exceeds that of the stock and other markets; In this regard, there is high liquidity in Forex, and this market attracts many traders, both beginners and professionals.</strong></p>
                
              <!-- <a role="button" class="btn btn-primary" href="https://mdbootstrap.com/docs/standard/"
                target="_blank">GO</a> -->
            </section>
           
            <section class="text-center">
              <i style="color: #f92601;" class="fa-thin fa-beat-fade" >LIVE</i>

              <div class="embed-responsive embed-responsive-16by9 shadow-4-strong">
                <iframe class="embed-responsive-item rounded video" src="https://www.youtube.com/embed/OOtxXPaQvoM?si=ekxRZmoqMegpo1jG"
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
export default {
  data() {
    return {
      articles: [],
      currentPage: 1,
      totalPages: 1,
      rows: 15,
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
      const pageSize = 15;

      try {
        const response = await fetch(
          ` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&Page=1&&pageSize=${pageSize}`
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
   
  },
  mounted() {

    this.fetchNews();
  },
}
</script>
<style lang="scss" scoped>
a{
  text-decoration: none;
  color:black

}
a:hover{
text-decoration: underline;
}
u{
  text-decoration: none;
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
.embed-responsive{ 

list-style: none;
border: none !important;
box-shadow: none !important;
}
</style>