<script>

import { onMount } from "svelte";
import { currentScene } from "../lib/sceneStore";
import { gsap, ScrollTrigger } from "../lib/gsap";

let section;

onMount(() => {

    currentScene.set("hero");

    ScrollTrigger.create({

        trigger: section,

        start: "top top",
        end: "bottom 40%",

        onEnter: () =>
            currentScene.set("hero"),

        onEnterBack: () =>
            currentScene.set("hero")

    });

    const tl = gsap.timeline();

    tl.from(".eyebrow", {
        y: 30,
        opacity: 0,
        duration: .8
    });

    tl.from(".hero-title", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
    }, "-=.3");

    tl.from(".hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: .8
    }, "-=.6");

});

</script>

<section class="hero">

    <div class="content">

        <div class="eyebrow">

            FROM CURIOSITY TO CAPABILITY

        </div>

        <h1 class="hero-title">

            EDUCATE.

            <br>

            INSPIRE.

            <br>

            INNOVATE.

        </h1>

        <p class="hero-subtitle">

            A global catalyst nurturing
            aerospace education,
            research and innovation
            among youth.

        </p>

    </div>

</section>

<style>

.hero {

    min-height: 100vh;

    display: flex;

    align-items: center;
}

.content {

    margin-left: 8vw;

    max-width: 850px;
}

.eyebrow {

    letter-spacing: 8px;

    text-transform: uppercase;

    font-size: .8rem;

    opacity: .75;

    margin-bottom: 2rem;
}

.hero-title {

    font-size:
    clamp(5rem,10vw,9rem);

    line-height: .85;

    letter-spacing: -5px;

    font-weight: 800;
}

.hero-subtitle {

    margin-top: 2rem;

    max-width: 600px;

    font-size: 1.25rem;

    line-height: 1.8;

    opacity: .9;
}

@media(max-width:900px){

    .content{

        margin-left:30px;
        margin-right:30px;
    }

    .hero-title{

        font-size:4rem;
    }
}

</style>