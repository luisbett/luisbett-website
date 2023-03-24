<template>

	<div class="main-div">
		<div id="home-div">
			<h1 id="welcome">{{ translate('homeWelcomeMessage1') }} <br> {{ translate('homeWelcomeMessage2') }}</h1>
			<img src="/img/personal.jpg" alt="personal-img" id="personal-img">
		</div>
		<div id="about-div">
			<h1>About</h1>
		</div>
	</div>

</template>

<script>

	import pt_br from "../languages/pt_br.js"
	import en from "../languages/en.js"
	import ea from "../languages/ea.js"

	export default {
		name: 'Home',
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

	#home-div {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: auto;
		margin-top: 150px;
		margin-bottom: 300px;
	}

	#welcome {
		padding: 60px;
		font-size: 50px;
	}

	#personal-img {
		width: 350px;
		height: 350px;
		border-radius: 50%;
		border: 5px solid #262626;
	}

	#about-div {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 350px;
	}

</style>