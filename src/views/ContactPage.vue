<template>

	<div class="main-container">

		<Contact :language=language />

	</div>

</template>

<script>

	import Contact from "../components/Contact.vue"

	export default {
		name: 'ContactPage',
		components: {
			Contact
		},
		props: {
			language: {
				type: String,
				default: 'en'
			}
		}
	}

</script>