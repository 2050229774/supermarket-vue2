<template>
  <div id="details-bar">
    <div id="details-bar-left">
      <div><img src="../../../assets/img/details/客服.png"><div>客服</div></div>
      <div><img src="../../../assets/img/details/店铺.png"><div>店铺</div></div>
      <div><img src="../../../assets/img/details/收藏.png"><div>收藏</div></div>
    </div>
    <div id="details-bar-vehicle" @click="add()">加入购物车</div>
    <div id="details-bar-buy">购买</div>
  </div>
</template>

<script>
  export default {
    name: "detailsBar",
	methods: {
		add() {
      this.$emit('addz')
		}
	}
  }
</script>

<style lang="scss">
  #details-bar {
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    height: 50px;
    padding: 5px 0;
    background-color: #f0f0f0;
    border-top: solid 1px #cecece;
    #details-bar-left {
      flex: 2;
      display: flex;
      div {
         flex: 1;
         font-size: 13px;
         text-align: center;
         img {
           width: 35%;
         }
      }
    }
    #details-bar-vehicle,
    #details-bar-buy {
      flex: 1;
      background-color: #fa7b6a;
      text-align: center;
      height: 35px;
      line-height: 35px;
      font-size: 13px;
      color: #ffffff;
      font-weight: 200;
    }
    #details-bar-vehicle {
      background-color: #fa7b6a;
      border-radius: 30px 0 0 30px;
    }
    #details-bar-buy {
      background-color: #ff3f26;
      border-radius: 0 30px 30px 0;
    }
  }
</style>
