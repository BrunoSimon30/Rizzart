"use client";
import Image from "next/image";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Marquee() {
    const marqueeRef = useRef(null);
    const [direction, setDirection] = useState(-1); // Default: Left (-1)

    useEffect(() => {
        const marqueeInner = marqueeRef.current;
        if (!marqueeInner) return;

        // Get total width after duplication
        let totalWidth = marqueeInner.scrollWidth / 2; // 🔥 FIX: Use scrollWidth instead of offsetWidth

        // GSAP Timeline (Smooth)
        let tl = gsap.timeline({
            repeat: -1,
            defaults: { ease: "none" }
        });

        tl.to(marqueeInner, {
            x: `-${totalWidth}px`,
            duration: 20
        });

        // Scroll event listener
        const handleScroll = (e) => {
            if (e.deltaY > 0) {
                setDirection(-1); // Move Left
                gsap.to(tl, { timeScale: 1 });
                gsap.to(".arrow", { rotation: 180, duration: 0.5 });
            } else {
                setDirection(1); // Move Right
                gsap.to(tl, { timeScale: -1 });
                gsap.to(".arrow", { rotation: 0, duration: 0.5 });
            }
        };

        window.addEventListener("wheel", handleScroll);

        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, []);


  return (
    <section className="m-sec pt-4 md:pt-2 pb-5 bg-[#B1FF00]">
        <div className="maquee-wrap overflow-hidden flex">
      <div className="marquee-inner flex" ref={marqueeRef}>
        {[...Array(10)].map((_, i) => (
            <div key={i} className="mrq">
            <h1>Meet Team</h1>{" "}
            <Image
              src={"/img/arrow-br.svg"}
              className="arrow"
              width={80}
              height={20}
              alt="arrow"
            />
          </div>
        ))}
      </div>
    </div>
       
      
    </section>
  );
}
