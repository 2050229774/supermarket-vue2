<template>
    <div id="detail">
      <details-nav-tab ref="detailsNavBar" @thisActive="active($event)"></details-nav-tab>
      <bscroll ref="scrool" @scroll="conceal($event)">
        <swipe class="hxx">
          <swipen-img :way="src" v-for="src in iid.carouselImg" ></swipen-img>
        </swipe>
        <company-data :CompanyDatas="iid"></company-data>
        <store-data :StoreDatas="iid"></store-data>
        <parameter ref="parameter" :parameter="iid.parameter"></parameter>
        <shop-imgs ref="shopImgs" :shopImgs="iid.imgs" @onload="refresh()"></shop-imgs>
        <price-description :priceDescription="iid.priceDescription" ></price-description>
        <recommend ref="recommend" :recommend="iid"></recommend>
      </bscroll>
      <back-top @click.native="BackTop()" v-show="seat"></back-top>
      <details-bar @addz="addzg()"></details-bar>
    </div>

</template>

<script>
  import Swipe from '../home/home-child/Swipe.vue'
  import SwipenImg from '../home/home-child/SwipeImg.vue'
  import Bscroll from '../../components/common/bscroll/bscroll.vue'
  import BackTop from '../../components/common/BackTop/BackTop.vue'

  import detailsNavTab from './details-child/detailsNavBar.vue'
  import CompanyData from './details-child/CompanyData.vue'
  import StoreData from './details-child/StoreData.vue'
  import shopImgs from './details-child/shopImgs.vue'
  import priceDescription from './details-child/priceDescription.vue'
  import parameter from './details-child/parameter.vue'
  import recommend from './details-child/recommend.vue'
  import detailsBar from './details-child/detailsBar.vue'

  import {csgn3, csgn4 } from "./detailsData/detailsData.js"
  export default {
    name: 'Details',
    data() {
      return {
        iid: null,
        csgn3,
        csgn4,
        counter: 0,
        seat: false,
        parameterTop: null,
        shopImgsTop: null,
        recommendTop: null,
        catData: {}
      }
    },
    components: {
      detailsNavTab,
      Swipe,
      SwipenImg,
      CompanyData,
      Bscroll,
      StoreData,
      shopImgs,
      priceDescription,
      parameter,
      recommend,
      BackTop,
      detailsBar

    },
    created() {
      this.iid = 'this.'+this.$route.params.iid
      this.iid = eval(this.iid)
      this.counter = this.iid.imgs.length
    },
    methods: {
      refresh(){
        this.counter -=1;
        if(this.counter == 0) {
          this.$refs.scrool.refresh()
          this.parameterTop = this.$refs.parameter.$el.offsetTop;
          this.shopImgsTop = this.$refs.shopImgs.$el.offsetTop;
          this.recommendTop = this.$refs.recommend.$el.offsetTop;
        }
      },
      BackTop() {
        this.$refs.scrool.scrollTo(0, 0)
      },
      conceal(position) {
        // 到达指定位置显示或消失置顶按钮
        this.seat = (-position.y) > 800;
        // console.log(-position.y,this.shopImgsTop)
        if(0 <= -position.y && -position.y < this.parameterTop && this.$refs.detailsNavBar.itemactive != 'pop'){
          this.$refs.detailsNavBar.itemactive = 'pop'
        }else if(this.parameterTop <= -position.y && -position.y < this.shopImgsTop && this.$refs.detailsNavBar.itemactive != 'estimate'){
          this.$refs.detailsNavBar.itemactive = 'estimate'
        }else if(this.shopImgsTop <= -position.y && -position.y < this.recommendTop && this.$refs.detailsNavBar.itemactive != 'details'){
          this.$refs.detailsNavBar.itemactive = 'details'
        }else if(this.recommendTop <= -position.y && this.$refs.detailsNavBar.itemactive != 'recommend'){
          this.$refs.detailsNavBar.itemactive = 'recommend'
        }
        //
        // (-position.y) == this.parameterTop
        // this.$refs.detailsNavBar.itemactive == event
      },
      // 首先实现点击到达在实现滚动切换
      active(event) {
       switch(event){
         case 'pop':
          this.$refs.scrool.scrollTo(0, 0)
          break;
         case 'estimate':
          this.$refs.scrool.scrollTo(0, -this.parameterTop)
          break;
         case 'details':
          this.$refs.scrool.scrollTo(0, -this.shopImgsTop)
          break;
         case 'recommend':
          this.$refs.scrool.scrollTo(0,  -this.recommendTop)
          break;
       }
      },
      addzg(){
        this.catData = {
          //由于对象地址不同故无法使用index
          carConter: this.iid.carConter,
          imgShow: this.iid.imgShow,
          imgDescribe: this.iid.imgDescribe
        }
        console.log("添加到购物车");
        this.$store.dispatch('addCar',this.iid)
      }

    }
  }
</script>

<style lang="scss">
  .hxx {
    height: 400px;
  }

  #detail {
    position: relative;
    height: 100vh;
    z-index: 10;
    background-color: #ffffff;
  }
  .fhimg {
    height: 100%;
    img {
      width: 40px;
      height: 40px;
    }
  }

  .rest {
    height: 100%;
    img {
      width: 44px;
      height: 44px;
    }
  }
</style>
