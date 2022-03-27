<template>
	<section class="home">
		<h2>Hi! My name is</h2>
		<h1 class="home__name">{{personalInfo.first_name}} <span class="home__name--last">{{personalInfo.last_name}}</span></h1>
		<h2> {{workInfo.designation}}</h2>
	</section>
</template>

<script>
export default {
	name: 'BasicInfo',
	props: ["personalInfo", "workInfo"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
