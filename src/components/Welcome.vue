<template>

	<div id="welcome-div">
		<h1 id="welcome">{{ translate('homeWelcomeMessage1') }} <br> {{ translate('homeWelcomeMessage2') }}</h1>
		<img src="/img/personal.jpg" alt="personal-img" id="personal-img">
	</div>

</template>

<script>

	import pt_br from "../languages/pt_br.js"
	import en from "../languages/en.js"
	import ea from "../languages/ea.js"

	export default {
		name: 'Welcome',
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

	#welcome-div {
		display: flex;
		justify-content: center;
		margin: auto;
		margin-top: 150px;
		margin-bottom: 240px;
	}

	#welcome {
		padding: 80px;
		font-size: 60px;
	}

	#personal-img {
		width: 350px;
		height: 350px;
		border-radius: 50%;
		border: 5px solid #262626;
	}

</style>