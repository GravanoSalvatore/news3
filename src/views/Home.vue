<template lang="">
<div>
  <baner/>
      <bVideo/>

<baner2/>
<baner4/>
<bVideo2/>

<br/>
<baner5/>

<baner3/>
<br/>


<!-- <business/> -->
   

  </div>

   </template> 
    <script>

import business from '@/views/Business.vue'
import baner from "../components/sn-main-baner/sn-main-baner.vue";
import baner4 from "../components/sn-main-baner/sn-baner-4.vue";
import baner5 from "../components/sn-main-baner/sn-baner-5.vue";
import baner2 from "../components/sn-main-baner/sn-main-baner-2.vue";
import baner3 from "../components/sn-main-baner/sn-baner-3.vue";
 import bVideo from "../components/sn-main-baner/sn-baner-video.vue";
 import bVideo2 from "../components/sn-main-baner/sn-baner-video-2.vue";
export default {
  components: {
    baner2,
    baner,
    bVideo,
    bVideo2,
    business,
    baner3,
    baner4,
    baner5
    
  },
  data() {
    return {
      articles: [],
      articles2: [],
      articles3: [],
      articles4: [],
      articles5: [],
      articles6: [],
      articles7: [],
      articles8: [],
      rows:2,
      
    };
  },
  computed: {
    
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
          
         
          const pageSize = 1;
    
          try {
            const response = await fetch(
              `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=8&Page=1&PageSize=${pageSize}`
            );
            const data = await response.json();
            return data.items;
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
        async getData2() {
          
         
          const pageSize = 2;
    
          try {
            const response = await fetch(
              `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=3&Page=1&PageSize=${pageSize}`
            );
            const data = await response.json();
            return data.items;
          } catch (error) {
            console.error("Error fetching news:", error);
            return [];
          }
        },
          async fetchNews2() {
          const articles = await this.getData2();
          this.articles2 = articles;
          this.totalPages = Math.ceil(articles.length / this.rows);
        },


    
    
    
    
    
    
        
    
    
    
    
      











        async getData3() {
          
         
          const pageSize = 1;
    
          try {
            const response = await fetch(
              `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=8&Page=1&PageSize=${pageSize}`
            );
            const data = await response.json();
            return data.items;
          } catch (error) {
            console.error("Error fetching news:", error);
            return [];
          }
        },
          async fetchNews3() {
          const articles = await this.getData3();
          this.articles3 = articles;
          this.totalPages = Math.ceil(articles.length / this.rows);
        },
    
    
        async getData4() {
          
         
          const pageSize = 1;
    
          try {
            const response = await fetch(
              `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=8&Page=1&PageSize=${pageSize}`
            );
            const data = await response.json();
            return data.items;
          } catch (error) {
            console.error("Error fetching news:", error);
            return [];
          }
        },
          async fetchNews4() {
          const articles = await this.getData4();
          this.articles4 = articles;
          this.totalPages = Math.ceil(articles.length / this.rows);
        },
  
        











    
        async getData5() {
          
         
          const pageSize = 1;
    
          try {
            const response = await fetch(
              `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=6&Page=1&PageSize=${pageSize}`
            );
            const data = await response.json();
            return data.items;
          } catch (error) {
            console.error("Error fetching news:", error);
            return [];
          }
        },
    
        async fetchNews5() {
          const articles = await this.getData5();
          this.articles5 = articles;
          this.totalPages = Math.ceil(articles.length / this.rows);
        },
        
        async getData6() {
          
         
          const pageSize = 1;
    
          try {
            const response = await fetch(
              `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=6&Page=1&PageSize=${pageSize}`
            );
            const data = await response.json();
            return data.items;
          } catch (error) {
            console.error("Error fetching news:", error);
            return [];
          }
        },
        async fetchNews6() {
          const articles = await this.getData6();
          this.articles6 = articles;
          this.totalPages = Math.ceil(articles.length / this.rows);
        },
    






    
        async getData7() {
          
         
          const pageSize = 1;
    
          try {
            const response = await fetch(
              `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=10&Page=1&PageSize=${pageSize}`
            );
            const data = await response.json();
            return data.items;
          } catch (error) {
            console.error("Error fetching news:", error);
            return [];
          }
        },
        async fetchNews7() {
          const articles = await this.getData7();
          this.articles7 = articles;
          this.totalPages = Math.ceil(articles.length / this.rows);
        },
    

        async getData8() {
          
         
          const pageSize = 4;
    
          try {
            const response = await fetch(
              `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=10&Page=1&PageSize=${pageSize}`
            );
            const data = await response.json();
            return data.items;
          } catch (error) {
            console.error("Error fetching news:", error);
            return [];
          }
        },
        async fetchNews8() {
          const articles = await this.getData8();
          this.articles8 = articles;
          this.totalPages = Math.ceil(articles.length / this.rows);
        },
    
    



      },
       
      mounted() {
        this.fetchNews();
        this.fetchNews2();
        this.fetchNews3();
        this.fetchNews4();
        this.fetchNews5();
        this.fetchNews6();
        this.fetchNews7();
        this.fetchNews8();
       
    
    
      },
};
</script>
    <style lang="scss" scoped>

</style>