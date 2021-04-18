<template>
  <div class="wrapper" ref="wrapper" >
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll'

  export default {
    name: 'Bscroll',
    data(){
      return {
        scroll: null
      }
    },
    methods: {
      scrollTo(x,y,time=500) {
        this.scroll.scrollTo(x,y,time)
      },
      refresh() {
         this.scroll.refresh()
         console.log("执行")
      }
    },
    mounted(){
      this.scroll = new BetterScroll(this.$refs.wrapper, {
        probeTybe: 3,
        click: true,
        pullUpLoad: true
      })

      this.scroll.on('scroll',(position)=>{
        this.$emit('scroll',position)
			})

      this.scroll.on('pullingUp',()=>{
				console.log('上拉加载更多');
        this.refresh()
				setTimeout(()=>{this.scroll.finishPullUp()},1000)
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
