<template>

    <div class="contact-container">

        <h1>{{ $t('formTitle') }}</h1>

        <div class="contact-subcontainer">
            
            <div class="contact-left">
                
				<div class="contact-item">

					<div class="contact-item-title">

						<img src="/img/icons/at.png" alt="At icon">
						<h2>E-mail</h2>

					</div>

					<h3 class="contact-item-content">luisfbett@gmail.com</h3>

				</div>

				<div class="contact-item">

					<div class="contact-item-title">

						<img src="/img/icons/phone-green.png" alt="Phone icon">
						<h2>Phone</h2>

					</div>

					<h3 class="contact-item-content"><a href="https://wa.link/4tpws1" target="_blank">🇮🇪 +353 83 139 6866</a></h3>

				</div>

				<div class="contact-item">

					<div class="contact-item-title">

						<img src="/img/icons/whatsapp-green.png" alt="WhatsApp icon">
						<h2>WhatsApp</h2>

					</div>

					<img class="contact-item-img" src="/img/qrcode-4tpws1.png" alt="qrcode-wpp" id="qrcode-wpp">

				</div>

            </div>

            <div class="contact-right">

                <h2>Or leave your message here:</h2>
                <Form />

            </div>

        </div>

    </div>

</template>

<script>

	import Form from "../components/Form.vue"

	export default {
		name: 'Contact',
		components: {
			Form
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
		height: 90vh;
		min-width: 400px;
	}

	.contact-right {
		height: 90vh;
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
	}

	.contact-item-title img {
		width: 25px;
		height: 25px;
		margin-right: 10px;
	}

	.contact-item-content {
		padding: 15px;
		background-color: #404040;
		border-radius: 20px;
		color: #26AF70;
	}

	.contact-item-img {
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