<template>

	<div id="about-container" class="about-container">

		<h1>{{ $t('aboutTitle') }}</h1>

		<div class="about-text">
			<p>{{ $t('aboutMeText') }}</p>
		</div>
		
		<div class="about-subcontainer">

			<div class="about-left">
				
				<div class="about-fullname">

					<img src="/img/icons/fullname-green.png" alt="Person avatar icon">
					<h2>{{ $t('aboutFullName') }}: <span class="about-infos">Luis Fellipy Bett</span></h2>

				</div>

				<div class="about-nationality">

					<img src="/img/icons/passport-green.png" alt="Passport icon">
					<h2>{{ $t('aboutNationality') }}: <span class="about-infos">Brazilian</span></h2>

				</div>
				
				<div class="about-location">

					<div class="about-location-title">
						
						<img src="/img/icons/location-green.png" alt="Pin icon">
						<h2>{{ $t('aboutLocation') }}:</h2>

					</div>

					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152516.0989691037!2d-6.410509647330417!3d53.32420655617449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2sDublin!5e0!3m2!1sen!2sie!4v1681399404611!5m2!1sen!2sie" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

				</div>

			</div>

			<div class="about-right">

				<div class="about-carousel">

					<div class="about-carousel-title">
						
						<img src="/img/icons/skills-green.png" alt="Puzzle icon">
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

	export default {
		name: 'About',
		components: {
			Carousel
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
		height: 40vh;
		margin: auto;
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
		height: 70vh;
	}

	.about-fullname, .about-nationality, .about-location, .about-carousel {
		padding: 15px;
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

	.about-fullname img, .about-nationality img, .about-location img, .about-carousel img {
		width: 30px;
		height: 30px;
		margin-right: 10px;
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

	@media (max-width: 1130px) {

		.about-location iframe {
			width: 35vh;
			height: 40vh;
		}
	}

	@media (max-width: 1000px) {

		.about-text {
			height: 60vh;
		}
	}

	@media (max-width: 850px) {

		.about-subcontainer {
			display: block;
		}

		.about-left {
			width: 100%;
			height: 90vh;
			padding: 10px 10px;
		}

		.about-right {
			width: 100%;
			height: 70vh;
		}

		.about-location iframe {
			width: 55vh;
			height: 35vh;
		}
	}

	@media (max-width: 730px) {

		.about-text {
			height: 130vh;
		}
	}

	@media (max-width: 620px) {

		.about-location iframe {
			width: 35vh;
			height: 40vh;
		}

	}

</style>