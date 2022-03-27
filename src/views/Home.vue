<template>
	<main>
		<BasicInfo :personalInfo="personalInfo" :workInfo="workInfo"/>
	</main>
</template>

<script>
// @ is an alias to /src
import BasicInfo from '@/components/BasicInfo.vue'

export default {
	name: 'Home',
	inject: ['myInfo'],
	components: {
		BasicInfo
	},
	data() {
		return {
			personalInfo: this.myInfo.personal_info,
			workInfo: this.myInfo.work_info
		}
	}
}
</script>

<style lang="scss" scoped>

</style>
