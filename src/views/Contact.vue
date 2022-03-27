<template>
	<MyContact :personalInfo="personalInfo"/>
</template>

<script>
import MyContact from '@/components/MyContact'
export default {
	name: 'Contact',
	inject: ['myInfo'],
	components: {
		MyContact
	},

	data() {
		return {
			personalInfo: this.myInfo.personal_info
		}
	}
}
</script>
