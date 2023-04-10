<template>

	<div class="main-container">

		<Form :language="language"/>

	</div>

</template>

<script>

	import Form from "../components/Form.vue"

	export default {
		name: 'Contact',
		components: {
			Form
		},
		props: {
			language: String
		}
	}

</script>