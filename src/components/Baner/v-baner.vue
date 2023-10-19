<template lang="">
    <div>
        <div id="intro7" class="bg-image shadow-2-strong">
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.3);">
        <div class="container d-flex align-items-center justify-content-center text-center h-100">
          <div class="text-white">
            <!-- <h1 class="mb-1">Global News Hub</h1>
            <h5 class="mb-2">Always the latest news as well as business and cryptocurrency news</h5> -->
            <!-- <router-link class="btn btn-outline-light btn-lg " to="/General" role="button"
              rel="nofollow" >general</router-link> -->
              <router-link @click="businessChangeBaner" class="btn btn-outline-light btn-lg m-1 " to="/Business" role="button"
              rel="nofollow" >business</router-link>
              <router-link  class="btn btn-outline-light btn-lg m-1" to="/Crypto" role="button"
              rel="nofollow" >crypto</router-link>
              <router-link  @click="techChangeBaner" class="btn btn-outline-light btn-lg m-1" to="/Tech" role="button"
              rel="nofollow" >technology</router-link>
              <router-link  @click="scienceChangeBaner" class="btn btn-outline-light btn-lg m-1" to="/Science" role="button"
              rel="nofollow" >science</router-link>
              <router-link  @click="sportChangeBaner" class="btn btn-outline-light btn-lg m-1" to="/Sport" role="button"
              rel="nofollow" >sport</router-link>
              <router-link  @click="enterChangeBaner" class="btn btn-outline-light btn-lg m-1" to="/Entertainment" role="button"
              rel="nofollow" >entertainment</router-link>
              <router-link  @click="healthChangeBaner" class="btn btn-outline-light btn-lg m-1" to="/Health" role="button"
              rel="nofollow" >health</router-link>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
export default {
    methods: {
      businessChangeBaner(){
        let changeBusiness = document.getElementById("intro7").style.backgroundImage='url(https://www.gawieleroux.co.za/sites/default/files/2023-03/Blog%20photos_5%20enterprises.jpg)'
        let closeGeneral = document.getElementById('general').style.display="none"
        let closeGeneral2 = document.getElementById('general2').style.display="none"
        let closeGeneral3 = document.getElementById('general3').style.display="none"
        let introCarouselClose2 = document.getElementById('introCarousel-2').style.display="none"
        let introCarouselClose = document.getElementById('introCarousel').style.display="none"
      },
      techChangeBaner(){
        let changeTech = document.getElementById("intro7").style.backgroundImage='url(https://standards.ieee.org/wp-content/uploads/2021/12/Connected-technologies-1920x1080-1.jpg)'
        let closeGeneral = document.getElementById('general').style.display="none"
        let closeGeneral2 = document.getElementById('general2').style.display="none"
        let closeGeneral3 = document.getElementById('general3').style.display="none"
        let introCarouselClose2 = document.getElementById('introCarousel-2').style.display="none"
        let introCarouselClose = document.getElementById('introCarousel').style.display="none"
      },
      sportChangeBaner(){
        let changeSport = document.getElementById("intro7").style.backgroundImage='url(https://www.iro-dogs.com/wp-content/uploads/2021/09/Sports-Vouchers-Program.jpg)'
        let closeGeneral = document.getElementById('general').style.display="none"
        let closeGeneral2 = document.getElementById('general2').style.display="none"
        let closeGeneral3 = document.getElementById('general3').style.display="none"
        let introCarouselClose2 = document.getElementById('introCarousel-2').style.display="none"
        let introCarouselClose = document.getElementById('introCarousel').style.display="none"
      },
      healthChangeBaner(){
        let changeHealth = document.getElementById("intro7").style.backgroundImage='url(https://s7d1.scene7.com/is/image/wbcollab/Health_Background_Nov21)'
        let closeGeneral = document.getElementById('general').style.display="none"
        let closeGeneral2 = document.getElementById('general2').style.display="none"
        let closeGeneral3 = document.getElementById('general3').style.display="none"
        let introCarouselClose2 = document.getElementById('introCarousel-2').style.display="none"
        let introCarouselClose = document.getElementById('introCarousel').style.display="none"
      },
      enterChangeBaner(){
        let changeEnter = document.getElementById("intro7").style.backgroundImage='url(https://eu-assets.simpleview-europe.com/bournemouth/imageresizer/?image=%2Fdbimgs%2FBIC%20Performance.jpg&action=FeaturedItemsGalleryProElite3x2)'
        let closeGeneral = document.getElementById('general').style.display="none"
        let closeGeneral2 = document.getElementById('general2').style.display="none"
        let closeGeneral3 = document.getElementById('general3').style.display="none"
        let introCarouselClose2 = document.getElementById('introCarousel-2').style.display="none"
        let introCarouselClose = document.getElementById('introCarousel').style.display="none"
      },
      scienceChangeBaner(){
        let changeScience = document.getElementById("intro7").style.backgroundImage='url(https://assets.weforum.org/community/image/3v8PB95CCSn86e5fowthRAybW4ajSY18z2FfVPi2spk.jpeg)'
        let closeGeneral = document.getElementById('general').style.display="none"
        let closeGeneral2 = document.getElementById('general2').style.display="none"
        let closeGeneral3 = document.getElementById('general3').style.display="none"
        let introCarouselClose2 = document.getElementById('introCarousel-2').style.display="none"
        let introCarouselClose = document.getElementById('introCarousel').style.display="none"
      },


    },
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