<script>

let active = {
    country: "Mauritius",
    image: "/images/international/mauritius.jpg",
    text: "Conducted space education programs in Mauritius."
};

const locations = [

    {
        country: "Mauritius",
        image: "/images/international/mauritius.jpg",
        text: "Conducted space education programs in Mauritius.",
        top: "55%",
        left: "52%"
    },

    {
        country: "Sri Lanka",
        image: "/images/international/srilanka.jpg",
        text: "Teaching and mentoring students in Sri Lanka.",
        top: "58%",
        left: "48%"
    },

    {
        country: "Philippines",
        image: "/images/international/philippines.jpg",
        text: "Conducting camps and building a team presence in the Philippines.",
        top: "50%",
        left: "75%"
    },

    {
        country: "Ghana",
        image: "/images/international/ghana.jpg",
        text: "Interacting with students and educators in Ghana.",
        top: "48%",
        left: "32%"
    },

    {
        country: "Australia",
        image: "/images/international/australia.jpg",
        text: "Educational outreach and student engagement in Australia.",
        top: "72%",
        left: "82%"
    }

];

</script>

<section class="international">

    <div class="content">

        <div class="eyebrow">

            INTERNATIONAL EXPOSURE

        </div>

        <h2>

            Taking Curiosity
            Beyond Borders.

        </h2>

        <p>

            From classrooms in India to global policy
            platforms, SSERD’s journey has extended
            across continents — connecting youth,
            educators, researchers and institutions
            through the shared language of space.

        </p>

        <div class="highlight">

            Our international exposure reflects
            not just participation —
            but contribution.

        </div>

        <div class="preview">

            <img
                src={active.image}
                alt={active.country}
            >

            <div>

                <h3>

                    {active.country}

                </h3>

                <p>

                    {active.text}

                </p>

            </div>

        </div>

    </div>

    <div class="map-wrapper">

        <img
            class="world-map"
            src="/images/worldmap.png"
            alt="World Map"
        >

        {#each locations as location}

            <button

                class="marker"

                style="
                    top:{location.top};
                    left:{location.left};
                "

                on:mouseenter={() => active = location}

            >

                <span></span>

            </button>

        {/each}

    </div>

</section>

<style>

.international{

    padding:
    8rem
    8vw;

    display:grid;

    grid-template-columns:
    0.9fr
    1.1fr;

    gap:5rem;

    align-items:center;
}

.eyebrow{

    letter-spacing:8px;

    opacity:.65;

    margin-bottom:1rem;
}

.content h2{

    font-size:
    clamp(3rem,6vw,5rem);

    line-height:1.05;

    margin-bottom:2rem;
}

.content p{

    line-height:2;

    opacity:.85;

    font-size:1.1rem;
}

.highlight{

    margin-top:2rem;

    font-size:1.4rem;

    font-weight:600;

    line-height:1.6;
}

.preview{

    margin-top:3rem;

    display:flex;

    gap:1.5rem;

    align-items:center;

    padding:1rem;

    border-radius:20px;

    background:
    rgba(
        255,
        255,
        255,
        .03
    );

    border:
    1px solid rgba(
        255,
        255,
        255,
        .08
    );
}

.preview img{

    width:140px;

    height:100px;

    object-fit:cover;

    border-radius:14px;
}

.preview h3{

    margin-bottom:.5rem;
}

.preview p{

    font-size:.95rem;

    opacity:.8;
}

.map-wrapper{

    position:relative;

    width:100%;

    min-height:600px;
}

.world-map{

    width:100%;

    opacity:.8;

    filter:
    brightness(.9);
}

.marker{

    position:absolute;

    width:18px;

    height:18px;

    border:none;

    border-radius:50%;

    background:#fff;

    cursor:pointer;

    transform:
    translate(-50%,-50%);
}

.marker span{

    position:absolute;

    inset:-10px;

    border-radius:50%;

    border:
    1px solid rgba(
        255,
        255,
        255,
        .4
    );

    animation:
    pulse
    2s
    infinite;
}

@keyframes pulse{

    0%{

        transform:scale(.5);

        opacity:1;
    }

    100%{

        transform:scale(2);

        opacity:0;
    }
}

.marker:hover{

    transform:
    translate(-50%,-50%)
    scale(1.4);
}

@media(max-width:1100px){

    .international{

        grid-template-columns:1fr;

        gap:4rem;
    }

    .map-wrapper{

        min-height:450px;
    }
}

@media(max-width:700px){

    .international{

        padding:
        5rem
        2rem;
    }

    .preview{

        flex-direction:column;

        align-items:flex-start;
    }
}

</style>