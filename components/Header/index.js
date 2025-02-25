import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "blogs", "team", "work", "contact"];
      let currentSection = "";

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "blogs", label: "Blogs" },
    { id: "team", label: "Team" },
    { id: "work", label: "work" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header>
      <div className="top-head h-3 bg-black"></div>
      <div className="container mx-auto max-w-screen-lg">
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        <div className="head-menu ">
          <ul
            className={`menu  gap-6 justify-evenly  ${
              isMenuOpen ? "block " : "hidden lg:flex"
            }`}
          >
            {menuItems.map(({ id, label }) => (
              <li key={id}>
                <Link
                  href={`#${id}`}
                  className={`flex items-center gap-2 text-[22px] font-[600] uppercase transition-all duration-300 ${
                    activeSection === id ? "text-[#fff]  " : "text-[#A6A6A6]"
                  }`}
                >
                  <span
                    className={`transition-all duration-300 w-[20px] ${
                      activeSection === id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 73"
                      fill="none"
                    >
                      <path
                        d="M26.9707 0.594299L26.9707 25.7614H49.8377L25.2021 72.1569L25.2021 51.9631H0.0493164L26.9707 0.594299Z"
                        fill="#B1FF00"
                      />
                    </svg>
                  </span>
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="head-trans hidden md:block"></div>
        </div>
      </div>
    </header>
  );
}
