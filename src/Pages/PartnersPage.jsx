import React from "react";
import {
  Award,
  CheckCircle,
  HandHeart,
  Users,
  Sparkles
} from "lucide-react";
import FadeIn from "../Components/FadeIn";






const PartnersPage = ({ navigateTo }) => {
  const packages = [
    {
      name: "Platinum Partner",
      price: "Rs 100,000/=",
      color: "bg-slate-900 text-white",
      border: "border-slate-600",
      benefits: [
        "Acknowledged as the Official Platinum Partner of දිරිසවි 5.0.",
        "Recognition across all Leo Club of University of Kelaniya social media platforms.",
        "Company name & logo on all internal and external promotional materials.",
        "Branding on leaflets, product boxes and bags used for the project.",
        "Premium full-colour page advertisement in the official booklet.",
        "Four promotional banners may be displayed at the event venue.",
        "Three-minute advertisement video will be played during the event.",
        "Opportunity for a company representative to participate and engage with the audience.",
        "Stronger long-term collaboration potential with the club."
      ]
    },

    {
      name: "Gold Partner",
      price: "Rs 75,000/=",
      color: "bg-yellow-500 text-slate-900",
      border: "border-yellow-400",
      benefits: [
        "Acknowledged as the Official Gold Partner of දිරිසවි 5.0.",
        "Recognition across all Leo UOK social media platforms through shoutouts.",
        "Company name & logo on key promotional materials related to the project.",
        "Premium full-colour page advertisement in the official booklet.",
        "Three promotional banners may be displayed at the event.",
        "Two-minute advertisement video will be played during the event."
      ]
    },

    {
      name: "Silver Partner",
      price: "Rs 50,000/=",
      color: "bg-gray-200 text-gray-900",   // FIXED HERE
      border: "border-gray-400",
      benefits: [
        "Acknowledged as the Official Silver Partner of දිරිසවි 5.0.",
        "Recognition through social media shoutouts and appreciation posts.",
        "Company logo included in selected promotional materials.",
        "Half-colour page advertisement reserved in the booklet.",
        "Two promotional banners may be displayed at the event venue.",
        "One-minute advertisement video during the event."
      ]
    },

    {
      name: "Bronze Partner",
      price: "Rs 30,000/=",
      color: "bg-orange-700 text-white",
      border: "border-orange-600",
      benefits: [
        "Acknowledged as the Official Bronze Partner of දිරිසවි 5.0.",
        "Recognition across social media with shoutouts and thank-you posts.",
        "Company name & logo included in project promotional materials.",
        "Half-colour page advertisement in the official booklet.",
        "One promotional banner may be displayed at the event venue."
      ]
    }
  ];



  const whyCards = [
    {
      icon: HandHeart,
      title: "Real Grassroot Impact",
      text:
        "Your support directly funds vocational training, bee-hive farming and financial literacy for rural communities – long-term impact, not just one event."
    },
    {
      icon: Users,
      title: "Strong Youth Network",
      text:
        "Partner with an energetic youth movement connected to 1,000+ Leo members island-wide, universities and schools."
    },
    {
      icon: Sparkles,
      title: "Authentic Brand Visibility",
      text:
        "Gain meaningful brand exposure through on-ground activities, storytelling content and community-focused campaigns."
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#111] text-white">





      {/* =========================
    ROLLING PARTNERSHIP CARDS
   ========================= */}
      <section className="py-10 bg-[#F4B315]">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-20">
          <h2 className="text-5xl font-bold text-center text-white mb-10">
            Official Partners of Dirisavi 5.0
          </h2>

          <div className="overflow-hidden">
            <div className="partner-slider">

              {[
                { img: "/images/p1.jpg", link: "https://partner1.com" },
                { img: "/images/p1.jpg", link: "https://partner2.com" },
                { img: "/images/p1.jpg", link: "https://partner3.com" },
                { img: "/images/p1.jpg", link: "https://partner4.com" },
                { img: "/images/p1.jpg", link: "https://partner5.com" },
                { img: "/images/p1.jpg", link: "https://partner6.com" },
              ]
                // Duplicate for smooth infinite scroll
                .concat([
                  { img: "/images/p1.jpg", link: "https://partner1.com" },
                  { img: "/images/p1.jpg", link: "https://partner2.com" },
                ])
                .map((p, i) => (
                  <a
                    key={i}
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                min-w-[280px] h-[180px] bg-white rounded-2xl shadow-xl 
                flex items-center justify-center
                hover:scale-105 hover:rotate-1 transition-all duration-600
              "
                  >
                    <img
                      src={p.img}
                      alt="partner logo"
                      className="max-w-[280px] max-h-[180px] object-contain"
                    />

                  </a>
                ))}
            </div>
          </div>
        </div>
      </section>
      <br>


      </br>

      <br>




      </br>
      {/* FLOATING PDF BUTTON - FLOATS INSIDE SECTION */}
      <div className="relative h-0">
        <a
          href="https://drive.google.com/file/d/1UPE8MpuXKtCThTC3amKcnI5UL5ZTKbo1/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="
      absolute
      -top-6
      right-10
      group
      bg-gradient-to-r from-orange-600 to-amber-500
      text-white font-bold
      px-6 py-4
      rounded-full
      shadow-[0_10px_30px_rgba(255,125,0,0.4)]
      flex items-center gap-3
      transition-all duration-300
      hover:scale-110
      hover:shadow-[0_15px_40px_rgba(255,150,0,0.5)]
    "
        >
          {/* Glow Animation */}
          <span className="
      absolute inset-0 rounded-full
      bg-gradient-to-r from-orange-200 to-yellow-200
      opacity-0 group-hover:opacity-30
      blur-xl transition duration-500
    "></span>

          {/* Button Content */}
          <span className="relative z-10 flex items-center gap-2">
            View Proposal PDF
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </a>
      </div>


      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-orange-600 font-bold tracking-widest uppercase text-xl">
              Join Our Mission
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
              Partner With Dirisavi 5.0
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Together, we empower A/L students, uplift bee-honey farmers and fight poverty & hunger.
              All sponsorship packages are "negotiable", we can fully tailor custom benefits based on your brand goals.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* WHY PARTNER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Partner with Dirisavi 5.0?
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyCards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 80}>
              <div className="group [perspective:1200px]">
                <div
                  className="
                    relative h-full rounded-2xl bg-[#111] border border-gray-700
                    p-6 shadow-md transition-transform duration-500 ease-out
                    group-hover:-translate-y-3 group-hover:rotate-[0.8deg] group-hover:scale-[1.02]
                    group-hover:shadow-2xl [transform-style:preserve-3d]
                  "
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none bg-gradient-to-br from-orange-50/10 via-transparent to-amber-100/10 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                      <card.icon size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-400">{card.text}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>



      {/* Sponsorship Packages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-4 text-center">
            Official Monetary Partners
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
            Choose a package or request a customised sponsorship plan tailored to your organisation’s brand visibility goals.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {packages.map((pkg, i) => (
            <FadeIn delay={i * 120} key={pkg.name}>
              <div className="group [perspective:1300px]">
                <div
                  className={`
                    relative h-full p-8 rounded-3xl shadow-xl border-4 ${pkg.border} ${pkg.color}
                    flex flex-col overflow-hidden transition-transform duration-500 ease-out
                    group-hover:-translate-y-4 group-hover:rotate-[1deg] group-hover:scale-[1.03]
                    group-hover:shadow-[0_30px_80px_rgba(15,23,42,0.45)]
                    [transform-style:preserve-3d]
                  `}
                >
                  <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/15 via-transparent to-white/5 transition-opacity duration-500" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="text-center mb-6">
                      <Award className="mx-auto w-12 h-12 mb-4 opacity-80" />
                      <h3 className="text-2xl font-extrabold uppercase tracking-wider mb-2">
                        {pkg.name}
                      </h3>
                      <p className="text-4xl font-black tracking-tight">{pkg.price}</p>
                    </div>

                    <ul className="space-y-3 mb-8 flex-grow text-sm">
                      {pkg.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3 leading-relaxed">
                          <CheckCircle size={18} className="text-emerald-300 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => navigateTo("contact")}
                      className="mt-auto w-full py-4 rounded-xl bg-[#111] text-white font-bold text-lg hover:bg-black transition-all shadow-lg hover:shadow-2xl"
                    >
                      Become a {pkg.name.split(" ")[0]} Partner
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Other Partners */}
      <section className="bg-gray-900 py-20 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4 text-center">
              Other Partnership Opportunities
            </h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
              We also welcome in-kind contributions, collaborations, and skill-based support.
              These options are fully customisable.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Knowledge Partner", desc: "Conduct mentoring, technical sessions or provide educational materials." },
              { title: "Printing Partner", desc: "Assist with printing booklets, certificates, and branding materials." },
              { title: "Beverage Partner", desc: "Provide refreshments for students, volunteers & trainers." },
              { title: "Photography & Media Partner", desc: "Cover the event through professional photos/videos." },
              { title: "Logistics / Equipment Partner", desc: "Provide tools, bee-keeping equipment or transport support." },
              { title: "Gift & Welfare Partner", desc: "Sponsor gift packs, scholarships or welfare support." }
            ].map((item, i) => (
              <FadeIn delay={i * 70} key={item.title}>
                <div className="group">
                  <div
                    className="
                      bg-[#111] p-6 rounded-2xl shadow-sm border border-gray-700
                      hover:-translate-y-2 hover:shadow-xl hover:border-orange-500
                      transition-all duration-300
                    "
                  >
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <Award size={18} className="text-orange-500" />
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
