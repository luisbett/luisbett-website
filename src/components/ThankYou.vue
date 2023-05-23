<template>

    <div class="thankyou-container">

        <IconCircleCheckFilled color="#26AF70" :size="256" stroke-width="2"/>
		<h1>{{ $t('thankyouTitle') }}</h1>
        <h2>{{ $t('thankyouSubTitle') }}!</h2>
        <Button label="Home" size="large" color="greenWhite" @click="$linkExecution(false, '/')">
            <IconHome color="black" :size="25" stroke-width="2"/>
        </Button>

    </div>

</template>

<script>

    import Button from './Button.vue'
    import { IconCircleCheckFilled, IconHome } from '@tabler/icons-vue'

    export default {
        name: 'ThankYou',
        components: {
            Button,
            IconCircleCheckFilled,
            IconHome
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

    @media (max-width: 950px) {

        .thankyou-container {
            height: 110vh;
        }

    }

</style>