<template>

    <div class="links-container">

        <h1>{{ translate('linksMessage') }}</h1>

        <div class="links-subcontainer" style="background-color: gray;">
            <h2>Sub-container</h2>
        </div>

    </div>

</template>

<script>

    import pt_br from "../languages/pt_br.js"
	import en from "../languages/en.js"
	import ea from "../languages/ea.js"

    export default {
        name: 'Links',
        props: {
            language: {
                type: String,
                default: 'en'
            }
        },
        mixins: [pt_br, en, ea],
        methods: {
			translate(msg) {
				return this[this.language][msg]
			}
        }
    }

    /*<a href="https://www.linkedin.com/in/luis-fellipy-bett/" target="_blank">LinkedIn</a>
    <a href="https://github.com/luisbett" target="_blank">GitHub</a>
    <a href="https://wa.link/4tpws1" target="_blank">Phone</a>
    <img src="/img/qrcode-4tpws1.png" alt="qrcode-wpp" id="qrcode-wpp">
    <router-link to="/contact">Send me a message</router-link>*/

</script>

<style scoped>

    .links-container {
		display: block;
		padding: 30px;
        text-align: center;
		margin: auto;
	}

	.links-subcontainer {
		width: 100%;
		height: 70vh;
	}

</style>