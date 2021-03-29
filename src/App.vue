<template>
	<div>
		<router-view></router-view>
		<tab-bar>
			<tab-bar-item link="/home" color="blue">
				<template v-slot:item-icon><img src="./assets/img/tabbar/派送(1).png" /></template>
				<template v-slot:item-icon-active><img src="./assets/img/tabbar/签收(1).png" /></template>
				<template v-slot:item-text>
					<div>首页</div>
				</template>
			</tab-bar-item>
			<tab-bar-item link="/cart" color="blue">
				<template v-slot:item-icon><img src="./assets/img/tabbar/派送(1).png" /></template>
				<template v-slot:item-icon-active><img src="./assets/img/tabbar/签收(1).png" /></template>
				<template v-slot:item-text>
					<div>分类</div>
				</template>
			</tab-bar-item>
			<tab-bar-item link="/classify" color="blue">
				<template v-slot:item-icon><img src="./assets/img/tabbar/派送(1).png" /></template>
				<template v-slot:item-icon-active><img src="./assets/img/tabbar/签收(1).png" /></template>
				<template v-slot:item-text>
					<div>购物车</div>
				</template>
			</tab-bar-item>
			<tab-bar-item link="/personage" color="blue">
				<template v-slot:item-icon><img src="./assets/img/tabbar/派送(1).png" /></template>
				<template v-slot:item-icon-active><img src="./assets/img/tabbar/签收(1).png" /></template>
				<template v-slot:item-text>
					<div>我的</div>
				</template>
			</tab-bar-item>
		</tab-bar>
	</div>
</template>

<script>
  import tabBar from './components/common/tabbar/tab-bar.vue'
  import tabBarItem from './components/common/tabbar/tabBarItem.vue'

  export default {
    name: 'App',
    components: {
      tabBar,
      tabBarItem
    }
  }
</script>

<style lang="scss">
	@import url("assets/css/base.scss");
</style>
