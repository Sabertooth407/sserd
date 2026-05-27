<script>

    const educationPrograms = [

        {
            title: "Hands-on Space Education",
            image: "/images/handson.jpg",
            link: "#/programs/hands-on-space-education"
        },

        {
            title: "CSR Programs",
            image: "/images/csr.jpg",
            link: "#/programs/csr-programs"
        },

        {
            title: "CosmoKit",
            image: "/images/cosmokit.jpg",
            link: "#/programs/cosmokit"
        },

        {
            title: "International Workshops",
            image: "/images/workshops.jpg",
            link: "#/programs/international-workshops"
        },

        {
            title: "Space Talks",
            image: "/images/spacetalks.jpg",
            link: "#/programs/space-talks"
        }

    ];

    const experiencePrograms = [

        {
            title: "Astro Space Camp",
            image: "/images/astrocamp.jpg",
            link: "#/programs/astro-space-camp"
        },

        {
            title: "Space Experience Centre",
            image: "/images/spacecenter.jpg",
            link: "#/programs/space-experience-centre"
        },

        {
            title: "Research & Innovation Pathways",
            image: "/images/researchprog.jpg",
            link: "#/programs/research-innovation"
        },

        {
            title: "Asteroid Search Campaign",
            image: "/images/asteroid.jpg",
            link: "#/programs/asteroid-search-campaign"
        },

        {
            title: "Junior Space Scientist Program",
            image: "/images/jssp.jpg",
            link: "#/programs/jssp"
        }

    ];

    const empowermentPrograms = [

        {
            title: "Girls in Space",
            image: "/images/girlsinspace.jpg",
            link: "#/programs/girls-in-space"
        },

        {
            title: "Online Internship Program",
            image: "/images/internship.jpg",
            link: "#/programs/internship"
        },

        {
            title: "International Collaborations & Global Exposure",
            image: "/images/global.jpg",
            link: "#/programs/global-exposure"
        }

    ];

</script>

<div class="programs-page">

    <section class="hero">

    <div class="hero-content">

        <div class="eyebrow">

            OUR PROGRAMS

        </div>

        <h1>

            From Curiosity
            To Capability

        </h1>

        <p class="hero-subtitle">

            Our programs transform young learners
            into future-ready explorers, innovators,
            and leaders in aerospace.

        </p>

        <div class="hero-divider"></div>

        <div class="hero-intro">

            <p>

                At SSERD, every program is designed around one core belief —
                space education must be accessible, experiential,
                research-driven, and empowering.

            </p>

            <p>

                Through immersive workshops, structured research initiatives,
                leadership pathways, and international collaborations,
                we create meaningful entry points into the world of aerospace.

            </p>

            <p>

                Each program is built not just to teach space science,
                but to cultivate scientific thinking, confidence,
                and innovation among youth across diverse backgrounds.

            </p>

        </div>

    </div>

