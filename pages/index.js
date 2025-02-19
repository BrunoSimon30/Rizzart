import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="w-full h-screen flex items-end justify-center">
        <div className="w-full flex  items-end  justify-between px-16 pb-16">
          <div>
            <h1 className="text-white text-[82px] font-[600] uppercase line leading-[67px]">
              Creative
            </h1>
            <h1 className="text-white text-[82px] font-[600] uppercase line leading-[67px]">
              <span className="flex items-end gap-6">
                <span className="w-[130px] h-[50px] bg-[#B1FF00]">
                  {/* <Image
                  src="/img/cc.png"
                  width={208}
                  height={20}
                  alt="arrow"
                /> */}
                </span>
                <span>UI/UX</span>
              </span>
            </h1>
            <h1 className="text-white text-[82px] font-[600] uppercase line leading-[67px]">
              Design studio.
            </h1>
          </div>
          <div>
            <button className="btn-a ">
              <span>
                <Image
                  src="/img/csvg.svg"
                  width={100}
                  height={20}
                  alt="arrow"
                />
              </span>{" "}
              CONTACT
            </button>
          </div>
        </div>
      </section>
      <section className="sec-two h-screen bg-[url('/img/secbg.png')] py-12 flex items-center justify-center bg-fixed bg-center">
        <div className="container mx-auto max-w-screen-xl bg-slate-900">
          <div className="space-y-6">
            <div className="bg-red-500 w-full py-2">
              <h2 className="text-white text-[82px] font-[600] uppercase line leading-[67px]">
                Creating
                <br /> Memorable
              </h2>
            </div>
            <div className="bg-red-500 w-full py-2">
              <h2 className="text-white text-[82px] font-[600] uppercase line leading-[67px] text-right">
                Digital
                <br />
                Experiences
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-two h-screen py-12 flex items-center justify-center relative bg-fixed bg-center  bg-[url('/img/secbg.png')] bg-cover bg-center before:absolute before:-z-10  before:inset-0 before:bg-[#B1FF01]/50">
        <div className="container mx-auto max-w-screen-xl ">
          <div className="grid grid-cols-2 gap-8">
            <div className="  w-full py-2">
              <h2 className="text-black text-[100px]  uppercase tall">
                We&nbsp; do <br /> immersive <br />
                ui/ux&nbsp;design
              </h2>
            </div>
            <div className="  w-full py-2 px-8">
              <p className="text-[25px] font-[600]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-two  h-screen p-6   ">
        <div className="bg-[url('/img/frame.png')] rounded-2xl py-16 mt-6">
          <div className="px-14 space-y-12">
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
                  <g clip-path="url(#clip0_183_11091)">
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
            <div className="grid grid-cols-5 gap-8">
              <div className="col-span-3  w-full py-2">
                <h2 className="text-white text-[82px] font-[600]   uppercase leading-[88px]">
                  Ut enim ad minim
                  <br />
                  veniam quis{" "}
                  <span className="inline-block w-[45px] bg-red-400 h-[45px]"></span>{" "}
                  nostrud exercitation ullamco
                  <br />
                  ad{" "}
                  <span className="inline-block w-[45px] bg-red-400 h-[45px]"></span>{" "}
                  minim.
                </h2>
              </div>
              <div className="col-span-2 relative  w-full py-2 px-8 h-[560px]">
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
      <section className="sec-two  h-screen py-20 ">
        <div className="px-16 space-y-4">
          <div className="b-h flex items-center gap-4">
            <h2 className="text-[#B1FF01] text-[82px] font-[600] uppercase  tall">
              Our blogs
            </h2>
            <div className="gap-4 flex pb-5">
              <span className="inline-block w-[60px] bg-[#B1FF01] h-[100px]"></span>
              <span className="inline-block w-[60px] bg-[#B1FF01] h-[100px]"></span>
              <span className="inline-block w-[60px] bg-[#B1FF01] h-[100px]"></span>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-8">
            <div className="col-span-3  w-full">
              <h2 className="text-[#F1FFC4] uppercase text-[23px] font-semibold leading-[21px]">
                Digital
                <br />
                Experiences
              </h2>
              <div>
                <h1 className="text-white text-[82px] font-[600] uppercase">
                  Blog One
                </h1>
                <h1 className="text-[#797979] text-[82px] font-[600] uppercase">
                  Blog Two
                </h1>
                <h1 className="text-[#797979] text-[82px] font-[600] uppercase">
                  Blog Three
                </h1>
              </div>
            </div>
            <div className="col-span-2  w-full  ">
              <div className="space-y-4">
                <h1 className="text-white text-[40px] font-[600] uppercase leading-3">
                  topic one
                </h1>
                <p className="text-white font-[500] text-[20px]">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <div className="text-right">
                  <button className="bg-[#B1FF01] font-[700] uppercase px-6 py-2 rounded-full">
                    read more
                  </button>
                </div>
              </div>
              <div>
                <h1 className="text-[#797979] text-[40px] font-[600] uppercase">
                  topic two
                </h1>
              </div>
              <div>
                <h1 className="text-[#797979] text-[40px] font-[600] uppercase">
                  topic three
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="m-sec  pt-2 pb-5 bg-[#B1FF00]">
        <div className="marquee-wrap flex flex-shrink-0 overflow-hidden gap-6">
        <div className="marquee flex-shrink-0  flex items-baseline gap-6">
          <h2 className="text-[120px] leading-[100px] font-[700] uppercase text-[#18181A]">Meet our Team</h2>
          <Image src={'/img/arrow-br.svg'} width={80} height={20} alt="arrow" />
        </div>
        <div className="marquee flex-shrink-0  flex items-baseline gap-6">
          <h2 className="text-[120px] leading-[100px] font-[700] uppercase text-[#18181A]">Meet our Team</h2>
          <Image src={'/img/arrow-br.svg'} width={80} height={20} alt="arrow" />
        </div>
        <div className="marquee flex-shrink-0  flex items-baseline gap-6">
          <h2 className="text-[120px] leading-[100px] font-[700] uppercase text-[#18181A]">Meet our Team</h2>
          <Image src={'/img/arrow-br.svg'} width={80} height={20} alt="arrow" />
        </div>
       
        </div>
        
      </section>
    </>
  );
}
