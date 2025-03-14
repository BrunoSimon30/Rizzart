import About from "@/components/about";
import Blogs from "@/components/Blogs";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainBanner from "@/components/MainBanner";
import Marquee from "@/components/marquee";
import Secthree from "@/components/secthree";
import Sectwo from "@/components/sectwo";
import Team from "@/components/Team";
import OurWork from "@/components/work";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Head>
        <title>High-Quality Design That Impress | RizzNArt</title>
        <meta name="google-site-verification" content="Vw8Mb1PQASI0J0UAhBVraLOUlo8DSoO2YjI12JqR5YM" />
      
      </Head>
      <Header />
      <MainBanner />
      <Sectwo />
      <Secthree />
      <About />
      <Blogs />
      <Marquee/>
      <Team />
      <OurWork />
      <Contact/>
      <Footer />
    </>
  );
}
