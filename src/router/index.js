// Composables
import { createRouter, createWebHistory } from "vue-router";
import News from "@/views/CryptoNews.vue";
import Ico from "@/views/Ico.vue";
import Home from "@/views/Home.vue";
import Crypto from "@/views/Crypto.vue";
 import Sport from "@/views/Sport.vue";
 import Top from "@/views/TopCompany.vue";
//import MainCrypto from "@/views/MainCrypto.vue";
import General from "@/views/General.vue";
 import People from "@/views/People.vue";
import Nft from "@/views/Nft.vue";
import Business from "@/views/Business.vue";
import Defi from "@/views/Defi.vue";
import Ai from "@/views/Ai.vue";
 import Tech from "@/views/Tech.vue";
import Entertainment from "@/views/Entertainment.vue";
import Stocks from "@/views/Stocks.vue";
 import Science from '@/views/Science.vue';
 import Health from '@/views/Health.vue'
import CryptoPage from '@/views/cryptoPage.vue'
const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
    meta: { title: "HOME" },
    children:[
      {
        path:'General',
        component:General,
        meta: { title: "GENERAL" },
      },
      {
        path:'Business',
        component:Business,
        meta: { title: "BUSINESS" },
      },
      {
        path:'Sport',
        component:Sport,
        meta: { title: "SPORT" },
      },
      {
        path:'Tech',
        component:Tech,
        meta: { title: "TECHNOLOGY" },
      },
      {
        path:'Health',
        component:Health,
        meta: { title: "HEALTH" },
      },
      {
        path:'Science',
        component:Science,
        meta: { title: "SCINCE" },
      },
      {
        path:'Entertainment',
        component:Entertainment,
        meta: { title: "ENTERTAINMENT" },
      },
    ]
  },
  {
    path: "/Crypto",
    component: Crypto,
    name: "Crypto",
    meta: { title: "CRYPTO" },
    children:[
      {
        path:'Defi',
        component:Defi,
        meta: { title: "DEFI" },
      },
      {
        path:'People',
        component:People,
        meta: { title: "PEOPLE" },
      },
      {
        path:'News',
        component:News,
        meta: { title: "NEWS" },
      },
      {
        path:'Nft',
        component:Nft,
        meta: { title: "NFT" },
      },
      {
        path: "CryptoPage",
        component: CryptoPage,
        meta: { title: "T0P" }
    },

    ]
  
  
  },
   
      // {
      //   path: "/Nft",
      //   component: Nft,
      //   meta: { title: "NFT" },
      // },
      
      
      // {
      //   path: "/People",
      //   component: People,
      //   meta: { title: "PEOPLE" },
      // },
      // {
      //   path: "/Defi",
      //   component: Defi,
      //   meta: { title: "DEFI" },
      // },
      {
        path: "/CryptoPage",
        component: CryptoPage,
        meta: { title: "CRYPTOPAGE" }
    },
  // {
  //   path: "/Sport",
  //   component: Sport,
  //   name: "Sport",
  //   meta: { title: "SPORT" },
  // },

  
  // {
  //   path: "/Business",
  //   component: Business,
  //   name: "Business",
  //   meta: { title: "BUSINESS" },
  // },
  
  {
    path: "/Stocks",
    component: Stocks,
    name: "Stocks",
    meta: { title: "STOCKS" },
  },
  //  {
  //   path: "/Tech",
  //   component: Tech,
  //   name: "Tech",
  //   meta: { title: "TECH" },
  // },
  {
    path: "/CryptoPage",
    component: CryptoPage,
    name: "CryptoPage",
    meta: { title: "CRYPTOPAGE" },
  },
  // {
  //   path: "/Entertainment",
  //   component: Entertainment,
  //   name: "Entertainment",
  //   meta: { title: "E!" },
  // },
  // {
  //   path: "/Science",
  //   component: Science,
  //   name: "Science",
  //   meta: { title: "SCIENCE" },
  // },
  // {
  //   path: "/Health",
  //   component: Health,
  //   name: "Health",
  //   meta: { title: "HEALTH" },
  // },
  {
    path: "/Ai",
    component: Ai,
    name: "Ai",
    meta: { title: "AI" },
  },
  {
    path: "/Ico",
    component: Ico,
    name: "Ico",
    meta: { title: "ICO" },
  },
  {
    path: "/Top",
    component: Top,
    name: "Top",
    meta: { title: "TOP" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
