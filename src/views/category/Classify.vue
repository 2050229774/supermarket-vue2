<template>
  <div id="classify">
    <nav-bar>
      <template v-slot:center>supermarket</template>
    </nav-bar>
      <bscroll ref="bscroll1">
        <div id="classify-content-letf">
          <left-bar></left-bar>
        </div>
      </bscroll>
      <bscroll ref="bscroll2">
      <div id="classify-content-right">
        <content-bar :contentData="content"></content-bar>
      </div>
      </bscroll>
    
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar.vue"
  import Bscroll from '../../components/common/bscroll/bscroll.vue'

  import LeftBar from './category-child/LeftBar.vue'
  import ContentBar from './category-child/ContentBar.vue'

  import {
    content
  } from './data/data.js'
  export default {
    name: 'Classify',
    data() {
      return {
        content
      }
    },
    components: {
      NavBar,
      LeftBar,
      ContentBar,
      Bscroll
    },
    mounted() {
      this.$refs.bscroll1.refresh()
      this.$refs.bscroll2.refresh()
    }
  }
</script>

<style lang="scss">
  .nav-bar {
    background-color: $subject;
    color: $whiteBackground;
  }

  #classify {
    height: 100vh;
    position: relative;
    background-color: $lsgray;
    .wrapper:nth-child(2) {
      width: 30%;
    }
    .wrapper:nth-child(3) {
      width: 70%;
      left: 30%;
    }
  }

  #classify-content {
    
  }

  #classify-content-letf {
    width: 100%;
  }

  #classify-content-right {
    width: 100%;
    background-color: $whiteBackground;
  }
</style>
