"use client";
import React from 'react'
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';


export default function MainBanner() {
    const textRef = useRef(null);
    const btnRef = useRef(null);  

    // useGSAP(() => {
    //     gsap.from(textRef.current?.querySelectorAll("h1"), { // Directly select h1
    //       y: 100,
    //       duration: 0.5,
    //       opacity: 0,
    //       stagger: 0.4,
    //       ease: "power3.out",
    //     //   repeat: -1,
    //     //   repeatDelay: 1,
          
    //     });
    //     gsap.from(btnRef.current?.querySelector("button"), { // Select button inside ref
    //         y: 100,
    //         duration: 1,
    //         opacity: 0,
    //         ease: "power3.out",
    //       });
    //   }, []);

    useGSAP(() => {
        const tl = gsap.timeline(); // Create a GSAP timeline
    
        tl.from(textRef.current?.querySelectorAll("h1"), {
          y: 100,
          duration: 0.5,
          opacity: 0,
          stagger: 0.4,
          ease: "power3.out",
         
        } )
        .from(btnRef.current?.querySelector("button"), {
          y: 100,
          duration: 1,
          opacity: 0,
          ease: "power3.out",
         
        }, "-=0.3"); // "-=0.3" means start button animation slightly before text ends
    
      }, []);

  return (
    <section className="w-full h-screen flex items-end justify-center bg-fixed    bg-[url('/img/frame.png')] bg-cover">
    <div className="w-full flex  items-end  justify-between px-16 pb-16">
      <div className="textR-wrap"  ref={textRef}>
      <span className='textR'>
        <h1 className="text-white text-[82px] font-[600] uppercase line leading-[67px]">
            Creative
        </h1>
        </span>
        <span className='textR'>
        <h1 className="text-white text-[82px] font-[600] uppercase line leading-[67px]">
         
         <span className="flex items-end gap-6">
            <span className="w-[130px]   bg-[#b3ff0000] flex items-center gap-3 ">
              {[...Array(3)].map((_, i) => (
                <svg
                key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 73"
                  fill="none"
                >
                  <path
                    d="M26.9707 0.594299L26.9707 25.7614H49.8377L25.2021 72.1569L25.2021 51.9631H0.0493164L26.9707 0.594299Z"
                    fill="#B1FF00"
                  />
                </svg>
              ))}
            </span>
            <span>UI/UX</span>
          </span>
        
        </h1>
        </span>
        <span className='textR'>
        <h1 className="text-white text-[82px] font-[600] uppercase line leading-[67px]">
        Design studio.
        </h1>
        </span>
      </div>
      <div className='btn-ani' ref={btnRef}>
        <button className="btn-a uppercase">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 73"
              fill="none"
            >
              <path
                d="M26.9707 0.594299L26.9707 25.7614H49.8377L25.2021 72.1569L25.2021 51.9631H0.0493164L26.9707 0.594299Z"
                fill="#B1FF00"
              />
            </svg>
          </span>{" "}
          contact
        </button>
      </div>
    </div>
  </section>
  )
}
