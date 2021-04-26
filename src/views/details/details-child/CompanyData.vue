<template>
  <div id="commpany">
    <div class="headline">
      <p>{{CompanyDatas.imgDescribe}}</p>
    </div>
    <div class="cost">
      <span>￥{{CompanyDatas.discountPrices}}</span>
      <span>￥{{CompanyDatas.realPrice}}</span>
    </div>
    <div class="real-time">
      <div>销量{{CompanyDatas.salesVolume}}</div>
      <div>收藏{{CompanyDatas.collect}}人</div>
      <div>{{CompanyDatas.shipments}}小时发货</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CompanyData",
    props:{
      CompanyDatas: {
        type: Object,
        required: true
      }
    }
  }

</script>

<style lang="scss">
  #commpany {
    padding-bottom: 10px;
    border-bottom: solid 1px $darkgray;
    .headline {
      font-size: 21px;
      margin: 0;
      p {
        margin: 10px;
      }
    }

    .cost {
      span:nth-child(1){
        font-size: 30px;
        color: $nacarat;
      }
      span:nth-child(2) {
        font-size: 13px;
        color: $darkgray;
        text-decoration: line-through;
      }
    }

    .real-time {
      display: flex;
      margin-top: 5px;
      div {
        font-size: 15px;
        flex: 1;
        text-align: center;
        color: $darkgray;
      }
    }

  }

</style>
