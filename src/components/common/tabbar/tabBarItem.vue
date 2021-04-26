<template>
  <div class="tab-bar-item" @click="active">
    <div v-if="isactive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="atPresent">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabBarItem",
    data() {
      return {
        isactive: true
      }
    },
    props: {
      // 文字颜色
      color: {
        type: String,
        default: 'orange'
      },
      // 路由目标
      link: String
    },
    computed: {
      isActivefn() {
        // 是否是当前路由
        return this.$route.path.indexOf(this.link) !== -1
      },
      atPresent() {
        // 当路由路径改变，动态修改值
        this.isactive = this.isActivefn ? this.isactive = true : this.isactive = false;
        return this.isActivefn ? {
          color: this.color
        } : {};
      }
    },
    methods: {
      active() {
        // 路由跳转
        this.$router.replace(this.link)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    align-self: center;
    font-size: $medium;
    font-weight: 200;
    
    img {
      width: 25px;
      height: 25px;
      margin-top: 3px;
    }
  }
</style>
