import React, { useRef, useState, useEffect } from "react";
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useControls } from "leva";
import * as THREE from "three";
import OurModel from "./OurModel";
 

export default function Experience() {
   const cameraRef = useRef(); // ✅ Camera Reference
  const prevCameraPosition = useRef(new THREE.Vector3());

  // ✅ Default Camera Position
  const [cameraPosition, setCameraPosition] = useState(new THREE.Vector3(0, -0.011, 0.8));

  // ✅ Leva Controls for Section-Two Camera Position
  const { x, y, z } = useControls("Camera Position (Sec-Two)", {
    x: { value: 0.0072, min: -5, max: 5, step: 0.01 },
    y: { value: 0.4715, min: -5, max: 5, step: 0.01 },
    z: { value: 0.3526, min: -5, max: 5, step: 0.01 },
  });

  // ✅ Smooth Camera Animation using useFrame
  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.position.lerp(cameraPosition, 0.05); // Smooth transition
      cameraRef.current.lookAt(0, 0, 0); // Keep focus on center
    }
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(cameraPosition, {
      x: -1.02,
      y: 0.66,
      z: 2.50,
      scrollTrigger: {
        trigger: ".sec-two",
        start: "top 80%",
        end: "top 50%",
        scrub: true,
      },
      onUpdate: () => setCameraPosition({ ...cameraPosition }), // Update state on scroll
    });
  }, [x, y, z]); // React when Leva values change

  return (
    <>
      {/* ✅ Custom Perspective Camera */}
      <PerspectiveCamera ref={cameraRef} makeDefault fov={75} near={0.1} far={1000} position={[0, -0.011, 0.8]} />
 
      {/* ✅ Scene Environment */}
      <Environment preset="city" />

      {/* ✅ 3D Model */}
      <OurModel scale={2.5} position={[0, -3, 0]} />
    </>
  );
}
