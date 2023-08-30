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
    camera.position.set(0, 8, 22);
    //materials.Body.color.set("#9BB5CE");

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

  t1.fromTo(camera.position, { y: 2 }, { y: 2 })
        //.to(scene.rotation, { y: 0.8 })
        //.to(scene.rotation, { y: 3 })
        //.to(scene.rotation, { z: 8.58 }, "key1")
        .to(camera.position, { z: 20 }, "key1")
        //.to(scene.rotation, { y: 0, z: 8 }, "key2")
        .to(camera.position, { y: 2 }, { y: 2 }, "key2")
        //.to(scene.rotation, { z: 8, y: 6.3 }, "key3")
        .to(camera.position, { y: 2 }, { y: 2 }, "key3");


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
        <group position={[0.529, 1.887, 0.136]} rotation={[Math.PI / 2, 0, 0]} scale={[0.728, 0.458, 1.855]}>
          <mesh geometry={nodes.Circle_1.geometry} material={materials['Material.001']} />
          <mesh geometry={nodes.Circle_2.geometry} material={materials['Material.006']} />
          <mesh geometry={nodes.Circle_3.geometry} material={materials.Material} />
        </group>
        <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.009']} position={[0.839, 3.435, -0.13]} rotation={[-Math.PI / 2, 0, 0]} scale={0} />
        <mesh geometry={nodes.Cylinder002.geometry} material={materials['Material.009']} position={[0.218, 3.435, -0.13]} rotation={[-Math.PI / 2, -0.641, 0]} scale={0} />
        <mesh geometry={nodes.Cylinder003.geometry} material={materials['Material.009']} position={[0.541, 3.649, -0.13]} rotation={[-Math.PI / 2, 0.751, 0]} scale={0} />
        <mesh geometry={nodes.Cylinder004.geometry} material={materials['Material.009']} position={[1.022, 0.25, -0.13]} rotation={[-Math.PI / 2, 0, 0]} scale={0} />
        <mesh geometry={nodes.Cylinder005.geometry} material={materials['Material.009']} position={[0.085, 0.25, -0.13]} rotation={[-Math.PI / 2, -0.641, 0]} scale={0} />
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.009']} position={[0.541, 0.083, -0.13]} rotation={[-Math.PI / 2, 0.751, 0]} scale={0} />
        <group position={[-0.854, 0.848, 0.007]} scale={[0.232, 0.811, 0.232]}>
          <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Material.001']} />
          <mesh geometry={nodes.Cylinder_2.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.Cylinder_3.geometry} material={materials['Material.003']} />
        </group>
        <mesh geometry={nodes.Curve004.geometry} material={materials['SVGMat.001']} position={[-1.019, 1.668, 0.165]} scale={4.037} />
        <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.001']} position={[-0.713, 7.088, 0.679]} scale={4.037} />
        <mesh geometry={nodes.Curve001.geometry} material={materials['SVGMat.001']} position={[-0.7, 7.647, 0.679]} scale={4.037} />
        <mesh geometry={nodes.Curve002.geometry} material={materials['SVGMat.001']} position={[-0.713, 8.024, 0.679]} scale={4.037} />
        <mesh geometry={nodes.Curve003.geometry} material={materials['SVGMat.001']} position={[-0.704, 7.119, 0.679]} scale={4.037} />
        <mesh geometry={nodes.Curve005.geometry} material={materials['Material.004']} position={[0.016, 1.556, 0.146]} rotation={[Math.PI / 2, 0, 0]} scale={13.031} />
        <mesh geometry={nodes.Curve006.geometry} material={materials['Material.005']} position={[0.523, 2.684, 0.014]} rotation={[-Math.PI / 2, 0, 0]} scale={[-148.262, -21.942, -137.885]} />
      </group>
    )
  }

useGLTF.preload("/Gio.gltf");
