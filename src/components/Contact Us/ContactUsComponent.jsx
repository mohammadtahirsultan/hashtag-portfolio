import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./ContactUsComponent.css";

function ContactUsComponent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const contactUs = document.getElementById("ecom_cus_wrapper");
      const contactUsTop = contactUs.offsetTop;
      const contactUsHeight = contactUs.offsetHeight;

      if (
        currentScrollPos >= contactUsTop - window.innerHeight + contactUsHeight / 2
      ) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      id="ecom_cus_wrapper"
      className={`flex flex-col gap-4 items-center justify-center pt-14 pb-10 bg-[#0074FF] mt-5`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 2 }} // Change the transition properties here
    >
      <h3 id="ecom_cus_mainheading" className="font-bold text-[#AFD4FF] text-[1.2rem]">
        FEEL FREE TO CONTACT US
      </h3>
      <h1 className="font-extrabold text-white text-[3.2rem]">
        We Make Things Look Good
      </h1>
      <div>
        <form
          action=""
          id="ecom_cus_form_group"
          className="flex max-w-[100vw] items-center justify-center flex-wrap ml-1 mr-1"
        >
          <input
            type="email"
            name="email"
            id="ctu_sec_email_input_field"
            placeholder="Email Address"
            className="w-[100%] p-0"
            required
          />
          <button type="submit" id="ecom_cus_sub_btn">
            Get Started
          </button>
        </form>
      </div>
      <div
        id="ecom_cus_ajeeb"
        className="flex items-center justify-between mt-2 w-[52%]"
      >
        <div id="ecom_cus_placeh">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                fill="white"
                stroke="green"
                strokeWidth={1.5}
              />
            </svg>
          </div>

          <p id="ecom_cus_placeh_txt">RELIABLE</p>
        </div>
        <div id="ecom_cus_placeh">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                fill="white"
                stroke="green"
                strokeWidth={1.5}
              />
            </svg>
          </div>
          <p id="ecom_cus_placeh_txt">INNOVATIVE</p>
        </div>
        <div id="ecom_cus_placeh">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                fill="white"
                stroke="green"
                strokeWidth={1.5}
              />
            </svg>
          </div>
          <p id="ecom_cus_placeh_txt">CUSTOMER SATISFACTION</p>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactUsComponent;