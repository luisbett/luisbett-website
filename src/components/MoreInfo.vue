<template>

    <div id="moreinfo">
        <h1>More information</h1>
		<div id="moreinfo-text">
			<p>Nasci na cidade de Joinville, Santa Catarina, Brasil e atualmente resido em Dublin. <br>
			Sempre gostei muito de tecnologia e me fascina saber o poder que ela nos da diariamente para realizarmos <br>
			nossas atividades diarias.</p>
			<p>Nasci na cidade de Joinville, Santa Catarina, Brasil e atualmente resido em Dublin. <br>
			Sempre gostei muito de tecnologia e me fascina saber o poder que ela nos da diariamente para realizarmos <br>
			nossas atividades diarias.</p>
			<p>Nasci na cidade de Joinville, Santa Catarina, Brasil e atualmente resido em Dublin. <br>
			Sempre gostei muito de tecnologia e me fascina saber o poder que ela nos da diariamente para realizarmos <br>
			nossas atividades diarias.</p>
			<p>Nasci na cidade de Joinville, Santa Catarina, Brasil e atualmente resido em Dublin. <br>
			Sempre gostei muito de tecnologia e me fascina saber o poder que ela nos da diariamente para realizarmos <br>
			nossas atividades diarias.</p>
			<p>Nasci na cidade de Joinville, Santa Catarina, Brasil e atualmente resido em Dublin. <br>
			Sempre gostei muito de tecnologia e me fascina saber o poder que ela nos da diariamente para realizarmos <br>
			nossas atividades diarias.</p>
			<p>Nasci na cidade de Joinville, Santa Catarina, Brasil e atualmente resido em Dublin. <br>
			Sempre gostei muito de tecnologia e me fascina saber o poder que ela nos da diariamente para realizarmos <br>
			nossas atividades diarias.</p>
			<p>Nasci na cidade de Joinville, Santa Catarina, Brasil e atualmente resido em Dublin. <br>
			Sempre gostei muito de tecnologia e me fascina saber o poder que ela nos da diariamente para realizarmos <br>
			nossas atividades diarias.</p>
			<p>Nasci na cidade de Joinville, Santa Catarina, Brasil e atualmente resido em Dublin. <br>
			Sempre gostei muito de tecnologia e me fascina saber o poder que ela nos da diariamente para realizarmos <br>
			nossas atividades diarias.</p>
			<router-link to="/projects">{{ translate('navbarProjects') }}</router-link>
			<router-link to="/links">{{ translate('navbarLinks') }}</router-link>
			<router-link to="/contact">{{ translate('navbarContact') }}</router-link>
		</div>
    </div>

</template>

<script>

    import pt_br from "../languages/pt_br.js"
	import en from "../languages/en.js"
	import ea from "../languages/ea.js"

	export default {
		name: 'MoreInfo',
		mixins: [pt_br, en, ea],
		props: {
			language: String
		},
		methods: {
			translate(msg) {
				return this[this.language][msg]
			}
		}
	}

</script>

<style scoped>

    #moreinfo {
		display: block;
		justify-content: center;
        text-align: center;
		background-color: #262626;
		color: #FFFFFF;
		margin: auto;
		padding: 100px;
	}

	#moreinfo #moreinfo-text {
		margin-top: 70px;
		font-size: 19px;
	}

</style>