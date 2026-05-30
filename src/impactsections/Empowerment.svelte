<section class="empowerment">

    <div class="content">

        <div class="eyebrow">

            EMPOWERMENT IMPACT

        </div>

        <h2>

            Empowerment Is
            The Most Sustainable
            Form Of Impact.

        </h2>

        <p>

            Beyond education and research,
            SSERD focuses on empowering
            students to see themselves as
            future scientists, innovators,
            leaders and changemakers.

        </p>

        <div class="impact-list">

            <div class="impact-item">

                <div class="impact-number">

                    01

                </div>

                <div>

                    Young students gained exposure
                    to aerospace role models.

                </div>

            </div>

            <div class="impact-item">

                <div class="impact-number">

                    02

                </div>

                <div>

                    Girls were encouraged to
                    pursue careers in space
                    through the Girls in Space
                    initiative.

                </div>

            </div>

            <div class="impact-item">

                <div class="impact-number">

                    03

                </div>

                <div>

                    Students developed confidence
                    through hands-on success.

                </div>

            </div>

            <div class="impact-item">

                <div class="impact-number">

                    04

                </div>

                <div>

                    College students accessed
                    career-oriented internships.

                </div>

            </div>

            <div class="impact-item">

                <div class="impact-number">

                    05

                </div>

                <div>

                    Learners discovered pathways
                    into India’s growing space
                    ecosystem.

                </div>

            </div>

        </div>

    </div>

    <div class="empowerment-collage">

        <img
            src="/images/empower1.jpg"
            alt=""
        >

        <img
            src="/images/empower2.jpg"
            alt=""
        >

        <img
            src="/images/empower3.jpg"
            alt=""
        >

        <img
            src="/images/empower4.jpg"
            alt=""
        >

        <img
            src="/images/empower5.jpg"
            alt=""
        >

        <img
            src="/images/empower6.jpg"
            alt=""
        >

    </div>

</section>

<style>

.empowerment{

    padding:
    2rem
    8vw
3rem;

    display:grid;

    grid-template-columns:
    1fr
    1fr;

    gap:6rem;

    align-items:start;
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

    font-size:1.15rem;

    line-height:2;

    opacity:.85;

    margin-bottom:3rem;

    max-width:700px;
}

.impact-list{

    display:flex;

    flex-direction:column;

    gap:1rem;
}

.impact-item{

    display:flex;

    gap:1.5rem;

    align-items:flex-start;

    padding:1.5rem;

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

    line-height:1.8;
}

.impact-number{

    font-size:2rem;

    font-weight:700;


    min-width:60px;
}

.empowerment-collage{

    display:grid;

    grid-template-columns:
    repeat(2,1fr);

    gap:1rem;
}

.empowerment-collage img{

    width:100%;

    object-fit:cover;

    border-radius:24px;

    transition:.4s ease;
}

.empowerment-collage img:hover{

    transform:
        translateY(-4px)
        scale(1.03);
}

/* Featured Images */

.empowerment-collage img:nth-child(1){

    grid-column:span 2;

    height:320px;
}

.empowerment-collage img:nth-child(4){

    grid-column:span 2;

    height:300px;
}

/* Smaller Images */

.empowerment-collage img:not(:nth-child(1))
:not(:nth-child(4)){

    height:190px;
}

@media(max-width:1100px){

    .empowerment{

        grid-template-columns:1fr;

        gap:4rem;
    }
}

@media(max-width:700px){

    .empowerment{

        padding:
        6rem
        2rem;
    }

    .empowerment-collage{

        grid-template-columns:1fr;
    }

    .empowerment-collage img{

        height:240px !important;
    }

    .impact-item{

        flex-direction:column;

        gap:.5rem;
    }
}

</style>