<template>
 <div id="parameter">
   <h3>产品参数</h3>
   <ul>
     <li v-for="ary in parameter">{{ary[0]}} <span>:</span> {{ary[1]}}</li>
   </ul>
 </div>
</template>

<script>
  export default {
    name: "parameter",
    props:{
      parameter: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  #parameter {
    color: #a4a3b9;
    h3 {
      color: #6c6c7a;
      font-size: 20px;
      font-weight: 500;
    }
    li {
      margin-top: 5px;
      font-weight: 400;
    }
  }
</style>
