<template>

	<div class="main-container">

		<Links :language=language />

	</div>

</template>

<script>

    import Links from '../components/Links.vue'

	export default {
        name: 'LinksPage',
        components: {
            Links
        },
        props: {
            language: {
                type: String,
                default: 'en'
            }
        }
    }

</script>