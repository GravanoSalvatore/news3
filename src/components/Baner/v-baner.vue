<template lang="">
    <div>
        <div id="intro7" class="bg-image shadow-2-strong">
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
        <div class="container d-flex align-items-center justify-content-center text-center h-100">
          <div class="text-white">
            <!-- <h1 class="mb-1">Global News Hub</h1>
            <h5 class="mb-2">Always the latest news as well as business and cryptocurrency news</h5> -->
            <!-- <router-link class="btn btn-outline-light btn-lg " to="/General" role="button"
              rel="nofollow" >general</router-link> -->
              <router-link class="btn btn-outline-light btn-lg m-1 " to="/Business" role="button"
              rel="nofollow" >business</router-link>
              <router-link class="btn btn-outline-light btn-lg m-1" to="/Crypto" role="button"
              rel="nofollow" >crypto</router-link>
              <router-link class="btn btn-outline-light btn-lg m-1" to="/Tech" role="button"
              rel="nofollow" >technology</router-link>
              <router-link class="btn btn-outline-light btn-lg m-1" to="/Science" role="button"
              rel="nofollow" >science</router-link>
              <router-link class="btn btn-outline-light btn-lg m-1" to="/Sport" role="button"
              rel="nofollow" >sport</router-link>
              <router-link class="btn btn-outline-light btn-lg m-1" to="/Entertainment" role="button"
              rel="nofollow" >entertainment</router-link>
              <router-link class="btn btn-outline-light btn-lg m-1" to="/Health" role="button"
              rel="nofollow" >health</router-link>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="css" scoped>
.text-white{
  margin-top: 120px;
}
a{
  font-weight: bold;
}
    #intro7 {
        background-image: url("https://pressclubswfl.org/wp-content/uploads/2023/08/News.jpg");
        height: 120vh;
      }
      @media (max-width: 410px){
        h1,h5{
          display: none;
        }
      }
</style>