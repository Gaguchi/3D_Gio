/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: DatSketch (https://sketchfab.com/DatSketch)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/apple-iphone-13-pro-max-4328dea00e47497dbeac73c556121bc9
title: Apple iPhone 13 Pro Max
*/

import React, { useRef, useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useThree } from "@react-three/fiber";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Gio.gltf");

  let camera = useThree((state) => state.camera);
  let scene = useThree((state) => state.scene);

  useLayoutEffect(() => {
    camera.position.set(0, 8, 144);
    materials.Body.color.set("#000000");

    let fov = camera.fov;

    fov = (1400 * 18)/ window.innerWidth;
    camera.fov = fov;
    camera.updateProjectionMatrix();




    let mm = gsap.matchMedia();
  
mm.add({

  // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
  isDesktop: `(min-width: 48em)`,
  isMobile: `(max-width:48em`,
  

}, (context) => {

  // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
  let { isDesktop, isMobile } = context.conditions;

  let t1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#phone-model",
      start: "top+=200 top",
      endTrigger: "#battery",
      end: "top top",
      scrub: 1,
      // markers: true,
    },
  });

  t1.fromTo(camera.position, { y: -30 }, { y: 7 })
        .to(camera.position,  { z: 85 })
        .to(scene.rotation, { y: 1.5 })
        .to(scene.rotation, { x: 0.5 })
        .to(scene.rotation, { y: 3.3 }, "key1")
        .to(scene.rotation, { x: 0.35 }, "key1")
        .to(camera.position,  { y: 7 }, "key1")
        //.to(scene.position, { y: 10, z: 30, x:4 }, "key2")
        //.to(camera.position, { y: 4 }, { y: 2 }, "key2")
        //.to(scene.rotation, { z: 8, y: 6.3 }, "key3")
        //.to(camera.position, { y: 2 }, { y: 2 }, "key3");


        if(isMobile){
          camera.fov = 20;
    camera.updateProjectionMatrix();
        }

  return () => { 
    if(t1) t1.kill();
  }
}); 

      
        
  }, []);
  return (
    <group {...props} dispose={null}>
      <group position={[1.067, 6.6, 0.596]} rotation={[Math.PI / 2, 0, 0]} scale={56.128}>
        <mesh geometry={nodes.Curve001.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Curve001_1.geometry} material={materials.Body} />
        <mesh geometry={nodes.Curve001_2.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Curve001_3.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Curve001_4.geometry} material={materials['SVGMat.001']} />
        <mesh geometry={nodes.Curve001_5.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Curve001_6.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Curve001_7.geometry} material={materials.Body} />
        <mesh geometry={nodes.Curve001_8.geometry} material={materials.nail} />
      </group>
    </group>
  )
  }

useGLTF.preload("/Gio.gltf");
