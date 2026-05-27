<script>
    import Navbar from "./components/Navbar.svelte";
    import BackgroundManager from "./components/BackgroundManager.svelte";
    import Home from "./pages/Home.svelte";
     import Router from "svelte-spa-router";
import { location } from "svelte-spa-router";
    import routes from "./routes";


    import "./global.css";
</script>
{#if $location === "/"}

    <BackgroundManager />

{/if}
<Navbar />


<Router {routes} />
