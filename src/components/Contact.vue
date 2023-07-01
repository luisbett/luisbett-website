<template>

    <div class="contact-container">

        <h1>{{ $t('contactTitle') }}</h1>

        <div class="contact-subcontainer">
            
            <div class="contact-left">
                
				<div class="contact-item">

					<div class="contact-item-title">

						<IconAt class="contact-item-icon" color="#26AF70" :size="30" stroke-width="2"/>
						<h2>{{ $t('contactEmailTitle') }}</h2>

					</div>

					<h3 class="contact-item-content"><a href="mailto:luisfbett@gmail.com">luisfbett@gmail.com</a></h3>

				</div>

				<div class="contact-item">

					<div class="contact-item-title">

						<IconPhoneFilled class="contact-item-icon" color="#26AF70" :size="30" stroke-width="2"/>
						<h2>{{ $t('contactPhoneTitle') }}</h2>

					</div>

					<h3 class="contact-item-content"><a href="https://wa.link/4tpws1" target="_blank">🇮🇪 +353 83 139 6866</a></h3>

				</div>

				<div class="contact-item">

					<div class="contact-item-title">

						<IconBrandWhatsapp class="contact-item-icon" color="#26AF70" :size="30" stroke-width="2"/>
						<h2>{{ $t('contactWhatsAppTitle') }}</h2>

					</div>

					<img class="contact-item-qrcode" src="/img/qrcode-4tpws1.png" alt="WhatsApp qrcode" id="qrcode-wpp">

				</div>

            </div>

            <div class="contact-right">

                <h2>{{ $t('contactFormTitle') }}:</h2>
                <Form />

            </div>

        </div>

    </div>

</template>

<script>

	import Form from "../components/Form.vue"
	import { IconAt, IconPhoneFilled, IconBrandWhatsapp } from "@tabler/icons-vue"

	export default {
		name: 'Contact',
		components: {
			Form,
			IconAt,
			IconPhoneFilled,
			IconBrandWhatsapp
		}
	}

</script>

<style scoped>

    .contact-container {
		display: block;
		padding: 30px;
		text-align: center;
	}

	.contact-subcontainer {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}

	.contact-left {
		min-height: 90vh;
		min-width: 400px;
	}

	.contact-right {
		min-height: 90vh;
		min-width: 400px;
	}

	.contact-item {
		width: 50vh;
		margin: 40px auto;
		background-color: #262626;
		color: #FFFFFF;
		border-radius: 20px;
		padding: 25px;
		box-shadow: 5px 5px 5px #0D0D0D;
	}

	.contact-item a {
		text-decoration: none;
		color: #26AF70;
	}

	.contact-item-title {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 10px;
		gap: 5px;
	}

	.contact-item-content {
		padding: 15px;
		background-color: #404040;
		border-radius: 20px;
		color: #26AF70;
	}

	.contact-item-qrcode {
		width: 40%;
		height: 40%;
		padding: 10px;
		background-color: #404040;
		border-radius: 20px;
	}

	.contact-right h2 {
		margin-bottom: 30px;
	}

	@media (max-width: 859px) {

        .contact-item {
            width: 40vh;
        }

		.contact-item-img {
			width: 50%;
			height: 50%;
		}

    }

</style>