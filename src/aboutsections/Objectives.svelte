<script>

</script>

<section
    id="objective"
    class="objectives"
>

    <div class="section-header">

        <div class="eyebrow">

            OUR OBJECTIVES

        </div>

        <h2>

            Building The Next
            Generation Of
            Space Explorers

        </h2>

        <p>

            Four strategic pillars that will guide
            SSERD through the next decade of
            growth, innovation and impact.

        </p>

    </div>

    <!-- Objective 01 -->

    <div class="objective-block">

        <div class="objective-image">

            <img
                src="/images/objective1.jpg"
                alt=""
            />

        </div>

        <div class="objective-content">

            <div class="objective-number">

                01

            </div>

            <h3>

                Hands-on Space Education

            </h3>

            <p>

                SSERD brought space science out of
                textbooks and into students' hands.

            </p>

            <p>

                Through interactive models,
                live experiments, immersive workshops,
                and real-world problem-solving experiences,
                learning is not theoretical —
                it is experiential.

            </p>

            <p>

                In the coming decade, this commitment
                will expand further, especially for
                underprivileged and underserved students,
                ensuring that access to space education
                is not a privilege, but a right.

            </p>

        </div>

    </div>

    <!-- Objective 02 -->

    <div class="objective-block reverse">

        <div class="objective-image">

            <img
                src="/images/objective2.jpg"
                alt=""
            />

        </div>

        <div class="objective-content">

            <div class="objective-number">

                02

            </div>

            <h3>

                Research At An Early Stage

            </h3>

            <p>

                Innovation begins early.

            </p>

            <p>

                SSERD encourages students to begin
                exploratory research during school
                and undergraduate education.

            </p>

            <p>

                Over the next decade, structured
                research programs, industry-linked
                challenges and mentorship networks
                will strengthen this culture of innovation.

            </p>

        </div>

    </div>

    <!-- Objective 03 -->

    <div class="objective-block">

        <div class="objective-image">

            <img
                src="/images/objective3.jpg"
                alt=""
            />

        </div>

        <div class="objective-content">

            <div class="objective-number">

                03

            </div>

            <h3>

                Empowering Girls In Space

            </h3>

            <p>

                Through the Girls in Space initiative,
                SSERD created mentorship pathways
                and opportunities that help young girls
                see themselves as future space leaders.

            </p>

            <p>

                The next decade will amplify this movement
                through leadership programs,
                global exposure and research opportunities.

            </p>

            <p>

                Because representation shapes ambition.

            </p>

        </div>

    </div>

    <!-- Objective 04 -->

    <div class="objective-block reverse">

        <div class="objective-image">

            <img
                src="/images/objective4.jpg"
                alt=""
            />

        </div>

        <div class="objective-content">

            <div class="objective-number">

                04

            </div>

            <h3>

                International Space
                Experience Center

            </h3>

            <p>

                The vision for the next decade includes
                establishing an International Space
                Experience Center.

            </p>

            <p>

                An interactive hub where students
                explore astronomy, rocketry and
                space technology through immersive,
                hands-on learning experiences. It will evolve into:

            </p>

            <div class="center-features">

                <div>

                    Student-Led
                    Research Incubator

                </div>

                <div>

                    Industry &
                    Talent Bridge

                </div>

                <div>

                    Global Collaboration
                    Platform

                </div>

                <div>

                    International
                    Innovation Ecosystem

                </div>

            </div>

            <p>

                Positioned as an international hub
                for future-ready space exploration,
                the Space Experience Center will
                embody SSERD's belief that curiosity
                must be experienced, researched
                and empowered.

            </p>

        </div>

    </div>

</section>

<style>

.objectives{

    padding:
    3rem
    8vw
    3rem;
}

.section-header{

    max-width:1000px;

    margin:0 auto 2rem;

    text-align:center;
}

.eyebrow{

    letter-spacing:6px;

    opacity:.65;

    margin-bottom:1rem;

    font-size:.85rem;
}

.section-header h2{

    font-size:
    clamp(
        3rem,
        6vw,
        6rem
    );

    line-height:1.05;
}

.section-header p{

    max-width:700px;

    margin:
    2rem auto 0;

    line-height:1.9;

    opacity:.85;
}

.objective-block{

    display:grid;

    grid-template-columns:
    500px 1fr;

    gap:5rem;

    align-items:center;

    margin-bottom:5rem;
}

.reverse{

    direction:rtl;
}

.reverse .objective-content{

    direction:ltr;
}

.reverse .objective-image{

    direction:ltr;
}

.objective-image{

    height:600px;

    overflow:hidden;

    border-radius:36px;
}

.objective-image img{

    width:100%;

    height:100%;

    object-fit:cover;

    transition:.6s;
}

.objective-block:hover
.objective-image img{

    transform:scale(1.05);
}

.objective-number{

    font-size:5rem;

    font-weight:800;

    line-height:1;

    margin-bottom:1rem;
}

.objective-content h3{

    font-size:
    clamp(
        2rem,
        4vw,
        3.5rem
    );

    line-height:1.1;

    margin-bottom:2rem;
}

.objective-content p{

    line-height:1.9;

    opacity:.85;

    margin-bottom:1.2rem;

    font-size:1.05rem;
}

.center-features{

    display:grid;

    grid-template-columns:
    repeat(2,1fr);

    gap:1rem;

    margin:
    2rem 0;
}

.center-features div{

    padding:1.25rem;

    border-radius:20px;

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

    line-height:1.6;
}

@media(max-width:1100px){

    .objective-block{

        grid-template-columns:1fr;

        gap:3rem;

        margin-bottom:6rem;
    }

    .reverse{

        direction:ltr;
    }

    .objective-image{

        height:450px;
    }
}

@media(max-width:768px){

    .objectives{

        padding:
        6rem
        2rem;
    }

    .center-features{

        grid-template-columns:1fr;
    }

    .objective-image{

        height:350px;
    }
}

</style>