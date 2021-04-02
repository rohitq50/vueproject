const FileManagerPlugin = require('filemanager-webpack-plugin');
module.exports = {
	outputDir: process.env.VUE_APP_BUILD_OUPUT_DIR,
	assetsDir: process.env.VUE_APP_ASSETS_PATH,
	// css: {
	//   loaderOptions: {
	// 	sass: {
	// 		prependData: `
	// 		@import "@/sass/_variables.scss";
	// 		@import "@/sass/_mixins.scss";
	// 	  `
	// 	}
	//   }
	// }
	configureWebpack: {
		plugins: [
			  new FileManagerPlugin({
				events: {
					onEnd: {
						copy: [
							{ source: process.env.VUE_APP_BUILD_OUPUT_DIR, destination: process.env.VUE_APP_PROD_OUPUT_DIR }
						],
					}
				}
			})
		]
	}

};