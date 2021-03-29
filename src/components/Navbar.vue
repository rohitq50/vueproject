<template>
	<header>
		<div class="menu-btn">
			<span class="menu-btn__burger"></span>
		</div>
		<nav class="nav">
			<ul class="menu-nav">
				<li :class="['menu-nav__item', activePath == '/' ? 'active' : '']">
					<!-- <router-link to="/" @click.prevent="activePath = '/'" class="link menu-nav__link">Home</router-link> -->
					<a href="#" class="menu-nav__link"  @click.prevent="navigate('/')" >Home</a>
				</li>
				<li :class="['menu-nav__item', activePath == '/about' ? 'active' : '']">
					<!-- <router-link to="/about"  @click="activePath = '/about'" class="link menu-nav__link">About Me</router-link> -->
					<a href="#" class="menu-nav__link"  @click.prevent="navigate('/about')">About Me</a>
				</li>
				<li :class="['menu-nav__item', activePath == '/projects' ? 'active' : '']">
					<!-- <router-link to="/project"  @click.prevent="activePath = '/project'" class="link menu-nav__link">My Projects</router-link> -->
					<a href="#" class="menu-nav__link"  @click.prevent="navigate('/projects')">My Projects</a>
				</li>
				<li :class="['menu-nav__item', activePath == '/contact' ? 'active' : '']">
					<!-- <router-link to="/contact"  @click.prevent="activePath = '/contact'" class="link menu-nav__link">Contact Me</router-link> -->
					<a href="#" class="menu-nav__link"  @click.prevent="navigate('/contact')">Contact Me</a>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'Navbar',
	data() {
		return {
			activePath: '/'
		}
	},
	created() {
		this.navigate(this.activePath)
	},
	methods: {
		navigate(path) {
			this.activePath = path
			this.$router.push({path: path})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
