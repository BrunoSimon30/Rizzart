import React from "react";
import SliderComponent from "../Silder";

export default function Team() {
  return (
    <>
      <section className="meets-sec">
        <div className="mhead h-[35vh] md:h-[80vh] bg-[#FFA100] text-center pt-16 md:pt-32">
          <h2 className="text-[50px] md:text-[4.271vw] font-[600] uppercase text-black tall">
            Meet our Team
          </h2>
        </div>
        <div className="met-wrap relative">
          <div className="lbox"></div>
          <div className="bg-[url('/img/frame.png')] rounded-2xl pb-12 pt-16 md:pb-16 md:pt-24 mt-6">
            <div className="px-6 md:px-14">
              <div className="md:grid md:grid-cols-5 gap-8 items-center">
                <div className="col-span-2  w-full py-2 space-y-2  md:space-y-8 ">
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
