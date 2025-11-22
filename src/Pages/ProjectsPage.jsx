import React from "react";
import { Wrench, BookOpen, Bot, Bug, Check, CheckCircle } from "lucide-react";
import FadeIn from "../Components/FadeIn";

const ProjectsPage = () => (
  <div className="pt-24 pb-20 bg-white">
    {/* Header */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">
            Our Initiatives
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Dirisavi 5.0 Projects
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A two-phased approach to sustainable development.
          </p>
        </div>
      </FadeIn>
    </section>

    {/* Phase 1 */}
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
        <FadeIn delay={100}>
          <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100 h-full">
            <BookOpen className="text-orange-600 w-10 h-10 mb-4" />
            <h3 className="font-bold text-2xl text-gray-900 mb-4">
              Electrical Work & Smart Board Repair
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              In collaboration with the{" "}
              <strong>College of Technology, Maradana</strong>, we are
              conducting a vocational training workshop on electrical work for
              A/L Vocational Stream students at{" "}
              <strong>Sri Subhuthi National School, Battaramulla</strong>.
            </p>
            <p className="text-gray-600 text-sm mb-2 flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              Practical experience in electrical installations.
            </p>
            
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100 h-full">
            <Bot className="text-orange-600 w-10 h-10 mb-4" />
            <h3 className="font-bold text-2xl text-gray-900 mb-4">
              Repair Smart boards
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Repair two damaged smart boards of Sri Subhuthu National School , Battaramulla according to their request
            </p>
            <div className="bg-white p-3 rounded-lg inline-block text-sm font-semibold text-orange-800 mt-2">
              Scheduled: Third week of December
            </div>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* Phase 2 */}
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
            Uplifting low-income families by revitalizing the local bee honey
            industry.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn delay={100}>
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-amber-500 transition-colors h-full">
              <h3 className="text-xl font-bold text-amber-500 mb-4">
                Day 1: Training & Equipment
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                A comprehensive training program for bee honey farmers focusing
                on productivity, product quality, and sustainable farming.
                Essential equipment will be distributed to support their work.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-amber-500 transition-colors h-full">
              <h3 className="text-xl font-bold text-amber-500 mb-4">
                Day 2: Financial Empowerment
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                A counseling and financial empowerment session in partnership
                with the <strong>Bank of Ceylon (BOC)</strong>. We will assist
                families in opening bank accounts and managing finances for
                long-term stability.
              </p>
              <div className="bg-white/10 p-3 rounded-lg inline-block text-sm font-semibold text-amber-200 mt-2">
                Scheduled: Second week of January
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* Objectives */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <FadeIn>
          <div className="bg-white border-l-4 border-orange-600 pl-8 py-2 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Project Objectives
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <Check className="text-green-500 w-5 h-5 mt-1 mr-3 shrink-0" />
                Empowerment through Vocational Training.
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 w-5 h-5 mt-1 mr-3 shrink-0" />
                Support for Rural Livelihoods (Bee Honey).
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 w-5 h-5 mt-1 mr-3 shrink-0" />
                Promotion of Entrepreneurship.
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 w-5 h-5 mt-1 mr-3 shrink-0" />
                Financial Literacy and Inclusion.
              </li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  </div>
);

export default ProjectsPage;
