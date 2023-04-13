<template>

    <form class="form-container">

        <div class="input-container">
            <label for="name">{{ translate('formName') }}</label>
            <input type="text" id="name" name="name" v-model="name" required>
        </div>

        <div class="input-container">
            <label for="email">{{ translate('formEmail') }}</label>
            <input type="email" id="email" name="email" v-model="email" required>
        </div>

        <div class="input-container">
            <label for="phone">{{ translate('formPhone') }}</label>
            <input type="text" id="phone" name="phone" v-model="phone" required>
        </div>

        <div class="input-container">
            <label for="message">{{ translate('formMessage') }}</label>
            <textarea id="message" name="message" v-model="message" rows="5" required></textarea>
        </div>

        <div class="button-container">
            <Button :language=language label="formButton" size="large" color="blackWhite" @click="sendEmail($event)"/>
        </div>

    </form>

</template>

<script>

	import Button from "./Button.vue"

    import pt_br from "../languages/pt_br.js"
	import en from "../languages/en.js"
	import ea from "../languages/ea.js"

	export default {
		name: 'Form',
        components: {
            Button
        },
		props: {
			language: {
                type: String,
                default: 'en'
            }
		},
        data() {
            return {
                name: '',
                email: '',
                phone: '',
                message: ''
            }
        },
        mixins: [pt_br, en, ea],
        mounted() {
            const emailJSScript = document.createElement("script")
            
            emailJSScript.setAttribute("type", "application/javascript")
            emailJSScript.setAttribute("src", "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js")
            document.head.appendChild(emailJSScript)
        },
		methods: {
			translate(msg) {
				return this[this.language][msg]
			},
            sendEmail(e) {

                e.preventDefault()

                const serviceID = 'service_9ixpaq7'
                const templateID = 'template_fuvdy3d'
                const publicKey = 'rec1b8cUb3hipPP7u'

                var templateParams = {
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    message: this.message,
                }

                //Send the email using EmailJS
                /*emailjs.send(serviceID, templateID, templateParams, publicKey)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    router.push({path: '/thankyou'})
                    this.$router.push(srcPath)
                }, function(error) {
                    console.log('FAILED...', error);
                });*/
            }
		}
	}

</script>

<style scoped>

	.form-container {
		display: block;
		margin: auto;
        max-width: 400px;
	}

    .input-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 25px;
    }

    .button-container {
        display: flex;
        justify-content: center;
        margin-bottom: 25px;
    }

    label {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
        padding: 5px 10px;
        border-left: 3px solid #25AF70;
        text-align: left;
    }

    input, textarea {
        padding: 10px 10px;
        border: 1px solid #737373;
        border-radius: 10px;
    }

    textarea {
        resize: none;
    }

</style>