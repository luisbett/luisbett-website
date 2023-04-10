<template>

	<div class="main-container">

		<h1>{{ translate('linksMessage') }}</h1>
		<a href="https://www.linkedin.com/in/luis-fellipy-bett/" target="_blank">LinkedIn</a>
		<a href="https://github.com/luisbett" target="_blank">GitHub</a>
		<a href="https://wa.link/4tpws1" target="_blank">Phone</a>
		<img src="/img/qrcode-4tpws1.png" alt="qrcode-wpp" id="qrcode-wpp">
		<router-link to="/contact">Send me a message</router-link>

	</div>

</template>

<script>

	import pt_br from "../languages/pt_br.js"
	import en from "../languages/en.js"
	import ea from "../languages/ea.js"

	export default {
		name: 'Links',
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