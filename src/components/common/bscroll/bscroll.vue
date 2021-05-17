<template>
  <div class="wrapper" ref="wrapper" >
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  // 导入BetterScroll插件
  import BetterScroll from 'better-scroll'

  export default {
    name: 'Bscroll',
    data(){
      return {
        scroll: null
      }
    },
    methods: {
      // 跳转到指定位置
      scrollTo(x,y,time=500) {
        this.scroll.scrollTo(x,y,time)
      },
      // 重新计算BetterScroll实际高度
      // 由于img等动态数据未加载完成，就计算
      // BetterScroll高度是不准确的需等数据改变后再重新计算
      refresh() {
         this.scroll.refresh()
         console.log("重新计算BetterScroll高度",this.scroll)
      }
    },
    mounted(){
      this.scroll = new BetterScroll(this.$refs.wrapper, {
        probeTybe: 3,   //触发滚动事件频率
        click: true,    //滚动内部可以实现点击
        pullUpLoad: true    //可监听底部上拉事件
      })

      this.scroll.on('scroll',(position)=>{
        // 把滚动事件提交到外部组件
        this.$emit('scroll',position)
			})

      this.scroll.on('pullingUp',()=>{
				// console.log('上拉加载更多');
        this.refresh()
			})
    }
  }
</script>

<style>
  .wrapper,
  .content {
    margin: 0;
    border: 0;
    padding: 0;
  }
  .wrapper {
    position: absolute;
    top: 44px;
    bottom: 49px;
  }
</style>
