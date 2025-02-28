import Image from 'next/image'
import {React,useRef} from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


export default function Secthree() {

  const SecWrap = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: SecWrap.current,
        start: "top 10%", // Jab section viewport ke 80% pe aaye
        end: "bottom 50%",
        // markers:true,
        // pin: true,
        // scrub: 4,
        // toggleActions: "play pause resume reset",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(
      SecWrap.current?.querySelectorAll(".gl"),
      {
        opacity:1,
        duration: 2,
        opacity: 0,
        stagger: 0.4,
        ease: "power3.out",
      },
      "run"
    )
      .from(
        SecWrap.current?.querySelectorAll(".lcurr"),
        {
          scale: 0,
          duration: 2,
          stagger: 0.4,
          ease: "power3.out",
        },
        "run"
      )
      .from(
        SecWrap.current?.querySelectorAll(".gr"),
        {
         opacity:1,
          duration: 2,
          opacity: 0,
          stagger: 0.4,
          ease: "power3.out",
        },
        "run"
      );
  }, []);


  return (
    <>
       <section ref={SecWrap}  className="sec-three h-screen py-12 flex items-center justify-center relative bg-fixed  relative  bg-[url('/img/secbg.png')] bg-cover bg-center before:absolute before:-z-10  before:inset-0 before:bg-[#B1FF01]/50">
        <div className="sub ">
        <div className="lcurr w-1/2 m-auto lg:w-fit">
        <Image src="/img/sub2.png" width={503} height={723}  layout="responsive" alt="arrow" />
        </div>
          
          </div>
          <div className="container mx-auto max-w-screen-xl px-4 md:px-14 2xl:px-0">
            <div className="md:grid md:grid-cols-2 gap-8 items-center">
              <div className="  w-full py-2">
                <h2 className="gl text-black text-[45px] md:text-[5.208vw]  uppercase tall">
                  We&nbsp; do <br /> immersive <br />
                  ui/ux&nbsp;design
                </h2>
              </div>
              <div className="gr  w-full md:py-2 md:px-8 pl-0 lg:pl-32">
                <p className="text-[20px] md:text-[25px] font-[600] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo.
                </p>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
