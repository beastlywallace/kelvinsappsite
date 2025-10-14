import React, { useState, useEffect } from "react";
import warriImg from "../assets/kelvinfiles/warriImg.jpg";
import abujaimg from "../assets/kelvinfiles/abujaimg.jpeg";
import asabaimg from "../assets/kelvinfiles/asabaimg.jpg";
import mnm1 from "../assets/micsmelody/mnm1.jpg";
import mnm2 from "../assets/micsmelody/mnm2.jpg";
import mnm3 from "../assets/micsmelody/mnm3.jpg";
import mnm4 from "../assets/micsmelody/mnm4.jpg";
import mnm5 from "../assets/micsmelody/mnm5.jpg";
import mnm6 from "../assets/micsmelody/mnm6.jpg";

import mnm7 from "../assets/micsmelody/mnm7.jpg";
import mnm8 from "../assets/micsmelody/mnm8.jpg";
import mnm9 from "../assets/micsmelody/mnm9.jpg";
import mnm10 from "../assets/micsmelody/mnm10.jpg";
import mnm11 from "../assets/micsmelody/mnm11.jpg";
import mnm12 from "../assets/micsmelody/mnm12.jpg";
import mnm13 from "../assets/micsmelody/mnm13.jpg";
import mnm14 from "../assets/micsmelody/mnm14.jpg";
import mnm15 from "../assets/micsmelody/mnm15.jpg";
import mnm16 from "../assets/micsmelody/mnm16.jpg";

