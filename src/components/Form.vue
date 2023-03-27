<template>

	<div id="form-div">
        <h1>{{ translate('formTitle') }}</h1>
        <form id="contact-form">
            <div class="input-container">
                <label for="name">{{ translate('formName') }}</label>
                <input type="text" id="name" name="name" v-model="name">
            </div>
            <div class="input-container">
                <label for="email">{{ translate('formEmail') }}</label>
                <input type="email" id="email" name="email" v-model="email">
            </div>
            <div class="input-container">
                <label for="message">{{ translate('formMessage') }}</label>
                <textarea id="message" name="message" v-model="message" rows="4" cols="50"></textarea>
            </div>
            <div class="input-container">
                <button id="submit-button" @click="sendEmail">{{ translate('formButton') }}</button>
            </div>
        </form>
	</div>

</template>

<script>

	import pt_br from "../languages/pt_br.js"
	import en from "../languages/en.js"
	import ea from "../languages/ea.js"

	export default {
		name: 'Form',
		mixins: [pt_br, en, ea],
		props: {
			language: String
		},
        data() {
            return {
                name: '',
                email: '',
                message: ''
            }
        },
		methods: {
			translate(msg) {
				return this[this.language][msg]
			},
            sendEmail(e) {

                e.preventDefault()

                const data = {
                    name: this.name,
                    email: this.email,
                    message: this.message
                }

                console.log(data)
            }
		}
	}

</script>

<style scoped>

	#form-div {
		display: block;
		justify-content: center;
		margin: 0 auto;
        text-align: center;
        max-width: 450px;
	}

    #contact-form {
        margin-top: 50px;
    }

    .input-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
    }

    label {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
        padding: 5px 10px;
        border-left: 3px solid #25AF70;
    }

    input, #message {
        padding: 10px 10px;
    }

    #message {
        resize: none;
    }

    #submit-button {
        background-color: #262626;
        color: #FFFFFF;
        font-weight: bold;
        border: 2px solid #262626;
        padding: 10px;
        font-size: 16px;
        cursor: pointer;
        transition: .5s;
        border-radius: 5px;
    }

    #submit-button:hover {
        background-color: #FFFFFF;
        color: #25AF70;
    }

</style>