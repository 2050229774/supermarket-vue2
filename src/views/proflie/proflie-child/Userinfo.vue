<template>
  <div class="userinfo">
    <div class="userinfo-headPortrait">
      <img :src="data.headPortrait">
    </div>
    <div class="userinfo-conter">
      <h1>{{data.userName}}</h1>
      <p>{{data.account}}</p>
    </div>
    <div class="userinfo-skip">
      <img src="~assets/img/personage/跳转.png">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Userinfo',
    props: ['data']
  }
</script>

<style lang="scss" scoped>
  .userinfo {
    background-color: $subject;
    display: flex;
    align-items: center;
    height: 110px;
  }
  .userinfo-headPortrait {
    flex: 3;
    img {
      width: 70%;
      height: 70%;
      margin: 0 15%;
      border-radius: 10px;
    }
  }
  .userinfo-conter {
    flex: 5;
    h1 {
      color: $whiteBackground;
      font-size: 20px;
      font-weight: 400;
      margin: 0;
    }
    p {
      color: $shortWhite;
      font-weight: 200;
      margin: 5px 0;
    }
  }
  .userinfo-skip {
    flex: 2;
    img {
      width: 40%;
      height: 40%;
      margin: 0 30%;
    }
  }
</style>
