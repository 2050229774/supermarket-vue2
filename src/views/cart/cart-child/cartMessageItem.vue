<template>
  <div class="cart-item" @click="add()">
    <div class="cart-item-select">
      <img v-if="yn" src="../../../assets/img/cart/15-圆圈未选.png">
      <img v-else src="../../../assets/img/cart/选中.png" alt="">
    </div>
    <div class="cart-item-img">
      <img :src="cartItem.imgShow">
    </div>
    <div class="cart-item-conter">
      <p>{{cartItem.imgDescribe}}</p>
      <div>￥<span>{{cartItem.discountPrices}}</span></div>
      <div>x <span>{{cartItem.carConter}}</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "cartMessageItem",
    data(){
      return {
        yn: true
      }
    },
    props: {
      cartItem: {
        type: Object
      }
    },
    methods:{
      heji(){
        //合计
        const hj = this.cartItem.discountPrices * this.cartItem.carConter
        // 增加
        if(this.yn == false){
          this.$emit('increase',hj)
        }else{   // 删除
          this.$emit('remove',hj)
        }
      },
      add(){
        this.yn = !this.yn
        this.heji()
      }
    },
    mounted() {
      this.$root.Bus.$on('checkAll',content=>{
        console.log(content);
        this.yn = content;
        this.heji()
      })

      this.$root.Bus.$on('deletes',()=>{
        if(this.yn == false){
          // 选中情况下 获取数组下标提交到vuex删除数据
          console.log('删除')
          this.$store.commit("deletes",this.$store.state.carlist.indexOf(this.cartItem))
          console.log()
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .cart-item {
    height: 150px;
    background-color: #ffffff;
    margin: 20px 10px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    .cart-item-select {

      img {
        height: 25px;
        width: 25px;
        margin: 0 10px;
      }
    }
    .cart-item-img {
      img {
        width: 120px;
        height: 120px;
        border-radius: 15px;
      }
    }
    .cart-item-conter {
      height: 120px;
      margin: 0 10px;
      position: relative;
      p{
        font-size: 15px;
        height: 15px;
        overflow: hidden;
      }
      div:nth-child(2) {
        position: absolute;
        bottom: 10px;
        color: #ff0000;
        span {
          font-size: 23px;
        }
      }
      div:nth-child(3) {
        position: absolute;
        right: 10px;
        bottom: 10px;
      }

    }
  }
</style>
