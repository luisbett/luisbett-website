<template>

    <div class="projects-container">

        <h1>{{ $t('projectsTitle') }}</h1>

        <div class="projects-subcontainer">
            
            <Card title="projectsWebsiteTitle" tech="Vue" description="projectsWebsiteDsc" buttonApp="https://luisbett.com/" buttonCode="https://github.com/luisbett/luisbett-website" />
            <Card title="projectsCodecTitle" tech="JS" description="projectsCodecDsc" buttonCode="https://github.com/luisbett/codec-test" />
            <Card title="projectsGitFinderTitle" tech="React" description="projectsGitFinderDsc" buttonApp="https://luisbett-github-user-finder.netlify.app/" buttonCode="https://github.com/luisbett/github-user-finder" />
            <Card title="projectsWeathermomTitle" tech="React" description="projectsWeathermomDsc" buttonApp="https://luisbett-weathermom.netlify.app/" buttonCode="https://github.com/luisbett/weathermom" />
            <Card title="projectsEuroTodayTitle" tech="Node" description="projectsEuroTodayDsc" buttonCode="https://github.com/luisbett/euro-today" />
            <Card title="projectsLoginJWTTitle" tech="React" tech2="Node" description="projectsLoginJWTDsc" buttonApp="https://luisbett-login-jwt.netlify.app/" buttonCode="https://github.com/luisbett/login-jwt" />
            <Card title="projectsMyWeddingTitle" tech="React" description="projectsMyWeddingDsc" buttonApp="https://wedding-luis-e-le.web.app/" buttonCode="https://github.com/luisbett/my-wedding" />

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