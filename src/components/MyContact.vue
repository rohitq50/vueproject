<template>
	<section class="contact">
		<h2>Contact Me..</h2>

		<div class="contact__list">
			<div class="contact__email">
				<i class="fas fa-envelope"></i> Email
				<div class="text-secondary">{{personalInfo.email}}</div>
			</div>
			<div class="contact__phone">
				<i class="fas fa-mobile-alt"></i> Phone
				<div class="text-secondary">{{personalInfo.contact_number}}</div>
			</div>
			<div class="contact__address">
				<i class="fas fa-map-marker-alt"></i> Location
				<div class="text-secondary">{{personalInfo.address}}</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'MyContact',
	props: ["personalInfo"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
