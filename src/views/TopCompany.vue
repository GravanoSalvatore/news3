<template lang="">
    <br/>
   
      


  


     
      <!-- <div id="intro2" class="bg-image shadow-2-strong">
    <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);"> -->

<div class="container text-center">

  <select class="select " v-model="selectedCompany">
    <option value="" disabled class="text-white"><span class="">Select Company</span></option>
    <option v-for="value in stock" :key="value.stock" :value="value">{{ value.companyName }}</option>
  </select>

  <div v-if="selectedCompany">
   
   


    <p class="card-text card-body">
                  <h5 class="card-title "><strong> {{ selectedCompany.companyName }}</strong></h5>
                  <u class="">  <span>{{ selectedCompany.symbol }}</span></u><br/>
                  <u class="">  <span class="">Price:{{ selectedCompany.price}} $</span></u><br/>
                    <u><span>Mcap:{{selectedCompany.mktCap}}</span></u><br/>
                    <u class=""> <span>Exchange:{{selectedCompany.exchange}}</span></u><br/>
                  <u class="">  <span>Industry:{{selectedCompany.industry}}</span></u><br/>
                  <u class="">   <span>Ceo:{{selectedCompany.ceo}}</span></u><br/>
                  <u class=""> <span>Country:{{selectedCompany.country}}</span></u><br/>
                   
                  <u class="">  <span>Phone:{{selectedCompany.phone}}</span></u><br/>
                  <u class="">  <span>Address:{{selectedCompany.address}}</span></u><br/>
                  <u class="">   <span>City:{{selectedCompany.city}}</span></u><br/>
                  <u class="">  <span>State:{{selectedCompany.state}}</span></u><br/>
                 <p> <u class="">  <span><strong>{{selectedCompany.description}}</strong></span></u></p><br/>
                  
 
                  <button @click="openWebsite(selectedCompany.website)"><strong class="">{{selectedCompany.website}}</strong></button>

                   
                   
                </p> 
  </div>

</div>


  <br/><br/>
      
      
     
    <!-- </div>
 
  
     
  
  
    </div> -->







</template>
<script lang="">
 import axios from 'axios'

 export default {
   name: 'Stocks',
   data() {
     return {
      img:'https://mir-s3-cdn-cf.behance.net/projects/404/80440e173273301.Y3JvcCwyNDk5LDE5NTUsMCww.jpg',
       stock: [],
       errors: [],
       selectedCompany: null
     }
   },

methods:{
    openWebsite(url) {
    window.open(url, '_blank');
  }
},


   created() {
     axios.get('https://financialmodelingprep.com/api/v3/profile/AAPL,NVDA,TSLA,AMD,INTC,MDB,SPCE,V,DAL,DOCU,OKTA,AMZN,PINS,TRIP,GDDY,DIS,MCD,NOK,UPWK,IBM,FB,ZM,OZON,NFLX,EA,HLT,H,CCL,META?apikey=6c9be8fcb7df7894ba5ae48be14935fc')
     .then(response => {
       this.stock = response.data
       console.log(response)
     })
     .catch(e => {
       this.errors.push(e)
     })
   }
 }
</script>
<style lang="scss" scoped>

#intro2 {
     
     background-image: url("https://www.gawieleroux.co.za/sites/default/files/2023-03/Blog%20photos_5%20enterprises.jpg");
     height: 1500px;
   }
.select{
    margin-top: 100px;
    width: 230px;
    list-style: none;
    border:2px solid grey;
    padding:3px;
    border-radius: 5px;
}
.select{
       
        box-shadow: none !important;
      }
u,option{
    text-decoration: none;
    
}



  
</style>