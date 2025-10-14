import React, { useState, useEffect } from "react";
import kelvin1 from "../assets/kelvinfiles/kelvin1.jpg";
import kelvinarmy from "../assets/kelvinfiles/kelvin-army.jpg";
import kelvinperform from "../assets/kelvinfiles/kelvinperform.jpg";


export default function BioPage() {
  const [activeSection, setActiveSection] = useState(0);
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

  const timeline = [
    { year: "1998", event: "Family relocated to Ughelli" },
    { year: "2011", event: "Started Diploma in Law at DSU" },
    { year: "2012", event: "Comedy career launched" },
    { year: "2013", event: "First major award" },
    { year: "2017", event: "Graduated with History & Int'l Studies" },
    { year: "2019", event: "Completed NYSC in Lagos" },
    { year: "2020", event: "Celebrity Friend of Armed Forces" }
  ];

  const performances = [
    "Stand Up Nigeria", "Pepsi Rhythm Unplugged 2016", "Chronicles of Ushbebe",
    "AT LIVE Easter Edition", "Akpororo Vs Akpororo", "The Warri Again Show",
    "Nite Of A Thousand Laughs", "Laugh Out Loud", "Bovi Man On Fire",
    "Oxymoron of Kennyblaq"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-110 animate-pulse"
          style={{
            backgroundImage: `url(${kelvin1})`,
            animation: "slowZoom 20s ease-in-out infinite alternate"
          }}
        ></div>
        
        <div className="relative z-20 text-center px-4 animate-fadeIn">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 bg-clip-text text-transparent animate-gradient">
            KELVINSAPP
          </h1>
          <p className="text-2xl md:text-4xl font-light mb-8 text-gray-200">
            Africa's Versatile Entertainer
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <span className="px-4 py-2 bg-red-600 rounded-full">Comedian</span>
            <span className="px-4 py-2 bg-yellow-600 rounded-full">Music Comedy Maestro</span>
            <span className="px-4 py-2 bg-red-600 rounded-full">Worship Minister</span>
            <span className="px-4 py-2 bg-yellow-600 rounded-full">Humanitarian</span>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-20">
        <div 
          id="intro" 
          data-animate
          className={`max-w-5xl mx-auto transition-all duration-1000 transform ${
            isVisible.intro ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-r from-red-900 to-black p-8 md:p-12 rounded-3xl shadow-2xl border border-red-800">
            <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
              <div className="md:col-span-1">
                <img 
                  src={kelvin1} 
                  alt="Kelvinsapp" 
                  className="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="md:col-span-2">
                <h2 className="text-4xl font-bold mb-4 text-red-400">The Man Behind The Laughter</h2>
                <p className="text-xl leading-relaxed text-gray-300">
                  <span className="text-yellow-400 font-semibold">Eseavworho Oghenero Kelvin</span>, 
                  professionally known as Kelvinsapp, is a celebrated comedian, music comedy maestro, 
                  worship minister, and cultural ambassador from Delta State, Nigeria. Born to 
                  <span className="text-red-400"> Mr. Stephen Ifenedo</span> and 
                  <span className="text-red-400"> Mrs. Comfort</span>, this devoted Christian has 
                  become one of Delta's finest exports to Lagos and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-20 bg-black bg-opacity-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-red-400">Journey Through Time</h2>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div 
                key={index}
                id={`timeline-${index}`}
                data-animate
                className={`flex items-center mb-8 transition-all duration-700 transform ${
                  isVisible[`timeline-${index}`] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-red-600 text-white font-bold text-xl px-6 py-3 rounded-full min-w-[100px] text-center">
                  {item.year}
                </div>
                <div className="flex-1 ml-8 bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500 hover:bg-gray-700 transition-colors">
                  <p className="text-lg">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div 
            id="education"
            data-animate
            className={`max-w-5xl mx-auto transition-all duration-1000 ${
              isVisible.education ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <h2 className="text-5xl font-bold text-center mb-12 text-red-400">Educational Excellence</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-red-900 to-gray-900 p-8 rounded-2xl shadow-xl hover:shadow-red-500/50 transition-all transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Primary Education</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Universal Primary School, Kwale</li>
                  <li>• Eserophe Primary School, Ughelli</li>
                  <li>• Baptist Standard School</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-yellow-900 to-gray-900 p-8 rounded-2xl shadow-xl hover:shadow-yellow-500/50 transition-all transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold mb-4 text-red-400">Secondary Education</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Noble Crest Secondary School</li>
                  <li>• Obukowho Demonstration School</li>
                  <li>• Success International Academy</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-red-900 p-8 rounded-2xl shadow-xl hover:shadow-red-500/50 transition-all transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Higher Education</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Diploma in Law - Delta State University (Oleh Campus)</li>
                  <li>• National Open University</li>
                  <li>• History & International Studies - DSU (2017)</li>
                  <li>• NYSC Lagos (2019)</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-red-800 to-yellow-800 p-8 rounded-2xl shadow-xl hover:shadow-yellow-500/50 transition-all transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold mb-4 text-white">Honorary Doctorate</h3>
                <p className="text-gray-200 font-semibold">
                  Double Honorary Doctorate in Public Administration
                </p>
                <p className="text-gray-300 text-sm mt-2">
                  Institut Supérieur de Communication et de Gestion (ISCG University, Benin Republic)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Musical Journey */}
      <div className="py-20 bg-gradient-to-r from-black via-red-950 to-black">
        <div className="container mx-auto px-4">
          <div 
            id="music"
            data-animate
            className={`max-w-5xl mx-auto transition-all duration-1000 ${
              isVisible.music ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-5xl font-bold text-center mb-12 text-red-400">Musical Foundation</h2>
            <div className="bg-black bg-opacity-60 p-8 md:p-12 rounded-3xl border border-red-800">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-yellow-400">From Choir to Comedy</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Kelvinsapp's entertainment journey began in the children's choir at Channel of Truth 
                    Ministry in Ughelli, Delta State. His natural talent and leadership saw him rise from 
                    choir member to choir master, and eventually to the senior choir.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    During his diploma studies, he served as a two-time Music Director in the Anglican 
                    Student Fellowship (ASF), honing the musical skills that would define his unique comedy style.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-red-900 to-yellow-900 p-6 rounded-2xl">
                  <h4 className="text-2xl font-bold mb-4 text-white">Musical Achievements</h4>
                  <ul className="space-y-3 text-gray-200">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">★</span>
                      <span>Member of "Back Of the Street Boys" music comedy crew</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">★</span>
                      <span>Two albums released as worship minister</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">★</span>
                      <span>Recognized as one of Nigeria's finest worship ministers from South-South</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">★</span>
                      <span>Professional Master of Ceremonies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performances Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 text-red-400">Stage Presence</h2>
          <p className="text-center text-gray-400 mb-12 text-xl">Major Shows & Performances</p>
          <div 
            id="performances"
            data-animate
            className={`max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 transition-all duration-1000 ${
              isVisible.performances ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            {performances.map((show, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-red-900 to-black p-4 rounded-xl text-center transform hover:scale-110 hover:bg-gradient-to-br hover:from-yellow-900 hover:to-red-900 transition-all duration-300 cursor-pointer border border-red-800 hover:border-yellow-500"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <p className="text-sm font-semibold">{show}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <img 
              src={kelvinperform} 
              alt="Kelvinsapp performing" 
              className="max-w-4xl w-full mx-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Awards Showcase */}
      <div className="py-20 bg-gradient-to-b from-black to-red-950">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-red-400">Hall of Recognition</h2>
          <div 
            id="awards"
            data-animate
            className={`max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${
              isVisible.awards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {[
              { title: "Fastest Rising Comedian", org: "Peace Legend Awards (2013)", icon: "🚀" },
              { title: "Best Street Gospel Act", org: "SSU Awards (2015)", icon: "🎤" },
              { title: "Active Entertainer", org: "Warri Update (2016)", icon: "⚡" },
              { title: "Next Rated Comedian", org: "Peace Legend Awards (2016 & 2017)", icon: "⭐" },
              { title: "Contribution to Entertainment", org: "G29 Production (2017)", icon: "🏆" },
              { title: "Celebrity Friend of Armed Forces", org: "Nigeria (2020)", icon: "🎖️" },
              { title: "Comedian of the Year", org: "Warri Awards (2017, 2020/21, 2022)", icon: "👑" },
              { title: "Hall of Fame Induction", org: "Delta State University, Abraka", icon: "🌟" },
            ].map((award, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900 to-red-900 p-6 rounded-2xl border-2 border-yellow-600 hover:border-yellow-400 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/50"
              >
                <div className="text-5xl mb-3">{award.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-yellow-400">{award.title}</h3>
                <p className="text-gray-400 text-sm">{award.org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Military & Advocacy */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div 
            id="military"
            data-animate
            className={`max-w-5xl mx-auto transition-all duration-1000 ${
              isVisible.military ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <h2 className="text-5xl font-bold text-center mb-12 text-red-400">Patriotic Service</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src={kelvinarmy} 
                  alt="Kelvinsapp with military" 
                  className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-900 to-black p-6 rounded-2xl border-l-4 border-yellow-500">
                  <h3 className="text-2xl font-bold mb-3 text-yellow-400">Armed Forces Recognition</h3>
                  <p className="text-gray-300">
                    In 2020, honored as Celebrity Friend of the Armed Forces of Nigeria, joining 
                    notable figures like Daddy Showkey, AY, Ramsey Nouah, Rema, and Teni Apata.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-black to-red-900 p-6 rounded-2xl border-l-4 border-red-500">
                  <h3 className="text-2xl font-bold mb-3 text-red-400">TTOT Foundation</h3>
                  <p className="text-gray-300">
                    Active member, ambassador, and trustee of the Tribute to Our Troops Charity 
                    Foundation (TTOT)—Africa's first military-recognized non-profit.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-red-900 to-yellow-900 p-6 rounded-2xl border-l-4 border-yellow-500">
                  <h3 className="text-2xl font-bold mb-3 text-yellow-400">Social Advocacy</h3>
                  <p className="text-gray-300">
                    Champion of "Say No to Drugs" campaign and ambassador to Abuja Marathon, 
                    promoting peace, health, and community development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legacy Footer */}
      <div className="py-20 bg-gradient-to-t from-black via-red-950 to-black">
        <div className="container mx-auto px-4">
          <div 
            id="legacy"
            data-animate
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              isVisible.legacy ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-400 to-red-400">
              A Legacy of Purpose
            </h2>
            <p className="text-2xl leading-relaxed text-gray-300 mb-8">
              Kelvinsapp's influence transcends the stage. He is a patriot, humanitarian, and 
              advocate for progress, using his platform to unite communities and uplift lives. 
              Through his work with the Tribute to Our Troops Charity Foundation, his genre-defining 
              music comedy, and his advocacy campaigns, Kelvinsapp continues to redefine the role 
              of entertainers as agents of change.
            </p>
            <div className="inline-block bg-gradient-to-r from-red-600 to-yellow-600 p-1 rounded-full">
              <div className="bg-black px-8 py-4 rounded-full">
                <p className="text-xl font-bold text-white">
                  Inspiring Laughter | Fostering Unity | Building Africa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slowZoom {
          0% { transform: scale(1.1); }
          100% { transform: scale(1.3); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out;
        }
      `}</style>
    </div>
  );
}