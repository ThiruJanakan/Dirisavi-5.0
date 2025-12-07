import React, { useRef, useEffect, useState } from "react";
import BounceCards from "../Components/Bouncecards";

import {
  ChevronDown,
  Sparkles,
  ArrowRight,
  Wrench,
  Bug,
  Quote
} from "lucide-react";
import { motion, useScroll, useTransform, useInView, animate, AnimatePresence } from "framer-motion";

// --- Reusable Animated Components ---

// 1. Fade Up Wrapper (Replaces your FadeIn)
const FadeUp = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: delay, type: "spring", bounce: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// 2. Animated Counter for Stats
const Counter = ({ from, to, label }) => {
  const nodeRef = useRef();
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const node = nodeRef.current;
    if (inView) {
      const controls = animate(from, to, {
        duration: 2,
        onUpdate(value) {
          node.textContent = Math.round(value).toLocaleString();
        }
      });
      return () => controls.stop();
    }
  }, [from, to, inView]);

  return (
    <div className="flex flex-col items-start">
      <div className="flex items-baseline">
        <span ref={nodeRef} className="text-3xl font-bold text-orange-500" />
        <span className="text-3xl font-bold text-orange-500">+</span>
      </div>
      <span className="text-sm text-gray-400 mt-1">{label}</span>
    </div>
  );
};

// 3. Stagger Container for Hero Text
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

// --- Main Component ---

