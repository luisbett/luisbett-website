<template>

    <div class="carousel-container">

        <input type="radio" name="elements" id="element1" checked>
        <input type="radio" name="elements" id="element2">
        <input type="radio" name="elements" id="element3">
        <input type="radio" name="elements" id="element4">
        <input type="radio" name="elements" id="element5">
                
        <div class="carousel-item" id="one">

            <h2>HTML</h2>
            <img class="tech-logo" src="/img/icons/html-green.png" alt="HTML icon">

            <label for="element5" class="previous"><img class="left-arrow" src="/img/icons/arrow-left-white.png"></label>
            <label for="element2" class="next"><img class="right-arrow" src="/img/icons/arrow-right-white.png"></label>

        </div>

        <div class="carousel-item" id="two">

            <h2>CSS</h2>
            <img class="tech-logo" src="/img/icons/css-green.png" alt="CSS icon">

            <label for="element1" class="previous"><img class="left-arrow" src="/img/icons/arrow-left-white.png"></label>
            <label for="element3" class="next"><img class="right-arrow" src="/img/icons/arrow-right-white.png"></label>

        </div>

        <div class="carousel-item" id="three">

            <h2>JavaScript</h2>
            <img class="tech-logo" src="/img/icons/javascript-green.png" alt="Javascript icon">

            <label for="element2" class="previous"><img class="left-arrow" src="/img/icons/arrow-left-white.png"></label>
            <label for="element4" class="next"><img class="right-arrow" src="/img/icons/arrow-right-white.png"></label>

        </div>

        <div class="carousel-item" id="four">

            <h2>Vue</h2>
            <img class="tech-logo" src="/img/icons/vue-green.png" alt="Vue icon">

            <label for="element3" class="previous"><img class="left-arrow" src="/img/icons/arrow-left-white.png"></label>
            <label for="element5" class="next"><img class="right-arrow" src="/img/icons/arrow-right-white.png"></label>

        </div>

        <div class="carousel-item" id="five">

            <h2>SQL</h2>
            <img class="tech-logo" src="/img/icons/sql-green.png" alt="SQL icon">

            <label for="element4" class="previous"><img class="left-arrow" src="/img/icons/arrow-left-white.png"></label>
            <label for="element1" class="next"><img class="right-arrow" src="/img/icons/arrow-right-white.png"></label>

        </div>

        <div class="nav">

            <label class="dots" id="dot1" for="element1"></label>
            <label class="dots" id="dot2" for="element2"></label>
            <label class="dots" id="dot3" for="element3"></label>
            <label class="dots" id="dot4" for="element4"></label>
            <label class="dots" id="dot5" for="element5"></label>

        </div>

    </div>

</template>

<script>

    export default {
        name: 'Carousel'
    }

</script>

<style scoped>

    .carousel-container {
        width: 50vh;
        height: 57vh;
        min-width: 40vh;
        position: relative;
        background-color: #404040;
        border-radius: 20px;
    }

    .carousel-item {
        width: 100%;
        height: 100%;
        position: absolute;
        padding: 10px;
    }

    .tech-logo {
        width: 256px;
        height: 256px;
    }

    .left-arrow, .right-arrow {
        width: 50px;
        height: 50px;
        position: absolute;
        z-index: 2;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
        background-color: #25AF70;
        border: 2px solid #25AF70;
        transition: .5s;
    }

    .left-arrow:hover, .right-arrow:hover {
        background-color: #404040;
    }

    .left-arrow, .previous {
        left: 3px;
    }

    .right-arrow, .next {
        right: 3px;
    }

    #element1, #element2, #element3, #element4, #element5 {
        display: none;
    }

    .previous, .next {
        width: 12%;
        height: 50%;
        position: absolute;
        top: 25%;
        z-index: 99;
        cursor: pointer;
    }

    .nav {
        width: 100%;
        height: 11px;
        bottom: 12%;
        position: absolute;
        text-align: center;
        z-index: 99;
    }

    .dots {
        width: 18px;
        height: 18px;
        margin: 0 4px;
        position: relative;
        border-radius: 50%;
        display: inline-block;
        background-color: #25AF70;
    }

    .carousel-item {
        z-index: -1;
    }

    #element1:checked ~ #one,
    #element2:checked ~ #two,
    #element3:checked ~ #three,
    #element4:checked ~ #four,
    #element5:checked ~ #five {
        z-index: 9;
    }

    #element1:checked ~ .nav #dot1,
    #element2:checked ~ .nav #dot2,
    #element3:checked ~ .nav #dot3,
    #element4:checked ~ .nav #dot4,
    #element5:checked ~ .nav #dot5 {
        background-color: #FFFFFF;
    }

</style>