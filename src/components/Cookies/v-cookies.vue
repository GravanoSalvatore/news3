 <!-- <template>
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
  
   -->
   <template>
    <div v-if="!isAccepted" class="cookies-banner">
      <div class="container">
        <p>
          Мы используем файлы cookie, чтобы улучшить ваш опыт. Продолжая использовать наш сайт, вы соглашаетесь с нашей
          <a href="/privacy-policy">политикой конфиденциальности</a> и
          <a href="/terms-of-service">условиями использования</a>.
        </p>
        <button @click="acceptCookies">Принять</button>
        <button @click="rejectCookies">Отклонить</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isAccepted: false,
      };
    },
    mounted() {
      const cookiesAccepted = this.getCookie('cookiesAccepted');
      if (cookiesAccepted) {
        this.isAccepted = true;
      }
    },
    methods: {
      acceptCookies() {
        this.setCookie('cookiesAccepted', 'true', 365); // Устанавливаем cookie на 365 дней
        this.isAccepted = true;
      },
      rejectCookies() {
        // Добавьте действия по отклонению файлов cookie (по желанию)
      },
      setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = 'expires=' + date.toUTCString();
        document.cookie = name + '=' + value + '; ' + expires + '; path=/';
      },
      getCookie(name) {
        const cookieName = name + '=';
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
          let cookie = cookies[i];
          while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
          }
          if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
          }
        }
        return '';
      },
    },
  };
  </script>
  
  <style scoped>
  .cookies-banner {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #333;
    color: #fff;
    padding: 10px;
    text-align: center;
    z-index: 1000;
  }
  
  button {
    margin: 0 10px;
    padding: 5px 10px;
    background: #007BFF;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background: #0056b3;
  }
  </style>
  