<template>

	<a href="#" class="button-top"><IconChevronUp color="#26AF70" :size="30" stroke-width="4"/></a>

</template>

<script>

	import { IconChevronUp } from '@tabler/icons-vue'

    export default {
		name: "ScrollTopButton",
		components: { 
			IconChevronUp 
		}
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

	.button-top:hover {
		scale: 1.08;
	}

</style>