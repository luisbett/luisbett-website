<template>

    <form class="form-container">

        <div class="input-container">

            <label for="name">{{ $t('formName') }}</label>
            <input :class="[ nameError ? 'redBorder' : 'grayBorder' ]" type="text" id="name" name="name" v-model="name">

            <div v-if="nameError" class="error-container">
                <img src="/img/icons/error-red.png" alt="Error symbol">
                <span>{{ this.nameError }}</span>
            </div>

        </div>

        <div class="input-container">

            <label for="email">{{ $t('formEmail') }}</label>
            <input :class="[ emailError ? 'redBorder' : 'grayBorder' ]" type="email" id="email" name="email" v-model="email">

            <div v-if="emailError" class="error-container">
                <img src="/img/icons/error-red.png" alt="Error symbol">
                <span>{{ this.emailError }}</span>
            </div>

        </div>

        <div class="input-container">

            <label for="phone">{{ $t('formPhone') }}</label>
            <input :class="[ phoneError ? 'redBorder' : 'grayBorder' ]" type="text" id="phone" name="phone" v-model="phone">
            
            <div v-if="phoneError" class="error-container">
                <img src="/img/icons/error-red.png" alt="Error symbol">
                <span>{{ this.phoneError }}</span>
            </div>

        </div>

        <div class="input-container">

            <label for="message">{{ $t('formMessage') }}</label>
            <textarea :class="[ messageError ? 'redBorder' : 'grayBorder' ]" id="message" name="message" v-model="message" rows="5"></textarea>
            
            <div v-if="messageError" class="error-container">
                <img src="/img/icons/error-red.png" alt="Error symbol">
                <span>{{ this.messageError }}</span>
            </div>

        </div>

        <div class="button-container">

            <Button label="formButton" size="large" color="blackWhite" @click="sendEmail($event)"/>

        </div>

    </form>

</template>

<script>

	import Button from "./Button.vue"

	export default {
		name: 'Form',
        components: {
            Button
        },
        data() {
            return {
                name: '',
                email: '',
                phone: '',
                message: '',
                nameError: '',
                emailError: '',
                phoneError: '',
                messageError: ''
            }
        },
        mounted() {
            const emailJSScript = document.createElement("script")
            
            emailJSScript.setAttribute("type", "application/javascript")
            emailJSScript.setAttribute("src", "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js")
            document.head.appendChild(emailJSScript)
        },
		methods: {
            sendEmail(e) {

                e.preventDefault()

                //Validate form fields
                if (this.validFields()) {                    

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

            },
            validFields() {

                //Name validation
                if(!this.name) {
                    this.nameError = 'Name is required'
                } else {
                    this.nameError = ''
                }

                //Email validation
                if(!this.email) {
                    this.emailError = 'Email is required'
                } else {

                    if (this.validEmail()) {
                        this.emailError = ''
                    } else {
                        this.emailError = 'Must be a valid email'
                    }
                    
                }

                //Phone validation
                if(!this.phone) {
                    this.phoneError = 'Phone is required'
                } else {
                    this.phoneError = ''
                }

                //Message validation
                if(!this.message) {
                    this.messageError = 'Message is required'
                } else {
                    this.messageError = ''
                }

                //If there is some error
                if (this.nameError || this.emailError || this.phoneError || this.messageError) {
                    return false
                } else {
                    return true
                }

            },
            validEmail() {

                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
                    return true
                } else {
                    return false
                }

            }
		}
	}

</script>

<style scoped>

	.form-container {
		display: block;
		margin: auto;
        max-width: 400px;
        padding: 20px;
        border: 3px solid #191919;
        border-radius: 20px;
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
        border-radius: 10px;
    }

    textarea {
        resize: none;
    }

    .error-container {
        display: flex;
        align-items: center;
    }

    .grayBorder {
        border: 1px solid #737373;
    }

    .redBorder {
        border: 1px solid red;
    }

    span {
        font-size: 14px;
        color: red;
        text-align: left;
    }

    img {
        width: 15px;
        height: 15px;
    }

    @media (max-width: 859px) {

        .form-container {
            max-width: 350px;
        }

    }

</style>