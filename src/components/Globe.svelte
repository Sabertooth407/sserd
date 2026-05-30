<script>

import { onMount } from "svelte";
import * as THREE from "three";

export let onCountryHover;

let container;

const countries = [

    {
        name:"Mauritius",
        lat:-20.3,
        lon:57.5,
        image:"/images/international/mauritius.jpg",
        text:"Conducted space education programs in Mauritius."
    },

    {
        name:"Sri Lanka",
        lat:7.8,
        lon:80.7,
        image:"/images/international/srilanka.jpg",
        text:"Teaching and mentoring students in Sri Lanka."
    },

    {
        name:"Philippines",
        lat:12.8,
        lon:121.8,
        image:"/images/international/philippines.jpg",
        text:"Conducting camps and building a team presence in the Philippines."
    },

    {
        name:"Ghana",
        lat:7.9,
        lon:-1.0,
        image:"/images/international/ghana.jpg",
        text:"Interacting with students and educators in Ghana."
    },

    {
        name:"Australia",
        lat:-25.0,
        lon:133.0,
        image:"/images/international/australia.jpg",
        text:"Educational outreach and student engagement in Australia."
    }

];

function latLonToVector3(lat, lon, radius){

    const phi =
        (90 - lat) *
        (Math.PI / 180);

    const theta =
        (lon + 180) *
        (Math.PI / 180);

    return new THREE.Vector3(

        -radius *
        Math.sin(phi) *
        Math.cos(theta),

        radius *
        Math.cos(phi),

        radius *
        Math.sin(phi) *
        Math.sin(theta)

    );

}

onMount(() => {

    const scene =
        new THREE.Scene();

    const camera =
        new THREE.PerspectiveCamera(
            45,
            container.clientWidth /
            container.clientHeight,
            0.1,
            1000
        );

    camera.position.z = 5;

    const renderer =
        new THREE.WebGLRenderer({

            antialias:true,
            alpha:true

        });

    renderer.setSize(

        container.clientWidth,
        container.clientHeight

    );

    container.appendChild(
        renderer.domElement
    );

    const globe =
        new THREE.Mesh(

            new THREE.SphereGeometry(
                1.5,
                64,
                64
            ),

            new THREE.MeshStandardMaterial({

                color:0x1a1a1a,

                metalness:0.3,

                roughness:0.7

            })

        );

    scene.add(globe);

    const glow =
        new THREE.Mesh(

            new THREE.SphereGeometry(
                1.58,
                64,
                64
            ),

            new THREE.MeshBasicMaterial({

                color:0x5fa8ff,

                transparent:true,

                opacity:0.12

            })

        );

    scene.add(glow);

    const light =
        new THREE.PointLight(
            0xffffff,
            2
        );

    light.position.set(
        5,
        3,
        5
    );

    scene.add(light);

    scene.add(
        new THREE.AmbientLight(
            0xffffff,
            .7
        )
    );

    const raycaster =
        new THREE.Raycaster();

    const mouse =
        new THREE.Vector2();

    const markers = [];

    countries.forEach(country => {

        const marker =
            new THREE.Mesh(

                new THREE.SphereGeometry(
                    0.03,
                    16,
                    16
                ),

                new THREE.MeshBasicMaterial({

                    color:0xffffff

                })

            );

        marker.position.copy(

            latLonToVector3(
                country.lat,
                country.lon,
                1.55
            )

        );

        marker.userData =
            country;

        markers.push(marker);

        scene.add(marker);

    });

    let autoRotate = true;

    function onMove(e){

        const rect =
            renderer.domElement
                .getBoundingClientRect();

        mouse.x =
            ((e.clientX - rect.left)
            / rect.width) * 2 - 1;

        mouse.y =
            -((e.clientY - rect.top)
            / rect.height) * 2 + 1;

        raycaster.setFromCamera(
            mouse,
            camera
        );

        const hit =
            raycaster.intersectObjects(
                markers
            );

        if(hit.length){

            autoRotate = false;

            onCountryHover?.(
                hit[0].object.userData
            );

        } else {

            autoRotate = true;

        }

    }

    renderer.domElement
        .addEventListener(
            "mousemove",
            onMove
        );

    function animate(){

        requestAnimationFrame(
            animate
        );

        if(autoRotate){

            globe.rotation.y += .0025;

            glow.rotation.y += .0025;

            markers.forEach(m => {

                m.position.applyAxisAngle(

                    new THREE.Vector3(
                        0,
                        1,
                        0
                    ),

                    .0025

                );

            });

        }

        renderer.render(
            scene,
            camera
        );

    }

    animate();

    window.addEventListener(
        "resize",
        () => {

            camera.aspect =
                container.clientWidth /
                container.clientHeight;

            camera.updateProjectionMatrix();

            renderer.setSize(

                container.clientWidth,
                container.clientHeight

            );

        }
    );

});
</script>

<div
    bind:this={container}
    class="globe"
></div>

<style>

.globe{

    width:100%;

    height:750px;
}

</style>