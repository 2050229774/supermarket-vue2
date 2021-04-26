<template>
  <div class="home">
    <nav-bar>
      <template v-slot:center>supermarket</template>
    </nav-bar>
    <!-- tab-control用于到指定位置代替bscroll中的tab-control -->
    <tab-control
      ref='tabControl1'
      :namee="item"
      mtop="44px"
      @thisActive="skip($event)"
      v-show="tabts">
    </tab-control>
    <bscroll
      ref="bscroll"
      @scroll="conceal($event)" >
      <swipe
        :speed="speedd"
        :stopTime="stopTimee">
        <swipen-img way="https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g6/M00/0D/02/ChMkKmBdVPOIBjY1ABrPpgW1TcMAAMGvwLS3r4AGs--673.jpg" />
        <swipen-img way="https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g6/M00/0D/02/ChMkKmBdVOyIFHpqACAzMosIyoQAAMGvwESmdsAIDNK017.jpg" />
        <swipen-img way="https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g6/M00/0B/00/ChMkKmBamS-IdsvVABQVFnzWDOwAAL-UACX_LYAFBUu002.jpg" />
        <swipen-img way="https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g6/M00/0E/00/ChMkKWBIH62Idfl_ACmDIs8uTGkAALKbALRyx8AKYM6513.jpg" />
        <swipen-img way="https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g6/M00/03/06/ChMkKWBmiW2IQs1bAC3Zdem1HSEAAMfzQJWr1wALdmN065.jpg" />
      </swipe>
      <recommend :item="itemm" idth="60px" />
      <recommend :item="itemmz" idth="30px" />
      <tab-control
        ref='tabControl2'
        :namee="item"
        @thisActive="skip($event)"></tab-control>
      <data-display :good="skipGoods" @imgLoad="hgRefresh(vm,$refs.bscroll.refresh,1)" ></data-display>
    </bscroll>
    <back-top @click.native="BackTop()" v-show="seat"></back-top>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import Bscroll from 'components/common/bscroll/bscroll.vue'
  import BackTop from 'components/common/BackTop/BackTop.vue'
  import tabControl from 'components/common/tabControl/tabControl.vue'
  import dataDisplay from 'components/common/dataDisplay/dataDisplay.vue'

  import Swipe from './home-child/Swipe.vue'
  import SwipenImg from './home-child/SwipeImg.vue'
  import Recommend from './home-child/recommend.vue'

  //模拟数据
  import {
    itemm,
    itemmz,
    goods
  } from './data/homeData.js'

  //网络请求
  import {
    getdata
  } from "network/home.js"

  export default {
    name: 'Home',
    data() {
      return {
        resule: null,
        speedd: 1,
        stopTimee: 2000,
        item: {
          pop: '流行',
          news: '新款',
          sell: '精选'
        },
        itemm,
        itemmz,
        goods,
        skipGoods: goods.pop,
        seat: false,
        timer: null,
        vm: this,
        tabts: false
      }
    },
    components: {
      NavBar,
      Swipe,
      SwipenImg,
      Recommend,
      tabControl,
      dataDisplay,
      Bscroll,
      BackTop
    },
    methods: {
      skip(event) {
        // 数据的跳转
        if (event === 'pop') {
          this.skipGoods = this.goods.pop;
        } else if (event === 'news') {
          this.skipGoods = this.goods.news;
        } else if (event === 'sell') {
          this.skipGoods = this.goods.sell;
        }
        // 确保吸顶效果和内部组件处于同一状态
        this.$refs.tabControl1.itemactive = event;
        this.$refs.tabControl2.itemactive = event;
      },
      BackTop() {
        // 回到顶部
        this.$refs.bscroll.scrollTo(0, 0)
      },
      conceal(position) {
        // 到达指定位置显示或消失置顶按钮
        this.seat = (-position.y) > 800;
        this.tabts = (-position.y) > this.$refs.tabControl2.$el.offsetTop
      },
      hgRefresh(vm,func,delay) {
        // 对高度更新做一个防抖
          if(vm.timer) clearTimeout(vm.timer);
          vm.timer = setTimeout(() => {
            func.apply(vm)
          },delay)
        }
    }
    // 由于没有现成的接口故网络请求部分暂时不做
    // created() {
    //   getdata().then(res => {
    //     console.log(res)
    //     this.resule = res;
    //   })
    // }
  }
</script>

<style lang="scss" scoped>
  .home {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  .nav-bar {
    background-color: $subject;
    color: $whiteBackground;
  }

  .swipe {
    height: 200px;
  }
</style>
