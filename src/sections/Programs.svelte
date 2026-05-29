<script>

    import { onMount } from "svelte";
    import { currentScene } from "../lib/sceneStore";
    import { gsap, ScrollTrigger } from "../lib/gsap";

    let section;

    const programs = [

        {
            title: "Girls in Space",
            image: "/images/girls-in-space.jpg"
        },

        {
            title: "Astro Space Camp",
            image: "/images/astro-camp.jpg"
        },

        {
            title: "CosmoKit",
            image: "/images/cosmokit.jpg"
        },

        {
            title: "Junior Space Scientist Program",
            image: "/images/jssp.jpg"
        }

    ];

    onMount(() => {

        ScrollTrigger.create({

            trigger: section,

            start: "top 60%",
            end: "bottom 40%",

            onEnter: () =>
                currentScene.set("programs"),

            onEnterBack: () =>
                currentScene.set("programs")

        });

        gsap.from(

            section.querySelectorAll(".program-card"),

            {

                opacity: 0,

                y: 40,

                stagger: 0.12,

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
    class="programs"
>

    <div class="header">

        <div class="eyebrow">

            FLAGSHIP PROGRAMS

        </div>

        <h2>

            Experiences That
            Inspire Exploration

        </h2>

    </div>

    <div class="cards">

        {#each programs as program}

            <div class="program-card">

                <img
                    src={program.image}
                    alt={program.title}
                />

                <div class="card-overlay">

                    <h3>

                        {program.title}

                    </h3>

                </div>

            </div>

        {/each}

    </div>

    <a
        href="/programs"
        class="minimal-btn"
    >

        <span>

            View All Programs

        </span>

        <span class="arrow">

            →

        </span>

    </a>

</section>

<style>

.programs {

    min-height: 100vh;

    padding: 8rem 6vw;

    color: white;

    display: flex;

    flex-direction: column;

    justify-content: center;
}

.header {

    text-align: center;

    margin-bottom: 4rem;
}

.eyebrow {

    font-size: .8rem;

    letter-spacing: 8px;

    opacity: .65;

    margin-bottom: 1rem;
}

.header h2 {

    font-size:
    clamp(3rem,5vw,5rem);

    line-height: 1.05;

    font-weight: 800;
}

.cards {

    display: grid;

    grid-template-columns:
    repeat(4,1fr);

    gap: 1.5rem;

    align-items: stretch;
}

.program-card {

    position: relative;

    height: 280px;

    width: 100%;

    overflow: hidden;

    border-radius: 24px;

    cursor: pointer;

    transform: none !important;

    border:
    1px solid rgba(
        255,
        255,
        255,
        .08
    );

    background:
    rgba(
        255,
        255,
        255,
        .03
    );

    transition:
    transform .4s ease,
    border-color .4s ease;
}

.program-card:hover {

    transform:
    translateY(-6px) !important;

    border-color:
    rgba(
        255,
        255,
        255,
        .2
    );
}

.program-card img {

    width: 100%;

    height: 100%;

    display: block;

    object-fit: cover;
}

.card-overlay {

    position: absolute;

    inset: 0;

    display: flex;

    align-items: flex-end;

    padding: 1.5rem;

    background:

    linear-gradient(

        transparent 35%,

        rgba(
            0,
            0,
            0,
            .88
        )

    );
}

.card-overlay h3 {

    width: 100%;

    min-height: 3.2rem;

    display: flex;

    align-items: flex-end;

    font-size: 1.3rem;

    font-weight: 700;

    line-height: 1.15;
}

.minimal-btn {

    position: relative;

    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: .5rem;

    margin: 4rem auto 0;

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

    overflow: hidden;

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

    transition: .7s ease;
}

.arrow {

    transition: .35s ease;
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

@media(max-width:1200px){

    .cards {

        grid-template-columns:
        repeat(2,1fr);
    }
}

@media(max-width:768px){

    .programs {

        padding: 6rem 2rem;
    }

    .cards {

        grid-template-columns:1fr;
    }

    .program-card {

        height: 240px;
    }

    .header h2 {

        font-size: 3rem;
    }
}

</style>