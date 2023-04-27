<template>

    <div class="error-container">

        <img src="/img/icons/x-red.png" alt="Red x symbol">
		<h1>{{ $t('errorMessage') }}</h1>
        <h2>Please, try again later!</h2>
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

</style>