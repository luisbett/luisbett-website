<template>

    <div :class="[ 'card-container', model === 'project' ? 'gray' : 'darkGray' ]">

        <div class="title-container">
            <slot></slot>
            <h2>{{ $t( title ) }}</h2>
        </div>

        <div v-if="model==='project'" class="technology-container">
            <h3>{{ $t('projectsTechnology') }}:</h3>
            <IconBrandJavascript v-if="tech === 'JS'" class="technology-icon" color="#26AF70" :size="30" stroke-width="2"/>
            <IconBrandVue v-if="tech === 'Vue'" class="technology-icon" color="#26AF70" :size="25" stroke-width="2"/>
            <IconBrandReact v-if="tech === 'React'" class="technology-icon" color="#26AF70" :size="25" stroke-width="2"/>
        </div>

        <p v-if="model === 'project'" class="paragraph-project">{{ $t( description ) }}</p>
        <p v-if="model === 'link'" class="paragraph-link">{{ $t( description ) }}</p>

        <div class="buttons-container">
            <Button v-if="buttonApp" label="buttonApp" size="medium" color="greenGray" @click="$linkExecution(true, buttonApp)"/>
            <Button v-if="buttonCode" label="buttonCode" size="medium" color="greenGray" @click="$linkExecution(true, buttonCode)"/>
            <Button v-if="buttonGo" label="buttonGo" size="large" color="greenBlack" @click="$linkExecution(false, buttonGo)" />
        </div>

    </div>

</template>

<script>

    import Button from './Button.vue'
    import { IconBrandJavascript, IconBrandVue, IconBrandReact } from '@tabler/icons-vue'

    export default {
        name: 'Card',
        components: {
            Button,
            IconBrandJavascript,
            IconBrandVue,
            IconBrandReact
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
            buttonGo: {
                type: String,
                default: ''
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
        gap: 5px;
    }

    .title-container h2 {
        font-size: clamp(21px, 1.5vw, 30px);
    }

    .title-container img {
        width: 10%;
        height: 10%;
        margin-right: 10px;
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
        gap: 5px;
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