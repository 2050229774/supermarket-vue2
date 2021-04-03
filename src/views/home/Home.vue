<template>
  <div>
    <nav-bar>
      <template v-slot:center>李奇的智能商场</template>
    </nav-bar>
    <swipe :speed="speedd" :stopTime="stopTimee">
       <swipen-img  way="https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g6/M00/0D/02/ChMkKmBdVPOIBjY1ABrPpgW1TcMAAMGvwLS3r4AGs--673.jpg" />
       <swipen-img  way="https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g6/M00/0D/02/ChMkKmBdVOyIFHpqACAzMosIyoQAAMGvwESmdsAIDNK017.jpg" />
       <swipen-img  way="https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g6/M00/0B/00/ChMkKmBamS-IdsvVABQVFnzWDOwAAL-UACX_LYAFBUu002.jpg" />
       <swipen-img  way="https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g6/M00/0E/00/ChMkKWBIH62Idfl_ACmDIs8uTGkAALKbALRyx8AKYM6513.jpg" />
       <swipen-img  way="https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g6/M00/03/06/ChMkKWBmiW2IQs1bAC3Zdem1HSEAAMfzQJWr1wALdmN065.jpg" />
    </swipe>
  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar.vue'
  import Swipe from './home-child/Swipe.vue'
  import SwipenImg from './home-child/SwipeImg.vue'

  import {getdata} from "../../network/home.js"

  export default {
    name: 'Home',
    data() {
      return {
        resule: null,
        speedd: 1,
        stopTimee: 2000
      }
    },
    components: {
      NavBar,
      Swipe,
      SwipenImg
    }
    // ,由于没有现成的服务器故网络请求部分暂时不做
    // created() {
    //   getdata().then(res => {
    //     console.log(res)
    //     this.resule = res;
    //   })
    // }
  }
</script>

<style>
</style>
