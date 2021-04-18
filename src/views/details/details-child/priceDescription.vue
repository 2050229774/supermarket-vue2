<template>
  <div id="price">
    <h2>价格说明</h2>
    <h3>划线价格</h3>
    <p v-for="p in priceDescription.lineation">{{p}}</p>
    <h3>未划线价格</h3>
    <p v-for="pp in priceDescription.NotLine">{{pp}}</p>
  </div>
</template>

<script>
  export default {
    name: "priceDescription",
    props:{
      priceDescription: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  #price {
    h2 {
      font-size: 18px;
      font-weight: 300;
      border-bottom: solid 1px #9b9b9b;
    }
    h3 {
      color: #e74d00;
      font-size: 17px;
      font-weight: 400;
      margin: 0;
      padding: 0;
    }
    p {
      text-indent: 2em;
      margin-top: 0;
      margin-bottom: 20px;
      font-size: 15px;
    }
  }
</style>
