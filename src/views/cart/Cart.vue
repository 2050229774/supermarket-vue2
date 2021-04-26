<template>
  <div id="cart">
    <car-tile @cut="cuts()"></car-tile>
    <div id="cart-null" v-if="$store.state.carlist.length == 0">
      <h1>购物车为空！</h1>
    </div>
    <div v-else>
      <cart-message
      @increase = "addition($event)"
      @remove = "subtraction($event)"
      ></cart-message>
      <bottom-nav
      :total="totals"
      :delyn="delyns"
      @reset="reset()"
      ></bottom-nav>
    </div>
  </div>
</template>

<script>
  import carTile from "./cart-child/carTile.vue"
  import cartMessage from './cart-child/cartMessage.vue'
  import bottomNav from './cart-child/bottomNav.vue'

  export default {
    name: 'Cart',
    data(){
      return {
        totals: 0,
        delyns: true
      }
    },
    components:{
      carTile,
      cartMessage,
      bottomNav
    },
    methods:{
      cuts(){
        this.delyns = !this.delyns
      },
      reset(){
        this.totals = 0;
      },
      addition(event) {
        this.totals += event;
      },
      subtraction(event) {
        this.totals -= event;
      }
    }
  }
</script>

<style lang="scss" scoped>
  #cart {
    height: 100vh;
    background-color: $lsgray;
    #cart-null {
      text-align: center;
      margin-top: 200px;
    }
  }
</style>
