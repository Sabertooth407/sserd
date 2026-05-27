// src/routes.js

import Home from "./pages/Home.svelte";
import About from "./pages/About.svelte";
import Programs from "./pages/Programs.svelte";
import Impact from "./pages/Impact.svelte";
import Partners from "./pages/Partners.svelte";
import Contact from "./pages/Contact.svelte";

const routes = {

    "/": Home,

    "/about": About,

    "/programs": Programs,

    "/impact": Impact,

    "/partners": Partners,

    "/contact": Contact

};

export default routes;