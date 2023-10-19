 

<template>
   
        <!-- <div id="intro3" class="bg-image shadow-2-strong">
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.2);">
        <div class="container d-flex align-items-center justify-content-center text-center h-100">
         
        </div>
      </div>
    </div> -->
    <div class="container">
    <br/><br/>
    <!-- <h1><strong>Top</strong></h1> -->
    <div class="row ">
  
   
      <div class="col" v-for="crypto in displayedCryptocurrencies" :key="crypto.id">
        <div class="card shadow-sm">
        <div class="card-body">
        <img class="bd-placeholder-img card-img-top" :src="crypto.image" :alt="crypto.name"><br/>
     
        <span class="name">{{ crypto.name }}</span><br/>
      
        <span class="symbol">({{ crypto.symbol }})</span><br/>
     <span> Price:${{ crypto.current_price }}</span><br/> <span>(Market Cap: ${{ crypto.market_cap.toLocaleString() }})</span>
         <!-- <span :class="{'positive-change': crypto.price_change_percentage_24h > 0, 'negative-change': crypto.price_change_percentage_24h < 0}"><br/>
        <span> 24h: {{ crypto.price_change_percentage_24h.toFixed(2) }}%</span>
        </span><br/>
       <span> 24h Volume: ${{ crypto.total_volume.toLocaleString() }}</span>
         -->
       
         <span :class="{'positive-change': crypto.price_change_percentage_24h > 0, 'negative-change': crypto.price_change_percentage_24h < 0}">
  <br />
  <span v-if="crypto.price_change_percentage_24h !== null">24h: {{ crypto.price_change_percentage_24h.toFixed(2) }}%</span>
</span>
<br />
<span v-if="crypto.total_volume !== null">24h Volume: ${{ crypto.total_volume.toLocaleString() }}</span>

            <div v-if="crypto.exchange_with_max_volume">
              Largest Volume Exchange: {{ crypto.exchange_with_max_volume.name }} ({{ crypto.exchange_with_max_volume.symbol }})
              <br/>
              Volume: ${{ crypto.exchange_with_max_volume.volume.toLocaleString() }}
            </div>
      </div>
    </div>
</div>
</div>



    <div class="pagination">
      <span class="prev-bt" @click="prevPage" :disabled="currentPage === 1">Prev</span>
      <span class="page-numbers">{{ currentPage }} / {{ pageCount }}</span>
      <span class="next-bt" @click="nextPage" :disabled="currentPage === pageCount">Next</span>
    </div>



    
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cryptocurrencies: [],
      currentPage: 1,
      perPage: 18, 
    };
  },
  computed: {
    displayedCryptocurrencies() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.cryptocurrencies.slice(startIndex, endIndex);
    },
    pageCount() {
      return Math.ceil(this.cryptocurrencies.length / this.perPage);
    },
  },
  mounted() {
    this.fetchCryptocurrencies();
  },
  methods: {
    async fetchCryptocurrencies() {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
            vs_currency: 'usd',
             ids:'bitcoin, ethereum, tether, binance-coin, cardano, xrp, solana, polkadot, dogecoin, usd-coin, avalanche, terra, elrond, chainlink, litecoin, bitcoin-cash, stellar, vechain, filecoin, tron, eos, monero, cosmos, tezos, ftx-token, neo, celsius-network, dash, iota, zcash, the-graph, hedgetrade, decentraland, arweave, sushiswap, basic-attention-token, zilliqa, 0x, augur, civic, dharma, band-protocol, edgeware, staked-ether, ankr, ren, verge, crypto-com-coin, ampleforth, request, truefi, illuvium, keep3rv1, smooth-love-potion, aelf, atletico-madrid-fan-token, bitcoin-gold, celo-dollar, fan-token, lina, waykichain, hive, mithril, wazirx, xinfin-network, nebulas, aavegotchi, math-token, harmony, singularitynet, small-love-potion, perlin, omni, btse-token, maidsafecoin, kleros, x-cash, grin, ravencoin, uquid-coin, nxt, zap, elrond-gold, byteball-bytes, chia, adex, aventus, dmarket, hypercash, opium, digixdao, tokenomy, chromia, latoken, district0x, allianceblock, keeperdao, gameswap',
              order: 'market_cap_desc',
              per_page: 100,
              page: 1,
              sparkline: false,
            },
          }
        );
        this.cryptocurrencies = response.data;
      } catch (error) {
        console.error('Error fetching cryptocurrencies:', error);
      }
    },
    nextPage() {
      if (this.currentPage < this.pageCount) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
};
</script> 
<style lang="css" scoped>
    #intro3 {
        background-image: url("https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1434/https://s3.cointelegraph.com/uploads/2022-12/4330ba29-1f5d-42c0-96c9-440f2cda248e.jpg");
        height: 100vh;
      }
</style>









<style lang="scss" scoped>
h1{
  text-align: center;
}
span{
  font-size: 12px;
}
.symbol{
  text-transform: uppercase;
  font-size: 17px;
}
.name{
  font-size: 20px;
  font-weight: bold;
}
li {
  list-style: none;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.prev-bt,
.next-bt {
  margin: 8px;
  // background-color: white;
  color: rgb(248, 2, 2);
  // box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  // border-radius: 2px;
  padding: 7px;
  font-weight: bold;
}
.card{
 background-color: none;
  margin: 10px;
}
.card:hover{
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
}
.prev-bt:hover,
.next-bt:hover {
  background-image: linear-gradient(to right, #040d1d, #053684);
  color: white;
}

.positive-change {
  color: green;
}

.negative-change {
  color: red;
}
.card{
              border: none !important;
              box-shadow: none !important;
          }
          .card{
              background-color: transparent !important;
          }
          
</style>
