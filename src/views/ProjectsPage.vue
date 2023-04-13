<template>

	<div class="main-container">

		<Projects :language=language />

	</div>

</template>

<script>

	import Projects from '../components/Projects.vue'

	export default {
		name: 'ProjectsPage',
		components: {
			Projects
		},
		props: {
			language: {
				type: String,
				default: 'en'
			}
		}
	}

</script>