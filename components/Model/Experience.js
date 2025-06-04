import React, { useRef, useState, useEffect } from "react";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { useControls } from "leva";
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
  const [rotateModel, setRotateModel] = useState(false); // 👈 control rotation flag

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.position.lerpVectors(
        cameraRef.current.position,
        cameraPosition,
        0.05
      );
      cameraRef.current.lookAt(0, 0, 0);
    }
     if (rotateModel && modelPositionRef.current) {
      modelPositionRef.current.rotation.y += 0.01;
    }
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // === CAMERA ZOOM LOGIC ===
    const tempVector = new THREE.Vector3();
    const sec2Cam = { x: 0, y: -0.011, z: 0.8 };
    const sec3Cam = { x: 0, y: 0, z: 2.5 };
    const sec4Cam = { x: 0, y: 0, z: 2.5 };
    const sec5Cam = { x: -3.9, y: 1.5, z: 6.2 };

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
          tempVector.set(sec2Cam.x, sec2Cam.y, sec2Cam.z);
          setCameraPosition(tempVector.clone());
        },
      },
    });

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

    gsap.to(sec4Cam, {
      scrollTrigger: {
        trigger: ".about-sec",
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: false,
        onUpdate: () => {
          tempVector.set(sec4Cam.x, sec4Cam.y, sec4Cam.z);
          setCameraPosition(tempVector.clone());
        },
      },
    });

    gsap.to(sec5Cam, {
      scrollTrigger: {
        trigger: ".ourblog-sec",
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: false,
        onUpdate: () => {
          setCameraPosition(new THREE.Vector3(sec5Cam.x, sec5Cam.y, sec5Cam.z));
        },
      },
    });

    if (modelPositionRef.current) {
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
        y: 0.3,
        z: 0,
        scrollTrigger: {
          trigger: ".sec-two",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      // === SECTION 3 ===
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

      // === SECTION 4 ===
      gsap.to(modelPositionRef.current.position, {
        x: 4,
        y: -3,
        z: -2,
        scrollTrigger: {
          trigger: ".about-sec",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      gsap.to(modelPositionRef.current.rotation, {
        x: 0,
        y: -1.4,
        z: 0,
        scrollTrigger: {
          trigger: ".about-sec",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      // ===SEC5 ====
      gsap.to(modelPositionRef.current.position, {
        x: -3.2,
        y: -2.0,
        z: 0,
        scrollTrigger: {
          trigger: ".ourblog-sec",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      gsap.to(modelPositionRef.current.rotation, {
        x: 0,
        y: 0,
        z: 0,
        scrollTrigger: {
          trigger: ".ourblog-sec",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });
    }

      ScrollTrigger.create({
      trigger: ".ourblog-sec",
      start: "top center",
      end: "bottom center",
      onEnter: () => setRotateModel(true),
      onLeave: () => setRotateModel(false),
      onEnterBack: () => setRotateModel(true),
      onLeaveBack: () => setRotateModel(false),
    });

    

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      ScrollTrigger.refresh();
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
