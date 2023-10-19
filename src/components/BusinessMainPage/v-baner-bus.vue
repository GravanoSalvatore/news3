
<template lang="">
  <div>
      <div id="intro2" class="bg-image shadow-2-strong">
    <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
      <div class="container d-flex align-items-center justify-content-center text-center h-100">
        <div class="text-white ">
          <metal/>
          <h1 class="mb-3 text-secondary"><strong>Global News Hub</strong></h1>
          <h5 class="mb-4 text-secondary"><strong>Business news</strong> </h5>
          <span  type="button" data-bs-toggle="modal" data-bs-target="#exampleModal-4 " role="button"
             >Stocks</span>
         
         
        </div>
      </div>
    </div>
  </div>
 



  <div class="modal fade" style="background-color:black" id="exampleModal-4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" >
<div class="modal-content">
  
  <div class="modal-header" >
    <h1 class="modal-title fs-5" id="exampleModalLabel"> <a class="navbar-brand " href="#"><img style="width:70px" :src="logo"></a></h1>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body text-black" style="">
    <h3 class="text-center fw-bold">Brief description of top companies</h3>
    <top/>
  
  </div>
 
</div>
</div>
</div>




 </div>
</template>
<script>
import metal from '@/views/Metall.vue'
import top from '../../views/TopCompany.vue'
export default {
  components:{
    top,
    metal
  }
}
</script>
<style lang="css" scoped>
span{
  border:2px solid white;
  padding: 10px;
}
span:hover{
  /* background-color: rgb(111, 156, 199); */
}
  #intro2 {
     
      background-image: url("https://www.gawieleroux.co.za/sites/default/files/2023-03/Blog%20photos_5%20enterprises.jpg");
      height: 120vh;
    }
    .text-white{
      margin-top: 250px;
    }
    h1{
      font-size: 45px;
    }
</style>