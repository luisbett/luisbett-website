<template>

	<div id="footer">
		<p>{{ translate('footerMessage') }}</p>
	</div>

</template>

<script>

	import pt_br from "../languages/pt_br.js"
	import en from "../languages/en.js"
	import ea from "../languages/ea.js"

	export default {
		name: 'Footer',
		mixins: [pt_br, en, ea],
		props: {
			language: String
		},
		methods: {
			translate(msg) {
				return this[this.language][msg]
			}
		}
	}

</script>

<style scoped>

	#footer {
		height: 100px;
		background-color: #191919;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		bottom: 0;
		width: 100%;
	}

</style>