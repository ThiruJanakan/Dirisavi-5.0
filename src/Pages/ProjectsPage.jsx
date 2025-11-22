import React from "react";
import { Wrench, BookOpen, Bot, Bug, Check, CheckCircle } from "lucide-react";
import FadeIn from "../Components/FadeIn";

const ProjectsPage = () => (
  <div className="pt-24 pb-20 bg-white">

    {/* ---------------- HEADER ---------------- */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">
            Our Initiatives
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Dirisavi 5.0 Projects
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mt-4">
            A two-phased approach to sustainable development.
          </p>
        </div>
      </FadeIn>

      {/* ---------- PROJECT INTRO VIDEO ---------- */}
      <FadeIn delay={200}>
        <div className="mt-12 flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 w-full max-w-4xl">
            <video
              src="/videos/dirisavi-intro.mp4"   // ← Replace with your video path
              controls
              className="w-full h-auto"
            />
          </div>
        </div>
      </FadeIn>
    </section>

    {/* ---------------- PHASE 1 ---------------- */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <FadeIn>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
            <Wrench size={24} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            Phase I: Vocational Training Workshop
          </h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* -------- CARD 1 WITH IMAGE -------- */}
        <FadeIn delay={100}>
          <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100 h-full">

            {/* IMAGE */}
            <div className="rounded-xl overflow-hidden mb-4 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1526498460520-4c246339dccb"
                className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
                alt="Electrical Training"
              />
            </div>

            <BookOpen className="text-orange-600 w-10 h-10 mb-4" />
            <h3 className="font-bold text-2xl text-gray-900 mb-4">
              Electrical Work & Smart Board Repair
            </h3>

            <p className="text-gray-600 mb-4">
              Training workshop in collaboration with the{" "}
              <strong>College of Technology, Maradana</strong> for A/L
              vocational students of{" "}
              <strong>Sri Subhuthi National School, Battaramulla</strong>.
            </p>

            <p className="text-gray-600 text-sm mb-2 flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              Practical experience in electrical installations.
            </p>
          </div>
        </FadeIn>

        {/* -------- CARD 2 WITH IMAGE -------- */}
        <FadeIn delay={200}>
          <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100 h-full">

            <div className="rounded-xl overflow-hidden mb-4 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238"
                className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
                alt="Smart Board Repair"
              />
            </div>

            <Bot className="text-orange-600 w-10 h-10 mb-4" />

            <h3 className="font-bold text-2xl text-gray-900 mb-4">
              Repair Smart Boards
            </h3>

            <p className="text-gray-600 mb-4">
              Repairing two damaged smart boards requested by the school
              administration.
            </p>

            <div className="bg-white p-3 rounded-lg inline-block text-sm font-semibold text-orange-800 mt-2">
              Scheduled: Third week of December
            </div>
          </div>
        </FadeIn>

      </div>
    </section>

    {/* ---------------- PHASE 2 ---------------- */}
    <section className="bg-gray-900 text-white py-20 mb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn>
          <div className="flex items-center gap-4 mb-8 text-amber-500">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <Bug size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">
              Phase II: Bee Honey Industry Development
            </h2>
          </div>

          <p className="text-gray-400 max-w-2xl mb-12">
            Empowering rural families by supporting sustainable bee honey production.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* DAY 1 */}
          <FadeIn delay={100}>
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-amber-500 h-full">

              <img
                src="https://images.unsplash.com/photo-1602526218850-3f93e8f3114e"
                className="rounded-xl mb-4 w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
                alt="Bee Training"
              />

              <h3 className="text-xl font-bold text-amber-500 mb-4">
                Day 1: Training & Equipment
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Comprehensive training for bee honey farmers with equipment distribution.
              </p>
            </div>
          </FadeIn>

          {/* DAY 2 */}
          <FadeIn delay={200}>
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-amber-500 h-full">

              <img
                src="https://images.unsplash.com/photo-1567427013955-2b0b5da0923f"
                className="rounded-xl mb-4 w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
                alt="Financial Empowerment"
              />

              <h3 className="text-xl font-bold text-amber-500 mb-4">
                Day 2: Financial Empowerment
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Financial counseling sessions with{" "}
                <strong>Bank of Ceylon (BOC)</strong> to support long-term livelihoods.
              </p>

              <div className="bg-white/10 p-3 rounded-lg inline-block text-sm font-semibold text-amber-200 mt-2">
                Scheduled: Second week of January
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>

    {/* ---------------- OBJECTIVES ---------------- */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <FadeIn>
        <div className="bg-white border-l-4 border-orange-600 pl-8 py-2 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Project Objectives
          </h3>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <Check className="text-green-500 w-5 h-5 mt-1 mr-3" />
              Empowerment through Vocational Training.
            </li>
            <li className="flex items-start">
              <Check className="text-green-500 w-5 h-5 mt-1 mr-3" />
              Support for Rural Livelihoods (Bee Honey).
            </li>
            <li className="flex items-start">
              <Check className="text-green-500 w-5 h-5 mt-1 mr-3" />
              Promotion of Entrepreneurship.
            </li>
            <li className="flex items-start">
              <Check className="text-green-500 w-5 h-5 mt-1 mr-3" />
              Financial Literacy and Inclusion.
            </li>
          </ul>
        </div>
      </FadeIn>
    </section>
  </div>
);

export default ProjectsPage;
