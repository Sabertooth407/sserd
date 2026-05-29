import { writable } from "svelte/store";

export const currentScene = writable("hero");

export const scenes = {

    hero: {

        type: "image",

        src: "/images/hero.png"

    },

    philosophy: {

        type: "image",

        src: "/images/philosophy.jpg"

    },

    framework: {

        type: "image",

        src: "/images/framework.jpg"

    },

    impact: {

        type: "image",

        src: "/images/impact.jpg"

    },

    programs: {

        type: "image",

        src: "/images/programs.jpg"

    },

    international: {

        type: "image",

        src: "/images/international.jpg"

    },

    vision: {

        type: "image",

        src: "/images/vision.png"

    },

    cta: {

        type: "image",

        src: "/images/cta.jpg"

    }

};