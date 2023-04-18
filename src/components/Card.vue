<template>

    <div :class="[ 'card-container', model === 'project' ? 'gray' : 'darkGray' ]">

        <div class="title-container">
            <img v-if="model !== 'project'" :src="titleImg">
            <h2>{{ $t( title ) }}</h2>
        </div>

        <div v-if="model==='project'" class="technology-container">
            <h3>Technology:</h3>
            <img v-if="tech === 'JS'" src="/img/icons/javascript.png">
            <img v-if="tech === 'Vue'" src="/img/icons/vue.png">
        </div>

        <p v-if="model === 'project'" class="paragraph-project">{{ $t( description ) }}</p>
        <p v-if="model === 'link'" class="paragraph-link">{{ $t( description ) }}</p>

        <div class="buttons-container">
            <Button v-if="buttonApp" label="buttonApp" size="medium" color="greenGray" @click="buttonAction('link', buttonApp)"/>
            <Button v-if="buttonCode" label="buttonCode" size="medium" color="greenGray" @click="buttonAction('link', buttonCode)"/>
            <Button v-if="buttonLink" label="buttonLink" size="large" color="greenBlack" @click="buttonAction('router', buttonLink)" />
        </div>

    </div>

</template>

<script>

    import Button from './Button.vue'

    export default {
        name: 'Card',
        components: {
            Button
        },
        props: {
            model: {
                type: String,
                default: 'project'
            },
            title: {
                type: String,
                default: 'Card'
            },
            titleImg: {
                type: String,
                default: ''
            },
            tech: {
                type: String,
                default: ''
            },
            description: {
                type: String,
                default: ''
            },
            buttonApp: {
                type: String,
                default: ''
            },
            buttonCode: {
                type: String,
                default: ''
            },
            buttonLink: {
                type: String,
                default: ''
            }
        },
        methods: {
            buttonAction(type, srcPath) {
                
                if (type === 'link') {
                    window.open(srcPath, '_blank')
                } else {
                    this.$router.push(srcPath)
                }
            }
        }
    }

</script>

<style scoped>

    .card-container {
        padding: 20px 30px;
        width: 40vh;
        height: 50vh;
        min-width: 40vh;
        border-radius: 20px;
        transition: .5s;
    }

    .title-container, p, .technology-container {
        padding: 10px;
        border-radius: 10px;
        background-color: #404040;
        margin-top: 10px;
    }

    .title-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .title-container img {
        width: 10%;
        height: 10%;
        margin-right: 10px;
    }

    .technology-container img {
        width: 10%;
        height: 10%;
        margin-left: 10px;
    }

    .paragraph-project {
        height: 20vh;
    }

    .paragraph-link {
        height: 25vh;
    }

    .technology-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .buttons-container {
        padding: 15px;
        display: flex;
        justify-content: space-evenly;
    }

    .gray {
        background-color: #262626;
        color: #FFFFFF;
        box-shadow: 5px 5px 5px #0D0D0D;
    }

    .darkGray {
        background-color: #191919;
        color: #FFFFFF;
    }

    .darkGray:hover {
        box-shadow: 5px 5px 5px #25AF70;
    }

</style>