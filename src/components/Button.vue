<template>

    <button :class="[ 'baseButton', size, color ]">
        <slot></slot>
        {{ $t( label ) }}
    </button>

</template>

<script>

    export default {
        name: 'Button',
        props: {
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
        }
    }

</script>

<style scoped>

    .baseButton {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        cursor: pointer;
        transition: .5s;
        gap: 5px;
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
        padding: 15px 40px;
        font-size: 16px;
    }

    .extraLarge {
        width: 180px;
        height: 60px;
        font-size: 17px;
    }
    
    .greenBlack {
        background-color: #25AF70;
        border: 2px solid #25AF70;
        color: #FFFFFF;
        font-weight: bold;
    }

    .greenGray {
        background-color: #25AF70;
        border: 2px solid #25AF70;
        color: #FFFFFF;
        font-weight: bold;
    }

    .greenWhite {
        background-color: #25AF70;
        border: 2px solid #25AF70;
        color: #FFFFFF;
        font-weight: bold;
    }

    .blackWhite {
        background-color: #191919;
        border: 2px solid #191919;
        color: #FFFFFF;
        font-weight: bold;
    }

    @media (hover: hover) {

        .greenBlack:hover{
            background-color: #191919;
            color: #FFFFFF;
        }

        .greenGray:hover{
            background-color: #262626;
            color: #FFFFFF;
        }

        .greenWhite:hover{
            background-color: #FFFFFF;
            color: #191919;
        }

        .blackWhite:hover {
            background-color: #FFFFFF;
            color: #25AF70;
        }

    }

</style>