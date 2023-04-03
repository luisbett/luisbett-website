<template>

    <div id="thankyou-comp">
        <h1>{{ translate('thankYouMessage') }}</h1>
    </div>

</template>

<script>

    import pt_br from "../languages/pt_br.js"
	import en from "../languages/en.js"
	import ea from "../languages/ea.js"

	export default {
		name: 'ThankYouComp',
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