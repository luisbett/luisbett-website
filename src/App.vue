<template>

	<NavBar :logo_src="logo" :alt_src="alt" />
	<router-view />
	<Footer />

</template>

<script>

	import NavBar from './components/NavBar.vue'
	import Footer from './components/Footer.vue'

	export default {
		name: 'App',
		components: {
			NavBar,
			Footer
		},
		data() {
			return {
				logo: "/img/logo.png",
				alt: "Luis Bett"
			}
		}
	}

</script>

<style>

	* {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	.main-div {
		margin: 50px;
		min-height: 550px;
	}

</style>