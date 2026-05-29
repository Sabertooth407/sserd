<script>

const secondaryStats = [

    {
        image:"/images/impact/years.jpg",
        number:"10",
        label:"Years of Service"
    },

    {
        image:"/images/impact/isro.jpg",
        number:"ISRO",
        label:"Recognized Space Tutor"
    },

    {
        image:"/images/impact/global.jpg",
        number:"Global",
        label:"Programs Across India & Internationally"
    },

    {
        image:"/images/impact/csr.jpg",
        number:"CSR",
        label:"Institutional Partnerships"
    },

    {
        image:"/images/impact/learning.jpg",
        number:"1000s",
        label:"Hours of Hands-on Learning"
    }

];

</script>

<section class="impact-stats">

    <div class="section-header">

        <div class="eyebrow">

            IMPACT SNAPSHOT

        </div>

        <h2>

            A Decade Of
            Transforming Curiosity.

        </h2>

    </div>

    <div class="hero-stat">

        <div class="hero-number">

            100,000+

        </div>

        <div class="hero-label">

            Students Reached

        </div>

        <div class="hero-subtitle">

            Across India And Beyond

        </div>

    </div>

    <div class="secondary-grid">

        {#each secondaryStats as stat}

            <div class="secondary-card">

                <img
                    src={stat.image}
                    alt={stat.label}
                >

                <div class="overlay">

                    <div class="secondary-number">

                        {stat.number}

                    </div>

                    <div class="secondary-label">

                        {stat.label}

                    </div>

                </div>

            </div>

        {/each}

    </div>

</section>

<style>

.impact-stats{

    padding:
    1rem
    3vw
    10rem;
}

.section-header{

    text-align:center;

    max-width:900px;

    margin:0 auto 5rem;
}

.eyebrow{

    letter-spacing:8px;

    opacity:.65;

    margin-bottom:1rem;
}

h2{

    font-size:
    clamp(3rem,6vw,5rem);

    line-height:1.1;
}

.hero-stat{

    text-align:center;

    margin-bottom:3rem;
}

.hero-number{

    font-size:
    clamp(6rem,14vw,12rem);

    font-weight:700;

    line-height:.9;

    margin-bottom:1rem;
}

.hero-label{

    font-size:
    clamp(1.8rem,3vw,2.8rem);

    font-weight:600;

    margin-bottom:.75rem;
}

.hero-subtitle{

    font-size:1.15rem;

    opacity:.7;

    letter-spacing:1px;
}

.secondary-grid{

    display:grid;

    grid-template-columns:
    repeat(5,minmax(0,1fr));

    gap:1rem;

    align-items:stretch;
}

.secondary-card{

    position:relative;

    height:250px;

    overflow:hidden;

    border-radius:20px;

}

.secondary-card img{

    width:100%;

    height:100%;

    object-fit:cover;

    transition:1s;
}

.secondary-card:hover img{

    transform:scale(1.08);
}

.overlay{

    position:absolute;

    inset:0;

    display:flex;

    flex-direction:column;

    justify-content:flex-end;

    padding:1rem;

    background:

        linear-gradient(
            to top,
            rgba(0,0,0,.95),
            rgba(0,0,0,.25)
        );
}

.secondary-number{

    font-size:
    clamp(2rem,3vw,3rem);

    font-weight:700;

    margin-bottom:.5rem;
}

.secondary-label{

    font-size:.95rem;

    line-height:1.5;

    opacity:.9;
}

@media(max-width:900px){

    .secondary-grid{

        grid-template-columns:
        repeat(2,1fr);
    }
}

@media(max-width:700px){

    .impact-stats{

        padding:
        3rem
        2rem
        6rem;
    }

    .secondary-grid{

        grid-template-columns:1fr;
    }

    .hero-number{

        font-size:
        clamp(5rem,20vw,8rem);
    }

    .secondary-card{

        height:280px;
    }
}

</style>