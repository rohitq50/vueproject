<template>
	<div id="nav">
		<Navbar />
	</div>
	<router-view/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
	name: 'App',
	components: {
		Navbar
	},
	data() {
		return {   
		}
	}
}
	// import { defineComponent } from '@vue/composition-api'

	// export default defineComponent({
	//   setup() {
		
	//   },
	// })
</script>


<style lang="scss">
#app {
	height: 100%;
}
</style>
