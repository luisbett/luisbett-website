<template>

    <div class="links-container">

        <h1>{{ translate('linksMessage') }}</h1>

        <div class="links-subcontainer">
            
            <h2 class="links-subcontainer-title">Follow me on my social media:</h2>

            <table>

                <tr>
                    <td><img class="links-logo" src="/img/icons/linkedin-green.png"></td>
                    <td class="links-button"><Button class="links-button" :language=language label="buttonLinkedIn" size="large" color="greenGray" @click="openLink('https://www.linkedin.com/in/luis-fellipy-bett/')" /></td>
                </tr>

                <tr>
                    <td><img class="links-logo" src="/img/icons/github-green.png"></td>
                    <td class="links-button"><Button class="links-button" :language=language label="buttonGitHub" size="large" color="greenGray" @click="openLink('https://github.com/luisbett')" /></td>
                </tr>

                <tr>
                    <td><img class="links-logo" src="/img/icons/intagram-green.png"></td>
                    <td class="links-button"><Button :language=language label="buttonInstagram" size="large" color="greenGray" @click="openLink('https://www.instagram.com/luis.fellipy/')" /></td>
                </tr>

            </table>

        </div>

    </div>

</template>

<script>

    import Button from './Button.vue'

    import pt_br from "../languages/pt_br.js"
	import en from "../languages/en.js"
	import ea from "../languages/ea.js"

    export default {
        name: 'Links',
        components: {
            Button
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
			},
            openLink(link) {
                window.open(link, '_blank')
            }
        }
    }

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

    .links-subcontainer-title {
		margin-bottom: 20px;
	}

    table {
        margin: auto;
        border-collapse: separate;
        border-spacing: 10px 30px;
    }

    td {
        margin: auto;
        border-radius: 20px;
        padding: 20px;
        background-color: #262626;
        box-shadow: 5px 5px 5px #0D0D0D;
    }

    .links-logo {
        width: 45px;
        height: 45px;
    }

    .links-button {
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>