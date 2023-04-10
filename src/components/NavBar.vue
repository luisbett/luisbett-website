<template>

	<div class="navbar-container">

		<div class="navbar-left">
			<router-link to="/"><img :src="logo_src" :alt="logo_alt"></router-link>
		</div>

		<div class="navbar-center">
			<router-link :to="{name:'home', hash:'#about'}">{{ translate('navbarAbout') }}</router-link>
			<router-link to="/projects">{{ translate('navbarProjects') }}</router-link>
			<router-link to="/links">{{ translate('navbarLinks') }}</router-link>
			<router-link to="/contact">{{ translate('navbarContact') }}</router-link>
		</div>

		<div class="navbar-right">
			<Button :language=currentLanguage label="buttonDownloadCV" size="small" color="greenBlack" @click="downloadCV"/>
			<select name="currentLanguage" v-model="currentLanguage" @change="$emit('changeLanguage',currentLanguage)">
				<option value="en">🇺🇸&ensp;English</option>
				<option value="pt_br">🇧🇷&ensp;Portuguese</option>
				<option value="ea">🇪🇸&ensp;Spanish</option>
			</select>
		</div>

		<div class="navbar-barbutton">
			<img src="/img/icons/bars-white.png" @click="callDropDownMenu">
		</div>

		<!-- Dropdown menu used for responsiveness -->
		<div class="navbar-dropdown">
			<router-link @click="callDropDownMenu" :to="{name:'home', hash:'#about'}">{{ translate('navbarAbout') }}</router-link>
			<router-link @click="callDropDownMenu" to="/projects">{{ translate('navbarProjects') }}</router-link>
			<router-link @click="callDropDownMenu" to="/links">{{ translate('navbarLinks') }}</router-link>
			<router-link @click="callDropDownMenu" to="/contact">{{ translate('navbarContact') }}</router-link>
			<Button :language=currentLanguage label="buttonDownloadCV" size="small" color="greenBlack" @click="downloadCV"/>
			<select name="currentLanguage" v-model="currentLanguage" @change="$emit('changeLanguage',currentLanguage)">
				<option value="en">🇺🇸&ensp;English</option>
				<option value="pt_br">🇧🇷&ensp;Portuguese</option>
				<option value="ea">🇪🇸&ensp;Spanish</option>
			</select>
		</div>

	</div>

</template>

<script>

	import Button from './Button.vue'

	import pt_br from "../languages/pt_br.js"
	import en from "../languages/en.js"
	import ea from "../languages/ea.js"

	export default {
		name: 'NavBar',
		components: {
			Button
		},
		data() {
			return {
				currentLanguage: 'en'
			}
		},
		props: {
            logo_src: {
                type: String,
                default: ''
            },
			logo_alt: {
                type: String,
                default: ''
            }
		},
		emits: ['changeLanguage'],
		mixins: [pt_br, en, ea],
		methods: {
			translate(msg) {
				return this[this.currentLanguage][msg]
			},
			downloadCV() {

				let filePath = '/files/CV - Luis Fellipy Bett.pdf' 
				let aElement = document.createElement('a')

				aElement.setAttribute('href', filePath)
				aElement.setAttribute('download', 'CV - Luis Fellipy Bett.pdf')

				aElement.style.display = 'none'
				document.body.appendChild(aElement)

				aElement.click()
				document.body.removeChild(aElement)
			},
			callDropDownMenu() {

				const dropDownMenu = document.querySelector('.navbar-dropdown')

				dropDownMenu.classList.toggle('open')
			}
		}
	}

</script>

<style scoped>

	.navbar-container {
		background-color: #191919;
		padding: 10px 30px;
		font-size: 18px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 100;
	}

	.navbar-container a {
		text-decoration: none;
		color: #FFFFFF;
		margin: 12px;
		transition: .5s;
	}

	.navbar-container a:hover {
		color: #25AF70;
	}

	.navbar-left img {
		width: 80px;
		height: 80px;
	}

	.navbar-right {
		display: flex;
		align-items: center;
	}

	.navbar-right select, .navbar-dropdown select {
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

	.navbar-right select:hover, .navbar-dropdown select:hover {
		color: #25AF70;
	}

	.navbar-barbutton {
		display: none;
		cursor: pointer;
	}

	.navbar-barbutton img {
		width: 30px;
		height: 30px;
	}

	.navbar-dropdown {
		display: none;
		position: absolute;
		top: 104px;
		left: -100%;
		width: 100%;
		height: 100vh;
		background-color: #262626;
		transition: all .5s;
	}

	.navbar-dropdown.open {
		left: 0;
	}

	.navbar-dropdown > * {
		display: block;
		text-align: center;
		margin: 20px auto;
		padding: 10px;
	}

	@media (max-width: 850px) {

		.navbar-center,
		.navbar-right {
			display: none;
		}

		.navbar-barbutton {
			display: block;
		}

		.navbar-dropdown {
			display: block;
		}

	}

</style>