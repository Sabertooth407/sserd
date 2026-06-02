<script>

    import { onMount } from "svelte";
    import { ScrollTrigger } from "../lib/gsap";
    import { currentScene } from "../lib/sceneStore";
    import gsap from "gsap";

    let section;

    onMount(() => {

        ScrollTrigger.create({

            trigger: section,

            start: "top 60%",

            end: "bottom 40%",

            onEnter: () =>
                currentScene.set("philosophy"),

            onEnterBack: () =>
                currentScene.set("philosophy")

        });

        gsap.from(".philosophy-content", {

            opacity: 0,

            y: 60,

            duration: 1.2,

            ease: "power3.out",

            scrollTrigger: {

                trigger: section,

                start: "top 70%"

            }

        });

    });

</script>

<section
    bind:this={section}
    class="philosophy"
>

    <div class="philosophy-content">

        <div class="eyebrow">

            OUR PHILOSOPHY

        </div>

        <h2>

            Space is not merely
            a subject.

        </h2>

        <p class="lead">

            Curiosity is the beginning
            of every scientific revolution.

        </p>

        <p>

            Inspired by Dr. A. P. J. Abdul Kalam,
            SSERD exists to ignite scientific
            thinking and empower young minds
            to explore the universe.

        </p>

        <a
            href="/about#philosophy"
            class="minimal-btn"
        >

            <span>

                Explore Philosophy

            </span>

            <span class="arrow">

                →

            </span>

        </a>

    </div>

</section>

<style>

.philosophy {

    min-height: 75vh;

    display: flex;

    justify-content: center;

    align-items: center;

    text-align: center;

    padding: 8rem 2rem;

    color: white;
}

.philosophy-content {

    max-width: 900px;
}

.eyebrow {

    font-size: .8rem;

    letter-spacing: 8px;

    opacity: .65;

    margin-bottom: 2rem;
}

h2 {

    font-size:
    clamp(3rem,6vw,6rem);

    line-height: 1.05;

    font-weight: 800;

    margin-bottom: 2rem;
}

.lead {

    font-size: 1.35rem;

    line-height: 1.8;

    margin-bottom: 1rem;

    opacity: .95;
}

p {

    font-size: 1.15rem;

    line-height: 1.9;

    opacity: .8;

    max-width: 700px;

    margin: 0 auto;
}

.minimal-btn {

    position: relative;

    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: .5rem;

    overflow: hidden;

    margin-top: 3rem;

    padding: 15px 32px;

    border:
    1px solid rgba(
        255,
        255,
        255,
        .25
    );

    color: white;

    text-decoration: none;

    text-transform: uppercase;

    letter-spacing: 2px;

    font-size: .82rem;

    transition:
    border-color .3s ease,
    transform .3s ease;
}

.minimal-btn::before {

    content: "";

    position: absolute;

    top: 0;

    left: -120%;

    width: 70px;

    height: 100%;

    background:

    linear-gradient(

        90deg,

        transparent,

        rgba(
            255,
            255,
            255,
            .25
        ),

        transparent

    );

    transform:
    skewX(-25deg);

    transition:
    .7s ease;
}

.arrow {


    transform:
    translateX(-8px);

    transition:
    .35s ease;
}

.minimal-btn:hover {

    border-color:
    rgba(
        255,
        255,
        255,
        .7
    );

    transform:
    translateY(-2px);
}

.minimal-btn:hover::before {

    left: 130%;
}

.minimal-btn:hover .arrow {

    opacity: 1;

    transform:
    translateX(0);
}

@media(max-width:768px){

    .philosophy {

        min-height: auto;

        padding: 6rem 1.5rem;
    }

    h2 {

        font-size: 3rem;
    }

    .lead {

        font-size: 1.1rem;
    }

    p {

        font-size: 1rem;
    }

    .minimal-btn {

        width: 100%;

        justify-content: center;
    }
}

</style>