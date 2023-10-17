<template>
    <nav class="breadcrumbs">
      <router-link v-for="(route, index) in matched" :to="route" :key="route.name">
        {{ route.meta.title }}
        <span v-if="index < matched.length - 1"> / </span>
      </router-link>
    </nav>
  </template>
  
  <script>
  export default {
    computed: {
      matched() {
        return this.$route.matched.filter((route) => route.meta && route.meta.title);
      },
    },
  };
  </script>
  
  <style>
  .breadcrumbs {
    margin: 10px 0;
    font-size: 10px;
  }
  a:hover{
    text-decoration: underline;
    color: white;
  }
  a{
    text-decoration: none;
    color:white
  }
  </style>
  