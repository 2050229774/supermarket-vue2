<template>
  <div id="cartconter">
    <cart-message-item
    :cartItem="obj"
     v-for="obj in $store.state.carlist"
     v-on="$listeners"
     ></cart-message-item>
  </div>
</template>

<script>

  import cartMessageItem from './cartMessageItem.vue'

  export default {
    name: "cartMessage",
    components: {
      cartMessageItem
    }
  }
</script>

<style>
</style>
