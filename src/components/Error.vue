<template>

    <div class="error-container">

		<h1>{{ $t('errorMessage') }}</h1>

    </div>

</template>

<script>

    export default {
        name: 'Error'
    }

</script>

<style scoped>

    .error-container {
		display: block;
		padding: 30px;
        text-align: center;
		margin: auto;
		width: 100%;
		height: 70vh;
	}

</style>