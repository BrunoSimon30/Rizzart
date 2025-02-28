 import SliderComponent from "../Silder";
import { useRef,React } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


export default function Team() {
const metRef = useRef(null);

  useGSAP(() => {
     
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: metRef.current,
        start: "top 50%", // Jab section viewport ke 80% pe aaye
        end: "bottom 50%",
        // markers:true,
        // pin: true,
        // scrub: 4,
        // toggleActions: "play pause resume reset",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(
      metRef.current?.querySelectorAll(".up h2"),
      {
        y: 100,
        duration: 1,
        opacity: 0,
        stagger: 0.4,
        ease: "power3.out",
      },
      "run"
    )
    .to(
      metRef.current?.querySelectorAll(".met-wrap"),
      {
        
        
        scale:0.9,
        duration: 1,
        stagger: 0.4,
        ease: "none",
        scrollTrigger: {
          trigger: metRef.current, // Yeh pura section target karega
          start: "top", // Jab element viewport ke 80% tak aaye tab start ho
          end: "bottom", // Jab element 20% tak scroll ho chuka ho tab khatam ho
          scrub: 1, // Smooth effect scroll ke saath
          pin: true, // Element fixed karega as scroll hojae
          markers: true, // Debug markers (Baad mein hata sakte ho)
        },
       
      },
      "ru"
    )
    .to(
      metRef.current?.querySelectorAll(".lbox"),
      {
        
        
        skewX: "-21.6deg", // (-0.06turn) ko degrees mein convert kiya
        duration: 1,
        stagger: 0.4,
        ease: "bounce.out",
      
       
      },
      "ru"
    )
    .from(
      metRef.current?.querySelectorAll(".silder-g"),
      {
        
        
       opacity:0,
        duration: 1,
        stagger: 0.4,
        ease: "none",
      
       
      },
      "ru"
    )
     
  }, []);


  return (
    <>
 <section id="team" ref={metRef} className="meets-sec">
        <div className="mhead h-[35vh] md:h-[80vh] bg-[#FFA100] text-center pt-16 md:pt-32">
         <div className="up overflow-hidden pt-2">
         <h2 className="text-[50px] md:text-[4.271vw] font-[600] uppercase text-black tall">
            Meet our Team
          </h2>
         </div>
        </div>
        <div className="met-wrap relative">
          <div className="lbox"></div>
          <div className="bg-[url('/img/frame.png')] rounded-2xl pb-12 pt-16 md:pb-16 md:pt-24 mt-6">
            <div className="px-6 md:px-14 silder-g">
              <div className="md:grid md:grid-cols-5 gap-8 items-center">
                <div className=" col-span-2  w-full py-2 space-y-2  md:space-y-8 ">
                  <div>
                    <div className="flex gap-3 items-center">
                      <h2 className="text-white text-[4.167vw] font-[600]   uppercase leading-[4.583vw]">
                        top-notch
                      </h2>
                      <h3 className="text-[#F1FFC4] uppercase text-[16px] md:text-[23px] font-semibold leading-[21px] text-right">
                        Digital
                        <br />
                        Experiences
                      </h3>
                    </div>
                    <h2 className="text-white text-[4.167vw] font-[600]   uppercase leading-[4.583vw]">
                      designers And professionals.
                    </h2>
                  </div>
                  <p className="text-white font-[500] text-[15px] md:text-[20px] ">
                    Our big dream is to make Kyiv the world
                    <br />
                    capital of design. We believe in that.
                    <br />
                    We love that.
                  </p>
                </div>
                <div className="col-span-3 relative  w-full md:py-2 md:px-8 ">
                  <SliderComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
