import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    emailAddress: "",
    phoneNumber: "",
    message: "",
  });

  const router = useRouter();
  const pathName = router.pathname;

  const webUrl = 'https://rizznart.com';
  const url = `${webUrl}${pathName}`;
   

  // Set url in formData when component mounts
  useEffect(() => {
    setFormData((prevData) => ({ ...prevData, url: url }));
  }, [url]);
  
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/submit", formData);
      console.log("Response:", response.data);
      
    } catch (error) {
      console.error("Error:", error);
    
    }
  };

  return (
    <>
      <section
        id="contact"
        className=" bg-[url('/img/frame.png')] contact-sec py-24 md:py-32"
      >
        <div className="px-8 md:px-16 space-y-4">
          <div className="grid grid-cols-2 gap-8">
            <div className="con-l space-y-5">
              <h2 className="up text-[#B1FF01] text-[40px] md:text-[4.271vw] font-[600] uppercase  tall">
                Get in Touch
              </h2>
              <div className="flex pb-2 gap-4">
                <span className="w-[30px] h-[30px]  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                   
                    viewBox="0 0 56 56"
                    fill="none"
                  >
                    <path
                      d="M28 0.000488281L30.3286 17.0452L39.3886 2.42122L34.5832 18.9395L48.8081 9.26483L37.6995 22.4005L54.6296 19.348L39.1386 26.8298L55.8466 30.9273L38.6518 31.4615L52.2487 42.0005L36.3232 35.4948L44.458 50.653L32.5555 38.2322L33.8215 55.3886L28 39.2005L22.1785 55.3886L23.4445 38.2322L11.542 50.653L19.6768 35.4948L3.75129 42.0005L17.3482 31.4615L0.153387 30.9273L16.8614 26.8298L1.37042 19.348L18.3005 22.4005L7.19194 9.26483L21.4168 18.9395L16.6114 2.42122L25.6714 17.0452L28 0.000488281Z"
                      fill="#B1FF00"
                    />
                  </svg>
                </span>
                <h2 className="text-[#F1FFC4;] uppercase">Fill out
                the form</h2>
              </div>
              <div className="conf w-[70%]">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#B1FF01]"
                    >
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="firstName"
                      placeholder="Enter your name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="bg-transparent outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#B1FF01]"
                    >
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="emailAddress"
                      placeholder="Enter your email address"
                      value={formData.emailAddress}
                      onChange={handleChange}
                      className="bg-transparent outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[#B1FF01]"
                    >
                      Phone Number:
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phoneNumber"
                      placeholder="Enter your phone number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="bg-transparent outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#B1FF01]"
                    >
                      Message:
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Enter your message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-transparent outline-none"
                      required
                    />
                  </div>

                  <div>
                    <button type="submit">Leave a Request</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="con-r text-center">
              <div className="con-i ">
                <Image
                  className="mx-auto"
                  src="/img/game.png"
                  width={350}
                  height={800}
                  alt="arrow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
