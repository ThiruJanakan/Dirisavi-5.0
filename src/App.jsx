// src/App.jsx
import React, { useState, useEffect, useRef } from "react";

import { DIRISAVI_KNOWLEDGE } from "./data/dirisavi_knowledge";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminLogin from "./Pages/Adminlogin";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Mail } from "lucide-react";


import {
  Menu,
  X,
  HandHeart,
  Facebook,
  Instagram,
  Sparkles,
  Bot,
  User,
  Loader2,
  Send
} from "lucide-react";



import {
  Routes,
  Route,
  useNavigate,
  useLocation
} from "react-router-dom";

import FadeIn from "./Components/FadeIn";
import MarkdownRenderer from "./Components/MarkdownRenderer";

import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage";
import PartnersPage from "./Pages/PartnersPage";
import ContactPage from "./Pages/ContactPage.jsx";

const TikTokIcon = ({ size = 18, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 24 24"
    className={className}
  >
    <path d="M12.75 2h3.056c.21 1.48 1.322 3.078 3.194 3.219v3.018c-1.32.124-2.51-.29-3.64-.967v6.33c0 5.01-5.43 7.3-8.88 4.01-2.35-2.21-2.21-6.02.29-8.11 1.07-.87 2.39-1.33 3.75-1.33.35 0 .7.03 1.04.1v3.19c-.66-.2-1.41-.12-2.03.25-1.37.8-1.48 2.78-.21 3.7 1.32 1 3.29.39 3.54-1.33.05-.31.08-.63.08-.95V2z"/>
  </svg>
);


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Catalyst form loading state
  const [loadingCatalyst, setLoadingCatalyst] = useState(false);

  // AI Chat State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text:
        "Ayubowan! 🙏 I am your AI guide for Dirisavi 5.0.\n\nAsk me about :\n 1.Vocational Training Workshops 📚\n 2.Bee Honey Industry Project 🐝\n 3.How to Partner or Volunteer 🤝"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Scroll Handler (for navbar background)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Catalyst mini-form submit
  const handleCatalystSubmit = async (e) => {
    e.preventDefault();
    setLoadingCatalyst(true);

    try {
      const formData = new FormData(e.target);

      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        interest: formData.get("interest"),
        createdAt: serverTimestamp()
      };

      await addDoc(collection(db, "catalystRequests"), data);

      alert("Thank you! We will contact you shortly.");
      e.target.reset();
    } catch (err) {
      console.error(err);
      alert("Error sending your message. Please try again.");
    } finally {
      setLoadingCatalyst(false);
    }
  };

  // Auto-scroll chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping, isChatOpen]);

  const handleNavClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Map page key from HomePage to route path
  const navigateTo = (pageKey) => {
    const map = {
      home: "/",
      about: "/about",
      projects: "/projects",
      partners: "/partners",
      contact: "/contact"
    };
    handleNavClick(map[pageKey] || "/");
  };

  const toggleChat = (prefill = "") => {
    setIsChatOpen((prev) => !prev);
    if (!isChatOpen && prefill) {
      setTimeout(() => handleSendMessage(prefill), 100);
    }
  };

  const handleSendMessage = async (textOverride = null) => {
  const text = textOverride || chatInput.trim();
  if (!text) return;

  setMessages(prev => [...prev, { role: "user", text }]);
  setChatInput("");
  setIsTyping(true);

  const apiKey = "apikey-here"; // replace with the new one
  
 

  const systemPrompt = `
You are the AI Ambassador for "Dirisavi 5.0". 
You MUST answer ONLY using the official project PDF content below.
If the answer is NOT found in the PDF, say:
"Information not available in the official Dirisavi 5.0 document."

-------------------------
PDF CONTENT:
${DIRISAVI_KNOWLEDGE}
-------------------------

Rules:
- Do NOT guess.
- Do NOT hallucinate.
- Keep answers under 80 words.
- Be friendly, warm, professional.
`;



  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text }]
            }
          ],
          systemInstruction: {
            role: "system",
            parts: [{ text: systemPrompt }]
          }
        })
      }
    );

    const data = await response.json();

    if (data.error) {
      console.error("Gemini error:", data.error);
      setMessages(prev => [
        ...prev,
        {
          role: "ai",
          text: "I’m having trouble reaching the server. Please try again! 🙏"
        }
      ]);
    } else {
      const aiText =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "I didn't quite get that — can you repeat?";

      setMessages(prev => [...prev, { role: "ai", text: aiText }]);
    }
  } catch (error) {
    console.error("Network error:", error);

    setMessages(prev => [
      ...prev,
      {
        role: "ai",
        text: "Network error. Please check your connection or try again later. 🙏"
      }
    ]);
  } finally {
    setIsTyping(false);
  }
};


  const path = location.pathname;

  const isActive = (p) =>
    p === "/" ? path === "/" : path.startsWith(p);

  return (
    <div className="font-sans antialiased bg-gradient-to-b from-[#050509] via-[#050509] to-[#111827] text-gray-100 selection:bg-orange-600 selection:text-white relative min-h-screen flex flex-col">
      {/* --- Navigation --- */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 shadow-xl backdrop-blur-md py-2"
            : "bg-black/60 backdrop-blur-md py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleNavClick("/")}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-orange-20 to-amber-1000 rounded-lg flex items-center justify-center text-white shadow-lg shadow-orange-100/40">
                 <img
              src="/images/logo.jpg" 
              alt="Dirisavi 5.0 project visual"
              className="relative w-full h-[50px] md:h-[50px] object-cover rounded-3xl shadow-2xl border border-orange-100 transform group-hover:-translate-y-2 group-hover:rotate-1 transition-transform duration-500"
            />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-lg leading-none tracking-tight">
                  දිරිසවි 5.0
                </span>
                <span className="text-[14px] font-bold tracking-[0.2em] text-orange-400 uppercase">
                  Dirisavi 5.0
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Projects", "/projects"],
                ["Partners", "/partners"],
                ["Contact", "/contact"]
              ].map(([label, route]) => (
                <button
                  key={route}
                  onClick={() => handleNavClick(route)}
                  className={`font-medium transition-colors ${
                    isActive(route)
                      ? "text-orange-400"
                      : "text-gray-300 hover:text-orange-300"
                  }`}
                >
                  {label}
                </button>
              ))}

              <button
                onClick={() => handleNavClick("/contact")}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:from-orange-400 hover:to-amber-400 transition-all shadow-lg shadow-orange-500/40 hover:scale-105"
              >
                Partner With Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-gray-800 absolute w-full shadow-xl">
            <div className="flex flex-col p-4 space-y-4">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Projects", "/projects"],
                ["Partners", "/partners"],
                ["Contact", "/contact"]
              ].map(([label, route]) => (
                <button
                  key={route}
                  onClick={() => handleNavClick(route)}
                  className="text-left font-medium text-gray-100 hover:text-orange-300"
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("/contact")}
                className="w-full text-center px-5 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold"
              >
                Partner With Us
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* --- Main Content Area (Routes) --- */}
      <main className="flex-grow pt-20">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage navigateTo={navigateTo} toggleChat={toggleChat} />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route
            path="/partners"
            element={<PartnersPage navigateTo={navigateTo} />}
          />

          <Route
            path="/admin/login"
            element={<AdminLogin onLogin={() => navigate("/admin")} />}
          />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>

        {/* Shared Contact Section (bottom of all pages except /contact) */}
        {path !== "/contact" && (
          <section id="contact" className="py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/40 via-black to-orange-900/40">
              <img
                src="https://images.unsplash.com/photo-1622396636133-743013323fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                className="w-full h-full object-cover opacity-20 mix-blend-overlay"
                alt="Texture"
              />
            </div>
            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
              <FadeIn>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Be a Catalyst for Change
                </h2>
                <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
                  Whether you are a corporate entity, an NGO, or a volunteer,
                  your contribution can light up a village. Join the Dirisavi
                  5.0 movement.
                </p>
                <div className="bg-[#050509] border border-orange-500/30 p-8 rounded-2xl shadow-[0_0_40px_rgba(249,115,22,0.25)] max-w-3xl mx-auto text-left">
                  <form
                    className="space-y-6"
                    onSubmit={handleCatalystSubmit}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-100 mb-2">
                          Name
                        </label>
                        <input
                          name="name"
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-black/40 text-gray-100 placeholder-gray-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-500/60 outline-none"
                          placeholder="Your Name"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-100 mb-2">
                          Email
                        </label>
                        <input
                          name="email"
                          type="email"
                          className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-black/40 text-gray-100 placeholder-gray-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-500/60 outline-none"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-100 mb-2">
                        I'm interested in...
                      </label>
                      <select
                        name="interest"
                        className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-black/60 text-gray-100 focus:border-orange-400 focus:ring-2 focus:ring-orange-500/60 outline-none"
                        required
                      >
                        <option value="Corporate Partnership">
                          Corporate Partnership
                        </option>
                        <option value="Volunteering">Volunteering</option>
                        <option value="Donating Resources">
                          Donating Resources
                        </option>
                        <option value="Media Inquiry">Media Inquiry</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={loadingCatalyst}
                      className="w-full py-4 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-lg hover:from-orange-400 hover:to-amber-400 transition-colors shadow-lg shadow-orange-500/40 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loadingCatalyst ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </FadeIn>
            </div>
          </section>
        )}
      </main>

      {/* --- Footer --- */}
      <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <HandHeart className="text-orange-500" size={28} />
                <span className="font-sans font-bold text-xl">
                  දිරිසවි 5.0
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Empowering rural Sri Lanka through sustainable development. A
                non-profit initiative by Leo Club of University of Kelaniya.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-amber-400">
                Quick Links
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => handleNavClick("/")}
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("/about")}
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("/projects")}
                    className="hover:text-white transition-colors"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("/partners")}
                    className="hover:text-white transition-colors"
                  >
                    Partners
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("/contact")}
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-amber-400">
                Connect
              </h4>
              <div className="flex space-x-4 mb-3">

  {/* Instagram */}
  <a
    href="https://www.instagram.com/leo_uok?igsh=YzdqOG1hbmEyaGRi"
    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-600 transition-colors text-white"
  >
    <Instagram size={18} />
  </a>

  {/* TikTok */}
  <a
    href="https://www.tiktok.com/@uok_leos?_r=1&_t=ZS-91h3OxhxlxN/" // add your real TikTok link
    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-600 transition-colors text-white"
  >
    <TikTokIcon size={18} />
  </a>

