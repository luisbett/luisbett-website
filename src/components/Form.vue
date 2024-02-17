<template>

    <form class="form-container">

        <div class="input-container">

            <label for="name">{{ $t('formNameTitle') }}</label>
            <input :class="[ nameError ? 'redBorder' : 'grayBorder' ]" type="text" id="name" name="name" v-model="name">

            <div v-if="nameError" class="error-container">
                <IconAlertCircleFilled color="red" :size="16" stroke-width="2"/>
                <span>{{ this.nameError }}</span>
            </div>

        </div>

        <div class="input-container">

            <label for="email">{{ $t('formEmailTitle') }}</label>
            <input :class="[ emailError ? 'redBorder' : 'grayBorder' ]" type="email" id="email" name="email" v-model="email">

            <div v-if="emailError" class="error-container">
                <IconAlertCircleFilled color="red" :size="16" stroke-width="2"/>
                <span>{{ this.emailError }}</span>
            </div>

        </div>

        <div class="input-container">

            <label for="phone">{{ $t('formPhoneTitle') }}</label>
            <input :class="[ 'grayBorder' ]" type="text" id="phone" name="phone" v-model="phone">

        </div>

        <div class="input-container">

            <label for="message">{{ $t('formMessageTitle') }}</label>
            <textarea :class="[ messageError ? 'redBorder' : 'grayBorder' ]" id="message" name="message" v-model="message" rows="5"></textarea>
            
            <div v-if="messageError" class="error-container">
                <IconAlertCircleFilled color="red" :size="16" stroke-width="2"/>
                <span>{{ this.messageError }}</span>
            </div>

        </div>

        <div class="button-container">

            <Button label="formButton" size="large" color="blackWhite" @click.prevent="sendEmail"/>

        </div>

    </form>

</template>

<script>

    import Button from "./Button.vue"
    import { IconAlertCircleFilled } from "@tabler/icons-vue"

	export default {
		name: 'Form',
        components: {
            Button,
            IconAlertCircleFilled
        },
        data() {
            return {
                name: '',
                email: '',
                phone: '',
                message: '',
                nameError: '',
                emailError: '',
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
            sendEmail() {

                //Validate form fields
                if (this.validateFields()) {

                    const serviceID = 'service_9ixpaq7'
                    const templateID = 'template_fuvdy3d'
                    const publicKey = '7aeVQ-rbrA9Yot1-b'

                    var templateParams = {
                        name: this.name,
                        email: this.email,
                        phone: this.phone,
                        message: this.message,
                    }

                    //------------------------------
                    // Send the email using EmailJS
                    //------------------------------
                    emailjs.send(serviceID, templateID, templateParams, publicKey)
                    
                    .then(response => {

                        //Shows the success message on the console
                        console.log('SUCCESS!', response.status, response.text)

                        //Calls the ThankYou page
                        this.$linkExecution(false, '/thankyou')

                    }, error => {

                        //Shows the error message on the console
                        console.log('FAILED!', error)
                        
                        //Calls the Error page
                        this.$linkExecution(false, '/error')

                    })

                }

            },
            validateFields() {

                //Name validation
                if(!this.name) {
                    this.nameError = this.$t('formNameEmpty')
                } else {
                    this.nameError = ''
                }

                //Email validation
                if(!this.email) {
                    this.emailError = this.$t('formEmailEmpty')
                } else {
                    //Check if the email is valid
                    this.validateEmail(this.email)
                }

                //Message validation
                if(!this.message) {
                    this.messageError = this.$t('formMessageEmpty')
                } else {
                    this.messageError = ''
                }

                //If there is some error
                if (this.nameError || this.emailError || this.messageError) {
                    return false
                } else {
                    return true
                }

            },
            validateEmail(value) {

                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                    this.emailError = ''
                } else {
                    this.emailError = this.$t('formEmailInvalid')
                }

            }
		},
        watch: {
            name(value) {

                this.name = value

                if( !value ) {
                    this.nameError = this.$t('formNameEmpty')
                } else {
                    this.nameError = ''
                }

            },
            email(value) {
                
                this.email = value

                if( !value ) {
                    this.emailError = this.$t('formEmailEmpty')
                } else {
                    //Check if the email is valid
                    this.validateEmail(value)
                }

            },
            message(value) {
                
                this.message = value

                if( !value ) {
                    this.messageError = this.$t('formMessageEmpty')
                } else {
                    this.messageError = ''
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

    @media (max-width: 859px) {

        .form-container {
            max-width: 350px;
        }

    }

</style>