<template lang="">
    
    <div class="catagory-featured-post bg-overlay clearfix" style="background-image: url('https://www.nasdaq.com/sites/acquia.prod/files/styles/720x400/public/2022/12/07/cryptocurrency-Nuthawut-adobe.jpeg?h=34bbd072&itok=NNYETVd0')">
    <div class="container-fluid h-100"
    
    >

<price/>

          <div class="row h-100 align-items-center">
              <div class="col-12 col-lg-9"
              v-for="item in paginatedArticles"
              :key="item"
              >
                 
                  <div class="post-content">
                      <!-- <p class="tag " style="background-image:linear-gradient(#dcd50d, #f10505);color:white"><span >Crypto</span></p> -->
                      <a :href="item.url" target="_blank" style="font-size:30px;"  class="post-title  fw-bold">{{item.title}}</a>
         </div>
              </div>
          </div>
      </div>
  </div>

</template>
<script>
import price from '@/views/Price.vue'
export default {
components:{price},
data() {
         return {
           articles: [],  
           articles2: [],  
           articles3: [],  
           articles4: [],  
           articles5: [],       
           currentPage: 1,  
           totalPages: 1,     
           rows: 1, 
           rows2: 1, 
           rows3: 1, 
           rows4: 1, 
           rows5: 1,          
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
           
          
         
           const pageSize = 48;
           
           try {
             const response = await fetch(
              // 'https://min-api.cryptocompare.com/data/v2/news/?categories=BTC,ETH&excludeCategories=Sponsored'
              'https://min-api.cryptocompare.com/data/v2/news/?categories=Technology,Blockchain&excludeCategories=Defi,Nft'
             );
             const data = await response.json();
             return data.Data;
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
       },
       mounted() {
         
         this.fetchNews();
       },
     







}
</script>
<style lang="">

</style>