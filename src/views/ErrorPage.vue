<template>

	<div class="main-container">

		<Error :language="language"/>

	</div>

</template>

<script>

    import Error from '../components/Error.vue'

	export default {
		name: 'ErrorPage',
		components: {
			Error
		},
		props: {
			language: {
				type: String,
				default: 'en'
			}
		}
	}

</script>