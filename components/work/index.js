"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function OurWork() {
     
    const marqueeRef = useRef(null);
    const [direction, setDirection] = useState(-1); // Default: Left (-1)
  
    useEffect(() => {
      const marqueeInner = marqueeRef.current;
      const images = marqueeInner.children;
      
      // Ensure proper duplication for seamless effect
      const duplicateContent = () => {
        while (marqueeInner.scrollWidth < window.innerWidth * 2) {
          Array.from(images).forEach((img) => {
            const clone = img.cloneNode(true);
            marqueeInner.appendChild(clone);
          });
        }
      };
      
      duplicateContent(); // Ensure enough content
  
      // Get correct total width
      let totalWidth = marqueeInner.scrollWidth / 2;
  
      // GSAP Infinite Scrolling Animation
      let tween = gsap.to(marqueeInner, {
        x: `-${totalWidth}px`,
        duration: 20,
        repeat: -1,
        ease: "none"
      });
  
      // Scroll Event for Direction Change
      const handleScroll = (e) => {
        if (e.deltaY > 0) {
          setDirection(-1); // Move Left
          gsap.to(tween, { timeScale: 1 });
          gsap.to(".mimg", { rotation: 4, duration: 0.5 });
        } else {
          setDirection(1); // Move Right
          gsap.to(tween, { timeScale: -1 });
          gsap.to(".mimg", { rotation: -4, duration: 0.5 });
        }
      };
  
      window.addEventListener("wheel", handleScroll);
  
      return () => {
        window.removeEventListener("wheel", handleScroll);
      };
    }, []);


  return (
    <section className="work-sec py-32">
      <div className="space-y-24">
        <div className="flex justify-between px-16">
          <div className="b-h flex items-center gap-4">
            <h2 className="text-[#B1FF01] text-[82px] font-[600] uppercase  tall">
              Our Work
            </h2>
            <div className="gap-4 flex pb-5">
              <span className="inline-block w-[60px] bg-[#B1FF01] h-[100px]"></span>
              <span className="inline-block w-[60px] bg-[#B1FF01] h-[100px]"></span>
              <span className="inline-block w-[60px] bg-[#B1FF01] h-[100px]"></span>
            </div>
          </div>
          <div>
            <button className="btn-a uppercase">
              <span>
                <Image
                  src="/img/csvg.svg"
                  width={100}
                  height={20}
                  alt="arrow"
                />
              </span>{" "}
              view all
            </button>
          </div>
        </div>
        <div className="mwarp overflow-hidden flex">
          <div className="mimg-container flex gap-4" ref={marqueeRef}>
            {[...Array(7)].map((_, i) => (
              <div key={i} className="mimg">
                <Image
                  src={`/img/m${i + 1}.jpg`}
                  width={420}
                  height={420}
                  alt={`Image ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
