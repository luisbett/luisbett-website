<template>

	<div class="main-container">

		<ThankYou :language="language"/>

	</div>

</template>

<script>

    import ThankYou from '../components/ThankYou.vue'

	export default {
		name: 'ThankYouPage',
		components: {
			ThankYou
		},
		props: {
			language: {
				type: String,
				default: 'en'
			}
		}
	}

</script>