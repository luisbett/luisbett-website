<template>

	<NavBar :logo_src="logo" :alt_src="alt" @change-language="changeLanguage"/>
	<transition @before-enter="scrollTop" mode="out-in" appear>
		<router-view :language=language />
	</transition>
	<Footer :language=language />

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
				alt: "Luis Bett",
				language: 'en'
			}
		},
		methods: {
			changeLanguage(newLanguage) {
				this.language = newLanguage
			},
			scrollTop(){
				document.getElementById('app').scrollIntoView();
			}
		}
	}

</script>

<style>

	* {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		box-sizing: border-box;
		padding: 0;
		margin: 0;
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