const HomePage = ({ navigateTo = () => { }, toggleChat = () => { } }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  // Parallax effect for Hero Image
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Flyer Carousel Logic
  const flyerImages = [
    "https://ik.imagekit.io/yiqhi8qnnw/Dirisavi/Posts/WhatsApp%20Image%202025-12-07%20at%2007.12.41.jpeg",
    "https://ik.imagekit.io/yiqhi8qnnw/Dirisavi/Posts/WhatsApp%20Image%202025-12-07%20at%2000.21.18.jpeg?updatedAt=1765049163589"
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % flyerImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#111] overflow-x-hidden font-sans selection:bg-orange-500 selection:text-white">

      {/* Hero Section */}
      <section ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <img src="/images/home-banner.jpg" // Ensure this path is valid
            alt="Sri Lankan Rural Life"
            className="w-full h-full object-cover object-center scale-110"
            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop"; }} // Fallback image
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/40 backdrop-blur-[2px]"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="text-left"
            >
              <motion.div variants={staggerItem}>
                <span className="inline-block py-2 px-4 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 backdrop-blur-md text-xs md:text-sm font-bold tracking-widest mb-6 uppercase shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                  CSR Initiative 2025
                </span>
              </motion.div>

              <motion.h1 variants={staggerItem} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
                Empowering Roots.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                  Enriching Futures.
                </span>
              </motion.h1>

              <motion.p variants={staggerItem} className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
                Igniting the potential of rural Sri Lanka through sustainable skill
                development and livelihood enhancement.
              </motion.p>

              <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-5 justify-start items-center sm:items-start">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(234, 88, 12, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleChat("How can I volunteer?")}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-600 to-orange-700 text-white font-bold text-lg transition-all flex items-center gap-2 group"
                >
                  <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
                  Ask AI How to Help
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigateTo("about")}
                  className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-md text-white border border-white/20 font-bold text-lg hover:border-white/50 transition-all"
                >
                  About The Project
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Column: Flyer Image Box */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, type: "spring" }}
              className="relative hidden lg:block"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={flyerImages[currentImageIndex]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    alt="Dirisavi Event Flyer"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 absolute inset-0"
                  />
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 cursor-pointer hover:text-orange-500 transition-colors"
          onClick={() => document.getElementById('about-preview').scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Intro Section */}
      <section id="about-preview" className="py-10 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeUp>
                <h2 className="text-orange-600 font-bold tracking-widest text-sm uppercase mb-3 flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-orange-600"></span>
                  The Initiative
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 font-sans">
                  දිරිසවි 5.0 (Dirisavi)
                </h3>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed border-l-2 border-gray-800 pl-6">
                  "Dirisavi" translates to <span className="text-gray-200 font-medium">Strength and Courage</span>.
                  Our 5.0 initiative marks the latest chapter led by the Poverty and Hunger Avenue
                  of the Leo Club of University of Kelaniya.
                </p>

                <div className="grid grid-cols-3 gap-8 pt-6 border-t border-gray-800">
                  <Counter from={0} to={10} label="Years Active" />
                  <Counter from={0} to={3000} label="Lives Impacted" />
                  <Counter from={0} to={1600} label="Volunteers" />
                </div>

                <motion.button
                  whileHover={{ x: 10 }}
                  onClick={() => navigateTo("projects")}
                  className="mt-10 text-orange-500 font-bold hover:text-orange-400 flex items-center gap-2 group"
                >
                  View our projects
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </FadeUp>
            </div>

            <FadeUp delay={0.2}>
              <div className="flex justify-center items-center w-full">
                <BounceCards
                  className="custom-bounceCards"
                  images={[
                    "https://ik.imagekit.io/yiqhi8qnnw/Dirisavi/4.1.4.jpg",
                    "https://ik.imagekit.io/yiqhi8qnnw/Dirisavi/4.1.3.jpg",
                    "https://ik.imagekit.io/yiqhi8qnnw/Dirisavi/4.1.5.jpg",
                    "https://ik.imagekit.io/yiqhi8qnnw/Dirisavi/4.0.6.jpg",
                    "https://ik.imagekit.io/yiqhi8qnnw/Dirisavi/4.1.2.jpg"
                  ]}
                  containerWidth={550}
                  containerHeight={300}
                  animationDelay={0.6}
                  animationStagger={0.08}
                  easeType="elastic.out(1, 0.5)"
                  transformStyles={[
                    "rotate(5deg) translate(-160px)",
                    "rotate(0deg) translate(-80px)",
                    "rotate(-5deg)",
                    "rotate(5deg) translate(80px)",
                    "rotate(-5deg) translate(160px)"
                  ]}
                  enableHover={false}
                />
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* Project Phases Summary */}
      <section id="phases" className="py-5 bg-[#111] relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-20">
              <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">
                Our Strategy
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
                Two Pillars of Change
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Phase 1 Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-[2rem] p-8 lg:p-12 border border-white/5 hover:border-orange-600/50 transition-colors duration-500 group h-full flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/5 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity group-hover:opacity-100 opacity-50"></div>

              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 text-orange-700 rounded-2xl flex items-center justify-center mb-10 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                <Wrench size={40} strokeWidth={1.5} />
              </div>

              <h3 className="text-3xl font-bold text-white mb-6 relative z-10">
                Phase I: Vocational Training
              </h3>

              <p className="text-gray-400 mb-8 leading-relaxed flex-grow text-lg relative z-10">
                Empowering A/L Vocational Stream students with practical
                electrical workshops. Collaborating with the Technical College of Maradana for smart board repairs and hands-on technical skill building.
              </p>

              <button
                onClick={() => navigateTo("projects")}
                className="mt-auto text-white font-bold flex items-center gap-3 text-lg group-hover:text-orange-500 transition-colors relative z-10"
              >
                <span className="border-b border-white/20 pb-1 group-hover:border-orange-500 transition-colors">Explore Phase I</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>

            {/* Phase 2 Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-[2rem] p-8 lg:p-12 border border-white/5 hover:border-amber-500/50 transition-colors duration-500 group h-full flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity group-hover:opacity-100 opacity-50"></div>

              <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 text-amber-700 rounded-2xl flex items-center justify-center mb-10 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                <Bug size={40} strokeWidth={1.5} />
              </div>

              <h3 className="text-3xl font-bold text-white mb-6 relative z-10">
                Phase II: Bee Honey Industry
              </h3>

              <p className="text-gray-400 mb-8 leading-relaxed flex-grow text-lg relative z-10">
                Uplifting low-income families through sustainable bee honey farming.
                Providing training, equipment distribution, and financial empowerment
                sessions in partnership with the Bank of Ceylon.
              </p>

              <button
                onClick={() => navigateTo("projects")}
                className="mt-auto text-white font-bold flex items-center gap-3 text-lg group-hover:text-amber-500 transition-colors relative z-10"
              >
                <span className="border-b border-white/20 pb-1 group-hover:border-amber-500 transition-colors">Explore Phase II</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Banner with Animated Pattern */}
      <section className="py-32 bg-orange-900 relative overflow-hidden flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px]"
        ></motion.div>

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 text-white">
          <FadeUp>
            <Quote className="w-16 h-16 mx-auto mb-8 text-amber-400 opacity-80" />
            <h2 className="text-3xl md:text-6xl font-bold mb-10 leading-tight font-serif">
              "To empower underprivileged communities through skill development,
              livelihood development, and sustainable support."
            </h2>
            <div className="w-32 h-1.5 bg-amber-400 mx-auto rounded-full shadow-[0_0_20px_rgba(251,191,36,0.5)]"></div>
          </FadeUp>
        </div>
      </section>

      {/* Infinite Photo Marquee */}
      <section className="py-24 bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <FadeUp>
            <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">
              Throwback — Dirisavi 4.0
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
              Highlights From Last Year
            </h2>
          </FadeUp>
        </div>

        <div className="relative w-full flex overflow-hidden mask-linear-gradient">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>

          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            style={{ width: "fit-content" }}
          >
            {[...Array(2)].map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                {[
                  "https://ik.imagekit.io/yiqhi8qnnw/Dirisavi/4.0.1.jpg",
                  "https://ik.imagekit.io/yiqhi8qnnw/Dirisavi/4.0.5.jpg",
                  "https://ik.imagekit.io/yiqhi8qnnw/Dirisavi/4.1.1.jpg",
                  "https://ik.imagekit.io/yiqhi8qnnw/Dirisavi/4.0.2.jpg",
                  "https://ik.imagekit.io/yiqhi8qnnw/Dirisavi/4.0.3.jpg",
                  "https://ik.imagekit.io/yiqhi8qnnw/Dirisavi/4.1.4.jpg"
                ].map((src, i) => (
                  <div
                    key={`${setIndex} -${i} `}
                    className="min-w-[350px] h-[240px] rounded-xl overflow-hidden relative group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-orange-600/0 group-hover:bg-orange-600/20 transition-colors z-10 duration-300"></div>
                    <img
                      src={src}
                      alt={`Dirisavi 4.0`}
                      onError={(e) => { e.target.src = `https://picsum.photos/seed/${i + 10}/400/300`; }}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div >
                ))}
              </React.Fragment >
            ))}
          </motion.div >
        </div >
      </section >

      {/* Dirisavi 4.0 Summary Section */}
      < section className="py-24 bg-[#111] relative overflow-hidden" >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <FadeUp>
            <div className="text-center mb-16">
              <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">
                Dirisavi 4.0
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
                A Journey of Impact & Empowerment
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mt-4">
                Fourth phase of the Dirisavi initiative, uplifting the rural community of
                Kosgahahinna through sustainable development, nutrition support, financial literacy,
                and practical self-employment tools.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Card 1 */}
            <FadeUp delay={0.1}>
              <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all">
                <h3 className="text-xl font-bold text-white mb-3">Crop Preservation</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A dehydration machine was donated to help farmers reduce crop wastage
                  and create new income streams. SANASA experts conducted hands-on training.
                </p>
              </div>
            </FadeUp>

            {/* Card 2 */}
            <FadeUp delay={0.2}>
              <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all">
                <h3 className="text-xl font-bold text-white mb-3">Financial Literacy</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  RDB Bank guided villagers on budgeting, saving, avoiding scams, and using
                  loan facilities. Bank accounts were opened during the session.
                </p>
              </div>
            </FadeUp>

            {/* Card 3 */}
            <FadeUp delay={0.3}>
              <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all">
                <h3 className="text-xl font-bold text-white mb-3">Self-Employment</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Practical guidance for small-scale entrepreneurs on product improvement,
                  pricing, and business growth conducted by Divisional Secretariat officers.
                </p>
              </div>
            </FadeUp>

            {/* Card 4 */}
            <FadeUp delay={0.4}>
              <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all">
                <h3 className="text-xl font-bold text-white mb-3">Nutrition Support</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Pregnant mothers received nutrition packs and guidance from the local midwife,
                  addressing high malnutrition rates in Kosgahahinna.
                </p>
              </div>
            </FadeUp>

          </div>

          {/* Impact Stats */}


          <div className="grid grid-cols-3 gap-80 pt-10 large-text border-t border-gray-800">
            <Counter from={0} to={60} label="Families Supported" />
            <Counter from={0} to={3570} label="Service Hours" />
            <Counter from={0} to={4} label="Major Impact Areas" />
          </div>

        </div>
      </section >



    </div >
  );
};

export default HomePage;