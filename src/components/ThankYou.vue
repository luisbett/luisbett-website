<template>

    <div class="thankyou-container">

        <img src="/img/icons/check-green.png" alt="Green check symbol">
		<h1>{{ $t('thankYouMessage') }}</h1>
        <h2>I'll return you soon!</h2>
        <Button label="Home" size="large" color="greenWhite" imgSrc="/img/icons/house-black.png" @click="this.$router.push('/')" />

    </div>

</template>

<script>

    import Button from './Button.vue'

    export default {
        name: 'ThankYou',
        components: {
            Button
        }
    }

</script>

<style scoped>

    .thankyou-container {
		display: block;
		padding: 30px;
		width: 100%;
		height: 80vh;
        text-align: center;
	}

    .thankyou-container > * {
        margin: 10px auto;
    }

    .thankyou-container button {
        margin-top: 80px;
    }

</style>