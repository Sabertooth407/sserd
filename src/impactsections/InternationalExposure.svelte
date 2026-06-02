<script>

import Globe
from "../components/Globe.svelte";

const countries = {

    India:{

        title:
        "India",

        subtitle:
        "Origin Of Impact",

        image:
        "/images/international/india.jpg",

        description:
        "For over a decade, SSERD has worked across India delivering aerospace education, STEM outreach programs, workshops, camps and research opportunities to students from diverse backgrounds. Through collaborations with schools, institutions and organizations, SSERD has nurtured curiosity and innovation among thousands of learners.",

        points:[

            "100,000+ students reached",

            "Programs across India",

            "CSR outreach initiatives",

            "Space education ecosystem"

        ]
    },

    Mauritius:{

        title:
        "Mauritius",

        subtitle:
        "International Education",

        image:
        "/images/international/mauritius.jpg",

        description:
        "SSERD expanded its outreach into Mauritius through international space education initiatives focused on experiential learning, STEM engagement and astronomy awareness. These programs connected students with the excitement of space exploration through hands-on activities and workshops.",

        points:[

            "Student engagement",

            "STEM awareness",

            "Astronomy education",

            "International collaboration"

        ]
    },

    "Sri Lanka":{

        title:
        "Sri Lanka",

        subtitle:
        "Teaching & Mentorship",

        image:
        "/images/international/srilanka.jpg",

        description:
        "Through educational outreach and mentorship initiatives, SSERD worked with students and educators in Sri Lanka, encouraging scientific curiosity and exposure to aerospace concepts.",

        points:[

            "Mentorship",

            "Workshops",

            "Student outreach",

            "Cross-border engagement"

        ]
    },

    Philippines:{

        title:
        "Philippines",

        subtitle:
        "Camp & Team Presence",

        image:
        "/images/international/philippines.jpg",

        description:
        "SSERD established a growing presence in the Philippines through camps, outreach programs and collaborative educational activities focused on aerospace learning and STEM engagement.",

        points:[

            "Space camps",

            "Youth engagement",

            "Team building",

            "International outreach"

        ]
    },

    Ghana:{

        title:
        "Ghana",

        subtitle:
        "Global Interaction",

        image:
        "/images/international/ghana.jpg",

        description:
        "Through interactions with students and educators in Ghana, SSERD contributed to global conversations around space education and STEM empowerment.",

        points:[

            "Student interaction",

            "Educational exchange",

            "Space awareness",

            "Global collaboration"

        ]
    },

    Australia:{

        title:
        "Australia",

        subtitle:
        "International Collaboration",

        image:
        "/images/international/australia.jpg",

        description:
        "SSERD engaged with learners and educators from Australia through international collaborations and educational outreach activities that fostered curiosity and global learning.",

        points:[

            "Collaboration",

            "STEM engagement",

            "Educational outreach",

            "Global partnerships"

        ]
    }

};

let active =
countries.India;

function updateCountry(name){

    active =
    countries[name];

}

</script>

<section class="international">

    <div class="globe-column">

        <Globe
            onCountryHover=
            {updateCountry}
        />

    </div>

    <div class="content-column">

        <div class="eyebrow">

            INTERNATIONAL EXPOSURE

        </div>

        <h2>

            Taking
            Curiosity
            Beyond
            Borders.

        </h2>

        <p class="intro">

            From classrooms in India to global
            policy platforms, SSERD's journey
            has extended across continents —
            connecting students, educators,
            researchers and institutions
            through the shared language of space.

        </p>

        <div class="hover-note">

            Hover over highlighted countries
            on the globe to explore SSERD's
            international impact.

        </div>

        <div class="country-card">

            <img
                src={active.image}
                alt={active.title}
            >

            <div class="country-content">

                <h3>

                    {active.title}

                </h3>

                <div class="subtitle">

                    {active.subtitle}

                </div>

                <p>

                    {active.description}

                </p>

                <ul>

                    {#each active.points as point}

                        <li>

                            {point}

                        </li>

                    {/each}

                </ul>

            </div>

        </div>

    </div>

</section>

<style>

.international{

    padding:
    6rem
    8vw
    8rem;

    display:grid;

    grid-template-columns:
    minmax(500px, 55%)
    minmax(420px, 45%);

    gap:4rem;

    align-items:center;

    overflow:hidden;
}

.globe-column{

    width:100%;

    max-width:850px;

    justify-self:center;
}

.content-column{

    width:100%;

    max-width:650px;

    position:relative;

    z-index:5;
}

.eyebrow{

    letter-spacing:10px;

    opacity:.6;

    margin-bottom:1rem;

    font-size:.85rem;
}

.content-column h2{

    font-size:
    clamp(
        4rem,
        8vw,
        7rem
    );

    line-height:.92;

    margin-bottom:2rem;
}

.intro{

    font-size:1.1rem;

    line-height:2;

    opacity:.8;

    margin-bottom:2rem;
}

.hover-note{

    font-size:.95rem;

    opacity:.55;

    margin-bottom:1.5rem;

    letter-spacing:.5px;
}

.country-card{

    border-radius:28px;

    overflow:hidden;

    background:
    rgba(
        255,
        255,
        255,
        .04
    );

    border:
    1px solid rgba(
        255,
        255,
        255,
        .08
    );

    backdrop-filter:
    blur(16px);

    transition:.35s ease;
}

.country-card img{

    width:100%;

    height:240px;

    object-fit:cover;
}

.country-content{

    padding:2rem;
}

.country-content h3{

    font-size:2.1rem;

    margin-bottom:.3rem;
}

.subtitle{

    opacity:.6;

    margin-bottom:1.25rem;

    letter-spacing:1px;
}

.country-content p{

    line-height:1.85;

    opacity:.85;

    margin-bottom:1.5rem;
}

.country-content ul{

    list-style:none;

    padding:0;

    display:grid;

    gap:.8rem;
}

.country-content li{

    position:relative;

    padding-left:1.5rem;

    opacity:.9;
}

.country-content li::before{

    content:"●";

    position:absolute;

    left:0;

    color:#6EE7FF;
}

@media(max-width:1200px){

    .international{

        grid-template-columns:1fr;

        gap:4rem;
    }

    .content-column{

        max-width:none;
    }

    .content-column h2{

        font-size:
        clamp(
            3.5rem,
            10vw,
            6rem
        );
    }
}

@media(max-width:700px){

    .international{

        padding:
        4rem
        2rem
        6rem;
    }

    .country-card img{

        height:220px;
    }
}

</style>