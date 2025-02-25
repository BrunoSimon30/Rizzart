import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Blogs() {
  const [activeTab, setActiveTab] = useState("one");

  return (
    <section id="blogs" className="blog-sec  md:h-screen py-20 ">
      <div className="px-8 md:px-16 space-y-4">
        <div className="b-h flex items-center gap-4">
          <h2 className="text-[#B1FF01] text-[40px] md:text-[4.271vw] font-[600] uppercase  tall">
            Our blogs
          </h2>
          <div className="gap-4 flex pb-5">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="inline-block w-[3.125vw]  ">
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
            ))}
          </div>
        </div>
        <div className="md:grid md:grid-cols-5 gap-8">
          <div className="col-span-3  w-full ">
            <h2 className="text-[#F1FFC4] uppercase text-[23px] font-semibold leading-[21px] ">
              Digital
              <br />
              Experiences
            </h2>
            <div className="flex gap-4   md:block py-4 justify-center md:justify-start">
              <button
                className={`text-[25px] md:text-[4.271vw] font-[600] uppercase block transition-all duration-300 ${
                  activeTab === "one" ? "  text-white md:pb-24" : "text-[#797979]"
                }`}
                onClick={() => setActiveTab("one")}
              >
                Blog One
              </button>
              <button
                className={`text-[25px] md:text-[4.271vw] font-[600] uppercase block transition-all duration-300 ${
                  activeTab === "two" ? "  text-white md:pb-24" : "text-[#797979]"
                }`}
                onClick={() => setActiveTab("two")}
              >
                Blog two
              </button>

              <button
                className={`text-[25px] md:text-[4.271vw] font-[600] uppercase block transition-all duration-300 ${
                  activeTab === "three" ? "  text-white md:pb-24" : "text-[#797979]"
                }`}
                onClick={() => setActiveTab("three")}
              >
                Blog three
              </button>
            </div>
          </div>
          <div className="col-span-2  w-full space-y-4  ">
            {/* one Content */}
            <div className="bg-[#0e0e0e] py-4 px-5 ">
              <h1 className={`${
                  activeTab === "one" ? "  text-white" : "text-[#797979]"
                } text-[20px] md:text-[2.3vw] font-[600] uppercase transition-all duration-300`}>
              topic One
              </h1>
              {activeTab === "one" && (
                <motion.div
                  key="one"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                 <p className="text-white font-[500] md:text-[20px] md:pr-24">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.
                  </p>
                  <div className="text-right">
                    <button className="btn-c">
                      read more
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
            {/* two Content */}
            <div className="bg-[#0e0e0e] py-4 px-5">
              <h1  className={`${
                  activeTab === "two" ? "  text-white" : "text-[#797979]"
                } text-[20px] md:text-[2.3vw] font-[600] uppercase transition-all duration-300`}>
              topic two
              </h1>
              {activeTab === "two" && (
                <motion.div
                  key="two"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <p className="text-white font-[500] md:text-[20px] md:pr-24">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.
                  </p>
                  <div className="text-right">
                    <button className="btn-c">
                      read more
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
            {/* three Content */}
            <div className="bg-[#0e0e0e] py-4 px-5  ">
              <h1  className={`${
                  activeTab === "three" ? "  text-white" : "text-[#797979]"
                } text-[20px] md:text-[2.3vw] font-[600] uppercase transition-all duration-300`}>
              topic three
              </h1>
              {activeTab === "three" && (
                <motion.div
                  key="three"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <p className="text-white font-[500] md:text-[20px] md:pr-24">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.
                  </p>
                  <div className="text-right">
                    <button className="btn-c">
                      read more
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
