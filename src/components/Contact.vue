<template>

    <div class="contact-container">

        <h1>{{ translate('formTitle') }}</h1>

        <div class="contact-subcontainer">
            
            <div class="contact-left" style="background-color: gray;">
                <h2>Contact left</h2>
            </div>

            <div class="contact-right" style="background-color: darkgray;">
                <h2>Or leave your message</h2>
                <Form :language=language />
            </div>

        </div>

    </div>

</template>

<script>

	import Form from "../components/Form.vue"

    import pt_br from "../languages/pt_br.js"
	import en from "../languages/en.js"
	import ea from "../languages/ea.js"

	export default {
		name: 'Contact',
		components: {
			Form
		},
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

    .contact-container {
		display: block;
		padding: 30px;
		text-align: center;
		margin: auto;
	}

	.contact-subcontainer {
		display: flex;
	}

	.contact-left {
		width: 50%;
		height: 80vh;
		/*font-size: 19px;
		text-align: left;
		font-weight: bold;*/
	}

	.contact-right {
		width: 50%;
		height: 80vh;
		/*font-size: 19px;
		padding: 20px;
		text-align: right;*/
	}

    @media (max-width: 850px) {

        .contact-subcontainer {
            display: block;
        }

        .contact-left {
            width: 100%;
            height: 80vh;
        }

        .contact-right {
            width: 100%;
            height: 80vh;
        }

    }

</style>