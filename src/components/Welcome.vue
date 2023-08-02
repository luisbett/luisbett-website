<template>

	<div class="welcome-container">

		<div class="welcome-left">
			
			<h1>{{ $t('welcomeMessage') }} <span>Luis Bett</span>!</h1>
			<p>{{ $t('welcomeProfessionTitle')}}</p>
			<div class="welcome-buttons">
				<Button label="buttonLinkedIn" size="extraLarge" color="greenWhite" @click="$linkExecution(true, 'https://www.linkedin.com/in/luis-fellipy-bett/')">
					<IconBrandLinkedin color="black" :size="30" stroke-width="2"/>
				</Button>
				<Button label="buttonGitHub" size="extraLarge" color="greenWhite" @click="$linkExecution(true, 'https://github.com/luisbett')">
					<IconBrandGithub color="black" :size="30" stroke-width="2"/>
				</Button>
			</div>

		</div>

		<div class="welcome-right">

			<img class="shape-img" src="/img/circle-outline.png" alt="Shape image">
			<img class="personal-img" src="/img/personal.png" alt="Personal image">
			<img class="personal-img-mob" src="/img/personal-mob.jpg" alt="Personal mobile image">

		</div>

	</div>

</template>

<script>

	import Button from './Button.vue'
	import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-vue'

	export default {
		name: 'Welcome',
		components: {
			Button,
			IconBrandLinkedin,
			IconBrandGithub
		}
	}

</script>

<style scoped>

	.welcome-container {
		display: flex;
		padding: 30px;
		min-height: 85vh;
	}

	.welcome-left {
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.welcome-right {
		width: 50%;
		position: relative;
		z-index: -1;
		margin: auto;
	}

	.welcome-left h1 {
		font-size: 60px;
		text-align: center;
		max-width: 330px;
	}

	.welcome-left span {
		color: #25AF70;
	}

	.welcome-left p {
		font-size: 20px;
		font-weight: bold;
	}

	.welcome-buttons {
		display: flex;
		gap: 20px;
		margin-top: 30px;
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
		margin: 30px auto;
		border-radius: 50%;
		border: 10px solid #25AF70;
	}

	@media (max-width: 1100px) {
		
		.welcome-container {
			display: block;
		}

		.welcome-left {
			margin-top: 50px;
			width: 100%;
		}

		.welcome-right {
			width: 100%;
		}

		.welcome-buttons {
			flex-direction: column;
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