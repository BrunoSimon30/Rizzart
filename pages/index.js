import Marquee from "@/components/marquee";
import OurWork from "@/components/work";
import Image from "next/image";
import Link from "next/link";

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
            <button className="btn-a uppercase">
              <span>
                <Image
                  src="/img/csvg.svg"
                  width={100}
                  height={20}
                  alt="arrow"
                />
              </span>{" "}
              contact
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
      <Marquee/>
     
      <section className="meets-sec">
        <div className="mhead h-[80vh] bg-[#FFA100] text-center pt-32">
          <h2 className="text-[82px] font-[600] uppercase text-black tall">
            Meet our Team
          </h2>
        </div>
        <div className="met-wrap relative">
          <div className="lbox"></div>
          <div className="bg-[url('/img/frame.png')] rounded-2xl pb-16 pt-24 mt-6">
            <div className="px-14">
              <div className="grid grid-cols-5 gap-8 items-center">
                <div className="col-span-2  w-full py-2  space-y-8 ">
                  <div>
                    <div className="flex gap-3 items-center">
                      <h2 className="text-white text-[80px] font-[600]   uppercase leading-[88px]">
                        top-notch
                      </h2>
                      <h3 className="text-[#F1FFC4] uppercase text-[23px] font-semibold leading-[21px] text-right">
                        Digital
                        <br />
                        Experiences
                      </h3>
                    </div>
                    <h2 className="text-white text-[80px] font-[600]   uppercase leading-[88px]">
                      designers And professionals.
                    </h2>
                  </div>
                  <p className="text-white font-[500] text-[20px] ">
                    Our big dream is to make Kyiv the world
                    <br />
                    capital of design. We believe in that.
                    <br />
                    We love that.
                  </p>
                </div>
                <div className="col-span-3 relative  w-full py-2 px-8 ">
                  <div class="grid grid-cols-5 gap-8 items-center">
                    <div className="col-span-2 ">
                      <Image
                        className="rounded-2xl"
                        src="/img/sil.jpg"
                        width={406}
                        height={656}
                        alt="arrow"
                      />
                    </div>

                    <div className="col-span-3 px-4 space-y-6">
                      <p className="text-white font-[500] text-[34px] uppercase ">
                        I love shooting on film, skip the morning glass of
                        water, and still wait for my Hogwarts letter any day
                        now.
                      </p>
                      <div className="flex justify-between ">
                        <div className="colan">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="121"
                            height="99"
                            viewBox="0 0 121 99"
                            fill="none"
                          >
                            <path
                              d="M55.2212 23.2306C55.2212 25.2053 54.9973 29.0452 54.5495 34.7501C54.1018 40.4551 52.9824 46.8183 51.1913 53.8398C49.4002 61.0807 46.4898 68.1021 42.4599 74.9041C38.43 81.7062 33.0568 87.3014 26.3403 91.6898C19.4 96.0783 10.6686 98.2725 0.14608 98.2725L0.146083 60.7515C8.8775 60.7515 15.8179 59.435 20.9672 56.8019C25.8926 54.3883 29.5866 51.3164 32.0493 47.5863C34.512 43.8561 36.0792 40.126 36.7509 36.3958C37.4225 32.6656 37.6464 29.484 37.4225 26.851C37.1986 24.4374 37.0867 23.2306 37.0867 23.2306L55.2212 23.2306ZM96.5275 0.191389C105.259 0.19139 111.528 2.3856 115.334 6.77402C118.916 11.3819 120.707 17.0868 120.707 23.8888C120.707 30.252 119.14 35.6278 116.005 40.0163C112.647 44.6241 106.378 46.928 97.1991 46.928C88.2438 46.928 81.8632 44.6241 78.0572 40.0163C74.2512 35.4084 72.3482 29.9229 72.3482 23.5597C72.3482 16.9771 74.2512 11.3818 78.0572 6.77401C81.6393 2.38559 87.7961 0.191388 96.5275 0.191389ZM120.707 23.2306C120.707 25.2054 120.483 29.0452 120.035 34.7501C119.587 40.4551 118.468 46.8183 116.677 53.8398C114.886 61.0807 111.975 68.1021 107.945 74.9042C103.916 81.7062 98.5424 87.3014 91.826 91.6898C84.8856 96.0783 76.1542 98.2725 65.6317 98.2725L65.6317 60.7515C74.3631 60.7515 81.3035 59.435 86.4528 56.8019C91.3782 54.3883 95.0722 51.3164 97.535 47.5863C99.9977 43.8561 101.565 40.126 102.236 36.3958C102.908 32.6657 103.132 29.4841 102.908 26.851C102.684 24.4374 102.572 23.2306 102.572 23.2306L120.707 23.2306ZM31.0419 0.191383C39.7733 0.191384 46.042 2.38559 49.848 6.77401C53.4301 11.3818 55.2212 17.0868 55.2212 23.8888C55.2212 30.252 53.654 35.6278 50.5197 40.0163C47.1614 44.6241 40.8927 46.928 31.7135 46.928C22.7582 46.928 16.3776 44.6241 12.5716 40.0162C8.76557 35.4084 6.86256 29.9229 6.86256 23.5597C6.86256 16.9771 8.76557 11.3818 12.5716 6.77401C16.1537 2.38559 22.3105 0.191382 31.0419 0.191383Z"
                              fill="#B1FF00"
                            />
                          </svg>
                        </div>
                        <div>
                          <h2 className="text-[#F1FFC4] uppercase text-[23px] font-semibold text-right leading-[21px]">
                            George
                            <br />
                            Marshall
                          </h2>
                          <h2 className="text-[#5F5F5F] uppercase text-[23px] font-semibold text-right leading-[21px]">
                            Web Ui/ux Designer
                          </h2>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Link
                          href="/"
                          className="flex items-center gap-2 btn-b"
                        >
                          <span className="arrow-l ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="105"
                              height="20"
                              viewBox="0 0 105 20"
                              fill="none"
                            >
                              <path
                                d="M0.16455 9.88573L104.11 9.88574"
                                stroke="white"
                                stroke-width="2"
                              />
                              <path
                                d="M94.3948 0.169922C94.3948 9.88574 104.11 9.88574 104.11 9.88574"
                                stroke="white"
                                stroke-width="2"
                              />
                              <path
                                d="M94.3948 19.6016C94.3948 9.88574 104.11 9.88574 104.11 9.88574"
                                stroke="white"
                                stroke-width="2"
                              />
                            </svg>
                          </span>
                          <span className="bb-txt text-[20px] font-[600] uppercase text-white ">
                            previous
                          </span>
                        </Link>
                        <Link
                          href="/"
                          className="flex items-center gap-2 btn-b"
                        >
                          <span className="bb-txt text-[20px] font-[600] uppercase text-white ">
                            next
                          </span>
                          <span className="arrow-r pt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="105"
                              height="20"
                              viewBox="0 0 105 20"
                              fill="none"
                            >
                              <path
                                d="M0.16455 9.88573L104.11 9.88574"
                                stroke="white"
                                stroke-width="2"
                              />
                              <path
                                d="M94.3948 0.169922C94.3948 9.88574 104.11 9.88574 104.11 9.88574"
                                stroke="white"
                                stroke-width="2"
                              />
                              <path
                                d="M94.3948 19.6016C94.3948 9.88574 104.11 9.88574 104.11 9.88574"
                                stroke="white"
                                stroke-width="2"
                              />
                            </svg>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurWork/>
     
      <footer className="footer-sec py-24 h-screen bg-[url('/img/footer-bg.png')] ">
        <div className="ft-shape">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="635"
            height="1011"
            viewBox="0 0 635 1011"
            fill="none"
          >
            <path
              d="M153.514 0.130859V529.329H634.346L116.325 1504.91V1080.28H-412.573L153.514 0.130859Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="container mx-auto max-w-screen-xl">
          <div className="news grid grid-cols-2 ">
            <div className="newsl py-8 px-12">
              <h1 className="text-black text-[65px] font-[600] uppercase line leading-[67px]">
                Newsletter
                <br />
                stay in touch
              </h1>
              <form>
                <div className="new-input flex gap-4 mt-8">
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-2 rounded-full outline-none bg-transparent text-black placeholder-black text-[18px] font-[500]"
                  />
                  <button className="bg-[#B1FF01] px-6 py-2 rounded-full text-[16px] font-[700] uppercase">
                    subscribe
                  </button>
                </div>
              </form>
            </div>
            <div className="newsr  py-8 px-12 space-y-6">
              <h1 className="text-black text-[65px] font-[600] uppercase line leading-[67px]">
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
          <div className="ft-btm ">
            <div className="grid grid-cols-4 gap-12 items-center">
              <div className="ft-link">
                <Link href="/">
                  <Image
                    src="/img/ft-logo.png"
                    width={327}
                    height={187}
                    alt="arrow"
                  />
                </Link>
              </div>
              <div className="ft-link space-y-8">
                <h3 className="text-[62px] text-black font-[600] uppercase tall">
                  Quick link
                </h3>
                <div className="flex gap-24">
                  <ul className="ft-lin">
                    <li>
                      <Link href="/">home</Link>
                    </li>
                    <li>
                      <Link href="/">works</Link>
                    </li>
                    <li>
                      <Link href="/">blogs</Link>
                    </li>
                  </ul>
                  <ul className="ft-lin">
                    <li>
                      <Link href="/">team</Link>
                    </li>
                    <li>
                      <Link href="/">prices</Link>
                    </li>
                    <li>
                      <Link href="/">contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ft-link space-y-8">
                <h3 className="text-[62px] text-black font-[600] uppercase tall">
                  Useful link
                </h3>
                <ul className="ft-lin">
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
              <div className="ft-link space-y-8">
                <h3 className="text-[62px] text-black font-[600] uppercase tall">
                  Contact
                </h3>
                <ul className="ft-lin">
                  <li>
                    <Link href="/">info@rizznart.com</Link>
                  </li>
                  <li>
                    <Link href="/">instagram</Link>
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
