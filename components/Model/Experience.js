import React, { useRef, useState, useEffect } from "react";
import {
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import OurModel from "./OurModel";

export default function Experience() {
  const [cameraPosition, setCameraPosition] = useState(
    new THREE.Vector3(0, -0.011, 0.8)
  );

  const cameraRef = useRef();
  const modelPositionRef = useRef();

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.position.lerp(cameraPosition, 0.05);
      cameraRef.current.lookAt(0, 0, 0);
    }
  });

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  // === CAMERA ZOOM LOGIC ===
  const sec2Cam = { x: 0, y: -0.011, z: 0.8 };
  const sec3Cam = { x: 0, y: 0, z: 2.5 };

  // === SECTION 2: Camera + Rotation ===
  gsap.to(sec2Cam, {
    x: 0,
    y: 0,
    z: 2.5,
    scrollTrigger: {
      trigger: ".sec-two",
      start: "top center",
      end: "bottom center",
      scrub: true,
      markers: false,
      onUpdate: () => {
        setCameraPosition(new THREE.Vector3(sec2Cam.x, sec2Cam.y, sec2Cam.z));
      },
    },
  });

  gsap.to(modelPositionRef.current.position, {
    x: 0,
    y: -3,
    z: 0,
    scrollTrigger: {
      trigger: ".sec-two",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  });

  gsap.to(modelPositionRef.current.rotation, {
    x: 0,
    y: 0.3, // only Y-axis rotation in sec-two
    z: 0,
    scrollTrigger: {
      trigger: ".sec-two",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  });

  // === SECTION 3: Camera + New Rotation + Movement ===
  gsap.to(sec3Cam, {
    x: 0,
    y: 0,
    z: 2.5,
    scrollTrigger: {
      trigger: ".sec-three",
      start: "top center",
      end: "bottom center",
      scrub: true,
      markers: false,
      onUpdate: () => {
        setCameraPosition(new THREE.Vector3(sec3Cam.x, sec3Cam.y, sec3Cam.z));
      },
    },
  });

  gsap.to(modelPositionRef.current.position, {
    x: -2.5,
    y: -2,
    z: -2,
    scrollTrigger: {
      trigger: ".sec-three",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  });

  gsap.to(modelPositionRef.current.rotation, {
    x: 0.02,
    y: 0.9,
    z: 0,
    scrollTrigger: {
      trigger: ".sec-three",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  });

  return () => {
    ScrollTrigger.getAll().forEach((st) => st.kill());
  };
}, []);


  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        fov={75}
        near={0.1}
        far={1000}
        position={[0, -0.011, 0.8]}
      />
      <Environment preset="city" />
      <OurModel scale={2.5} ref={modelPositionRef} position={[0, -3, 0]} />
    </>
  );
}
