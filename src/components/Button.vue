<template>

    <button v-on="$listeners" :class="[ 'baseButton', size, color ]">
        <img v-if=imgSrc :src=imgSrc alt="Button Image">
        {{ translate( label ) }}
    </button>

</template>

<script>

    import pt_br from "../languages/pt_br.js"
	import en from "../languages/en.js"
	import ea from "../languages/ea.js"

    export default {
        name: 'Button',
        props: {
            language: {
                type: String,
                default: 'en'
            },
            imgSrc: {
                type: String,
                default: ''
            },
            label: {
                type: String,
                default: "Click me"
            },
            size: {
                type: String,
                default: "small"
            },
            color: {
                type: String,
                default: "primary"
            }
        },
        mixins: [pt_br, en, ea],
        methods: {
            translate(msg) {
				return this[this.language][msg]
			}
        }
    }

</script>

<style scoped>

    .baseButton {
        display: flex;
        border-radius: 10px;
        cursor: pointer;
        transition: .5s;
    }

    .baseButton img {
        width: 18px;
        height: 18px;
        margin-right: 10px;
    }

    .small {
        padding: 8px 10px;
        font-size: 14px;
    }

    .medium {
        padding: 11px 15px;
        font-size: 15px;
    }

    .large {
        padding: 15px 60px;
        font-size: 16px;
    }
    
    .greenBlack {
        background-color: #25AF70;
        border: 2px solid #25AF70;
        color: #FFFFFF;
        font-weight: bold;
    }

    .greenBlack:hover{
        background-color: #191919;
        color: #FFFFFF;
    }

    .greenGray {
        background-color: #25AF70;
        border: 2px solid #25AF70;
        color: #FFFFFF;
        font-weight: bold;
    }

    .greenGray:hover{
        background-color: #262626;
        color: #FFFFFF;
    }

    .greenWhite {
        background-color: #25AF70;
        border: 2px solid #25AF70;
        color: #FFFFFF;
        font-weight: bold;
    }

    .greenWhite:hover{
        background-color: #FFFFFF;
        color: #191919;
    }

    .blackWhite {
        background-color: #191919;
        border: 2px solid #191919;
        color: #FFFFFF;
        font-weight: bold;
    }

    .blackWhite:hover {
        background-color: #FFFFFF;
        color: #25AF70;
    }

</style>