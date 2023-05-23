<template>

    <div class="links-container">

        <h1>{{ $t('linksTitle') }}</h1>

        <div class="links-subcontainer">
            
            <h2 class="links-subcontainer-title">{{ $t('linksSubTitle') }}:</h2>

            <table>

                <tr>
                    <td><IconBrandLinkedin color="#26AF70" :size="50" stroke-width="2"/></td>
                    <td class="links-button"><Button class="links-button" label="buttonLinkedIn" size="large" color="greenGray" @click="$linkExecution(true, 'https://www.linkedin.com/in/luis-fellipy-bett/')" /></td>
                </tr>

                <tr>
                    <td><IconBrandGithub color="#26AF70" :size="50" stroke-width="2"/></td>
                    <td class="links-button"><Button class="links-button" label="buttonGitHub" size="large" color="greenGray" @click="$linkExecution(true, 'https://github.com/luisbett')" /></td>
                </tr>

                <tr>
                    <td><IconBrandInstagram color="#26AF70" :size="50" stroke-width="2"/></td>
                    <td class="links-button"><Button label="buttonInstagram" size="large" color="greenGray" @click="$linkExecution(true, 'https://www.instagram.com/luisfbett/')" /></td>
                </tr>

                <tr>
                    <td><IconBrandFacebook color="#26AF70" :size="50" stroke-width="2"/></td>
                    <td class="links-button"><Button label="buttonFacebook" size="large" color="greenGray" @click="$linkExecution(true, 'https://www.facebook.com/lipy.bett')" /></td>
                </tr>

            </table>

        </div>

    </div>

</template>

<script>

    import Button from './Button.vue'
    import { IconBrandLinkedin, IconBrandGithub, IconBrandInstagram, IconBrandFacebook } from '@tabler/icons-vue'

    export default {
        name: 'Links',
        components: {
            Button,
            IconBrandLinkedin,
            IconBrandGithub,
            IconBrandInstagram,
            IconBrandFacebook
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
		height: 85vh;
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

    .links-button {
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>