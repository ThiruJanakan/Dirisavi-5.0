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
      price: "Rs 200,000/=",
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
      price: "Rs 150,000/=",
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
      price: "Rs 100,000/=",
      color: "bg-gray-200 text-gray-900",
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
      price: "Rs 75,000/=",
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
        "Your support directly funds vocational training, bee-hive farming and financial literacy for rural communities – not just one event, but long-term change."
    },
    {
      icon: Users,
      title: "Strong Youth Network",
      text:
        "Partner with an energetic youth movement connected to 1,000+ Leo members island-wide, universities and schools, giving you access to future leaders."
    },
    {
      icon: Sparkles,
      title: "Authentic Brand Visibility",
      text:
        "Gain positive brand exposure through on-ground activities, storytelling content and community-focused campaigns that feel genuine – not just another logo wall."
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">
              Join Our Mission
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">
              Partner With Dirisavi 5.0
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Together, we empower A/L students, uplift bee-honey farmers and
              fight poverty and hunger. Sponsorship packages are fully
              negotiable – we can tailor a custom package that fits your
              brand&apos;s goals and budget.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* WHY PARTNER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <FadeIn>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Partner with Dirisavi 5.0?
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyCards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 80}>
              <div className="group [perspective:1200px]">
                <div
                  className="
                    relative h-full rounded-2xl bg-white border border-gray-200
                    p-6 shadow-md
                    transition-transform duration-500 ease-out
                    group-hover:-translate-y-3 group-hover:rotate-[0.8deg] group-hover:scale-[1.02]
                    group-hover:shadow-2xl
                    [transform-style:preserve-3d]
                  "
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none bg-gradient-to-br from-orange-50 via-transparent to-amber-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                      <card.icon size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {card.text}
                    </p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Official Monetary Partners
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            Choose the package that best matches your marketing objectives – or
            talk to us to customize benefits such as branding, on-site
            engagement and content visibility specifically for your brand.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {packages.map((pkg, i) => (
            <FadeIn delay={i * 120} key={pkg.name}>
              <div className="group [perspective:1300px]">
                <div
                  className={`
                    relative h-full p-8 rounded-3xl shadow-xl border-4 ${pkg.border} ${pkg.color}
                    flex flex-col overflow-hidden
                    transition-transform duration-500 ease-out
                    group-hover:-translate-y-4 group-hover:rotate-[1deg] group-hover:scale-[1.03]
                    group-hover:shadow-[0_30px_80px_rgba(15,23,42,0.45)]
                    [transform-style:preserve-3d]
                  `}
                >
                  {/* glossy highlight */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/15 via-transparent to-white/5 transition-opacity duration-500" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="text-center mb-6">
                      <Award className="mx-auto w-12 h-12 mb-4 opacity-80" />
                      <h3 className="text-2xl font-extrabold uppercase tracking-wider mb-2">
                        {pkg.name}
                      </h3>
                      <p className="text-4xl font-black tracking-tight">
                        {pkg.price}
                      </p>
                    </div>

                    <ul className="space-y-3 mb-8 flex-grow text-sm">
                      {pkg.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 leading-relaxed"
                        >
                          <CheckCircle
                            size={18}
                            className="shrink-0 mt-0.5 text-emerald-300"
                          />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => navigateTo("contact")}
                      className="mt-auto w-full py-4 rounded-xl bg-white/95 text-gray-900 font-bold text-lg hover:bg-white transition-all shadow-lg hover:shadow-2xl"
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
      <section className="bg-gray-50 py-20 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Other Partnership Opportunities
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
              Beyond monetary sponsorships, we warmly welcome in-kind support
              and expert collaborations. These too can be adjusted based on what
              your organization can offer.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Knowledge Partner",
                desc: "Conduct technical sessions, mentoring or provide educational resources for students and farmers."
              },
              {
                title: "Printing Partner",
                desc: "Support printing of booklets, certificates, banners and other branding material."
              },
              {
                title: "Beverage Partner",
                desc: "Provide refreshments for participants, volunteers and trainers during both phases."
              },
              {
                title: "Photography & Media Partner",
                desc: "Capture professional photos / videos and support media coverage of the project."
              },
              {
                title: "Logistics / Equipment Partner",
                desc: "Assist with tools, bee-keeping equipment, sound systems or transport."
              },
              {
                title: "Gift & Welfare Partner",
                desc: "Sponsor gift packs, scholarships or welfare items for students and families."
              }
            ].map((item, i) => (
              <FadeIn delay={i * 70} key={item.title}>
                <div className="group">
                  <div
                    className="
                      bg-white p-6 rounded-2xl shadow-sm border border-gray-200
                      hover:-translate-y-2 hover:shadow-xl hover:border-orange-500
                      transition-all duration-300
                    "
                  >
                    <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
                      <Award size={18} className="text-orange-500" />
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
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
