<template>
	<section class="projects">
		<div class="projects__bio-image">
			<h1 class="text-secondary">My Projects</h1>
		</div>

		<div class="projects__items">
			<div class="projects__item">
				<img src="../assets/img/project-1.jpg" alt="My project">
				<div class="projects__btns">
					<a href="#!" class="projects__btn">
						<i class="fas fa-eye"></i>Preview
					</a>
					<a href="#!" class="projects__btn">
						<i class="fab fa-github"></i>Github
					</a>
				</div>
			</div>
			<div class="projects__item">
				<img src="../assets/img/project-2.jpg" alt="My project">
				<div class="projects__btns">
					<a href="#!" class="projects__btn">
						<i class="fas fa-eye"></i>Preview
					</a>
					<a href="#!" class="projects__btn">
						<i class="fab fa-github"></i>Github
					</a>
				</div>
			</div>
			<div class="projects__item">
				<img src="../assets/img/project-3.jpg" alt="My project">
				<div class="projects__btns">
					<a href="#!" class="projects__btn">
						<i class="fas fa-eye"></i>Preview
					</a>
					<a href="#!" class="projects__btn">
						<i class="fab fa-github"></i>Github
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'MyProjects',
	created() {
		this.$emit('setVertical', true)
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
