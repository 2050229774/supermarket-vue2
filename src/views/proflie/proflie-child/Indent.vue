<template>
  <div class="indent">
    <div class="indent-data">
      <div>
        <img src="~assets/img/personage/收藏.png">
        <span>收藏</span>
        <p>{{12}}</p>
      </div>
      <div>
        <img src="~assets/img/personage/订阅.png" alt="">
        <span>订阅店铺</span>
        <p>{{13}}</p>
      </div>
      <div>
        <img src="~assets/img/personage/足迹.png" alt="">
        <span>足迹</span>
        <p>{{14}}</p>
      </div>
    </div>
    <div class="indent-skip">
      <h2>我的订单</h2>
      <img src="~assets/img/personage/跳转2.png">
      <p>查看全部</p>
    </div>
    <div class="indent-content">
      <div v-for="content in indentContent">
        <img :src="content.src">
        <span>{{content.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Indent',
    data(){
      return {
        indentContent: [
          {
            src: require("assets/img/personage/待付款.png"),
            title: "待付款"
          },
          {
            src: require("assets/img/personage/待发货.png"),
            title: "待发货"
          },
          {
            src: require("assets/img/personage/待收货.png"),
            title: "待收货"
          },
          {
            src: require("assets/img/personage/待评价-我的.png"),
            title: "待评价"
          },
          {
            src: require("assets/img/personage/退款.png"),
            title: "退款/售后"
          }
        ]
      };
    }
  }
</script>

<style lang="scss" scoped>
  .indent {
    height: 180px;
    background-color: $whiteBackground;
    margin: 10px;
    border-radius: 10px;
    padding: 0 10px;
  }

  .indent-data {
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: solid 2px $shortWhite;
    div {
      flex: 1;
      display: flex;
      justify-content: center;
      img {
        width: 20px;
        height: 20px;
      }
      p {
        margin: 0;
        color: $darkgray;
      }
      span {
        margin: 0 3px;
      }
    }
  }

  .indent-skip {
    height: 30px;
    margin: 10px 0;
    h2 {
      float: left;
      margin: 0;
      font-size: 15px;
      font-weight: 600;
    }
    img {
      float: right;
      width: 20px;
      height: 20px;
    }
    p {
      float: right;
      font-size: 15px;
      margin: 0;
      color: $lightGray;
    }
  }

  .indent-content {
    display: flex;
    div {
      flex: 1;
      img {
        display: block;
        width: 30px;
        margin: 0 auto;
        height: 30px;
      }
      span {
        display: block;
        text-align: center;
        font-size: $medium;
      }
    }
  }
</style>
