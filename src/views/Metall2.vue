<template>
    <div>
      <div v-if="metals.length === 0">Нет данных о металлах</div>
      <div v-else class="row">
        <div v-for="metal in metals" :key="metal.name" class="col-lg-3 col-md-12 mb-4">
          <h6 style="font-size:5px">{{ metal.name }}</h6>
          <p style="font-size:5px">Цена: ${{ metal.price.toFixed(2) }} за унцию</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      metals: Array,
    },
  };
  </script>
  