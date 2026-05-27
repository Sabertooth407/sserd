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
                currentScene.set("cta"),

            onEnterBack: () =>
                currentScene.set("cta")

        });

        gsap.from(".cta-content", {

            opacity: 0,

            y: 60,

            duration: 1.2,

            ease: "power3.out",

            scrollTrigger: {

                trigger: section,

                start: "top 75%"

            }

        });

    });
</script>

<section
    bind:this={section}
    class="cta"
>

    <div class="cta-content">

        <div class="eyebrow">

            JOIN THE MOVEMENT

        </div>

        <h2>

            Space Belongs
            To Everyone.

        </h2>

        <p>

            Help us inspire the next generation
            of explorers, researchers,
            innovators and future astronauts.

        </p>

        <div class="primary-actions">

            <a
                href="/donate"
                class="minimal-btn"
            >

                <span>

                    Donate

                </span>

                <span class="arrow">

                    →

                </span>

            </a>

            <a
                href="/partners"
                class="minimal-btn"
            >

                <span>

                    CSR Partnership

                </span>

                <span class="arrow">

                    →

                </span>

            </a>

        </div>

        <div class="secondary-links">

    <a href="/volunteer">

        Volunteer

    </a>

    <a href="/careers">

        Join Our Team

    </a>

    <a href="/newsletter">

        Newsletter

    </a>

    <a href="/contact">

        Queries

    </a>

    <div class="social-icons">

        <a
            href="https://www.instagram.com/sserd_org?igsh=MWtlOG9hdzdhbm1iaA=="
            target="_blank"
            aria-label="Instagram"
        >

            <i class="fab fa-instagram"></i>

        </a>

        <a
            href="https://www.facebook.com/sserd.org/"
            target="_blank"
            aria-label="Facebook"
        >

            <i class="fab fa-facebook-f"></i>

        </a>

        <a
            href="https://www.linkedin.com/company/sserd/"
            target="_blank"
            aria-label="LinkedIn"
        >

            <i class="fab fa-linkedin-in"></i>

        </a>

    </div>

</div>

    </div>

</section>

<style>
.social-icons {

    display: flex;

    align-items: center;

    gap: 1.2rem;

    margin-left: 1rem;
}

.social-icons a {

    color:
    rgba(
        255,
        255,
        255,
        .7
    );

    font-size: 1.2rem;

    transition: .3s ease;
}

.social-icons a:hover {

    color: white;

    transform:
    translateY(-2px);
}
.cta {

    min-height: 100vh;

    display: flex;

    justify-content: center;

    align-items: center;

    text-align: center;

    padding: 8rem 2rem;

    color: white;
}

.cta-content {

    width: 100%;

    max-width: 1000px;
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

    line-height: .95;
}

p {

    margin-top: 2rem;

    max-width: 700px;

    margin-left: auto;
    margin-right: auto;

    font-size: 1.15rem;

    line-height: 1.9;

    opacity: .85;
}

.primary-actions {

    margin-top: 4rem;

    display: flex;

    justify-content: center;

    gap: 1rem;

    flex-wrap: wrap;
}

.minimal-btn {

    position: relative;

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

.secondary-links {

    margin-top: 3rem;

    display: flex;

    justify-content: center;

    flex-wrap: wrap;

    gap: 2rem;
}

.secondary-links a {

    color:
    rgba(
        255,
        255,
        255,
        .7
    );

    text-decoration: none;

    transition: .3s;
}

.secondary-links a:hover {

    color: white;
}

@media(max-width:768px){

    .cta {

        padding: 6rem 2rem;
    }

    .primary-actions {

        flex-direction: column;
    }

    .secondary-links {

        flex-direction: column;

        gap: 1rem;
    }

    h2 {

        font-size: 4rem;
    }
}

</style>