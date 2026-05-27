<script>

    import Philosophy from "../aboutsections/Philosophy.svelte";
    import History from "../aboutsections/History.svelte";
    import Objectives from "../aboutsections/Objectives.svelte";
    import People from "../aboutsections/People.svelte";
    import Partner from "../aboutsections/Partner.svelte";
    

import { onMount } from "svelte";

onMount(() => {

    const hash =
        window.location.hash;

    const section =
        hash.split("?section=")[1];

    if (!section) return;

    setTimeout(() => {

        document
            .getElementById(section)
            ?.scrollIntoView({

                behavior:"smooth"

            });

    },300);

});

</script>

<div class="about-page">

    <section class="about-hero">

        <div class="hero-content">

            <div class="eyebrow">

                ABOUT SSERD

            </div>

            <h1>

                Transforming Curiosity
                Into Capability

            </h1>

            <p>

                Inspired by the vision of
                Dr. A. P. J. Abdul Kalam,
                SSERD exists to make space
                education accessible,
                experiential and empowering.

            </p>

        </div>

    </section>

    <Philosophy />

    <History />

    <Objectives />

    <People />

    <Partner />

</div>

<style>

.about-page{

    min-height:100vh;

    color:white;

    background:
    linear-gradient(
        rgba(0,0,0,.78),
        rgba(0,0,0,.78)
    ),
    url('/images/aboutbg.jpg');

    background-size:cover;

    background-position:center;

    background-attachment:fixed;
}

.about-hero{

    min-height:100vh;

    display:flex;

    align-items:center;

    padding:0 8vw;
}

.hero-content{

    max-width:900px;
}

.eyebrow{

    letter-spacing:8px;

    opacity:.7;

    margin-bottom:1rem;
}

h1{

    font-size:
    clamp(4rem,8vw,8rem);

    line-height:.95;
}

p{

    margin-top:2rem;

    font-size:1.15rem;

    line-height:1.9;

    opacity:.85;

    max-width:700px;
}

</style>