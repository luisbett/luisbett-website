<template>

	<div class="welcome-container">

		<div class="welcome-left">
			
			<h1>{{ $t('homeWelcomeMessage1') }} <br> {{ $t('homeWelcomeMessage2') }} <span>Luis Bett</span>!</h1>
			<p>Full Stack Developer</p>
			<div class="welcome-buttons">
				<Button label="buttonLinkedIn" size="large" color="greenWhite" imgSrc="/img/icons/linkedin-black.png" @click="$linkExecution(true, 'https://www.linkedin.com/in/luis-fellipy-bett/')"/>
				<Button label="buttonGitHub" size="large" color="greenWhite" imgSrc="/img/icons/github-black.png" @click="$linkExecution(true, 'https://github.com/luisbett')"/>
			</div>

		</div>

		<div class="welcome-right">

			<img class="shape-img" src="/img/circle-outline.png" alt="Image shape">
			<img class="personal-img" src="/img/personal.png" alt="Personal image">
			<img class="personal-img-mob" src="/img/personal-mob.jpg" alt="Personal image mobile">

		</div>

	</div>

</template>

<script>

	import Button from './Button.vue'

	export default {
		name: 'Welcome',
		components: {
			Button
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

	.welcome-buttons {
		display: flex;
		margin-top: 30px;
		margin-left: 100px;
	}

	.welcome-buttons > * {
		margin-right: 20px;
	}

	.shape-img {
		position: relative;
		top: 130px;
		left: 40px;
	}

	.personal-img {
		position: absolute;
		top: 0;
		left: 95px;
		width: 403px;
		height: 644px;
	}

	.personal-img-mob {
		display: none;
		width: 300px;
		height: 300px;
		margin: auto;
		border-radius: 50%;
		border: 10px solid #25AF70;
	}

	@media (max-width: 1100px) {
		
		.welcome-container {
			display: block;
		}

		.welcome-left {
			width: 100%;
			height: 70vh;
		}

		.welcome-right {
			width: 100%;
			height: 50vh;
		}

		.welcome-left h1 {
			margin-left: 0;
			text-align: center;
		}

		.welcome-left p {
			margin-left: 0;
			text-align: center;
		}

		.welcome-buttons {
			display: block;
			margin-left: 0;
		}

		.welcome-buttons > * {
			margin: 20px auto;
		}

		.shape-img {
			display: none;
		}

		.personal-img {
			display: none;
		}

		.personal-img-mob {
			display: block;
		}

	}

</style>