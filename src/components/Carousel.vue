<template>

    <div class="carousel-container">

        <input type="radio" name="elements" id="element1" checked>
        <input type="radio" name="elements" id="element2">
        <input type="radio" name="elements" id="element3">
        <input type="radio" name="elements" id="element4">
        <input type="radio" name="elements" id="element5">
        <input type="radio" name="elements" id="element6">
        <input type="radio" name="elements" id="element7">
                
        <div class="carousel-item" id="one">

            <h2>HTML</h2>
            <IconBrandHtml5 color="#26AF70" :size="256" stroke-width="2"/>
            <h3>{{ $t( 'carouselExpTitle' ) }}: 3+ {{ $t( 'carouselExpTime' ) }}</h3>

            <label for="element7" class="previous"><IconChevronLeft class="left-arrow" color="white" :size="50" stroke-width="3"/></label>
            <label for="element2" class="next"><IconChevronRight class="right-arrow" color="white" :size="50" stroke-width="3"/></label>

        </div>

        <div class="carousel-item" id="two">

            <h2>CSS</h2>
            <IconBrandCss3 color="#26AF70" :size="256" stroke-width="2"/>
            <h3>{{ $t( 'carouselExpTitle' ) }}: 3+ {{ $t( 'carouselExpTime' ) }}</h3>

            <label for="element1" class="previous"><IconChevronLeft class="left-arrow" color="white" :size="50" stroke-width="3"/></label>
            <label for="element3" class="next"><IconChevronRight class="right-arrow" color="white" :size="50" stroke-width="3"/></label>

        </div>

        <div class="carousel-item" id="three">

            <h2>JavaScript</h2>
            <IconBrandJavascript color="#26AF70" :size="256" stroke-width="2"/>
            <h3>{{ $t( 'carouselExpTitle' ) }}: 3+ {{ $t( 'carouselExpTime' ) }}</h3>

            <label for="element2" class="previous"><IconChevronLeft class="left-arrow" color="white" :size="50" stroke-width="3"/></label>
            <label for="element4" class="next"><IconChevronRight class="right-arrow" color="white" :size="50" stroke-width="3"/></label>

        </div>

        <div class="carousel-item" id="four">

            <h2>Vue</h2>
            <IconBrandVue color="#26AF70" :size="256" stroke-width="2"/>
            <h3>{{ $t( 'carouselExpTitle' ) }}: 1+ {{ $t( 'carouselExpTime' ) }}</h3>

            <label for="element3" class="previous"><IconChevronLeft class="left-arrow" color="white" :size="50" stroke-width="3"/></label>
            <label for="element5" class="next"><IconChevronRight class="right-arrow" color="white" :size="50" stroke-width="3"/></label>

        </div>

        <div class="carousel-item" id="five">

            <h2>React</h2>
            <IconBrandReact color="#26AF70" :size="256" stroke-width="2"/>
            <h3>{{ $t( 'carouselExpTitle' ) }}: 1+ {{ $t( 'carouselExpTime' ) }}</h3>

            <label for="element4" class="previous"><IconChevronLeft class="left-arrow" color="white" :size="50" stroke-width="3"/></label>
            <label for="element6" class="next"><IconChevronRight class="right-arrow" color="white" :size="50" stroke-width="3"/></label>

        </div>

        <div class="carousel-item" id="six">

            <h2>Node</h2>
            <IconBrandNodejs color="#26AF70" :size="256" stroke-width="2"/>
            <h3>{{ $t( 'carouselExpTitle' ) }}: 1+ {{ $t( 'carouselExpTime' ) }}</h3>

            <label for="element5" class="previous"><IconChevronLeft class="left-arrow" color="white" :size="50" stroke-width="3"/></label>
            <label for="element7" class="next"><IconChevronRight class="right-arrow" color="white" :size="50" stroke-width="3"/></label>

        </div>

        <div class="carousel-item" id="seven">

            <h2>SQL</h2>
            <IconDatabase color="#26AF70" :size="256" stroke-width="2"/>
            <h3>{{ $t( 'carouselExpTitle' ) }}: 5+ {{ $t( 'carouselExpTime' ) }}</h3>

            <label for="element6" class="previous"><IconChevronLeft class="left-arrow" color="white" :size="50" stroke-width="3"/></label>
            <label for="element1" class="next"><IconChevronRight class="right-arrow" color="white" :size="50" stroke-width="3"/></label>

        </div>

        <div class="nav">

            <label class="dots" id="dot1" for="element1"></label>
            <label class="dots" id="dot2" for="element2"></label>
            <label class="dots" id="dot3" for="element3"></label>
            <label class="dots" id="dot4" for="element4"></label>
            <label class="dots" id="dot5" for="element5"></label>
            <label class="dots" id="dot6" for="element6"></label>
            <label class="dots" id="dot7" for="element7"></label>

        </div>

    </div>

</template>

<script>

    import { IconBrandHtml5 } from '@tabler/icons-vue'
    import { IconBrandCss3 } from '@tabler/icons-vue'
    import { IconBrandJavascript } from '@tabler/icons-vue'
    import { IconBrandVue } from '@tabler/icons-vue'
    import { IconBrandReact } from '@tabler/icons-vue'
    import { IconBrandNodejs } from '@tabler/icons-vue'
    import { IconDatabase } from '@tabler/icons-vue'
    import { IconChevronLeft } from '@tabler/icons-vue'
    import { IconChevronRight } from '@tabler/icons-vue'

    export default {
        name: "Carousel",
        components: {
            IconBrandHtml5,
            IconBrandCss3,
            IconBrandJavascript,
            IconBrandVue,
            IconBrandReact,
            IconBrandNodejs,
            IconDatabase,
            IconChevronLeft,
            IconChevronRight
        }
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

    #element1, #element2, #element3, #element4, #element5, #element6, #element7 {
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
        cursor: pointer;
    }

    .carousel-item {
        z-index: -1;
    }

    #element1:checked ~ #one,
    #element2:checked ~ #two,
    #element3:checked ~ #three,
    #element4:checked ~ #four,
    #element5:checked ~ #five,
    #element6:checked ~ #six,
    #element7:checked ~ #seven {
        z-index: 9;
    }

    #element1:checked ~ .nav #dot1,
    #element2:checked ~ .nav #dot2,
    #element3:checked ~ .nav #dot3,
    #element4:checked ~ .nav #dot4,
    #element5:checked ~ .nav #dot5,
    #element6:checked ~ .nav #dot6,
    #element7:checked ~ .nav #dot7 {
        background-color: #FFFFFF;
    }

</style>