</section>


    <section class="framework">

        <div class="framework-header">

            <div class="eyebrow">

                BUILT ON THE THREE E FRAMEWORK

            </div>

            <h2>

                Education.
                Experience.
                Empowerment.

            </h2>

        </div>



    </section>

    <!-- EDUCATION -->

    <section class="program-section">

        <div class="section-title">

            <div class="section-number">

                01

            </div>

            <div>

                <div class="eyebrow">

                    EDUCATION

                </div>

                <h2>

                    Making Space Science Accessible

                </h2>

            </div>

        </div>

        <div class="program-grid">

            {#each educationPrograms as program}

                <div class="program-card">

                    <img
                        src={program.image}
                        alt={program.title}
                    />

                    <div class="card-overlay">

                        <h3>

                            {program.title}

                        </h3>

                        <a href={program.link}>

                            Read More →

                        </a>

                    </div>

                </div>

            {/each}

        </div>

    </section>

    <!-- EXPERIENCE -->

    <section class="program-section">

        <div class="section-title">

            <div class="section-number">

                02

            </div>

            <div>

                <div class="eyebrow">

                    EXPERIENCE & INNOVATION

                </div>

                <h2>

                    Learning By Doing.
                    Innovating By Exploring.

                </h2>

            </div>

        </div>

        <div class="program-grid">

            {#each experiencePrograms as program}

                <div class="program-card">

                    <img
                        src={program.image}
                        alt={program.title}
                    />

                    <div class="card-overlay">

                        <h3>

                            {program.title}

                        </h3>

                        <a href={program.link}>

                            Read More →

                        </a>

                    </div>

                </div>

            {/each}

        </div>

    </section>

    <!-- EMPOWERMENT -->

    <section class="program-section three-grid">

        <div class="section-title">

            <div class="section-number">

                03

            </div>

            <div>

                <div class="eyebrow">

                    EMPOWERMENT

                </div>

                <h2>

                    Building Future Aerospace Leaders

                </h2>

            </div>

        </div>

        <div class="program-grid">

            {#each empowermentPrograms as program}

                <div class="program-card">

                    <img
                        src={program.image}
                        alt={program.title}
                    />

                    <div class="card-overlay">

                        <h3>

                            {program.title}

                        </h3>

                        <a href={program.link}>

                            Read More →

                        </a>

                    </div>

                </div>

            {/each}

        </div>

    </section>

    <section class="closing">

        <h2>

            Curiosity begins with education.
            Capability emerges through experience.
            Leadership grows through empowerment.

        </h2>

        <p>

            Together, these form the foundation
            of every SSERD program.

        </p>

    </section>

</div>

<style>


.programs-page{

    min-height:100vh;

    color:white;

    background:
    linear-gradient(
        rgba(0,0,0,.78),
        rgba(0,0,0,.78)
    ),
    url('/images/programbg.jpeg');

    background-size:cover;

    background-position:center;

    background-attachment:fixed;
}

.hero{

    min-height:100vh;

    display:flex;

    align-items:center;

    padding:

        10rem
        8vw
        6rem;
}
.hero-content{

    max-width:900px;
}

.eyebrow{

    letter-spacing:6px;

    opacity:.65;

    margin-bottom:1rem;
}

.hero h1{

    font-size:
    clamp(4rem,7vw,6.5rem);

    line-height:.95;

    max-width:900px;

    margin-bottom:1.5rem;
}

.hero p{

    margin-top:2rem;

    font-size:1.15rem;

    line-height:1.9;

    max-width:700px;

    opacity:.85;
}
.hero-subtitle{

    font-size:1.4rem;

    line-height:1.8;

    max-width:850px;

    margin-top:2rem;

    margin-bottom:2rem;
}

.hero-divider{

    width:120px;

    height:2px;

    background:white;

    opacity:.3;

    margin:2.5rem 0;
}

.hero-intro{

    max-width:900px;
}

.hero-intro p{

    line-height:2;

    margin-bottom:1.5rem;

    opacity:.9;

    font-size:1.08rem;
}
.framework{

    padding:0 8vw 2rem;
}

.framework-header{

    text-align:center;

    margin-bottom:4rem;
}

.framework-header h2{

    font-size:
    clamp(3rem,5vw,5rem);
}






.program-section{

    padding:0 8vw 8rem;
}

.section-title{

    display:flex;

    gap:2rem;

    align-items:flex-start;

    margin-bottom:4rem;
}

.section-number{

    font-size:5rem;

    font-weight:800;

}

.section-title h2{

    font-size:
    clamp(2rem,4vw,4rem);
}

.program-grid{

    display:grid;

    grid-template-columns:
    repeat(5,1fr);

    gap:1.25rem;
}

.program-card{

    position:relative;

    height:260px;

    overflow:hidden;

    border-radius:24px;

    cursor:pointer;
}

.program-card img{

    width:100%;

    height:100%;

    object-fit:cover;

    transition:.6s;
}


.program-card:hover img{

    transform:scale(1.08);
}

.card-overlay{

    position:absolute;

    inset:0;

    display:flex;

    flex-direction:column;

    justify-content:flex-end;

    padding:2rem;

    background:
    linear-gradient(
        transparent,
        rgba(0,0,0,.92)
    );
}

.card-overlay h3{

    font-size:1.1rem;

    line-height:1.3;

    margin-bottom:.5rem;
}
.card-overlay a{

    color:white;

    text-decoration:none;

    opacity:.75;

    transition:.3s;
}

.card-overlay a:hover{

    opacity:1;
}

.closing{

    padding:
    0
    8vw
    10rem;

    text-align:center;

    max-width:1100px;

    margin:auto;
}

.closing h2{

    font-size:
    clamp(2rem,3vw,4rem);

    line-height:1.2;

    margin-bottom:2rem;
}

.closing p{

    opacity:.8;

    font-size:1.1rem;
}

@media(max-width:1100px){

    

    .program-grid{

        grid-template-columns:
        repeat(2,1fr);
    }
}

@media(max-width:768px){

    .hero{

        padding:0 2rem;
    }

    .framework,
    .program-section{

        padding-left:2rem;
        padding-right:2rem;
    }

    .program-grid{

        grid-template-columns:1fr;
    }

    .section-title{

        flex-direction:column;
    }

    .section-number{

        font-size:3rem;
    }
}

</style>