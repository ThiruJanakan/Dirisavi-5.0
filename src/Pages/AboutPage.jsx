import React from "react";
import {
  Users,
  MapPin,
  Target,
  Sprout,
  Lightbulb,
  Heart,
  Check,
  Trophy,
} from "lucide-react";
import FadeIn from "../Components/FadeIn";

const AboutPage = () => (
  <div className="pt-24 pb-20 bg-[#111]
">
    {/* =========================
        WHAT IS DIRISAVI 5.0?
       ========================= */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <div className="space-y-6">
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-gray-800 text-orange-700 text-xs font-semibold tracking-[0.25em] uppercase">
              What is Dirisavi 5.0?
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white
 leading-tight">
              A Bridge Between{" "}
              <span className="text-orange-600">Education</span> and{" "}
              <span className="text-orange-600">Livelihood</span>
            </h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              Dirisavi 5.0 is the flagship Poverty &amp; Hunger Avenue initiative
              of the Leo Club of University of Kelaniya. This year, we focus on
              empowering young students and rural families through{" "}
              <strong>hands-on technical education</strong> and{" "}
              <strong>sustainable income generation</strong>.
            </p>
            <p className="text-gray-100 leading-relaxed">
              <strong>Phase I</strong> equips A/L Vocational stream students of
              Sri Subhuthi National School, Battaramulla with skills in{" "}
              electrical work and smart board repair, helping them become job-
              ready technicians.
            </p>
            <p className="text-gray-100 leading-relaxed">
              <strong>Phase II</strong> uplifts rural bee-honey farmers through
              practical training, equipment support and financial empowerment in
              collaboration with the <strong>Bank of Ceylon (BOC)</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              {[
                {
                  label: "Phase I",
                  value: "Vocational Training",
                },
                {
                  label: "Phase II",
                  value: "Bee Honey Industry",
                },
                {
                  label: "Core Goal",
                  value: "Sustainable Lifestyles",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-800 border border-orange-100 rounded-2xl px-4 py-3 text-sm shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-600 mb-1">
                    {item.label}
                  </p>
                  <p className="font-semibold text-white
">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="relative group">
            {/* Replace this image by adding /public/dirisavi-5-hero.jpg */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-orange-200 via-amber-100 to-white opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />
            <img
              src="/images/Dirisavi5.0-banner.png"
              alt="Dirisavi 5.0 project visual"
              className="relative w-full h-[360px] md:h-[420px] object-cover rounded-3xl shadow-2xl border border-orange-100 transform group-hover:-translate-y-2 group-hover:rotate-1 transition-transform duration-500"
            />
            <div className="absolute bottom-4 left-4 bg-[#111]
/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg text-xs font-semibold text-white
 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Impacting Students &amp; Rural Families
            </div>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* =========================
        HEADER (Who We Are)
       ========================= */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white
 mt-4 mb-6">
            About Dirisavi 5.0
          </h2>
          <p className="text-xl text-gray-100 leading-relaxed">
            A flagship project by the Leo Club of University of Kelaniya.
          </p>
        </div>
      </FadeIn>
    </section>

    {/* =========================
        OUR LEGACY (existing)
       ========================= */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <img
            src="/images/dirisavi-legacy-updated.png"
            alt="Sri Lankan Villagers"
            className="rounded-2xl shadow-2xl w-full h-[400px] object-cover transform hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(251,146,60,0.4)] transition-all duration-500"
          />
        </FadeIn>
        <FadeIn delay={100}>
          <h3 className="text-3xl font-bold text-white
 mb-6">Our Legacy</h3>
          <p className="text-gray-100 mb-4 leading-relaxed">
            The Leo Club of University of Kelaniya has a distinguished record
            of over 10 years of excellence. With over 1,600 members across six
            faculties, we are a powerhouse of youth leadership.
          </p>
          <p className="text-gray-100 leading-relaxed">
            Previous iterations like Dirisavi 4.0 were awarded{" "}
            <strong>"Best Project for Poverty and Betterment of Life"</strong>.
            Dirisavi 5.0 continues this legacy, focusing on practical education
            and sustainable livelihoods.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* =========================
        LEO CLUB OF UOK + IMAGE
       ========================= */}
    <section className="bg-gray-900 py-20 mb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="space-y-6">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-emerald-700">
                About Leo Club of University of Kelaniya
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-emerald-900">
                Excellence in Service &amp; Leadership
              </h3>
              <p className="text-white
 leading-relaxed">
                The Leo Club of University of Kelaniya is a university-based
                Leo Club in Leo District 306 B2 with over a decade of impactful
                service. The club maintains one of the{" "}
                <strong>highest net membership growths</strong> in the district,
                representing more than <strong>1,600 Leos</strong> from six
                faculties.
              </p>
              <p className="text-white
 leading-relaxed">
                Our members are passionate, skilled and committed to creating a
                positive impact both within the university and across Sri Lanka
                through transformational projects like Dirisavi 5.0.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="relative group">
              {/* Replace this with /public/leo-uok-group.jpg */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-200 via-white to-amber-100 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />
              <img
                src="/images/leo-fam.jpg"
                alt="Leo Club of University of Kelaniya"
                className="relative w-full h-[360px] object-cover rounded-3xl shadow-2xl border border-emerald-100 transform group-hover:-translate-y-2 group-hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
          </FadeIn>
        </div>

        {/* Achievements */}
        <FadeIn delay={200}>
          <div className="mt-14 bg-[#111]
 rounded-3xl shadow-xl px-6 sm:px-10 py-8 border border-emerald-100 ">
            <h4 className="text-2xl font-bold  text-emerald-900 mb-6 flex items-center gap-3 ">
              <Trophy className="text-amber-500 w-8 h-8 " />
              Our Achievements
            </h4>
            <ul className="space-y-4 text-white 
">
              {[
                "The Most Outstanding University-based Leo Club – Winner",
                "The Best IT-enabled Leo Club – Winner",
                "1st Runner-up – The Most Outstanding University-based Club",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-base leading-relaxed"
                >
                  <span className="mt-1">
                    <Trophy className="w-5 h-5 text-amber-500" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-500">
              Dirisavi 5.0 proudly builds on this legacy of excellence in youth
              leadership and community service.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* =========================
        SOCIAL ISSUES (existing)
       ========================= */}
    <section className="bg-gray-800 py-20 mb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center text-white
 mb-12">
            The Challenges We Address
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              icon: Users,
              title: "Poverty",
              desc: "Alleviating financial hardship through sustainable livelihood creation.",
            },
            {
              icon: MapPin,
              title: "Skills Gap",
              desc: "Bridging the technical skills gap in rural education streams.",
            },
            {
              icon: Target,
              title: "Unemployment",
              desc: "Combating youth joblessness with vocational training.",
            },
            {
              icon: Sprout,
              title: "Sustainability",
              desc: "Promoting eco-friendly industries like Bee Honey farming.",
            },
          ].map((item, i) => (
            <FadeIn delay={i * 100} key={i}>
              <div className="bg-[#111]
 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full border-t-4 border-orange-600">
                <item.icon className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-white
 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-100 text-sm">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* =========================
        MISSION / VISION / VALUES (existing)
       ========================= */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white
">Our Compass</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FadeIn>
          <div className="bg-gray-900 text-white p-10 rounded-3xl h-full relative overflow-hidden">
            <div className="relative z-10">
              <Lightbulb className="w-12 h-12 text-amber-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To see a prosperous, self-reliant Sri Lanka where every rural
                community is a thriving hub of innovation.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="bg-orange-600 text-white p-10 rounded-3xl h-full relative overflow-hidden">
            <div className="relative z-10">
              <Target className="w-12 h-12 text-white mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-orange-100 leading-relaxed">
                To empower underprivileged communities by addressing real-world
                challenges through skill development, livelihood development,
                and sustainable support.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="bg-[#111]
 border border-gray-200 p-10 rounded-3xl h-full shadow-xl">
            <Heart className="w-12 h-12 text-orange-600 mb-6" />
            <h3 className="text-2xl font-bold text-white
 mb-4">
              Core Values
            </h3>

            <ul className="space-y-3">
              <li className="flex items-start text-gray-100 gap-2">
                <Check size={16} className="text-orange-600 mt-1" />
                <p>
                  <strong className="mr-1">Integrity:</strong>
                  In Valor We Trust.
                </p>
              </li>

              <li className="flex items-start text-gray-100 gap-2">
                <Check size={16} className="text-orange-600 mt-1" />
                <p>
                  <strong className="mr-1">Leadership:</strong>
                  Empowering youth.
                </p>
              </li>

              <li className="flex items-start text-gray-100 gap-2">
                <Check size={16} className="text-orange-600 mt-1" />
                <p>
                  <strong className="mr-1">Service:</strong>
                  Acts of kindness.
                </p>
              </li>

              <li className="flex items-start text-gray-100 gap-2">
                <Check size={16} className="text-orange-600 mt-1" />
                <p>
                  <strong className="mr-1">Impact:</strong>
                  Measurable outcomes.
                </p>
              </li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* =========================
        TARGET COMMUNITIES (existing)
       ========================= */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white
">
          Our Target Communities
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {[
          "A/L Vocational Stream Students",
          "Low-Income Families",
          "Bee Honey Farmers",
          "ICT Students",
          "Rural Schools",
        ].map((tag, i) => (
          <span
            key={i}
            className="px-6 py-3 rounded-full bg-[#111]
 border border-gray-200 text-white
 shadow-sm text-lg hover:-translate-y-1 hover:shadow-md transition-all duration-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>

    {/* =========================
    ORGANIZING COMMITTEE BANNER
   ========================= */}
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <FadeIn>
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white">Organizing Committee – Dirisavi 5.0</h2>
          <p className="text-gray-500 mt-2">Dedicated hearts and minds behind the project.</p>
        </div>

        <div className="relative group">
          {/* Glow effect (reduced size) */}
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-orange-200 via-amber-100 to-white opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />

          {/* Image (reduced height + width scaled down) */}
          <img
            src="/images/dirisavi-oc-banner.png"
            alt="Dirisavi 5.0 Organizing Committee"
            className="relative w-[85%] max-h-[900px] rounded-2xl shadow-xl border border-gray-100 object-cover mx-auto transform group-hover:-translate-y-1 group-hover:scale-[1.005] transition-transform duration-500"
          />
        </div>
      </FadeIn>
    </section>


    {/* =========================
    LEADERSHIP BODY BANNER
   ========================= */}
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <FadeIn>
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white">Leadership Body – Dirisavi 5.0</h2>
          <p className="text-gray-500 mt-2">Guiding the vision, strategy and long-term impact.</p>
        </div>

        <div className="relative group">
          {/* Glow effect (reduced size) */}
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-emerald-200 via-white to-orange-100 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />

          {/* Image (reduced height + width) */}
          <img
            src="/images/dirisavi-lb-banner.jpg"
            alt="Dirisavi 5.0 Leadership Body"
            className="relative w-[85%] max-h-[900px] rounded-2xl shadow-xl border border-gray-100 object-cover mx-auto transform group-hover:-translate-y-1 group-hover:scale-[1.005] transition-transform duration-500"
          />
        </div>
      </FadeIn>
    </section>

  </div>
);

export default AboutPage;
