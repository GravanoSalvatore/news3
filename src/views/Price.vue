<template>
    <div class="crypto-prices">
      <div v-for="crypto in cryptos" :key="crypto.name" class="crypto-box">
        <h6 class="fw-bold">{{ crypto.name }}</h6>
        <p class="fw-bold">Price: ${{ crypto.price ? crypto.price.toFixed(2) : 'Loading' }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        cryptos: [
          { name: "Bitcoin", symbol: "bitcoin" },
          { name: "Ethereum", symbol: "ethereum" },
        //   { name: "Ripple", symbol: "ripple" },
          { name: "Tether", symbol: "tether" },
        //   { name: "Binance Coin", symbol: "binancecoin" },
        //   { name: "Cardano", symbol: "cardano" },
        //   { name: "Solana", symbol: "solana" },
         
        ],
      };
    },
    methods: {
      async fetchCryptoPrices() {
        for (const crypto of this.cryptos) {
          try {
            const response = await axios.get(
              `https://api.coingecko.com/api/v3/simple/price?ids=${crypto.symbol}&vs_currencies=usd`
            );
            const data = response.data;
            crypto.price = data[crypto.symbol].usd;
          } catch (error) {
            console.error(`Error fetching ${crypto.name} prices:`, error);
          }
        }
      },
    },
    mounted() {
      this.fetchCryptoPrices();
  
      // Обновляем цены каждую минуту (или настройте по вашему усмотрению)
      setInterval(this.fetchCryptoPrices, 60000);
    },
  };
  </script>
  
  <style scoped>
  .crypto-prices {
    display: flex;
    justify-content: space-around;
    margin: 3px;
  }
  
  .crypto-box {
    text-align: center;
    padding: 3px;
  }
  
  h6, p {
    font-size: 14px;
    color: rgb(254, 250, 250);
  }
  </style>
  