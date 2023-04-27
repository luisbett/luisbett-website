<template>

    <div class="links-container">

        <h1>{{ $t('linksMessage') }}</h1>

        <div class="links-subcontainer">
            
            <h2 class="links-subcontainer-title">Follow me on my social media:</h2>

            <table>

                <tr>
                    <td><img class="links-logo" src="/img/icons/linkedin-green.png"></td>
                    <td class="links-button"><Button class="links-button" label="buttonLinkedIn" size="large" color="greenGray" @click="$linkExecution(true, 'https://www.linkedin.com/in/luis-fellipy-bett/')" /></td>
                </tr>

                <tr>
                    <td><img class="links-logo" src="/img/icons/github-green.png"></td>
                    <td class="links-button"><Button class="links-button" label="buttonGitHub" size="large" color="greenGray" @click="$linkExecution(true, 'https://github.com/luisbett')" /></td>
                </tr>

                <tr>
                    <td><img class="links-logo" src="/img/icons/instagram-green.png"></td>
                    <td class="links-button"><Button label="buttonInstagram" size="large" color="greenGray" @click="$linkExecution(true, 'https://www.instagram.com/luis.fellipy/')" /></td>
                </tr>

            </table>

        </div>

    </div>

</template>

<script>

    import Button from './Button.vue'

    export default {
        name: 'Links',
        components: {
            Button
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