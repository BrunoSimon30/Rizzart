import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { BsSend } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Footer() {
const footerRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 60%", // Jab section viewport ke 80% pe aaye
        end: "bottom 50%",
        // markers: true,
        // pin: true,
        // scrub: 4,
        // toggleActions: "play pause resume reset",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(
      footerRef.current?.querySelectorAll(".up"),
      {
        y: 100,
        duration: 1,
        opacity: 0,
        stagger: 0.4,
        ease: "power3.out",
      },
      "run"
    )
   
    ;
  }, []);



  return (
    <>
      <footer
      ref={footerRef}
       
        className="footer-sec py-8 md:py-24 px-6 md:px-0 2xl:h-screen bg-[url('/img/footer-bg.png')] relative"
      >
        <div className="ft-shape hidden xl:block up">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 635 1011"
            fill="none"
          >
            <path
              d="M153.514 0.130859V529.329H634.346L116.325 1504.91V1080.28H-412.573L153.514 0.130859Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="container mx-auto max-w-screen-xl md:px-14">
          <div className="up border-2 border-black md:grid md:grid-cols-2  ">
            <div className="newsl py-8 px-12 bg-[#B1FF01]">
              <h1 className="text-black text-[40px] md:text-[3.385vw] font-[600] uppercase line leading-[43px] md:leading-[3.49vw]">
                Newsletter
                <br />
                stay in touch
              </h1>
              <form>
                <div className="new-input flex gap-2 mt-8">
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-2 rounded-full outline-none bg-transparent text-black placeholder-black text-[18px] font-[500]"
                  />
                  <button className="bg-[#B1FF01] px-6 py-2 rounded-full text-[16px] font-[700] uppercase btn-sub">
                    <span>
                      <BsSend />
                    </span>
                  </button>
                </div>
              </form>
            </div>
            <div className="newsr  py-8 px-12 space-y-6 border-t-2 md:border-l-2 md:border-t-0 border-black bg-[#B1FF01]">
              <h1 className="text-[40px] md:text-[3.385vw] font-[600] uppercase line leading-[43px] md:leading-[3.49vw]">
                Lorem ipsum
                <br />
                dolor sit amet
              </h1>
              <p className="text-black font-[500] text-[23px] ">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="up ft-btm ">
            <div className="md:grid md:grid-cols-4 gap-12 items-center space-y-6 md:space-y-0">
              <div className="ft-link w-[150px] bg-black 2xl:bg-transparent p-2">
                <Link href="/">
                  <Image
                    src="/img/ft-logo.png"
                    width={327}
                    height={187}
                    alt="arrow"
                  />
                </Link>
              </div>
              <div className="ft-link space-y-2 md:space-y-8">
                <h3 className="text-[25px] md:text-[3.229vw]  text-black font-[600] uppercase tall">
                  Quick link
                </h3>
                <div className="flex gap-6 md:gap-24">
                  <ul className="ft-lin SMN_effect-15">
                    <li>
                      <Link href="#home">home</Link>
                    </li>
                    <li>
                      <Link href="#about">About</Link>
                    </li>
                    <li>
                      <Link href="#blogs">blogs</Link>
                    </li>
                  </ul>
                  <ul className="ft-lin SMN_effect-15">
                    <li>
                      <Link href="#team">team</Link>
                    </li>
                    <li>
                      <Link href="#work">Work</Link>
                    </li>
                    <li>
                      <Link href="#contact">contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ft-link space-y-2 md:space-y-8 ">
                <h3 className="text-[25px] md:text-[3.229vw] text-black font-[600] uppercase tall">
                  Useful link
                </h3>
                <ul className="ft-lin SMN_effect-15">
                  <li>
                    <Link href="/">Privacy Policy </Link>
                  </li>
                  <li>
                    <Link href="/">Career</Link>
                  </li>
                  <li>
                    <Link href="/">terms & conditions</Link>
                  </li>
                </ul>
              </div>
              <div className="ft-link space-y-2 md:space-y-8">
                <h3 className="text-[25px] md:text-[3.229vw] text-black font-[600] uppercase tall">
                  Contact
                </h3>
                <ul className="ft-lin SMN_effect-15">
                  <li>
                    <Link href="mailto:info@rizznart.com">info@rizznart.com</Link>
                  </li>
                  <li>
                    <Link href=''>instagram</Link>
                  </li>
                  <li>
                    <div className="h-6 "></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
