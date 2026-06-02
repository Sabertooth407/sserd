<script>

import { onMount } from "svelte";
import Globe from "globe.gl";

export let onCountryHover;

let globeEl;

const highlightedCountries = [

    "India",
    "Australia",
    "Ghana",
    "Sri Lanka",
    "Mauritius",
    "Philippines"

];

const pins = [

    {
        country:"India",
        lat:20.5937,
        lng:78.9629
    },

    {
        country:"Australia",
        lat:-25.2744,
        lng:133.7751
    },

    {
        country:"Ghana",
        lat:7.9465,
        lng:-1.0232
    },

    {
        country:"Sri Lanka",
        lat:7.8731,
        lng:80.7718
    },

    {
        country:"Mauritius",
        lat:-20.3484,
        lng:57.5522
    },

    {
        country:"Philippines",
        lat:12.8797,
        lng:121.7740
    }

];

onMount(async()=>{

    const countries =
        await fetch(
            "/data/world.geojson"
        )
        .then(r=>r.json());

    const globe = Globe()

        (globeEl)

        .backgroundColor(
            "rgba(0,0,0,0)"
        )

        .globeImageUrl(
            "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        )

        .showAtmosphere(true)

        .atmosphereColor(
            "#7CC8FF"
        )

        .atmosphereAltitude(
            0.22
        )

        .polygonsData(
            countries.features
        )

        .polygonCapColor(feature=>{

            const name =
                feature.properties.name;

            if(

                highlightedCountries
                .includes(name)

            ){

                if(name==="India"){

                    return "#FFD54F";
                }

                return "#59D7FF";
            }

            return "rgba(255,255,255,.03)";

        })

        .polygonSideColor(
            ()=>"rgba(0,0,0,0)"
        )

        .polygonStrokeColor(
            ()=>"rgba(255,255,255,.12)"
        )

        .polygonAltitude(feature=>{

            const name =
                feature.properties.name;

            return highlightedCountries
                .includes(name)

                ? 0.02

                : 0.005;

        })

        .pointsData(
            pins
        )

        .pointColor(point=>

            point.country==="India"

            ? "#FFD54F"

            : "#6EE7FF"

        )

        .pointAltitude(
            0.08
        )

        .pointRadius(
            0.6
        )

        .pointResolution(
            20
        )

        .onPointHover(point=>{

            if(point){

                globe.controls()
                    .autoRotate = false;

                globe.pointOfView({

                    lat:point.lat,
                    lng:point.lng,
                    altitude:1.6

                },800);

                onCountryHover?.(
                    point.country
                );

            }

            else{

                globe.controls()
                    .autoRotate = true;
            }

        });

    globe.controls()
        .enableZoom = false;

    globe.controls()
        .autoRotate = true;

    globe.controls()
        .autoRotateSpeed = 0.25;

    globe.pointOfView({

    lat:15,
    lng:80,
    altitude:2.2

});

});
</script>

<div
    bind:this={globeEl}
    class="globe-wrapper"
>

    <div
        bind:this={globeEl}
        class="globe"
    ></div>

</div>

<style>

.globe-wrapper{

    position:relative;

    width:100%;

    height:700px;

    max-width:800px;

    margin:auto;

    display:flex;

    align-items:center;

    justify-content:center;
}

.globe{

    width:100%;

    height:100%;
}

.globe-wrapper::before{

    content:"";

    position:absolute;

    width:600px;

    height:600px;

    border-radius:50%;

    background:

        radial-gradient(

            circle,

            rgba(
                89,
                215,
                255,
                .18
            ) 0%,

            rgba(
                89,
                215,
                255,
                .08
            ) 40%,

            transparent 75%

        );

    filter:blur(50px);

    pointer-events:none;

    z-index:0;
}

.globe{

    position:relative;

    z-index:1;
}

@media(max-width:1400px){

    .globe-wrapper{

        height:800px;
    }
}

@media(max-width:1100px){

    .globe-wrapper{

        height:700px;
    }
}

@media(max-width:768px){

    .globe-wrapper{

        height:550px;
    }
}

</style>