<template>
	<section class="about">
		<div class="about__bio-image">
			<div class="about__bio">
				<h2 class="text-secondary">BIO</h2>
				<p>I am from Ghazipur, Uttar Pradesh and currently live in Bangalore
					where I am working as a Full-stack Developer at Edmingle.
					I have 14+ months of experience with PHP, Vue Js, Javascipt, ES6, HTML5, Sass.
					In my spare time, I listen musics and play cricket.
				</p>
			</div>
		</div>
		<div class="jobs">
			<h2>Education</h2>
			<div class="jobs__job">
				<h2 class="text-secondary">Master of Computer Applicatons (MCA)</h2>
				<h3>Banaras Hindu University</h3>
				<h6>2016-19</h6>
			</div>
			<h2>Skills</h2>
			<div class="jobs__job">
				<ul>
					<li><span class="text-color"><b>Programming Language :</b></span> C, PHP, Java, Nodejs, JavaScript, ES6, HTML5, CSS3 and Sass</li>
					<li><span class="text-color"><b>Operating Systems :</b></span> Linux & Windows</li>
					<li><span class="text-color"><b>Database :</b></span> MySQL</li>
					<li><span class="text-color"><b>Frameworks and tools :</b></span> IntelliJ IDEA, ,Vue Js, React Js, VS Code, Chrome and Vue development Tools </li>
					<li><span class="text-color"><b>Others :</b></span> Git & AWS</li>
				</ul>
			</div>
			<h2>Jobs & Interns</h2>
			<div class="jobs__job">
				<h2 class="text-secondary">Dec 5 2019- Curent</h2>
				<h3>Edmingle</h3>
				<h4>Full Stack Developer</h4>
				<p>Working as a full stack Developer in a Project where
					the goal is to dilivered good quality products to our customers.</p>
			</div>
			<div class="jobs__job">
				<h2 class="text-secondary">Aug 10 2019- Dec 4 2019</h2>
				<h3>Redyhire</h3>
				<h4>Front-End Developer (intern)</h4>
				<p>Working as a Frontend Developer in a Project where the mission is to simplify end to end recruitment
					process. The only goal is to reduce amount of effort, time and cost from hiring Process.</p>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'MyDetails',
	created() {
		this.$emit('setVertical', true)
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
