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
                currentScene.set("international"),

            onEnterBack: () =>
                currentScene.set("international")

        });

        gsap.from(

            section.querySelectorAll(".highlight-card"),

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
    class="international"
>

    <div class="content">

        <div class="eyebrow">

            INTERNATIONAL EXPOSURE

        </div>

        <h2>

            Taking Space Education
            Beyond Borders

        </h2>

        <p>

            From SGAC Asia-Pacific to UNOOSA's
            Space4Women Conference, SSERD has
            carried grassroots space education
            into global conversations.

        </p>

        <div class="highlights">

            <div class="highlight-card">

                <img
                    src="/images/sgac-logo.png"
                    alt="SGAC"
                    class="org-logo"
                />

                <h3>

                    SGAC

                </h3>

                <span>

                    Space Generation
                    Advisory Council

                </span>

            </div>

            <div class="highlight-card">

                <img
                    src="/images/unoosa-logo.png"
                    alt="UNOOSA"
                    class="org-logo"
                />

                <h3>

                    UNOOSA

                </h3>

                <span>

                    United Nations Office
                    for Outer Space Affairs

                </span>

            </div>

            <div class="highlight-card">

    <img
        src="/images/globe.png"
        alt="Global Outreach"
        class="org-logo"
    />

    <h3>

        Global Outreach

    </h3>

    <span>

        International
        collaborations and
        participation

    </span>

</div>

        </div>

        <a
            href="/partners"
            class="minimal-btn"
        >

            <span>

                Explore Our Global Presence

            </span>

            <span class="arrow">

                →

            </span>

        </a>

    </div>

</section>

<style>

.international {

    min-height: 100vh;

    display: flex;

    align-items: center;

    justify-content: center;

    padding: 8rem 6vw;

    color: white;
}

.content {

    width: 100%;

    max-width: 1300px;

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

p {

    margin-top: 2rem;

    max-width: 800px;

    margin-left: auto;
    margin-right: auto;

    font-size: 1.15rem;

    line-height: 1.9;

    opacity: .85;
}

.highlights {

    margin-top: 5rem;

    display: grid;

    grid-template-columns:
    repeat(3,1fr);

    gap: 2rem;

    align-items: stretch;
}

.highlight-card {

    height: 340px;

    padding: 2rem;

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

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: flex-start;

    text-align: center;

    transition:
    transform .4s ease,
    background .4s ease,
    border-color .4s ease;
}

.highlight-card:hover {

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

.org-logo {

    width: 150px;

    height: 150px;

    object-fit: contain;

    margin-bottom: 1.5rem;
}

.globe {

    width: 150px;

    height: 150px;

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 4rem;

    margin-bottom: 1.5rem;
}

.highlight-card h3 {

    font-size: 1.6rem;

    font-weight: 700;

    margin-bottom: 1rem;

    min-height: 40px;
}

.highlight-card span {

    display: block;

    max-width: 260px;

    line-height: 1.7;

    opacity: .75;
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

@media(max-width:900px){

    .highlights {

        grid-template-columns: 1fr;
    }

    .international {

        padding: 6rem 2rem;
    }

    .highlight-card {

        height: auto;

        min-height: 320px;
    }
}

</style>