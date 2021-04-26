<template>
  <div class="tab-control" :style="stylee">
    <div class="tab-control-child" v-for="(i,name) in namee" @click="activef(name)">
      <span :class="{active: name === itemactive}">{{i}}</span>
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
          backgroundColor: this.backgroundColor,
          marginTop: this.mtop
        },
        itemactive: 'pop'
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
      mtop: {
        type: String,
        default: '0'
      },
      namee: {
        type: Object
      }
    },
    methods: {
      activef(name) {
        // 修改为当前激活name
        this.itemactive = name;
        // 抛出当前激活name
        this.$emit('thisActive', name)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tab-control {
    display: flex;
    width: 100%;
    padding-bottom: 8px;
    margin-bottom: 2px;
    background-color: $whiteBackground;
    position: relative;
    z-index: 100;

    .tab-control-child {
      flex: 1;
      text-align: center;
    }

    .active {
      color: $activatePink;
      border-bottom: solid 2px $activatePink;
      padding: 0 10px;
      padding-bottom: 6px;
    }
  }
</style>
