<template>
  <div id="personage">
    <userinfo :data="userinfo"></userinfo>
    <indent></indent>
  </div>
</template>

<script>
  import Userinfo from './proflie-child/Userinfo.vue'
  import Indent from './proflie-child/Indent.vue'

  import {userinfo} from './proData/user.js'

  export default {
    name: 'Personage',
    data(){
      return {
        userinfo
      };
    },
    components: {
      Userinfo,
      Indent
    }
  }
</script>

<style lang="scss" scoped>
  #personage {
    background-color: $lsgray;
    height: 100vh;
  }
</style>
