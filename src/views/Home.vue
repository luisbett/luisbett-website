<template>

	<div class="main-div">
		<Welcome :language="language"/>
		<About :language="language"/>
		<MoreInfo :language="language"/>
	</div>

</template>

<script>

	import Welcome from '../components/Welcome.vue'
	import About from '../components/About.vue'
	import MoreInfo from '../components/MoreInfo.vue'

	export default {
		name: 'Home',
		components: {
			Welcome,
			About,
			MoreInfo
		},
		props: {
			language: String
		}
	}

</script>