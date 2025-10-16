import React, { useState } from "react";
import kelvin2 from "../assets/kelvinfiles/kelvin2.jpg";
import ogasing from "../assets/kelvinfiles/ogasing.jpg";
import kapNew1 from "../assets/kelvinfiles/kapNew1.jpg";
import Kapnew2 from "../assets/kelvinfiles/Kapnew2.jpg";
import { motion } from "framer-motion";
import PerformancesPage from "./Performance";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white w-full">
      {/* Hero Section */}
      <section
        className="body-sec relative h-screen flex items-center justify-center bg-cover bg-center w-full"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519996529731-5e304b8d2000?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${ogasing})`,
            backgroundSize: "contain",
            backgroundPosition: "50% 50%",
          }}
          className="absolute inset-0 bg-black bg-opacity-50 w-full "
        ></div>

        <div className="relative z-10 text-center px-4 w-full mt-1.5 ">
          <motion.div
            className="mb-8 w-full "
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-120 "
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            I am Kelvin Sapp
          </motion.h1>

          <motion.p
            className="!bg-[#0009] text-xl md:text-2xl !text-[#FFFFFF] max-w-2xl mx-auto rounded-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
           Worship minister / Comedian
          </motion.p>
        </div>
      </section>

      {/* Upcoming Shows Section */}
      <section className="py-20 px-4 w-full">
        <div className="container mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-red-500 text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Upcoming Shows
          </motion.h2>

          <motion.div
            className="max-w-md mx-auto bg-white text-black rounded-lg overflow-hidden shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src={kelvin2}
              alt="Mics and Melodies Show"
              className="w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">March 9th, 2025</h3>
              <p className="text-gray-600 mb-2">
                Terra Kulture, Victoria Island, Lagos
              </p>
              <a
                target="_blank"
                href="https://seatsandtickets.com/etn/sapps-entertainment-presents-kevinsapp-mic-and-melodies-9th-march-2025-at-terra-kulture-vi-lagos/"
                className="bg-red-500 !text-white px-6 py-2 rounded-lg font-semibold shadow-md 
                 hover:bg-red-600 transition-colors duration-300"
              >
                Get Tickets
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <PerformancesPage />

      {/* Every Show Section */}
      <section className="relative h-150 flex items-center justify-center w-full overflow-hidden">
  <div className="flex w-full h-full">
    {/* Left Image: Kapnew2 */}
    <div
      className="w-1/2 h-full bg-cover bg-center md:bg-top"
      style={{
        backgroundImage: `url(${Kapnew2})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
    </div>

    {/* Right Image: Kapnew1 */}
    <div
      className="w-1/2 h-full bg-cover bg-center md:bg-top"
      style={{
        backgroundImage: `url(${kapNew1})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  </div>

  {/* Text Overlay */}
  <motion.div
    className="absolute z-10 text-center px-4"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
      Every Show Gives You a Reason to Smile
    </h2>
    <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-500 via-yellow-400 to-pink-500 bg-clip-text text-transparent
">
      With Laughs That Linger After the Lights Go Out.
    </h2>
  </motion.div>
</section>

    </div>
  );
}