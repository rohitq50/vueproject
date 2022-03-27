<template>
	<div id="nav">
		<Navbar />
		<Footer :vertical="vertical" />
	</div>
	<router-view @setVertical="vertical = true"/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
	name: 'App',
	components: {
		Navbar,
		Footer
	},
	data() {
		return {
			vertical: false
		}
	},
	watch:{
    	$route (){
			//to, from
			//set here the initial value for new routes
        	this.vertical = false
    	}
	}
}
</script>


<style lang="scss">
#app {
	height: 100%;
}
</style>
