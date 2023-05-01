<template>

    <div class="error-container">

        <img src="/img/icons/x-red.png" alt="Red x icon">
		<h1>{{ $t('errorTitle') }}</h1>
        <h2>{{ $t('errorSubTitle') }}!</h2>
        <Button label="Home" size="large" color="greenWhite" imgSrc="/img/icons/house-black.png" @click="$linkExecution(false, '/')" />

    </div>

</template>

<script>

import Button from './Button.vue'

    export default {
        name: 'Error',
        components: {
            Button
        }
    }

</script>

<style scoped>

    .error-container {
		display: block;
		padding: 30px;
        text-align: center;
		width: 100%;
		height: 80vh;
	}

    .error-container > * {
        margin: 10px auto;
    }

    .error-container button {
        margin-top: 80px;
    }

    @media (max-width: 950px) {

        .error-container {
            height: 110vh;
        }

    }

</style>