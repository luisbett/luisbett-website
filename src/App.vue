<template>

	<NavBar />
	<router-view />
	<ScrollTopButton />
	<Footer />

</template>

<script>

	import NavBar from './components/NavBar.vue'
	import ScrollTopButton from './components/ScrollTopButton.vue';
	import Footer from './components/Footer.vue'

	export default {
		name: 'App',
		components: {
			NavBar,
			ScrollTopButton,
			Footer
		}
	}

</script>

<style>

	* {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		scroll-behavior: smooth;
	}

	.main-container {
		margin-top: 104px;
	}

	h1 {
		text-align: center;
		font-size: 50px;
		margin-bottom: 30px;
	}

</style>