<template>

    <div class="moreinfo-container">
		
        <h1>{{ $t('homeMoreInfoTitle') }}</h1>

		<div class="moreinfo-subcontainer">

			<Card model="link" title="navbarProjects" titleImg="/img/icons/gear.png" description="prjCodecDsc" buttonLink="/projects"/>
			<Card model="link" title="navbarLinks" titleImg="/img/icons/internet.png" description="prjCodecDsc" buttonLink="/links"/>
			<Card model="link" title="navbarContact" titleImg="/img/icons/at.png" description="prjCodecDsc" buttonLink="/contact"/>

		</div>

    </div>

</template>

<script>

	import Card from './Card.vue'

	export default {
		name: 'MoreInfo',
		components: {
			Card
		}
	}

</script>

<style scoped>

    .moreinfo-container {
		display: block;
		padding: 30px;
        text-align: center;
		margin: auto;
		background-color: #262626;
		color: #FFFFFF;
	}

	.moreinfo-container h1 {
		margin-top: 80px;
	}

	.moreinfo-subcontainer {
		width: 80%;
		height: 60vh;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: auto;
	}

    .moreinfo-subcontainer > * {
        margin-bottom: 20px;
    }

    @media (max-width: 1199px) {

        .moreinfo-subcontainer {
            height: 110vh;
            justify-content: space-evenly;
        }

    }

    @media (max-width: 819px) {

        .moreinfo-subcontainer {
            height: 160vh;
            justify-content: center;
        }

    }

</style>