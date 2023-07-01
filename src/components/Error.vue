<template>

    <div class="error-container">

        <IconCircleXFilled color="red" :size="256" stroke-width="2"/>
		<h1>{{ $t('errorTitle') }}</h1>
        <h2>{{ $t('errorSubTitle') }}!</h2>
        <Button label="Home" size="large" color="greenWhite" @click="$linkExecution(false, '/')">
            <IconHome color="black" :size="25" stroke-width="2"/>
        </Button>

    </div>

</template>

<script>

    import Button from './Button.vue'
    import { IconCircleXFilled, IconHome } from '@tabler/icons-vue'

    export default {
        name: 'Error',
        components: {
            Button,
            IconCircleXFilled,
            IconHome
        }
    }

</script>

<style scoped>

    .error-container {
		display: block;
		padding: 30px;
        text-align: center;
		width: 100%;
		min-height: 80vh;
	}

    .error-container > * {
        margin: 10px auto;
    }

    .error-container button {
        margin-top: 80px;
    }

</style>