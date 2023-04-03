<template>

	<div class="main-div">
		<ThankYouComp :language="language"/>
	</div>

</template>

<script>

    import ThankYouComp from '../components/ThankYouComp.vue'

	export default {
		name: 'ThankYou',
		components: {
			ThankYouComp
		},
		props: {
			language: String
		}
	}

</script>