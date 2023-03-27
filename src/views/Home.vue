<template>

	<div class="main-div">
		<Welcome :language="language"/>
		<About :language="language"/>
	</div>

</template>

<script>

	import Welcome from '../components/Welcome.vue'
	import About from '../components/About.vue'

	export default {
		name: 'Home',
		components: {
			Welcome,
			About
		},
		props: {
			language: String
		}
	}

</script>