<template>

	<div id="about-container" class="about-container">

		<h1>{{ $t('aboutTitle') }}</h1>

		<div class="about-text">
			<p>{{ $t('aboutMeText') }}</p>
		</div>
		
		<div class="about-subcontainer">

			<div class="about-left">
				
				<div class="about-fullname">

					<IconUser class="about-icon" color="#26AF70" :size="30" stroke-width="2"/>
					<h2>{{ $t('aboutFullName') }}: <span class="about-infos">Luis Fellipy Bett</span></h2>

				</div>

				<div class="about-nationality">

					<IconIdBadge class="about-icon" color="#26AF70" :size="30" stroke-width="2"/>
					<h2>{{ $t('aboutNationality') }}: <span class="about-infos">{{ $t('aboutNationalityDesc') }}</span></h2>

				</div>
				
				<div class="about-location">

					<div class="about-location-title">
						
						<IconMapPin class="about-icon" color="#26AF70" :size="30" stroke-width="2"/>
						<h2>{{ $t('aboutLocation') }}:</h2>

					</div>

					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37948.40202616362!2d-7.38514946064844!3d53.52607286932469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485dc011ca1bd721%3A0xa00c7a997319480!2sMullingar%2C%20Co.%20Westmeath!5e0!3m2!1sen!2sie!4v1705953348530!5m2!1sen!2sie" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

				</div>

			</div>

			<div class="about-right">

				<div class="about-carousel">

					<div class="about-carousel-title">
						
						<IconPuzzleFilled class="about-icon" color="#26AF70" :size="30" stroke-width="2"/>
						<h2>{{ $t('aboutSkills') }}:</h2>

					</div>

					<div class="about-carousel-skills">

						<Carousel />

					</div>

				</div>

			</div>

		</div>

	</div>

</template>

<script>

	import Carousel from './Carousel.vue'
	import { IconUser, IconIdBadge, IconMapPin, IconPuzzleFilled } from '@tabler/icons-vue'

	export default {
		name: 'About',
		components: {
			Carousel,
			IconUser,
			IconIdBadge,
			IconMapPin,
			IconPuzzleFilled
		}
	}

</script>

<style scoped>

	.about-container {
		display: block;
		padding: 30px;
		text-align: center;
		margin: auto;
		background-color: #262626;
		color: #FFFFFF;
	}

	.about-container h1 {
		margin-top: 80px;
	}

	.about-text {
		width: 80%;
		min-height: 40vh;
		margin: 30px auto;
	}

	.about-text p {
		font-size: 20px;
		font-family: monospace;
	}

	.about-subcontainer {
		display: flex;
	}

	.about-left, .about-right {
		padding: 10px 50px;
		width: 50%;
		min-height: 75vh;
	}

	.about-fullname, .about-nationality, .about-location, .about-carousel {
		padding: 16px;
		background-color: #191919;
		border-radius: 10px;
		margin-bottom: 20px;
	}

	.about-fullname, .about-nationality, .about-location-title, .about-carousel-title {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.about-infos {
		font-weight: normal;
	}

	.about-location, .about-carousel {
		display: block;
	}

	.about-location-title, .about-carousel-title {
		margin-bottom: 20px;
	}

	.about-location iframe {
		width: 55vh;
		height: 35vh;
		border: 0;
		border-radius: 10px;
	}

	.about-carousel-skills {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.about-icon {
		margin-right: 5px;
	}

	@media (max-width: 1130px) {

		.about-location iframe {
			width: 35vh;
			min-height: 40vh;
		}
	}

	@media (max-width: 850px) {

		.about-subcontainer {
			display: block;
		}

		.about-left {
			width: 100%;
			padding: 10px 10px;
		}

		.about-right {
			width: 100%;
		}

		.about-location iframe {
			width: 55vh;
		}
	}

	@media (max-width: 620px) {

		.about-location iframe {
			width: 35vh;
		}
	}

</style>