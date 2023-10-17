<template lang="">
  <div>
    <section>
          <div class="row" 
          v-for="item in  paginatedArticles"
             :key="item.id"
          >
            <div class="col-md-6 gx-5 mb-4">
              <div  class="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
                <img :src="item.imageurl" class="img-fluid" />
                <!-- <a href="#!">
                  <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                </a> -->

               
              </div>
            </div>

            <div class="col-md-6 gx-5 mb-4 coll">
             
              <p style="font-size:22px"><strong><a :href="item.url" target="_blank">{{item.title}}</a></strong></p>
              <div class="body" ><strong>{{item.body}}</strong></div>
              <p ><strong class="text-secondary">{{item.source_info.name}}</strong></p>
            </div>
          </div>
        </section>



  </div>
</template>
<script>
export default {
 
 data() {
       return {
         articles: [],       
         currentPage: 1,   
         totalPages: 1,     
         rows: 3,          
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
         
         // const apiKey = 'd205e0353aed4e42b97d11c1a88207f0'
       
         const pageSize = 3;
         
         try {
           const response = await fetch(
             'https://min-api.cryptocompare.com/data/v2/news/?categories=Technology,Blockchain&excludeCategories=Regulation,Mining'
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
     },
     mounted() {
      
       this.fetchNews();
     },}




</script>
<style lang="scss" scoped>
.bg-image,.coll{
  // background-image: linear-gradient(to right, #040d1d, #053684);
           
}
.body{
  color:black;
  height: 150px;
  overflow-x: hidden;
  overflow-y: auto;
}
a:hover{
    text-decoration: underline;
}
a{
    text-decoration: none;
    color:black}
.row{
  background-color: #f7f8fa;
}
   .bg-image{
            border: none !important;
              box-shadow: none !important;
        }
        // .img-fluid{
        //   @media screen and (max-width: 450pxpx){
        //     min-width: 200px;
        //   }
        // }
        p{
          color:black
        }
</style>