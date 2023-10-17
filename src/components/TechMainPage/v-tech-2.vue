<template lang="">
  

    <main>
    
       
      <div class="container marketing">
    
        
        
       
    
       
    
        <div class="row featurette"
        v-for="item in paginatedArticles"
       :key="item"
        >
          
          <div class="col-md-8">
    
           
            <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" 
            v-if="item.urlToImage"
            :src='item.urlToImage'
            width="800" 
            height="500" 
        
            role="img" aria-label="Placeholder: 500x500" 
            preserveAspectRatio="xMidYMid slice" 
            focusable="false">
            <img v-else src="../../assets/news.jpeg" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="800" 
            height="500" 
        
            role="img" aria-label="Placeholder: 500x500" 
            preserveAspectRatio="xMidYMid slice" 
            focusable="false">
            <!-- <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee"/> -->
           
        
    
          </div>
       
       
    
          <div class="col-md-4">
            <h2 class="featurette-heading"> <a :href="item.url" target="_blank">{{item.title}}</a><span class="text-muted"></span></h2>
            <p class="lead"><strong>{{item.description}}</strong></p>
            <u class="text-success"> {{item.source.name}}</u><br/>
                    <u><strong style="font-family:gotic">author({{item.author}})m</strong></u><br/>
                    <u> {{ formatDateTime(item.publishedAt) }}</u>
          </div>
    
       </div>
       <!-- <div class="pagination">
                <span class="prev-bt" @click="prevPage" :disabled="currentPage === 1">Previous</span>
                <span class="page-numbers">{{ currentPage }} / {{ totalPages }}</span>
                <span class="next-bt" @click="nextPage" :disabled="currentPage === totalPages">Next</span>
              </div> -->
       
    
      </div>
    
    
      
      
    </main>
    
    
    </template>
    <script>
     import searchGrid from '@/views/Select-3-grid.vue'
    import search2 from '@/views/Select-3.vue'
    export default {
      components:{
     searchGrid,
    search2
      },
      data() {
        return {
          articles: [],       
          currentPage: 1,    
          totalPages: 1,     
          rows: 1,          
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
         
          //const apiKey = 'd205e0353aed4e42b97d11c1a88207f0'
        // const apiKey = '1fb27fc9978d48ecadb4bdc77705325e';
          const pageSize = 100;
          
          try {
            const response = await fetch(
              ` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&Page=1&&pageSize=${pageSize}`
             // `https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${apiKey}&pageSize=${pageSize}`
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
    }
    img{
        margin: 10px;
    }
        .next-bt,.prev-bt{
              margin: 13px;
              // background-color:white;
              color: rgb(49, 45, 45);
              // box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
              border-radius: 2px;
              padding: 7px;
              font-weight: bold;
              
            }
            .next-bt:hover{
              
              color: rgb(1, 101, 31);
               } 
               .prev-bt:hover{
                color: red;

               }
            a{
    text-decoration: none;
    color: black;
}
a:hover{
    text-decoration: underline;
}
span{
  margin-top: 20px;
}
    </style>