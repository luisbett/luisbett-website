<template>

    <div class="projects-container">

        <h1>{{ $t('projectsMessage') }}</h1>

        <div class="projects-subcontainer">
            
            <Card title="luisbett-website" tech="Vue" description="prjCodecDsc" buttonApp="https://luisbett.com/" buttonCode="https://github.com/luisbett/luisbett-website" />
            <Card title="codec-test" tech="JS" description="prjCodecDsc" buttonCode="https://github.com/luisbett/codec-test" />            

        </div>

    </div>

</template>

<script>

    import Card from './Card.vue'

    export default {
        name: 'Links',
        components: {
            Card
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