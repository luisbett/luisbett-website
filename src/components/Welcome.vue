<template>

	<div class="welcome-container">

		<div class="welcome-left" style="background-color: gray;">

			<!--<h1>{{ translate('homeWelcomeMessage1') }} <br> {{ translate('homeWelcomeMessage2') }} <span>Luis Bett</span>!</h1>
			<p>Full Stack Developer</p>
			<div class="welcome-buttons">
				<Button :language=language label="buttonLinkedIn" size="large" color="greenWhite" imgSrc="/img/icons/linkedin-black.png" @click="openLink(1)"/>
				<Button :language=language label="buttonGitHub" size="large" color="greenWhite" imgSrc="/img/icons/github-black.png" @click="openLink(2)"/>
			</div>-->

		</div>

		<div class="welcome-right" style="background-color: gray;">
			
			<!--<img class="shape-img" src="/img/circle-outline.png" alt="shape-img">
			<img class="personal-img" src="/img/personal.png" alt="personal-img">-->

		</div>

	</div>

</template>

<script>

	import Button from './Button.vue'

	import pt_br from "../languages/pt_br.js"
	import en from "../languages/en.js"
	import ea from "../languages/ea.js"

	export default {
		name: 'Welcome',
		components: {
			Button
		},
		props: {
            language: {
                type: String,
                default: 'en'
            }
		},
		mixins: [pt_br, en, ea],
		methods: {
			translate(msg) {
				return this[this.language][msg]
			},
			openLink(option) {

				if (option === 1) {
					window.open('https://www.linkedin.com/in/luis-fellipy-bett/', '_blank')
				} else if (option === 2) {
					window.open('https://github.com/luisbett', '_blank')
				}

			}
		}
	}

</script>

<style scoped>

	.welcome-container {
		display: flex;
		padding: 30px;
	}

	.welcome-left {
		width: 50%;
		height: 80vh;
	}

	.welcome-right {
		width: 50%;
		height: 80vh;
		position: relative;
		z-index: -1;
	}

	.welcome-left h1 {
		font-size: 60px;
		margin-top: 100px;
		margin-left: 100px;
		text-align: left;
	}

	.welcome-left span {
		color: #25AF70;
	}

	.welcome-left p {
		margin-left: 100px;
		text-align: left;
		font-size: 20px;
		font-weight: bold;
	}

	.welcome-left .welcome-buttons {
		display: flex;
		margin-top: 30px;
		margin-left: 100px;
	}

	.welcome-right .shape-img {
		position: relative;
		top: 130px;
		left: 40px;
	}

	.welcome-right .personal-img {
		position: absolute;
		top: 0;
		left: 95px;
		width: 403px;
		height: 644px;
	}

	@media (max-width: 850px) {
		
		.welcome-container {
			display: block;
		}

		.welcome-left {
			width: 100%;
			height: 70vh;
		}

		.welcome-right {
			width: 100%;
			height: 70vh;
		}

	}

</style>