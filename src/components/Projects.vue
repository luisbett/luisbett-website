<template>

    <div class="projects-container">

        <h1>{{ translate('projectsMessage') }}</h1>

        <div class="projects-subcontainer">
            
            <Card :language=language title="luisbett-website" tech="Vue" description="prjCodecDsc" buttonApp="https://luisbett.com/" buttonCode="https://github.com/luisbett/luisbett-website" />
            <Card :language=language title="codec-test" tech="JS" description="prjCodecDsc" buttonCode="https://github.com/luisbett/codec-test" />            

        </div>

    </div>

</template>

<script>

    import Card from './Card.vue'

    import pt_br from "../languages/pt_br.js"
	import en from "../languages/en.js"
	import ea from "../languages/ea.js"

    export default {
        name: 'Links',
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

    .projects-container {
		display: block;
		padding: 30px;
        text-align: center;
		margin: auto;
	}

	.projects-subcontainer {
        width: 80%;
		height: 60vh;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin: auto;
	}

    .projects-subcontainer > * {
        margin-bottom: 20px;
    }

    @media (max-width: 819px) {

        .projects-subcontainer {
            height: 110vh;
            justify-content: center;
        }

    }

</style>