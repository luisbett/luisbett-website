<template>

    <div class="moreinfo-container">
		
        <h1>{{ translate('homeMoreInfoTitle') }}</h1>

		<div class="moreinfo-subcontainer">

			<Card :language=language model="link" title="navbarProjects" titleImg="/img/icons/gear.png" description="prjCodecDsc" buttonLink="/projects"/>
			<Card :language=language model="link" title="navbarLinks" titleImg="/img/icons/internet.png" description="prjCodecDsc" buttonLink="/links"/>
			<Card :language=language model="link" title="navbarContact" titleImg="/img/icons/at.png" description="prjCodecDsc" buttonLink="/contact"/>

		</div>

    </div>

</template>

<script>

	import Card from './Card.vue'

    import pt_br from "../languages/pt_br.js"
	import en from "../languages/en.js"
	import ea from "../languages/ea.js"

	export default {
		name: 'MoreInfo',
		components: {
			Card
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
			}
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