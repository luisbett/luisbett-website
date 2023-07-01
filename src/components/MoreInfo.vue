<template>

    <div class="moreinfo-container">
		
        <h1>{{ $t('moreInfoTitle') }}</h1>

		<div class="moreinfo-subcontainer">

			<Card model="link" title="navbarProjects" description="moreInfoProjectsDesc" buttonGo="/projects">
				<IconSettings color="#26AF70" :size="25" stroke-width="2"/>
			</Card>
			<Card model="link" title="navbarLinks" description="moreInfoLinksDesc" buttonGo="/links">
				<IconWorld color="#26AF70" :size="25" stroke-width="2"/>
			</Card>
			<Card model="link" title="navbarContact" description="moreInfoContactDesc" buttonGo="/contact">
				<IconAt color="#26AF70" :size="25" stroke-width="2"/>
			</Card>

		</div>

    </div>

</template>

<script>

	import Card from './Card.vue'
	import { IconSettings, IconWorld, IconAt } from '@tabler/icons-vue'

	export default {
		name: 'MoreInfo',
		components: {
			Card,
			IconSettings,
			IconWorld,
			IconAt
		}
	}

</script>

<style scoped>

    .moreinfo-container {
		display: block;
		padding: 30px;
        text-align: center;
		margin: auto;
		background-color: #262626;
		color: #FFFFFF;
	}

	.moreinfo-container h1 {
		margin-top: 80px;
	}

	.moreinfo-subcontainer {
		width: 80%;
		min-height: 60vh;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: auto;
	}

    .moreinfo-subcontainer > * {
        margin-bottom: 20px;
    }

    @media (max-width: 1199px) {

        .moreinfo-subcontainer {
            justify-content: space-evenly;
        }

    }

    @media (max-width: 819px) {

        .moreinfo-subcontainer {
            justify-content: center;
        }

    }

</style>