<template>

	<div id="footer">
		<p>{{ $t('footerTitle') }}</p>
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
		text-align: center;
		font-size: 14px;
		bottom: 0;
		width: 100%;
	}

</style>