</div>

<div className="flex space-x-4">

  {/* Facebook */}
  <a
    href="https://www.facebook.com/share/17NAqwpFqv/"
    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-600 transition-colors text-white"
  >
    <Facebook size={18} />
  </a>

  {/* Gmail */}
  <a
    href="mailto:leouok306b2@gmail.com"
    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-600 transition-colors text-white"
  >
    <Mail size={18} />
  </a>

</div>

              <p className="mt-4 text-gray-500 text-sm">
                Leo club of University of Kelaniya,
                <br />
                Sri Lanka
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2025 Dirisavi 5.0 Initiative. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* --- AI Chat Widget --- */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => toggleChat()}
          className={`group flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-[0_0_30px_rgba(248,113,22,0.65)] hover:scale-110 transition-all duration-300 focus:outline-none ${
            isChatOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          {isChatOpen ? (
            <X size={28} />
          ) : (
            <Sparkles size={28} className="animate-pulse" />
          )}
          {!isChatOpen && (
            <span className="absolute right-20 bg-black text-white text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
              Ask Dirisavi AI ✨
            </span>
          )}
        </button>

        <div
          className={`absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-[#050509] rounded-2xl shadow-[0_0_40px_rgba(15,23,42,0.9)] flex flex-col border border-gray-800 transform transition-all duration-300 origin-bottom-right overflow-hidden ${
            isChatOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-4 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black/20 rounded-full flex items-center justify-center text-white">
                <Bot size={18} />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">
                  Dirisavi Assistant ✨
                </h3>
                <p className="text-white/80 text-[10px]">Powered by Gemini</p>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white/80 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          <div
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-950 to-gray-900"
            ref={chatContainerRef}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-2.5 ${
                  msg.role === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs ${
                    msg.role === "user" ? "bg-gray-500" : "bg-orange-600"
                  }`}
                >
                  {msg.role === "user" ? <User size={14} /> : "AI"}
                </div>
                <div
                  className={`p-3 rounded-2xl max-w-[85%] shadow-sm text-sm ${
                    msg.role === "user"
                      ? "bg-orange-600 text-white rounded-tr-none"
                      : "bg-[#050509] text-gray-100 border border-gray-700 rounded-tl-none"
                  }`}
                >
                  <MarkdownRenderer text={msg.text} />
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-orange-600 flex-shrink-0 flex items-center justify-center text-white text-xs">
                  AI
                </div>
                <div className="bg-[#050509] p-4 rounded-2xl rounded-tl-none border border-gray-700 shadow-sm">
                  <Loader2 className="w-4 h-4 animate-spin text-orange-400" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-800 bg-[#050509] shrink-0">
            <div className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1 px-4 py-2 bg-black/60 text-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/60 placeholder-gray-500"
                placeholder="Ask about projects..."
                disabled={isTyping}
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!chatInput.trim() || isTyping}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white flex items-center justify-center hover:from-orange-400 hover:to-amber-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
