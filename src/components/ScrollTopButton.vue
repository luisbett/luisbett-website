<template>

    <a href="#" class="button-top"><img src="/img/icons/arrow-up-green.png"></a>

</template>

<script>

    export default {
        name: 'ScrollTopButton'
    }

</script>

<style scoped>

	.button-top {
		position: fixed;
		bottom: 30px;
		right: 30px;
		padding: 13px;
		background-color: #191919;
		border-radius: 20px;
		box-shadow: 2px 4px 15px 0 #000000;
		transition: margin-top .25s;
		transition-duration: .25s;
		transition-timing-function: ease;
		transition-delay: 0s;
		transition-property: margin-top;
	}

	.button-top img {
		width: 30px;
		height: 30px;
	}

	.button-top:hover {
		scale: 1.08;
	}

</style>