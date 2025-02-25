"use client";
import React from 'react'
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';


export default function MainBanner() {
    const textRef = useRef(null);
    const btnRef = useRef(null);  

    

    useGSAP(() => {
        const tl = gsap.timeline(); // Create a GSAP timeline
    
        tl.from(textRef.current?.querySelectorAll("h1"), {
          y: 100,
          duration: 0.5,
          opacity: 0,
          stagger: 0.4,
          ease: "power3.out",
         
        } )
        .from(btnRef.current, {
          y: 100,
          duration: 1,
          opacity: 0,
          ease: "power3.out",
         
        }, "-=0.3"); // "-=0.3" means start button animation slightly before text ends
    
      }, []);

  return (
    <section  className="w-full h-screen flex items-end justify-center bg-fixed    bg-[url('/img/frame.png')] bg-cover">
    <div className="w-full md:flex  items-end  justify-between px-6 md:px-16 pb-8">
      <div className="textR-wrap"  ref={textRef}>
      <span className='textR'>
        <h1 className="text-white text-[45px] md:text-[4.271vw] font-[600] uppercase line  leading-[55px] md:leading-[3.49vw]">
            Creative
        </h1>
        </span>
        <span className='textR'>
        <h1 className="text-white text-[45px] md:text-[4.271vw] font-[600] uppercase line  leading-[55px] md:leading-[3.49vw]">
         
         <span className="flex items-end gap-6">
            <span className="w-[110px] md:w-[6.771vw]   bg-[#b3ff0000] flex items-center gap-3 ">
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
        <h1 className="text-white text-[45px] md:text-[4.271vw] font-[600] uppercase line  leading-[55px] md:leading-[3.49vw]">
        Design studio<span className='text-[#B1FF00]'>.</span>
        </h1>
        </span>
      </div>
      <div className='btn-ani hidden md:block' ref={btnRef}>
        <button className="btn-a uppercase">
          <span>
            <svg
             className='w-[1.667vw] '
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
