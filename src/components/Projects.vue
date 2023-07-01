<template>

    <div class="projects-container">

        <h1>{{ $t('projectsTitle') }}</h1>

        <div class="projects-subcontainer">
            
            <Card title="projectsWebsiteTitle" tech="Vue" description="projectsWebsiteDsc" buttonApp="https://luisbett.com/" buttonCode="https://github.com/luisbett/luisbett-website" />
            <Card title="projectsCodecTitle" tech="JS" description="projectsCodecDsc" buttonCode="https://github.com/luisbett/codec-test" />            

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
		min-height: 60vh;
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
            justify-content: center;
        }

    }

</style>