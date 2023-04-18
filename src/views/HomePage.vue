<template>

	<div class="main-container">

		<Welcome />
		<About />
		<MoreInfo />

	</div>

</template>

<script>

	import Welcome from '../components/Welcome.vue'
	import About from '../components/About.vue'
	import MoreInfo from '../components/MoreInfo.vue'

	export default {
		name: 'HomePage',
		components: {
			Welcome,
			About,
			MoreInfo
		}
	}

</script>