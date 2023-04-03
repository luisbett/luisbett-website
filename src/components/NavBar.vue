<template>

	<div id="navbar">
		<div id="navbar-left">
			<router-link to="/" id="logo">
				<img :src="logo_src" :alt="logo_alt" id="logo-img">
			</router-link>
		</div>
		<div id="navbar-center">
			<a href="/#about">{{ translate('navbarAbout') }}</a>
			<router-link to="/projects">{{ translate('navbarProjects') }}</router-link>
			<router-link to="/links">{{ translate('navbarLinks') }}</router-link>
			<router-link to="/contact">{{ translate('navbarContact') }}</router-link>
		</div>
		<div id="navbar-right">
			<a id="button-cv" href="/files/CV - Luis Fellipy Bett.pdf" download>{{ translate('navbarDownloadCV') }}</a>
			<select name="currentLanguage" v-model="currentLanguage" id="currentLanguage" @change="$emit('changeLanguage',currentLanguage)">
				<option value="en">🇺🇸&ensp;English</option>
				<option value="pt_br">🇧🇷&ensp;Portuguese</option>
				<option value="ea">🇪🇸&ensp;Spanish</option>
			</select>
		</div>
	</div>

</template>

<script>

	import pt_br from "../languages/pt_br.js"
	import en from "../languages/en.js"
	import ea from "../languages/ea.js"

	export default {
		name: 'NavBar',
		data() {
			return {
				currentLanguage: 'en'
			}
		},
		props: ["logo_src", "logo_alt"],
		emits: ['changeLanguage'],
		mixins: [pt_br, en, ea],
		methods: {
			translate(msg) {
				return this[this.currentLanguage][msg]
			}
		}
	}

</script>

<style scoped>

	#navbar {
		background-color: #191919;
		padding: 15px 50px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		font-size: 18px;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 100;
	}

	#navbar #navbar-left {
		margin: auto;
		margin-left: 0;
	}

	#navbar #navbar-right {
		margin: auto;
		margin-right: 0;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	#logo-img {
		width: 80px;
		height: 80px;
	}

	#navbar #button-cv {
		padding: 8px 10px;
		background-color: #25AF70;
		border: 2px solid #25AF70;
		font-weight: bold;
		border-radius: 10px;
		font-size: 15px;
		transition: .5s;
	}

	#navbar #button-cv:hover {
		background-color: #191919;
		color: #FFFFFF;
	}

	#navbar #currentLanguage {
		appearance: none;
		outline: 0;
		box-shadow: none;
		border: 0!important;
		background: #404040;
		padding: 0 7px;
		color: #FFFFFF;
		cursor: pointer;
		font-size: 15px;
		position: relative;
		display: flex;
		line-height: 2;
		border-radius: 4px;
		transition: .5s;
		font-size: 15px;
	}

	#navbar a {
		color: #FFFFFF;
		text-decoration: none;
		margin: 12px;
		transition: .5s;
	}

	#navbar #currentLanguage:hover, #navbar a:hover {
		color: #25AF70;
	}

</style>