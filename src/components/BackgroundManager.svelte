<script>

    import { onMount } from "svelte";

    import {
        currentScene,
        scenes
    } from "../lib/sceneStore";

    import { gsap }
    from "../lib/gsap";

    let layer1;
    let layer2;

    let bg1 = scenes.hero;
    let bg2 = scenes.hero;

    let current = "hero";

    let activeLayer = 1;

    onMount(() => {

        Object.values(scenes).forEach(scene => {

            if (scene.type === "image") {

                const img = new Image();

                img.src = scene.src;
            }

        });

    });

    $: if ($currentScene !== current) {

        current = $currentScene;

        const nextScene =
            scenes[current];

        if (activeLayer === 1) {

            bg2 = nextScene;

            requestAnimationFrame(() => {

                gsap.set(layer2, {
                    opacity: 0
                });

                gsap.to(layer2, {

                    opacity: 1,

                    duration: 1.4,

                    ease:
                    "power2.inOut"

                });

                gsap.to(layer1, {

                    opacity: 0,

                    duration: 1.4,

                    ease:
                    "power2.inOut"

                });

            });

            activeLayer = 2;

        } else {

            bg1 = nextScene;

            requestAnimationFrame(() => {

                gsap.set(layer1, {
                    opacity: 0
                });

                gsap.to(layer1, {

                    opacity: 1,

                    duration: 1.4,

                    ease:
                    "power2.inOut"

                });

                gsap.to(layer2, {

                    opacity: 0,

                    duration: 1.4,

                    ease:
                    "power2.inOut"

                });

            });

            activeLayer = 1;
        }
    }

</script>

<!-- Layer 1 -->

<div
    bind:this={layer1}
    class="bg-layer bg1"
>

    {#if bg1.type === "image"}

        <img
            src={bg1.src}
            alt=""
            class="media"
        />

    {:else}

        <video
            autoplay
            muted
            loop
            playsinline
            class="media"
        >

            <source
                src={bg1.src}
                type="video/mp4"
            />

        </video>

    {/if}

</div>

<!-- Layer 2 -->

<div
    bind:this={layer2}
    class="bg-layer bg2"
>

    {#if bg2.type === "image"}

        <img
            src={bg2.src}
            alt=""
            class="media"
        />

    {:else}

        <video
            autoplay
            muted
            loop
            playsinline
            class="media"
        >

            <source
                src={bg2.src}
                type="video/mp4"
            />

        </video>

    {/if}

</div>

<div class="overlay"></div>

<style>

.bg-layer {

    position: fixed;

    inset: 0;

    z-index: -20;

    overflow: hidden;

    will-change:
    opacity,
    transform;
}

.bg1 {

    opacity: 1;
}

.bg2 {

    opacity: 0;
}

.media {

    width: 100%;

    height: 100%;

    object-fit: cover;

    animation:
    slowZoom
    25s
    ease-in-out
    infinite
    alternate;
}

video {

    pointer-events: none;
}

.overlay {

    position: fixed;

    inset: 0;

    z-index: -19;

    background:

        radial-gradient(
            circle at center,
            rgba(0,0,0,.05),
            rgba(0,0,0,.45)
        ),

        linear-gradient(
            to right,
            rgba(0,0,0,.72),
            rgba(0,0,0,.30),
            rgba(0,0,0,.55)
        );
}

@keyframes slowZoom {

    from {

        transform:
        scale(1);
    }

    to {

        transform:
        scale(1.08);
    }
}

@media (max-width:768px){

    .overlay {

        background:

            linear-gradient(
                to bottom,
                rgba(0,0,0,.65),
                rgba(0,0,0,.35),
                rgba(0,0,0,.75)
            );
    }
}

</style>