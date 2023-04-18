<template>

	<div id="footer">
		<p>{{ $t('footerMessage') }}</p>
	</div>

</template>

<script>

	export default {
		name: 'Footer'
	}

</script>

<style scoped>

	#footer {
		height: 100px;
		background-color: #191919;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		bottom: 0;
		width: 100%;
	}

</style>