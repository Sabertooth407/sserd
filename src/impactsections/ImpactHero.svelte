<section class="hero">

    <div class="hero-content">

        <div class="eyebrow">

            OUR IMPACT

        </div>

        <h1>

            Curiosity
            In Motion.

        </h1>

        <h2>

            Transforming Classrooms
            Into Launchpads.

        </h2>

        <div class="divider"></div>

        <p>

            Since its inception, SSERD has been committed
            to democratizing space education —
            ensuring that curiosity is nurtured,
            access is expanded,
            and innovation begins early.

        </p>

        <p>

            Our impact is measured not just in numbers,
            but in mindsets transformed.

        </p>

    </div>

    <div class="hero-image">

        <img
            src="/images/hero-impact.jpg"
            alt="SSERD Impact"
        >

    </div>

</section>

<style>

.hero{

    min-height:100vh;

    display:grid;

    grid-template-columns:
    1.2fr 1fr;

    gap:6rem;

    align-items:center;

    padding:

        140px
        8vw
        8rem;
}

.hero-content{

    max-width:850px;
}

.eyebrow{

    letter-spacing:8px;

    opacity:.65;

    margin-bottom:1.5rem;
}

h1{

    font-size:
    clamp(5rem,10vw,9rem);

    line-height:.88;

    margin:0;
}

h2{

    font-size:
    clamp(1.8rem,3vw,3rem);

    font-weight:600;

    margin-top:1rem;

    opacity:.9;

    line-height:1.2;
}

.divider{

    width:120px;

    height:2px;

    background:white;

    opacity:.25;

    margin:2.5rem 0;
}

p{

    font-size:1.15rem;

    line-height:2;

    max-width:700px;

    opacity:.85;

    margin-bottom:1.5rem;
}

.hero-image{

    position:relative;
}

.hero-image img{

    width:100%;

    height:700px;

    object-fit:cover;

    border-radius:32px;

    box-shadow:
    0 40px 100px
    rgba(0,0,0,.45);
}

@media(max-width:1100px){

    .hero{

        grid-template-columns:1fr;

        gap:4rem;
    }

    .hero-image img{

        height:500px;
    }
}

@media(max-width:768px){

    .hero{

        padding:
        120px
        2rem
        5rem;
    }

    .hero-image img{

        height:400px;
    }

    h1{

        font-size:
        clamp(4rem,15vw,6rem);
    }

    h2{

        font-size:1.6rem;
    }
}

</style>