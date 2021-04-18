<template>
  <div id="store">
    <div id="storedata">
      <div id="storedata-left">
        <img :src="StoreDatas.StoreTrademark">
        <h1>{{StoreDatas.shopName}}</h1>
      </div>
      <div id="storedata-right">
        <p>宝贝描述{{StoreDatas.BabyDescription}} <span style="color: #209313;">低</span> </p>
        <p>卖家服务{{StoreDatas.DetailedSellerRatings}} <span>高</span> </p>
        <p>物流服务{{StoreDatas.logisticService}} <span>高</span> </p>
      </div>
    </div>
    <div id="storedata-q">
      <div>进店逛逛</div>
      <div>全部宝贝</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "StoreData",
    props:{
      StoreDatas: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  #store {
    height: 130px;
    margin-top: 10px;
    margin-bottom: 20px;
    overflow: hidden;
    #storedata {
       #storedata-left{
         height: 100px;
         float: left;
         margin-left: 10px;
         img {
           height: 60px;
           border: solid 1px #9a9c84;
           border-radius: 20px;
         }
         h1 {
           height: 20px;
           margin: 0;
           padding: 0;
           font-size: 18px;
         }
       }
       #storedata-right {
         float: right;
         margin-top: 5px;
         margin-right: 5px;
         p {
           color: #8f8e87;
           margin: 5px 0;
           span {
             color: #ff5500;
           }
         }
       }
    }
    #storedata-q {
      margin-top: 100px;
      display: flex;
      justify-content: center;
      div {
        display: inline-block;
        width: 90px;
        text-align: center;
        border: solid 2px #ff5500;
        padding: 4px;
        border-radius: 30px;
        margin-left: 10px;
      }
    }
  }
</style>
