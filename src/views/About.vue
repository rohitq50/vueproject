<template>
	<MyDetails :personalInfo="personalInfo" :workInfo="workInfo" :skills="skills" :educations="educations"/>
</template>

<script>
import MyDetails from '@/components/MyDetails'
export default {
	name: 'About',
	inject: ['myInfo'],
	components: {
		MyDetails
	},
	data() {
		return {
			personalInfo: this.myInfo.personal_info,
			workInfo: this.myInfo.work_info,
			skills: this.myInfo.skill_info,
			educations: this.myInfo.education_info
		}
	}
}
</script>

<style lang="scss" scoped>

</style>
