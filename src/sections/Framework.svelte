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
                currentScene.set("framework"),

            onEnterBack: () =>
                currentScene.set("framework")

        });

        const tl = gsap.timeline({

            scrollTrigger: {

                trigger: section,

                start: "top 70%"

            }

        });

        tl.from(".spine", {

            scaleY: 0,

            transformOrigin: "top",

            duration: .8

        });

        tl.from(".top-arm", {

            scaleX: 0,

            transformOrigin: "left",

            duration: .5

        });

        tl.from(".middle-arm", {

            scaleX: 0,

            transformOrigin: "left",

            duration: .5

        });

        tl.from(".bottom-arm", {

            scaleX: 0,

            transformOrigin: "left",

            duration: .5

        });

        tl.from(".label", {

            opacity: 0,

            x: -20,

            stagger: .15,

            duration: .5

        });

        tl.from(".text", {

            opacity: 0,

            x: 40,

            stagger: .15,

            duration: .7

        }, "-=.3");

    });

</script>

<section
    bind:this={section}
    class="framework"
>

    <div class="framework-header">

        <div class="eyebrow">

            OUR APPROACH

        </div>

        <h2>

            The 3E Framework

        </h2>

    </div>

    <div class="framework-body">

        <div class="e-wrapper">

            <div class="spine"></div>

            <div class="arm top-arm">

                <span class="label">

                    EDUCATION

                </span>

            </div>

            <div class="arm middle-arm">

                <span class="label">

                    EXPERIENCE

                </span>

            </div>

            <div class="arm bottom-arm">

                <span class="label">

                    EMPOWERMENT

                </span>

            </div>

        </div>

        <div class="content-side">

            <div class="text top-text">

              Making space science accessible and immersive.


            </div>

            <div class="text middle-text">

                Connecting learners with real-world space challenges.


            </div>

            <div class="text bottom-text">

                Building confident future aerospace leaders.


            </div>

            <a
                href="/programs"
                class="minimal-btn"
            >

                <span>

                    Explore Programs

                </span>

                <span class="arrow">

                    →

                </span>

            </a>

        </div>

    </div>

</section>

<style>

.framework {

    min-height: 100vh;

    display: flex;

    flex-direction: column;

    justify-content: center;

    padding: 8rem 8vw;

    color: white;
}

.framework-header {

    margin-bottom: 4rem;
}

.eyebrow {

    font-size: .8rem;

    letter-spacing: 8px;

    opacity: .65;

    margin-bottom: 1rem;
}

.framework-header h2 {

    font-size:
    clamp(3rem,5vw,5rem);

    font-weight: 800;

    line-height: 1;
}

.framework-body {

    display: grid;

    grid-template-columns:
    480px 1fr;

    gap: 4rem;

    align-items: center;
}

.e-wrapper {

    position: relative;

    width: 420px;
    height: 420px;
}

.spine {

    position: absolute;

    left: 0;

    width: 65px;
    height: 100%;

    background: white;
}

.arm {

    position: absolute;

    height: 65px;

    background: white;
}

.top-arm {

    top: 0;

    width: 380px;
}

.middle-arm {

    top: 178px;

    width: 300px;
}

.bottom-arm {

    bottom: 0;

    width: 380px;
}

.label {

    position: absolute;

    top: 50%;

    left: 85px;

    transform: translateY(-50%);

    color: black;

    font-size: 1.45rem;

    font-weight: 800;

    letter-spacing: 3px;

    white-space: nowrap;
}

.content-side {

    position: relative;

    height: 420px;
}

.text {

    position: absolute;

    max-width: 450px;

    font-size: 1.15rem;

    line-height: 1.8;

    opacity: .9;
}

.top-text {

    top: 15px;
}

.middle-text {

    top: 180px;
}

.bottom-text {

    bottom: 15px;
}

.minimal-btn {

    position: absolute;

    bottom: -90px;

    left: 0;

    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: .5rem;

    overflow: hidden;

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

    .framework-body {

        grid-template-columns: 1fr;

        gap: 4rem;
    }

    .e-wrapper {

        margin: 0 auto;
    }

    .content-side {

        height: auto;

        display: flex;

        flex-direction: column;

        gap: 2rem;
    }

    .text {

        position: static;
    }

    .minimal-btn {

        position: static;

        margin-top: 1rem;

        width: fit-content;
    }
}

@media(max-width:768px){

    .framework {

        padding: 6rem 2rem;
    }

    .framework-header h2 {

        font-size: 3rem;
    }

    .e-wrapper {

        transform: scale(.75);

        transform-origin: center;

        margin-left: -30px;
    }

    .text {

        font-size: 1rem;
    }

    .minimal-btn {

        width: 100%;
    }
}

</style>