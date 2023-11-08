<template>
  <v-app id="app">

   


 




<!-- <navi-4/> -->


    <navi />
    <cookies/>
   
  
      <br/>
      <router-view class="top" />















      
     <div class="container">
    
      <div class="row w-100  ">
  <div class="col-lg-6 my-4">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.29592731265!2d-77.47713270775661!3d25.0326996781907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f7c99b981dbc9%3A0x2aef01d3485e50d2!2sNassau%2C%20Bahamy!5e0!3m2!1spl!2spl!4v1624445118063!5m2!1spl!2spl"
      class="w-100" height="400" allowfullscreen="" loading="lazy"></iframe>
  </div>
  <div class="col-lg-6 my-4 d-flex align-items-center">
    <div>
      <h6>Good news Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias natus architecto facilis repellendus velit veniam saepe totam soluta? Voluptates corrupti animi iste culpa. Quos, numquam commodi! Alias, natus. Dolorum aliquid quia iste doloremque suscipit voluptatum incidunt exercitationem deserunt, dolor ipsum quibusdam non quos? Possimus itaque nulla vel iste necessitatibus?</h6>
     <p> 76 Center avenue, office 46
Brooklyn, NY 11201
United States</p>
    </div>
  </div>
</div>
 </div>
   <v-footer-component/>
  </v-app>
</template>

<script>
// import Bread from "./components/BreadCrams/v-bread-crams.vue";
// import sport from './pages/sport.vue'
// import boots6 from './components/BootstrapMainPage/v-boots-6.vue'
import vFooterComponent from './components/footer/v-footer-component.vue'
import navi from './components/nav/nav.vue';

import cookies from './components/Cookies/v-cookies.vue'
export default {
  components: {
    // vNav,
    vFooterComponent,
    navi,
   
   
    cookies,
    

  },
  data() {
    return {
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Proverka, skrollili li my vverkh
      if (window.scrollY > 0) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.top{
  margin-top: 50px;
  @media screen and(max-width: 991px){
    margin-top: 0px;
  }
}
.navi{
  position: fixed;
  top:0;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-right: 30px;
  margin-left: 130px;
}

p {
  margin-left: 10px;
}

::placeholder {
  color: rgb(7, 7, 7);
}


ul {
  margin-left: 50px;
}

.brand {
  width: 100px;
}

.footer-logo {
  display: flex;
  margin: 0 auto;
}

li {
  font-weight: bold;
}

li:hover {
  text-decoration: underline;
}




#app {
  :active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
}
  // margin-left: 20px;
  color: rgb(65, 46, 46);
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}

// .container {
//   padding-left: 20px;
//   padding-right: 20px;
// }
</style>
