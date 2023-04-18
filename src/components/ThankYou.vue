<template>

    <div class="thankyou-container">

		<h1>{{ $t('thankYouMessage') }}</h1>

    </div>

</template>

<script>

    export default {
        name: 'ThankYou'
    }

</script>

<style scoped>

    .thankyou-container {
		display: block;
		padding: 30px;
        text-align: center;
		margin: auto;
		width: 100%;
		height: 70vh;
	}

</style>