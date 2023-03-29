<template>

	<div id="form-div">
        <h1>{{ translate('formTitle') }}</h1>
        <form id="contact-form" action="https://formspree.io/f/mgebnoeq" method="POST">
            <div class="input-container">
                <label for="name">{{ translate('formName') }}</label>
                <input type="text" id="name" name="Name" v-model="name">
            </div>
            <div class="input-container">
                <label for="email">{{ translate('formEmail') }}</label>
                <input type="email" id="email" name="Email" v-model="email">
            </div>
            <div class="input-container">
                <label for="phone">{{ translate('formPhone') }}</label>
                <input type="text" id="phone" name="Phone" v-model="phone">
            </div>
            <div class="input-container">
                <label for="message">{{ translate('formMessage') }}</label>
                <textarea id="message" name="Message" v-model="message" rows="5"></textarea>
            </div>
            <div class="input-container">
                <button id="submit-button" type="submit">{{ translate('formButton') }}</button>
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
		methods: {
			translate(msg) {
				return this[this.language][msg]
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

    input, #message {
        padding: 10px 10px;
        border: 1px solid #737373;
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