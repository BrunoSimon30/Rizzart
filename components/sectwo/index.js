import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// ScrollTrigger ko register karein
gsap.registerPlugin(ScrollTrigger);

export default function Sectwo() {
  const SecWrap = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: SecWrap.current,
        start: "top", // Jab section viewport ke 80% pe aaye
        end: "bottom",
        // markers:true,
        pin: true,
        // scrub: 4,
        // toggleActions: "play pause resume reset",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(
      SecWrap.current?.querySelectorAll(".gl"),
      {
        x: 100,
        duration: 1,
        opacity: 0,
        stagger: 0.4,
        ease: "power3.out",
      },
      "run"
    )
      .from(
        SecWrap.current?.querySelectorAll(".lcurr"),
        {
          scale:0,
          opacity:0,
          rotation: 90,
          duration: 2,
          stagger: 0.4,
          ease: "none",
          scrollTrigger: {
            trigger: SecWrap.current, // Yeh pura section target karega
            start: "top", // Jab section viewport ke 80% pe aaye
            end: "bottom",
            scrub:1, // Smooth effect scroll ke saath
            // markers: true, // Debug markers (Baad mein hata sakte ho)
          },
        },
        "run"
      )
      // .from(
      //   SecWrap.current?.querySelectorAll(".lcurr"),
      //   {
      //     scale: 0,
      //     duration: 2,
      //     stagger: 0.4,
      //     ease: "bounce.out",
      //   },
      //   "run"
      // )
      .from(
        SecWrap.current?.querySelectorAll(".gr"),
        {
          x: -100,
          duration: 1,
          opacity: 0,
          stagger: 0.4,
          ease: "power3.out",
        },
        "run"
      );
  }, []);

  return (
    <section
      ref={SecWrap}
      className="sec-two h-screen bg-[url('/img/secbg1.jpg')] py-12 flex items-center justify-center bg-fixed bg-center relative"
    >
      <div className="sub">
        <div className="lcurr w-1/2  m-auto  lg:w-fit  py-24">
          <Image
            src="/img/sub.png"
            width={503}
            height={723}
            layout="responsive"
            alt="arrow"
          />
        </div>
      </div>
      <div className="container mx-auto max-w-screen-xl ">
        <div className="space-y-6 px-4 md:px-14 2xl:px-0">
          <div className=" w-full py-2">
            <h2 className="gl text-white text-[45px] md:text-[4.271vw] font-[600] uppercase line leading-[55px] md:leading-[3.49vw]">
            Flip The<br/>Switch go
            </h2>
          </div>
          <div className="gr  w-full py-2">
            <h2 className="text-white text-[45px] md:text-[4.271vw] font-[600] uppercase line leading-[55px] md:leading-[3.49vw] text-right">
            Full Mad<br/>Scientist<br/> Mode

            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
