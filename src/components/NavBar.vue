<template>

	<div id="navbar">
		<router-link to="/" id="logo">
			<img :src="logo_src" :alt="logo_alt" id="logo-img">
		</router-link>
		<router-link to="/about">{{ translate('navbarAbout') }}</router-link>
		<router-link to="/projects">{{ translate('navbarProjects') }}</router-link>
		<router-link to="/links">{{ translate('navbarLinks') }}</router-link>
		<router-link to="/contact">{{ translate('navbarContact') }}</router-link>
		<select name="currentLanguage" v-model="currentLanguage" id="currentLanguage" @change="$emit('changeLanguage',currentLanguage)">
			<option value="en">🇺🇸&ensp;English</option>
			<option value="pt_br">🇧🇷&ensp;Portuguese</option>
			<option value="ea">🇪🇸&ensp;Spanish</option>
		</select>
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
		border-bottom: 4px solid #000000;
		padding: 15px 50px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		font-size: 18px;
	}

	#navbar #logo {
		margin: auto;
		margin-left: 0;
	}

	#logo-img {
		width: 80px;
		height: 80px;
	}

	#navbar #currentLanguage {
		margin: auto;
		margin-right: 0;
		appearance: none;
		outline: 0;
		box-shadow: none;
		border: 0!important;
		background: #333333;
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

	#navbar #currentLanguage:hover {
		color: #25AF70;
	}

	#navbar a {
		color: #FFFFFF;
		text-decoration: none;
		margin: 12px;
		transition: .5s;
	}

	#navbar a:hover {
		color: #25AF70;
	}

</style>