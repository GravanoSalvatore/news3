 <template>
    <div v-if="showCookieWarning" class="cookie-warning" :style="{ backgroundColor: backgroundColor }">
      <p>{{ message }}</p>
      <button class=" rounded-3 p-3" @click="hideCookieWarning"><span>ACCEPT</span></button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      message: {
        type: String,
        default: "This site uses cookies. By continuing to use the site, you agree to our cookie policy.",
      },
      backgroundColor: {
        type: String,
        default: "rgb( 92,187,246)",
      },
    },
    data() {
      return {
        showCookieWarning: false,
      };
    },
    methods: {
      hideCookieWarning() {
        this.showCookieWarning = false;
        localStorage.setItem("cookieWarningShown", "true");
      },
    },
    created() {
      if (localStorage.getItem("cookieWarningShown") !== "true") {
        this.showCookieWarning = true;
      }
    },
  };
  </script>
  
  <style scoped>
  span{
    color: white;
  }
  button{
    border:3px solid white;
    padding: 15px;
    
  }
  button:hover{
    background-color: rgb(59, 115, 149);
  }
  p{
    color:white
  }
  .cookie-warning {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    text-align: center;
    border-top: 1px solid white;
    z-index: 10000;
  }
  </style>
  
  