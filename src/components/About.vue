<template>

	<div id="about">
		<h1>{{ translate('homeAboutTitle') }}</h1>
		<div id="about-container">
			<div id="about-topics">
				<ul id="list">
					<li><img src="/img/icons/fullname.png" alt="fullname-icon">Full name: <span class="infos">Luis Fellipy Bett</span></li>
					<li><img src="/img/icons/location.png" alt="location-icon">Location: <span class="infos">Dublin</span></li>
					<li>Skills:
						<table>
							<tr>
								<th><img src="/img/icons/html.png" alt="html-logo"></th>
								<th>HTML</th>
							</tr>
							<tr>
								<th><img src="/img/icons/css.png" alt="css-logo"></th>
								<th>CSS</th>
							</tr>
							<tr>
								<th><img src="/img/icons/javascript.png" alt="javascript-logo"></th>
								<th>JavaScript</th>
							</tr>
							<tr>
								<th><img src="/img/icons/vue.png" alt="vue-logo"></th>
								<th>Vue</th>
							</tr>
							<tr>
								<th><img src="/img/icons/sql.png" alt="sql-logo"></th>
								<th>SQL</th>
							</tr>
						</table>
					</li>
				</ul>
			</div>
			<div id="about-text">
				<p>Nascido em Joinville, Santa Catarina, Brazil e atualmente vivendo em Dublin.</p>
				<p>Sou uma pessoa apaixonada por tecnologia, esporte e musica.</p>
				<p>Comecei a estudar desenvolvimento de software no ensino medio quando junto com o ensino regular pude cursar um curso tecnico em informatica.</p>
				<p>Apos o ensino medio entrei na universidade e fiz um tecnologo em Analise e Desenvolvimento de Sistemas.</p>
				<p>Enquanto estava na universidade consegui meu primeiro emprego na area como desenvolvedor na NG Informatica.</p>
				<p>Apos 5 anos de trabalho decidi vir para a Dublin na Irlanda para estudar a lingua inglesa.</p>
				<p>Desde entao sou apoixonado pelo estilo de vida europeu e busco minha primeira oportunidade fora do Brasil.</p>
			</div>
		</div>
	</div>

</template>

<script>

	import pt_br from "../languages/pt_br.js"
	import en from "../languages/en.js"
	import ea from "../languages/ea.js"

	export default {
		name: 'About',
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

	#about {
		display: block;
		text-align: center;
		margin: auto;
		padding: 50px;
		background-color: #262626;
		color: #FFFFFF;
	}

	#about h1 {
		margin-top: 80px;
	}

	#about #about-container {
		display: flex;
		margin-top: 100px;
		margin-bottom: 100px;
	}

	#about #about-topics {
		width: 50%;
		font-size: 19px;
		text-align: left;
		font-weight: bold;
	}

	#about #about-topics #list {
		margin-left: 250px;
		list-style-type: none;
	}

	#about #about-topics li {
		padding: 20px;
	}

	#about #about-topics table {
		padding: 20px;
	}

	#about #about-topics table th {
		padding: 8px;
	}

	#about #about-topics img {
		width: 20px;
		height: 20px;
		margin-right: 10px;
	}

	.infos {
		color: #25AF70;
	}

	#about #about-text {
		width: 30%;
		font-size: 19px;
		padding: 20px;
		text-align: right;
	}

</style>