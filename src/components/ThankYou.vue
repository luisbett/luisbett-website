<template>

    <div class="thankyou-container">

		<h1>{{ translate('thankYouMessage') }}</h1>

    </div>

</template>

<script>

    import pt_br from "../languages/pt_br.js"
	import en from "../languages/en.js"
	import ea from "../languages/ea.js"

    export default {
        name: 'ThankYou',
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

</script>

<style scoped>

    .thankyou-container {
		display: block;
		padding: 30px;
        text-align: center;
		margin: auto;
		width: 100%;
		height: 70vh;
	}

</style>