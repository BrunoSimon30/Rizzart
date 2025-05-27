import "@/styles/globals.css";
import Lenis from "lenis";
import { useEffect } from "react";
import { Darker_Grotesque } from "next/font/google";
import Head from "next/head";
import Script from "next/script"; // Import Next.js Script component
import { useRouter } from "next/router";

const grotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-grotesque",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Head>
        <title>High-Quality Design That Impress | RizzNArt</title>
        <link rel="canonical" href={`https://rizznart.com${router.asPath}`} />
        <meta
          name="google-site-verification"
          content="Vw8Mb1PQASI0J0UAhBVraLOUlo8DSoO2YjI12JqR5YM"
        />
      </Head>
      <main className={grotesque.variable}>
        <Component {...pageProps} />
      </main>

      {/* Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-4VTSEKWBGY"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4VTSEKWBGY');
        `}
      </Script>
    </>
  );
}
