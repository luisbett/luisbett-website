<template>

	<div id="about-div">
		<h1 id="about-title">{{ translate('homeAboutTitle') }}</h1>
        <p>Teste</p>
	</div>

</template>

<script>

	import pt_br from "../languages/pt_br.js"
	import en from "../languages/en.js"
	import ea from "../languages/ea.js"

	export default {
		name: 'About',
		mixins: [pt_br, en, ea],
		props: {
			language: String
		},
		methods: {
			translate(msg) {
				return this[this.language][msg]
			}
		}
	}

</script>

<style scoped>

	#about-div {
		display: block;
		justify-content: center;
        text-align: center;
		margin: auto;
		margin-bottom: 300px;
	}

	#about-title {
		padding: 60px;
	}

</style>