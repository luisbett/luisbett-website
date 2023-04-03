<template>

	<div id="welcome-container">
		<div id="welcome-left">
			<h1 id="welcome-msg">{{ translate('homeWelcomeMessage1') }} <br> {{ translate('homeWelcomeMessage2') }} <span id="personal-name">Luis Bett</span>!</h1>
			<p id="profession-title">Full Stack Developer</p>
			<div id="welcome-buttons">
				<a href="https://www.linkedin.com/in/luis-fellipy-bett/" target="_blank">
					<img src="/img/icons/linkedin-black-256.png">
					<span class="button-title">LinkedIn</span>
				</a>
				<a href="https://github.com/luisbett" target="_blank">
					<img src="/img/icons/github-black-256.png">
					<span class="button-title">GitHub</span>
				</a>
			</div>
		</div>
		<div id="welcome-right">
			<img src="/img/circle.png" alt="shape-img" id="shape-img">
			<img src="/img/personal.png" alt="personal-img" id="personal-img">
		</div>
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

	#welcome-container {
		display: flex;
		padding: 40px;
		height: 500px;
		margin-bottom: 184px;
	}

	#welcome-left {
		width: 50%;
		height: 500px;
	}

	#welcome-right {
		position: relative;
		width: 50%;
		height: 500px;
		z-index: -1;
	}

	#welcome-msg {
		font-size: 60px;
		margin-top: 100px;
		margin-left: 100px;
		text-align: left;
	}

	#personal-name {
		color: #25AF70;
	}

	#profession-title {
		margin-left: 100px;
		text-align: left;
		font-size: 20px;
		font-weight: bold;
	}

	#welcome-buttons {
		margin-top: 30px;
		margin-left: 100px;
		justify-content: center;
		padding: auto;
	}

	#welcome-buttons a {
		margin-right: 20px;
		padding: 15px 60px;
		text-decoration: none;
		background-color: #25AF70;
		border: 2px solid #25AF70;
		color: #FFFFFF;
		font-weight: bold;
		border-radius: 10px;
		font-size: 19px;
		transition: .5s;
	}

	#welcome-buttons a:hover {
		background-color: #FFFFFF;
		color: #191919;
	}

	#welcome-buttons img {
		width: 18px;
		height: 18px;
		margin-top: 20px;
	}

	#welcome-buttons .button-title {
		margin-left: 20px;
	}

	#welcome-right #shape-img {
		position: relative;
		top: 130px;
		left: 40px;
	}

	#welcome-right #personal-img {
		position: absolute;
		top: 0;
		left: 95px;
		width: 403px;
		height: 644px;
	}

</style>