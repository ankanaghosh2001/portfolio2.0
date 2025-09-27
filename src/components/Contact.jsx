import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef();
  const headingRef = useRef();
  const formRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 60%",
        toggleActions: "play none restart restart",
      },
    });

    tl.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
    }).from(formRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1,
    });
  });

  const {
    register,
    handleSubmit,
    setError,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const sendEmail = (data) => {
    emailjs
      .send(
        "service_ankana", // Service ID
        "template_dfqfy0t", // Template ID
        {
          from_name: data.from_name,
          reply_to: data.reply_to,
          message: data.your_message,
        },
        "cdy9BCkKmo2A-0Mom" // Public Key
      )
      .then(() => {
        toast.success("Message sent successfully!");
        reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send message. Please try again.");
      });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <section
        ref={contactRef}
        id="contact"
        className="w-full h-max pb-[4rem] bg-[#000000] text-pink-300"
      >
        <h2
          ref={headingRef}
          className="font-poppins pt-[5rem] pb-[3rem] pl-[2rem] pr-[2rem] text-center text-2xl md:text-4xl font-medium tracking-wider animated-text"
        >
          Want to reach out? Send me a message...
        </h2>
        <div
          ref={formRef}
          className="container flex justify-center items-center"
        >
          <form
            onSubmit={handleSubmit(sendEmail)}
            id="contact-form"
            className="w-[80%] md:w-[30rem] p-[1.5rem] border-2 rounded-xl font-poppins border-pink-300 shadow-[0_0_8px_#ff7ac7] hover:shadow-[0_0_15px_#ff7ac7] transition-all"
          >
            <input
              type="text"
              {...register("from_name", {
                required: { value: true, message: "Your name is required!" },
              })}
              placeholder="Your Name"
              className="w-full p-3 mb-4 rounded-md bg-black border border-pink-300 placeholder-pink-300 text-white"
            />
            {errors.from_name && (
              <p className="text-yellow-500 mt-0 mb-3">
                {errors.from_name.message}
              </p>
            )}
            <input
              type="email"
              {...register("reply_to", {
                required: { value: true, message: "Your e-mail is required!" },
              })}
              placeholder="Your Email"
              className="w-full p-3 mb-4 rounded-md bg-black border border-pink-300 placeholder-pink-300 text-white"
            />
            {errors.reply_to && (
              <p className="text-yellow-500 mb-3">{errors.reply_to.message}</p>
            )}
            <textarea
              {...register("your_message", {
                required: {
                  value: true,
                  message: "Please enter your message!",
                },
              })}
              placeholder="Your Message"
              className="w-full p-3 mb-4 h-32 rounded-md bg-black border border-pink-300 placeholder-pink-300 text-white resize-none"
            ></textarea>
            {errors.your_message && (
              <p className="text-yellow-500 mb-4">
                {errors.your_message.message}
              </p>
            )}
            <button
              type="submit"
              className="w-full relative bg-black text-pink-300 border-2 border-pink-300 shadow-[0_0_10px_#ff7ac7] font-bold py-2 rounded-md transition-all cursor-pointer text-shadow-[0_0_5px_#a30b63] hover:bg-pink-300 hover:text-black hover:text-shadow-none active:bg-pink-300 active:text-black active:text-shadow-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
