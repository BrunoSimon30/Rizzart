import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainBanner from "@/components/MainBanner";
import Marquee from "@/components/marquee";
import Team from "@/components/Team";
import OurWork from "@/components/work";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <div id="home">
        <MainBanner />
        <section className="sec-two h-screen bg-[url('/img/secbg.png')] py-12 flex items-center justify-center bg-fixed bg-center relative">
          <div className="sub ">
            <Image src="/img/sub.png" width={503} height={723} alt="arrow" />
          </div>
          <div className="container mx-auto max-w-screen-xl ">
            <div className="space-y-6 px-4 md:px-14 2xl:px-0">
              <div className=" w-full py-2">
                <h2 className="text-white text-[45px] md:text-[4.271vw] font-[600] uppercase line leading-[55px] md:leading-[3.49vw]">
                  Creating
                  <br /> Memorable
                </h2>
              </div>
              <div className="  w-full py-2">
                <h2 className="text-white text-[45px] md:text-[4.271vw] font-[600] uppercase line leading-[55px] md:leading-[3.49vw] text-right">
                  Digital
                  <br />
                  Experiences
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className="sec-two h-screen py-12 flex items-center justify-center relative bg-fixed  relative  bg-[url('/img/secbg.png')] bg-cover bg-center before:absolute before:-z-10  before:inset-0 before:bg-[#B1FF01]/50">
        <div className="sub ">
            <Image src="/img/sub2.png" width={503} height={723} alt="arrow" />
          </div>
          <div className="container mx-auto max-w-screen-xl px-4 md:px-14 2xl:px-0">
            <div className="md:grid md:grid-cols-2 gap-8">
              <div className="  w-full py-2">
                <h2 className="text-black text-[45px] md:text-[5.208vw]  uppercase tall">
                  We&nbsp; do <br /> immersive <br />
                  ui/ux&nbsp;design
                </h2>
              </div>
              <div className="  w-full md:py-2 md:px-8">
                <p className="text-[20px] md:text-[25px] font-[600]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section id="about" className="about-two  md:h-screen p-6   ">
        <div className="bg-[url('/img/frame.png')] rounded-2xl py-16 mt-6">
          <div className="px-6 md:px-14 space-y-12">
            <div className="flex justify-between w-full items-center">
              <div>
                <h2 className="text-[#F1FFC4] uppercase text-[23px] font-semibold leading-[21px]">
                  RizzNArt
                  <br />
                  is here
                </h2>
              </div>
              <div>
                <svg
                  className="w-[100px] h-[93px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 138 93"
                  fill="none"
                >
                  <g>
                    <path
                      d="M138 92.5713H0V0.571289H101.965L138 92.5713Z"
                      fill="black"
                    />
                    <path
                      d="M71.462 5.63086H97.5901L122.895 71.9981H93.3698L91.0795 63.2938H75.8625L73.2977 71.9981H46.1575L71.462 5.63086ZM86.6791 46.6055L83.7455 33.1331H83.5653L80.6317 46.6055H86.6791Z"
                      fill="#B1FF00"
                    />
                    <path
                      d="M6.65649 5.63086H33.8911C47.5555 5.63086 66.1608 9.02683 66.1608 26.7099C66.1608 33.862 62.764 38.9903 57.8146 42.472L72.9459 71.9895H44.2531L34.3543 50.173H33.9854V71.9895H6.65649V5.63086ZM36.0012 34.9597C40.3073 34.9597 42.2373 32.67 42.2373 29.8229C42.2373 26.9758 40.2215 24.7804 36.0012 24.7804H33.9854V34.9511H36.0012V34.9597Z"
                      fill="#B1FF00"
                    />
                    <path
                      d="M65.5603 20.9729V34.5225H77.878L64.6081 59.5121V48.6295H51.0552L65.5603 20.9729Z"
                      fill="black"
                    />
                    <path
                      d="M63.0041 31.4009V37.0608H73.3918L66.9842 49.9072V45.7394H55.6958L63.0041 31.4009Z"
                      fill="#FFA100"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_183_11091">
                      <rect
                        width="138"
                        height="92"
                        fill="white"
                        transform="translate(0 0.571289)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <h2 className="text-[#F1FFC4] uppercase text-[23px] font-semibold text-right leading-[21px]">
                  who
                  <br />
                  we are
                </h2>
              </div>
            </div>
            <div className="md:grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3  w-full py-2">
                <h2 className="text-white text-[40px]  md:text-[4.5vw]  font-[600]   uppercase leading-[50px] md:leading-[5vw]">
                  Ut enim ad minim
                  <br />
                  veniam quis{" "}
                  <span className="inline-block w-[20px] md:w-[2.3vw]  ">
                    <svg viewBox="0 0 50 73" fill="none">
                      <path
                        d="M26.9707 0.594299L26.9707 25.7614H49.8377L25.2021 72.1569L25.2021 51.9631H0.0493164L26.9707 0.594299Z"
                        fill="#fff"
                      />
                    </svg>
                  </span>{" "}
                  nostrud exercitation ullamco
                  <br />
                  ad{" "}
                  <span className="inline-block w-[20px] md:w-[2.3vw]  ">
                    <svg viewBox="0 0 50 73" fill="none">
                      <path
                        d="M26.9707 0.594299L26.9707 25.7614H49.8377L25.2021 72.1569L25.2021 51.9631H0.0493164L26.9707 0.594299Z"
                        fill="#fff"
                      />
                    </svg>
                  </span>{" "}
                  minim.
                </h2>
              </div>
              <div className="md:col-span-2 relative  w-full py-2 px-8 h-[560px] hidden md:block">
                <div className="absolute w-[390px] right-0 top-0 left-0 mx-auto">
                  <Image
                    src="/img/game.png"
                    width={350}
                    height={800}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Blogs />
      <div id="team">
        <Marquee />
        <Team />
      </div>

      <OurWork />

      <Footer />
    </>
  );
}
