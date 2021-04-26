module.exports = {
  lintOnSave: false,
  css: {
  	loaderOptions: {
  		sass: {
  			 prependData: `@import "@/assets/css/variable.scss";`
  		}
  	}
  },
  configureWebpack: {
  	resolve: {
  		alias: {
  			"assets": '@/assets',
  			"components": '@/components',
  			"network": '@/network',
  			"views": '@/views'
  		}
  	}
  }
}
