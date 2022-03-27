<template>
	<MyProjects />
</template>

<script>
import MyProjects from '@/components/MyProjects'
export default {
	name: 'Projects',
	components: {
		MyProjects
	},
	inject: ['myInfo'],
	data() {
		return {
			personalInfo: this.myInfo.personal_info,
			workInfo: this.myInfo.work_info
		}
	}
}
</script>
