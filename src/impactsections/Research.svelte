<section class="research">

    <div class="section-header">

        <div class="eyebrow">

            RESEARCH & INNOVATION IMPACT

        </div>

        <h2>

            From Curiosity
            To Discovery.

        </h2>

        <p>

            SSERD enables students to move beyond
            passive learning and actively engage
            with research, experimentation and
            real-world problem solving.

        </p>

    </div>

    <div class="journey">

        <div class="step">

            <img
                src="/images/impact/research1.jpg"
                alt=""
            >

            <div class="step-number">

                01

            </div>

            <h3>

                Asteroid Search
                Campaigns

            </h3>

        </div>

        <div class="line"></div>

        <div class="step">

            <img
                src="/images/impact/research2.jpg"
                alt=""
            >

            <div class="step-number">

                02

            </div>

            <h3>

                Research
                Exposure

            </h3>

        </div>

        <div class="line"></div>

        <div class="step">

            <img
                src="/images/impact/research3.jpg"
                alt=""
            >

            <div class="step-number">

                03

            </div>

            <h3>

                Aerospace
                Models

            </h3>

        </div>

        <div class="line"></div>

        <div class="step">

            <img
                src="/images/impact/research4.jpg"
                alt=""
            >

            <div class="step-number">

                04

            </div>

            <h3>

                Junior Space
                Scientist Program

            </h3>

        </div>

        <div class="line"></div>

        <div class="step">

            <img
                src="/images/impact/research5.jpg"
                alt=""
            >

            <div class="step-number">

                05

            </div>

            <h3>

                Real World
                Challenges

            </h3>

        </div>

    </div>

    <div class="impact-quote">

        Many participants have continued into
        STEM higher education and aerospace
        pathways.

    </div>

</section>

<style>

.research{

    padding:
    8rem
    8vw;
}

.section-header{

    max-width:900px;

    margin-bottom:6rem;
}

.eyebrow{

    letter-spacing:8px;

    opacity:.65;

    margin-bottom:1rem;
}

.section-header h2{

    font-size:
    clamp(3rem,6vw,5rem);

    line-height:1.05;

    margin-bottom:2rem;
}

.section-header p{

    max-width:700px;

    line-height:2;

    opacity:.8;

    font-size:1.1rem;
}

.journey{

    display:flex;

    align-items:flex-start;

    justify-content:space-between;

    gap:1rem;

    margin-bottom:4rem;
}

.step{

    flex:1;

    text-align:center;
}

.step img{

    width:100%;

    height:220px;

    object-fit:cover;

    border-radius:24px;

    margin-bottom:1.5rem;

    filter:grayscale(100%);

    transition:.5s;
}

.step:hover img{

    filter:grayscale(0%);

    transform:
        translateY(-6px)
        scale(1.03);
}

.step-number{

    font-size:5rem;

    font-weight:700;


    line-height:1;

    height:90px;

    display:flex;

    align-items:center;

    justify-content:center;

    margin-bottom:1rem;
}

.step h3{

    font-size:1.2rem;

    line-height:1.5;

    min-height:80px;

    display:flex;

    align-items:flex-start;

    justify-content:center;
}

.line{

    flex:.35;

    height:1px;

    margin-top:110px;

    background:
    rgba(
        255,
        255,
        255,
        .15
    );
}

.impact-quote{

    max-width:1000px;

    margin:auto;

    text-align:center;

    font-size:
    clamp(
        1.8rem,
        3vw,
        2.8rem
    );

    font-weight:600;

    line-height:1.5;

    opacity:.9;
}

@media(max-width:1200px){

    .journey{

        flex-wrap:wrap;
    }

    .step{

        min-width:280px;
    }

    .line{

        display:none;
    }
}

@media(max-width:700px){

    .research{

        padding:
        6rem
        2rem;
    }

    .journey{

        flex-direction:column;
    }

    .step{

        width:100%;
    }

    .step img{

        height:280px;
    }
}

</style>