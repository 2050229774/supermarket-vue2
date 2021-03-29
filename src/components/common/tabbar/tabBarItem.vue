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
      color: {
        type: String,
        default: 'orange'
      },
      link: String
    },
    computed: {
	  isActive() {
		return this.$route.path.indexOf(this.link) !== -1
	  },
      atPresent() {
		if(this.isActive) {
			this.isactive = true
		}
		else {
			this.isactive = false
		}
        return this.isActive ? {color: this.color} : {}
      }
    },
    methods: {
      active() {
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
    font-size: 16px;
	
	img {
	  width: 20px;
	  height: 20px;
	  margin-top: 3px;
	}
  }
</style>
