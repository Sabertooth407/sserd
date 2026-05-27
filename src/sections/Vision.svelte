<script>
    import { onMount } from "svelte";
    import { currentScene } from "../lib/sceneStore";
    import { gsap, ScrollTrigger } from "../lib/gsap";

    let section;

    onMount(() => {

        ScrollTrigger.create({

            trigger: section,

            start: "top 60%",
            end: "bottom 40%",

            onEnter: () =>
                currentScene.set("vision"),

            onEnterBack: () =>
                currentScene.set("vision")

        });

        gsap.from(

            section.querySelectorAll(".vision-card"),

            {

                opacity: 0,

                y: 50,

                stagger: 0.15,

                duration: 1,

                ease: "power3.out",

                clearProps: "transform",

                scrollTrigger: {

                    trigger: section,

                    start: "top 75%",

                    invalidateOnRefresh: true

                }

            }

        );

    });

</script>

<section
    bind:this={section}
    class="vision"
>

    <div class="content">

        <div class="eyebrow">

            VISION 2035

        </div>

        <h2>

            Building The Future
            Of Space Education

        </h2>

        <p class="intro">

            A future where every learner,
            regardless of geography or
            background, can access meaningful
            space education and scientific
            exploration.

        </p>

        <div class="vision-grid">

            <div class="vision-card">

                <img
                    src="/images/space-center.png"
                    alt="International Space Experience Center"
                    class="vision-image"
                />

                <h3>

                    International Space
                    Experience Center

                </h3>

                <p>

                    Creating a destination where
                    immersive learning, astronaut
                    simulations and scientific
                    discovery come together.

                </p>

            </div>

            <div class="vision-card">

                <img
                    src="/images/research.png"
                    alt="Research Culture"
                    class="vision-image"
                />

                <h3>

                    Research Culture

                </h3>

                <p>

                    Building an ecosystem that
                    encourages students to pursue
                    inquiry, experimentation and
                    innovation from an early age.

                </p>

            </div>

            <div class="vision-card">

                <img
                    src="/images/inclusive.png"
                    alt="Inclusive Access"
                    class="vision-image"
                />

                <h3>

                    Inclusive Access

                </h3>

                <p>

                    Expanding opportunities for
                    underserved communities and
                    ensuring that space belongs
                    to everyone.

                </p>

            </div>

        </div>

        <a
            href="/vision"
            class="minimal-btn"
        >

            <span>

                Explore Vision 2035

            </span>

            <span class="arrow">

                →

            </span>

        </a>

    </div>

</section>

<style>

.vision {

    min-height: 100vh;

    display: flex;

    align-items: center;

    justify-content: center;

    padding: 8rem 6vw;

    color: white;
}

.content {

    width: 100%;

    max-width: 1400px;

    text-align: center;
}

.eyebrow {

    font-size: .8rem;

    letter-spacing: 8px;

    opacity: .65;

    margin-bottom: 1rem;
}

h2 {

    font-size:
    clamp(3rem,6vw,6rem);

    line-height: 1.05;

    max-width: 1000px;

    margin: 0 auto;
}

.intro {

    margin-top: 2rem;

    max-width: 800px;

    margin-left: auto;
    margin-right: auto;

    font-size: 1.15rem;

    line-height: 1.9;

    opacity: .85;
}

.vision-grid {

    margin-top: 5rem;

    display: grid;

    grid-template-columns:
    repeat(3,1fr);

    gap: 2rem;

    align-items: stretch;
}

.vision-card {

    height: 520px;

    padding: 2rem;

    display: flex;

    flex-direction: column;

    text-align: left;

    border:
    1px solid rgba(
        255,
        255,
        255,
        .12
    );

    border-radius: 24px;

    background:
    rgba(
        255,
        255,
        255,
        .04
    );

    backdrop-filter:
    blur(12px);

    transition:
    .4s ease;
}

.vision-card:hover {

    transform:
    translateY(-6px);

    background:
    rgba(
        255,
        255,
        255,
        .08
    );

    border-color:
    rgba(
        255,
        255,
        255,
        .2
    );
}

.vision-image {

    width: 100%;

    height: 220px;

    object-fit: cover;

    border-radius: 16px;

    margin-bottom: 1.5rem;
}

.vision-card h3 {

    font-size: 1.6rem;

    line-height: 1.25;

    margin-bottom: 1rem;

    min-height: 80px;
}

.vision-card p {

    line-height: 1.8;

    opacity: .8;
}

.minimal-btn {

    position: relative;

    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: .5rem;

    overflow: hidden;

    margin-top: 4rem;

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

    transition:
    .35s ease;
}

.minimal-btn:hover {

    transform:
    translateY(-2px);

    border-color:
    rgba(
        255,
        255,
        255,
        .7
    );
}

.minimal-btn:hover::before {

    left: 130%;
}

.minimal-btn:hover .arrow {

    transform:
    translateX(4px);
}

@media(max-width:1000px){

    .vision-grid {

        grid-template-columns:1fr;
    }

    .vision-card {

        height:auto;

        min-height:500px;
    }
}

@media(max-width:768px){

    .vision {

        padding: 6rem 2rem;
    }

    h2 {

        font-size: 3rem;
    }

    .intro {

        font-size: 1rem;
    }
}

</style>