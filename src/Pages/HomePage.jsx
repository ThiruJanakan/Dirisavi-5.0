import React from "react";
import {
  ChevronDown,
  Sparkles,
  ArrowRight,
  Wrench,
  Bug,
  Quote
} from "lucide-react";
import FadeIn from "../Components/FadeIn";

const HomePage = ({ navigateTo, toggleChat }) => (
  <>
    {/* Hero Section */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/home-banner.jpg" 
          alt="Sri Lankan Rural Life"
          className="w-full h-full object-cover object-center"
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <FadeIn>
          <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/50 backdrop-blur-sm text-xs md:text-sm font-bold tracking-wider mb-6 uppercase">
            CSR Initiative 2025
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Empowering Roots.
            <br />
            <span className="text-amber-500">Enriching Futures.</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Igniting the potential of rural Sri Lanka through sustainable skill
            development and livelihood enhancement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => toggleChat("How can I volunteer?")}
              className="px-8 py-4 rounded-full bg-orange-600 text-white font-bold text-lg hover:bg-orange-800 transition-all shadow-lg shadow-orange-600/40 hover:scale-105 transform flex items-center gap-2"
            >
              <Sparkles size={20} />
              Ask AI How to Help
            </button>
            <button
              onClick={() => navigateTo("about")}
              className="px-8 py-4 rounded-full bg-[#111]
/10 backdrop-blur-md text-white border border-white/30 font-bold text-lg hover:bg-[#111]
 hover:text-orange-900 transition-all hover:scale-105 transform"
            >
              About The Project
            </button>
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <ChevronDown size={32} />
      </div>
    </section>

    {/* Intro Section (Preview) */}
    <section id="about-preview" className="py-20 bg-[#111]
">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-orange-600 font-bold tracking-wide text-sm uppercase mb-2">
              The Initiative
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white
 mb-6 font-sans">
              දිරිසවි 5.0 (Dirisavi)
            </h3>
            <p className="text-lg text-gray-100 mb-6 leading-relaxed">
              "Dirisavi" translates to "Strength and Courage." Our 5.0
              initiative marks the latest chapter led by the Poverty and Hunger
              Avenue of the Leo Club of University of Kelaniya.
            </p>
            <div className="flex gap-40 border-t border-gray-100 pt-8">
              {[
                { label: "Years of Excellence", val: "10+" },
                { label: "Lives Impacted", val: "3M+" },
                { label: "Club Members", val: "1,600+" }
              ].map((stat, i) => (
                <div key={i}>
                  <span className="block text-3xl font-bold text-orange-500">
                    {stat.val}
                  </span>
                  <span className="text-sm text-gray-300">{stat.label}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigateTo("projects")}
              className="mt-8 text-orange-500 font-bold hover:text-orange-800 flex items-center gap-2"
            >
              View our projects <ArrowRight size={16} />
            </button>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="/images/field-visit.jpg" 
                alt="Field Visit Of Dirisavi 5.0"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                <p className="text-white font-medium italic border-l-4 border-orange-500 pl-4">
                  "Empowering the hands that build our nation."
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* Mission Banner */}
    <section className="py-24 bg-orange-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10 text-white">
        <FadeIn>
          <Quote className="w-12 h-12 mx-auto mb-6 text-amber-400 opacity-50" />
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            "To empower underprivileged communities through skill development,
            livelihood development, and sustainable support."
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full"></div>
        </FadeIn>
      </div>
    </section>

{/* Dirisavi 4.0 Photo Carousel */}
<section className="py-16 bg-gray-800 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
    <FadeIn>
      <span className="text-orange-600 font-bold tracking-wide uppercase">
        Throwback — Dirisavi 4.0
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-white
 mt-2">
        Highlights From Last Year
      </h2>
    </FadeIn>
  </div>

  <div className="relative w-full overflow-hidden">
    <div className="flex space-x-6 animate-swing-scroll">
      {[
        "/images/4.0.1.jpg",
        "/images/4.0.2.jpg",
        "/images/4.0.3.jpg",
        "/images/4.0.4.jpg",
        "/images/4.0.5.jpg",
        "/images/4.0.6.jpg"
      ].map((src, i) => (
        <div
          key={i}
          className="min-w-[350px] h-[220px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0"
        >
          <img
            src={src}
            alt={`Dirisavi 4.0 - ${i}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  </div>
</section>




    {/* Project Phases Summary */}
    <section id="phases" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-orange-600 font-bold tracking-wide uppercase">
              Our Strategy
            </span>
            <h2 className="text-4xl font-bold text-white
 mt-2">
              Two Pillars of Change
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Phase 1 */}
          <FadeIn>
            <div className="bg-[#111]
 rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 border-b-4 border-orange-600 group h-full flex flex-col">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <Wrench size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white
 mb-4">
                Phase I: Vocational Training
              </h3>
              <p className="text-gray-100 mb-6 leading-relaxed flex-grow">
                Empowering A/L Vocational Stream students with practical
                electrical workshops with collaboration of Technical college of Maradana, smart board repairs.
              </p>
              <button
                onClick={() => navigateTo("projects")}
                className="mt-auto text-orange-600 font-bold hover:text-orange-800 flex items-center gap-2 text-sm group-hover:translate-x-2 transition-transform"
              >
                Explore Phase I <ArrowRight size={16} />
              </button>
            </div>
          </FadeIn>

          {/* Phase 2 */}
          <FadeIn delay={200}>
            <div className="bg-[#111]
 rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 border-b-4 border-amber-500 group h-full flex flex-col">
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <Bug size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white
 mb-4">
                Phase II: Bee Honey Industry
              </h3>
              <p className="text-gray-100 mb-6 leading-relaxed flex-grow">
                Uplifting low-income families through bee honey farming
                training, equipment distribution, and financial empowerment
                sessions with the Bank of Ceylon.
              </p>
              <button
                onClick={() => navigateTo("projects")}
                className="mt-auto text-orange-600 font-bold hover:text-orange-800 flex items-center gap-2 text-sm group-hover:translate-x-2 transition-transform"
              >
                Explore Phase II <ArrowRight size={16} />
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  </>
);

export default HomePage;