export default function ToursPage() {
  const [activeCity, setActiveCity] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const tourDates = [
    {
      city: "WARRI",
      date: "May 4, 2025",
      venue: "KFT Place",
      description:
        "Known as the comedy capital of the nation, Warri is famous for its humor and vibrant nightlife. Expect a spectacular show that leaves a lasting impression.",
      image: warriImg,
    },
    {
      city: "ABUJA",
      date: "July 6, 2025",
      venue: "Transcorp Hilton",
      description:
        "The nation's capital will host an elegant showcase of humor and harmony, bringing together dignitaries, comedy enthusiasts, and music lovers for an evening of class and entertainment.",
      image: abujaimg,
    },
    {
      city: "ASABA",
      date: "August 31, 2025",
      venue: "Orona Hall, Sweet Spirit Hotel",
      description:
        "The show promises an evening of rib-cracking laughter, heartwarming melodies, and moments of pure entertainment that reflect Nigeria's rich cultural tapestry and vibrant storytelling traditions.",
      image: asabaimg,
    },
  ];

  const moreThanComedyImages = [
    "https://picsum.photos/600/400?image=1080",
    "https://picsum.photos/600/400?image=1079",
    "https://picsum.photos/600/400?image=1060",
    "https://picsum.photos/600/400?image=1050",
  ];

  const micsAndMelodyImages = [
    mnm1,
    mnm2,
    mnm3,
    mnm4,
    mnm5,
    mnm6,
    mnm7,
    mnm8,
    mnm9,
    mnm10,
    mnm11,
    mnm12,
    mnm13,
    mnm14,
    mnm15,
    mnm16,
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 to-black"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)",
              animation: "float 20s ease-in-out infinite",
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 animate-fadeIn">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black mb-4 text-red-600 animate-glow">
              KELVINSAPP
            </h1>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                MICS & MELODIES
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
            </div>
          </div>

          <div className="relative inline-block">
            <div className="absolute inset-0 bg-red-600/30 blur-xl opacity-50 animate-pulse"></div>
            <div className="relative border-4 border-red-600 rounded-2xl px-10 py-6 bg-black/80 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-4xl md:text-6xl font-black text-white tracking-wider">
                THE 2025 TOUR
              </h3>
              <p className="text-red-400 text-sm mt-2 font-semibold">
                3 CITIES • ONE UNFORGETTABLE EXPERIENCE
              </p>
            </div>
          </div>

          <div className="mt-12 flex justify-center space-x-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-red-600">3</p>
              <p className="text-gray-400 text-sm">CITIES</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-red-600">5+</p>
              <p className="text-gray-400 text-sm">MONTHS</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-red-600">∞</p>
              <p className="text-gray-400 text-sm">MEMORIES</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-red-600 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-red-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Tour Introduction */}
      <div className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black"></div>
        <div
          id="intro"
          data-animate
          className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
            isVisible.intro
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-red-600">
              A Journey of Laughter & Music
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
              Join Kelvinsapp for an{" "}
              <span className="text-red-400 font-semibold">
                unforgettable experience
              </span>{" "}
              in the 2025 Mics and Melodies Tour, blending{" "}
              <span className="text-red-400 font-semibold">
                side-splitting comedy
              </span>{" "}
              with
              <span className="text-red-400 font-semibold">
                {" "}
                soulful melodies
              </span>{" "}
              across Nigeria's vibrant cities.
            </p>
          </div>
        </div>
      </div>

      {/* Upcoming Shows */}
      <div className="py-20 relative">
        <div className="container mx-auto px-4">
          <div
            id="shows"
            data-animate
            className={`transition-all duration-1000 ${
              isVisible.shows ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 text-red-600">
              UPCOMING SHOWS
            </h2>
            <p className="text-center text-gray-400 mb-16 text-lg">
              Click on a city to explore
            </p>

            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
              {tourDates.map((tour, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer ${
                    activeCity === index
                      ? "scale-105 md:col-span-3"
                      : "hover:scale-105"
                  }`}
                  onClick={() =>
                    setActiveCity(activeCity === index ? -1 : index)
                  }
                >
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-red-950/20 group-hover:bg-red-950/30 transition-all"></div>

                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.city}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                    {/* City Badge */}
                    <div className="absolute top-4 right-4 bg-red-600 px-6 py-2 rounded-full">
                      <p className="font-black text-white text-lg">
                        {tour.city}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative bg-gradient-to-b from-gray-900 to-black p-8 border-t-2 border-red-600/50">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-red-400 font-bold text-sm mb-1">
                          📅 DATE
                        </p>
                        <p className="text-white text-xl font-bold">
                          {tour.date}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-red-400 font-bold text-sm mb-1">
                          📍 VENUE
                        </p>
                        <p className="text-white text-lg font-semibold">
                          {tour.venue}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`transition-all duration-500 overflow-hidden ${
                        activeCity === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pt-4 border-t border-gray-700 mb-6">
                        <p className="text-gray-300 leading-relaxed">
                          {tour.description}
                        </p>
                      </div>
                    </div>

                    <button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-red-600/50 transition-all duration-300 transform hover:-translate-y-1">
                      🎟️ GET TICKETS NOW
                    </button>
                  </div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-red-600/50 transition-colors pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section - More Than Comedy */}
      {/* <div className="py-20 bg-gradient-to-b from-black via-red-950/5 to-black">
        <div className="container mx-auto px-4">
          <div
            id="comedy"
            data-animate
            className={`transition-all duration-1000 ${
              isVisible.comedy
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold mb-4 text-red-600">
                More Than Comedy with Kelvinsapp
              </h3>
              <p className="text-gray-400">Relive the unforgettable moments</p>
            </div>

            <div className="max-w-6xl mx-auto relative">
              <div className="flex overflow-x-auto space-x-6 pb-6 scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-900 snap-x snap-mandatory">
                {moreThanComedyImages.map((image, index) => (
                  <div
                    key={index}
                    className="flex-none w-80 md:w-96 snap-center group"
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-red-600/50">
                      <img
                        src={image}
                        alt={`Comedy Show ${index + 1}`}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <p className="text-white font-bold text-lg">
                          Comedy Show {index + 1}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Gallery Section - Mics and Melody */}
      {/* Gallery Section - Mics and Melody */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div
            id="melody"
            data-animate
            className={`transition-all duration-1000 ${
              isVisible.melody
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold mb-4 text-red-600">
                Kelvinsapp Mics and Melody (Lagos)
              </h3>
              <p className="text-gray-400">Where music meets comedy</p>
            </div>

            {/* Carousel Wrapper */}
            <div className="max-w-6xl mx-auto relative">
              {/* Left Button */}
              <button
                onClick={() => {
                  document.getElementById("melody-carousel").scrollBy({
                    left: -400,
                    behavior: "smooth",
                  });
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition"
              >
                ‹
              </button>

              {/* Carousel */}
              <div
                id="melody-carousel"
                className="flex overflow-x-auto space-x-6 pb-6 scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-900 snap-x snap-mandatory scroll-smooth"
              >
                {micsAndMelodyImages.map((image, index) => (
                  <div
                    key={index}
                    className="flex-none w-80 md:w-96 snap-center group"
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-red-600/50">
                      <img
                        src={image}
                        alt={`Mics and Melody ${index + 1}`}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <p className="text-white font-bold text-lg">
                          Mics & Melody {index + 1}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Button */}
              <button
                onClick={() => {
                  document.getElementById("melody-carousel").scrollBy({
                    left: 400,
                    behavior: "smooth",
                  });
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition"
              >
                ›
              </button>
            </div>

            <div className="text-center mt-8">
              <a
                href="https://www.youtube.com/playlist?list=PLcCmjOVLhTaAd5HLoQJdwEPHADE1xaOTJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-500 !text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition-colors"
              >
                View More on YouTube
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black"></div>
        <div
          id="cta"
          data-animate
          className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
            isVisible.cta ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-red-600">
              Don't Miss Out!
            </h2>
            <p className="text-2xl text-gray-300 mb-10">
              Secure your spot for the most anticipated comedy tour of 2025
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-12 py-5 bg-red-600 hover:bg-red-700 text-white text-xl font-bold rounded-full hover:shadow-2xl hover:shadow-red-600/50 transform hover:scale-110 transition-all duration-300">
                🎫 BOOK ALL SHOWS
              </button>
              <button className="px-12 py-5 bg-transparent border-2 border-white text-white text-xl font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300">
                📧 GET NOTIFIED
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes glow {
          0%,
          100% {
            text-shadow: 0 0 20px rgba(220, 38, 38, 0.5);
          }
          50% {
            text-shadow: 0 0 40px rgba(220, 38, 38, 0.8);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out;
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
