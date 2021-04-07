<template>
  <div class="tab-control" :style="stylee">
    <div class="tab-control-child" v-for="(i,name,index) in namee" @click="activef(index,name)">
      <span :class="{active: index === itemactive}">{{i}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tabControl',
    data() {
      return {
        stylee: {
          height: this.altitude,
          lineHeight: this.altitude,
          backColor: this.backgroundColor
        },
        itemactive: 0
      }
    },
    props: {
      altitude: {
        type: String,
        default: '30px'
      },
      backgroundColor: {
        type: String,
        default: '#ffffff'
      },
      namee: {
        type: Object
      }
    },
    methods:{
      activef(index,name){
        this.itemactive = index;
        this.$emit('thisActive',name)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tab-control {
    display: flex;
    width: 100%;
    margin-bottom: 6px;
    position : sticky ;
    top : 44px ;
    background-color: #ffffff;
    .tab-control-child {
      flex: 1;
      text-align: center;
    }
    .active {
      color: #ffaaff;
      border-bottom: solid 2px #ffaaff;
      padding: 0 10px;
      padding-bottom: 6px;
    }
  }
</style>
