<script>

    import { onMount } from "svelte";
    import { currentScene } from "../lib/sceneStore";
    import { gsap, ScrollTrigger } from "../lib/gsap";

    let section;

   let students = 0;
let years = 0;
let countries = 0;

    let counterPlayed = false;

    function startCounters() {

        const studentCounter = {
            value: 0
        };

        gsap.to(studentCounter, {

            value: 150000,

            duration: 2,

            ease: "power2.out",

            onUpdate: () => {

                students =
                    Math.floor(
                        studentCounter.value
                    );

            }

        });

        const yearsCounter = {
            value: 0
        };

        gsap.to(yearsCounter, {

            value: 10,

            duration: 1,

            ease: "power2.out",

            onUpdate: () => {

                years =
                    Math.floor(
                        yearsCounter.value
                    );

            }

        });

        const countryCounter = {
    value: 0
};

gsap.to(countryCounter, {

    value: 75,

    duration: 1.5,

    ease: "power2.out",

    onUpdate: () => {

        countries =
            Math.floor(
                countryCounter.value
            );

    }

});

    }

    onMount(() => {

        ScrollTrigger.create({

            trigger: section,

            start: "top 60%",
            end: "bottom 40%",

            onEnter: () => {

                currentScene.set("impact");

                if (!counterPlayed) {

                    startCounters();

                    counterPlayed = true;

                }

            },

            onEnterBack: () => {

                currentScene.set("impact");

            }

        });

        gsap.from(".impact-header", {

            opacity: 0,

            y: 50,

            duration: 1,

            scrollTrigger: {

                trigger: section,

                start: "top 75%"

            }

        });

        gsap.from(".stat", {

            opacity: 0,

            y: 40,

            stagger: .15,

            duration: .8,

            scrollTrigger: {

                trigger: section,

                start: "top 70%"

            }

        });

    });

</script>

<section
    bind:this={section}
    class="impact"
>

    <div class="impact-header">

        <div class="eyebrow">

            OUR IMPACT

        </div>

        <h2>

            Inspiring Future
            Scientists & Explorers

        </h2>

    </div>

    <div class="stats">

        <div class="stat">

            <div class="number">

                {students.toLocaleString()}+

            </div>

            <div class="label">

                Students Reached

            </div>

        </div>

        <div class="stat">

            <div class="number">

                {years}+

            </div>

            <div class="label">

                Years of Service

            </div>

        </div>

        <div class="stat">

            <div class="number">

    {countries}+

</div>

            <div class="label">

                Countries Reached

            </div>

        </div>

        <div class="stat">

            <div class="number">

                ISRO

            </div>

            <div class="label">

                Recognized Space Tutor

            </div>

        </div>

    </div>

    <a
        href="/impact"
        class="minimal-btn"
    >

        <span>

            Explore Impact

        </span>

        <span class="arrow">

            →

        </span>

    </a>

</section>

<style>

.impact {

    min-height: 100vh;

    display: flex;

    flex-direction: column;

    justify-content: center;

    align-items: center;

    padding: 8rem 8vw;

    color: white;
}

.impact-header {

    text-align: center;

    margin-bottom: 6rem;
}

.eyebrow {

    font-size: .8rem;

    letter-spacing: 8px;

    opacity: .65;

    margin-bottom: 1rem;
}

.impact-header h2 {

    font-size:
    clamp(3rem,5vw,5rem);

    line-height: 1.05;

    font-weight: 800;

    max-width: 900px;
}

.stats {

    width: 100%;

    max-width: 1400px;

    display: grid;

    grid-template-columns:
    repeat(4,1fr);

    gap: 3rem;
}

.stat {

    text-align: center;
}

.number {

    font-size:
    clamp(3.5rem,6vw,5rem);

    font-weight: 800;

    line-height: 1;

    margin-bottom: 1rem;
}

.label {

    font-size: 1rem;

    opacity: .8;

    line-height: 1.6;
}

.minimal-btn {

    position: relative;

    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: .5rem;

    overflow: hidden;

    margin-top: 5rem;

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

@media(max-width:1100px){

    .stats {

        grid-template-columns:
        repeat(2,1fr);
    }
}

@media(max-width:700px){

    .impact {

        padding: 6rem 2rem;
    }

    .stats {

        grid-template-columns: 1fr;

        gap: 4rem;
    }

    .minimal-btn {

        width: 100%;

        justify-content: center;
    }
}

</style>