
<section class="access">

    <div class="access-gallery">

        <img src="/images/access1.jpg" alt="">
        <img src="/images/access2.jpg" alt="">
        <img src="/images/access3.jpg" alt="">
        <img src="/images/access4.jpg" alt="">
        <img src="/images/access5.jpg" alt="">
        <img src="/images/access6.jpg" alt="">

    </div>

    <div class="access-content">

        <div class="eyebrow">

            ACCESS & INCLUSION

        </div>

        <h2>

            Space Education
            Should Not Be Limited.

        </h2>

        <p>

            Through CSR partnerships and outreach
            initiatives, SSERD has worked to ensure
            that access to space education extends
            beyond traditional classrooms and urban
            centers.

        </p>

        <div class="points">

            <div class="point">
                <span>01</span>
                Conducted programs in government schools
            </div>

            <div class="point">
                <span>02</span>
                Engaged underprivileged and underserved communities
            </div>

            <div class="point">
                <span>03</span>
                Delivered hands-on STEM learning to first-generation learners
            </div>

            <div class="point">
                <span>04</span>
                Enabled access to space science in rural and semi-urban regions
            </div>

        </div>

        <div class="quote">

            “We believe equity in education
            fuels innovation in the nation.”

        </div>

    </div>

</section>

<style>

.access{

    padding:
    1rem
    8vw;

    display:grid;

    grid-template-columns:
    .95fr
    1.05fr;

    gap:5rem;

    align-items:start;
}

.access-gallery{

    display:grid;

    grid-template-columns:
    repeat(2,1fr);

    gap:1rem;

    position:sticky;

    top:120px;
}

.access-gallery img{

    width:100%;

    object-fit:cover;

    border-radius:24px;

    transition:.4s ease;
}

/* Large hero images */

.access-gallery img:nth-child(1){

    grid-column:span 2;

    height:320px;
}

.access-gallery img:nth-child(4){

    grid-column:span 2;

    height:300px;
}

.access-gallery img:nth-child(7){

    grid-column:span 2;

    height:320px;
}

/* Normal images */

.access-gallery img:not(:nth-child(1))
:not(:nth-child(4))
:not(:nth-child(7)){

    height:180px;
}

.access-gallery img:hover{

    transform:
    translateY(-4px)
    scale(1.03);
}

.eyebrow{

    letter-spacing:8px;

    opacity:.65;

    margin-bottom:1rem;
}

.access-content h2{

    font-size:
    clamp(3rem,6vw,5rem);

    line-height:1.05;

    margin-bottom:2rem;
}

.access-content p{

    font-size:1.1rem;

    line-height:2;

    opacity:.85;

    margin-bottom:3rem;

    max-width:700px;
}

.points{

    display:grid;

    grid-template-columns:
    repeat(2,1fr);

    gap:1.5rem;
}

.point{

    padding:1.5rem;

    border:
    1px solid rgba(
        255,
        255,
        255,
        .08
    );

    background:
    rgba(
        255,
        255,
        255,
        .03
    );

    border-radius:20px;

    line-height:1.7;
}

.point span{

    display:block;

    font-size:2rem;

    font-weight:700;

    margin-bottom:.75rem;

    opacity:.4;
}

.quote{

    margin-top:3rem;

    font-size:1.5rem;

    font-weight:600;

    line-height:1.6;

    border-left:
    3px solid rgba(
        255,
        255,
        255,
        .4
    );

    padding-left:1.5rem;
}

@media(max-width:1100px){

    .access{

        grid-template-columns:1fr;

        gap:3rem;
    }

    .access-gallery{

        position:static;
    }
}

@media(max-width:700px){

    .access{

        padding:
        5rem
        2rem;
    }

    .access-gallery{

        grid-template-columns:1fr;
    }

    .access-gallery img{

        height:240px !important;
    }

    .points{

        grid-template-columns:1fr;
    }
}

</style>