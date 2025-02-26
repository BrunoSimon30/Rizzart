import About from "@/components/about";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainBanner from "@/components/MainBanner";
import Marquee from "@/components/marquee";
import Secthree from "@/components/secthree";
import Sectwo from "@/components/sectwo";
import Team from "@/components/Team";
import OurWork from "@/components/work";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <MainBanner />
      <Sectwo />
      <Secthree />
      <About />
      <Blogs />
      <Marquee />
      <Team />
      <OurWork />
      <Footer />
    </>
  );
}
