import "@/styles/globals.css";
import Lenis from "lenis";
import { useEffect } from "react";
import { Darker_Grotesque } from 'next/font/google';

const grotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-grotesque",
});


export default function App({ Component, pageProps }) {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Smoothness speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      smooth: true,
      smoothTouch: false, // Disable smooth scrolling for touch devices
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <main className={grotesque.variable}>
      <Component {...pageProps} />
    </main>
  );
}
