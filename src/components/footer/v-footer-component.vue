<template lang="">

    <footer style="background-color:rgb(1, 1, 2);" class="text-center text-lg-start  text-muted mt-5">
  
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
   
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
   
    <div>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-github"></i>
      </a>
    </div>
    
  </section>
  
  <section class="">
    <div class="container text-center text-md-start mt-5">
     
      <div class="row mt-3">
       
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3 text-secondary"></i>Global NEWS Hub
          </h6>
          <p>
            Global News Hub is your premier source for up-to-the-minute and relevant news. We specialize in delivering the latest updates in the world of cryptocurrency and business. Stay informed with our trusted coverage.
          </p>
        </div>
       
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">
            <!-- Products -->
          </h6>
          <p>
            <router-link to="/" class="text-reset">General</router-link>
          </p>
          <p>
            <router-link  @click="businessChangeBaner" to="/Business" class="text-reset">Business</router-link>
          
          </p>
          <p>
            <router-link @click="" to="/Crypto" class="text-reset">Crypto</router-link>
          
          </p>
          <p>
            <router-link @click="techChangeBaner" to="/Tech" class="text-reset">Technology</router-link>
          
          </p>
        </div>
       
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">
            <!-- Useful links -->
          </h6>
          <p>
            <router-link @click="sportChangeBaner" to="/Sport" class="text-reset">Sport</router-link>
          
          </p>
          <p>
            <router-link @click="scienceChangeBaner" to="/Science" class="text-reset">Science</router-link>
          
          </p>
          <p>
            <router-link @click="healthChangeBaner" to="/Health" class="text-reset">Health</router-link>
          
          </p>
          <p>
            <router-link @click="enterChangeBaner" to="/Entertainment" class="text-reset">Entertainment</router-link>
          
          </p>
        </div>
       
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3 text-secondary"></i> New York, NY 10012, US</p>
          <p>
            <i class="fas fa-envelope me-3 text-secondary"></i>
            globalnewshub@gmail.com
          </p>
          <p><i class="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3 text-secondary"></i> + 01 234 567 89</p>
        </div>
       
      </div>
     
    </div>
  </section>
  <nav class="blog-pagination" aria-label="Pagination">
        <a class="btn bt" href="#">Back to top</a>
        <!-- <a class="btn btn-outline-secondary disabled" href="#" tabindex="-1" aria-disabled="true">Newer</a> -->
      </nav>
  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.025);color:white">
    © 2023 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">GNH.com</a>
  </div>
  
</footer>

  
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
  a,p,span,i,h6{
    color: rgb( 92,187,246);
    text-decoration: none;
  }
</style>

