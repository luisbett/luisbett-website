<template>

	<div id="navbar">
		<router-link to="/" id="logo">
			<img :src="logo_src" :alt="logo_alt" id="logo-img">
		</router-link>
		<router-link to="/about">About me</router-link>
		<router-link to="/about">Projects</router-link>
		<router-link to="/about">Links</router-link>
		<router-link to="/contact">Contact</router-link>
		<span id="flag"><img src="/img/flags/br.svg" alt="" id="flag-img"></span>
	</div>

</template>

<script>

	export default {
		name: 'NavBar',
		props: ["logo_src", "logo_alt"]
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
	}

	#navbar #logo {
		margin: auto;
		margin-left: 0;
	}

	#logo-img {
		width: 80px;
		height: 80px;
	}

	#navbar #flag {
		margin: auto;
		margin-right: 0;
	}

	#flag-img {
		width: 30px;
		height: 30px;
		border-radius: 10%;
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