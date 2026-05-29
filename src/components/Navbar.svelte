<script>

    import { onMount } from "svelte";

    let mobileMenu = false;
    let aboutOpen = false;

    let scrolled = false;
    let hidden = false;

    let lastScrollY = 0;

    onMount(() => {

        const handleScroll = () => {

            const currentScrollY =
                window.scrollY;

            scrolled = currentScrollY > 30;

            if (
                currentScrollY >
                lastScrollY &&
                currentScrollY > 120
            ) {

                hidden = true;

            } else {

                hidden = false;
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener(
            "scroll",
            handleScroll
        );

        return () => {

            window.removeEventListener(
                "scroll",
                handleScroll
            );

        };

    });

</script>

<nav
    class="navbar"
    class:scrolled
    class:hidden
>

    <a
        href="#/"
        class="logo-link"
    >

        <img
            src="/sserd.png"
            alt="SSERD"
            class="logo"
        />

    </a>

    <div class="desktop-links">

        <div
            class="dropdown"
            on:mouseenter={() => aboutOpen = true}
            on:mouseleave={() => aboutOpen = false}
        >

            <a href="#/about">

                About Us

            </a>

            {#if aboutOpen}

                <div class="dropdown-menu">

                    <a href="/#/about?section=philosophy">
    Philosophy
</a>

                    <a href="/#/about?section=history">
    History
</a>

<a href="/#/about?section=objective">
    Objectives
</a>

<a href="/#/about?section=people">
    Our People
</a>

<a href="/#/about?section=partners">
    Our Partners
</a>

                </div>

            {/if}

        </div>

        <a href="#/programs">

            Programs

        </a>

        <a href="#/impact">

            Impact

        </a>

        <a href="#/partners">

            Partners

        </a>

        <a href="#/contact">

            Contact

        </a>

    </div>

    <button
        class="menu-btn"
        on:click={() => mobileMenu = !mobileMenu}
    >

        ☰

    </button>

</nav>

{#if mobileMenu}

<div class="mobile-menu">

    <a href="#/about">

        About Us

    </a>

    <a href="#/programs">

        Programs

    </a>

    <a href="#/impact">

        Impact

    </a>

    <a href="#/partners">

        Partners

    </a>

    <a href="#/contact">

        Contact

    </a>

</div>

{/if}

<style>

.navbar {

    position: fixed;

    top: 0;
    left: 0;

    width: 100%;

    height: 80px;

    display: flex;

    justify-content: space-between;

    align-items: center;

    padding: 0 5vw;

    z-index: 1000;

    transition:

        transform .45s cubic-bezier(
            .4,
            0,
            .2,
            1
        ),

        background .4s ease,

        backdrop-filter .4s ease,

        border-color .4s ease;
}

.navbar.hidden {

    transform:
    translateY(-100%);
}

.navbar.scrolled {

    background:
    rgba(0,0,0,.45);

    backdrop-filter:
    blur(24px);

    border-bottom:
    1px solid rgba(
        255,
        255,
        255,
        .06
    );
}

.logo-link {

    display: flex;

    align-items: center;
}

.logo {

    height: 52px;

    width: auto;

    transition:
        opacity .3s ease,
        transform .3s ease;
}

.logo:hover {

    opacity: .9;

    transform:
    scale(1.03);
}

.desktop-links {

    display: flex;

    align-items: center;

    gap: 2.5rem;
}

.desktop-links a {

    position: relative;

    color:
    rgba(
        255,
        255,
        255,
        .85
    );

    text-decoration: none;

    font-size: .95rem;

    letter-spacing: .3px;

    transition:
        color .3s ease,
        opacity .3s ease;
}

.desktop-links a:hover {

    color: white;
}

.desktop-links > a::after,
.dropdown > a::after {

    content: "";

    position: absolute;

    left: 0;
    bottom: -8px;

    width: 0%;

    height: 1px;

    background: white;

    transition:
        width .35s cubic-bezier(
            .4,
            0,
            .2,
            1
        );
}

.desktop-links > a:hover::after,
.dropdown:hover > a::after {

    width: 100%;
}

.dropdown {

    position: relative;
}

.dropdown-menu {

    position: absolute;

    top: calc(100% + 14px);

    left: -20px;

    min-width: 240px;

    padding: 1rem 1.5rem;

    border-radius: 12px;

    background:
    rgba(
        10,
        10,
        10,
        .88
    );

    backdrop-filter:
    blur(25px);

    border:
    1px solid rgba(
        255,
        255,
        255,
        .08
    );

    box-shadow:
    0 20px 60px rgba(
        0,
        0,
        0,
        .4
    );

    display: flex;

    flex-direction: column;

    animation:
    dropdownIn .25s ease;
}

.dropdown-menu a {

    color:
    rgba(
        255,
        255,
        255,
        .75
    );

    padding: .8rem 0;

    transition:
        color .25s ease,
        transform .25s ease;
}

.dropdown-menu a:hover {

    color: white;

    transform:
    translateX(5px);
}

.menu-btn {

    display: none;

    background: none;

    border: none;

    color: white;

    font-size: 1.5rem;

    cursor: pointer;
}

.mobile-menu {

    position: fixed;

    top: 80px;
    left: 0;

    width: 100%;

    background:
    rgba(
        0,
        0,
        0,
        .95
    );

    backdrop-filter:
    blur(24px);

    display: flex;

    flex-direction: column;

    padding: 2rem;

    z-index: 999;

    animation:
    dropdownIn .25s ease;
}

.mobile-menu a {

    color: white;

    text-decoration: none;

    padding: 1rem 0;

    border-bottom:
    1px solid rgba(
        255,
        255,
        255,
        .08
    );
}

@keyframes dropdownIn {

    from {

        opacity: 0;

        transform:
        translateY(10px);
    }

    to {

        opacity: 1;

        transform:
        translateY(0);
    }
}

@media(max-width:900px){

    .desktop-links {

        display: none;
    }

    .menu-btn {

        display: block;
    }

    .logo {

        height: 42px;
    }
}

</style>