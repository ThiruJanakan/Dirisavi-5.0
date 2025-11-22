import React from "react";
import { Award, CheckCircle } from "lucide-react";
import FadeIn from "../Components/FadeIn";

const PartnersPage = ({ navigateTo }) => {
  const packages = [
    {
      name: "Platinum Partner",
      price: "Rs 200,000/=",
      color: "bg-slate-900 text-white",
      border: "border-slate-600",
      benefits: [
        "Recognized as 'Official Platinum Partner'",
        "Social media shoutouts & appreciation posts",
        "Logo on all promotional materials (Leaflets, Boxes, Bags)",
        "Company representative participation",
        "Premium Full-colored page ad in booklet",
        "4 Promotional banners at venue",
        "3-minute advertisement video during event",
        "Acknowledgement in official speeches",
        "Access to 1,000+ Leo members",
        "Future collaboration potential"
      ]
    },
    {
      name: "Gold Partner",
      price: "Rs 150,000/=",
      color: "bg-yellow-500 text-white",
      border: "border-yellow-400",
      benefits: [
        "Recognized as 'Official Gold Partner'",
        "Social media shoutouts & appreciation posts",
        "Logo on promotional materials (Leaflets, Boxes, Bags)",
        "Premium Full-colored page ad in booklet",
        "3 Promotional banners at venue",
        "2-minute advertisement video during event"
      ]
    },
    {
      name: "Silver Partner",
      price: "Rs 100,000/=",
      color: "bg-gray-300 text-gray-800",
      border: "border-gray-400",
      benefits: [
        "Recognized as 'Official Silver Partner'",
        "Social media shoutouts & appreciation posts",
        "Logo on promotional materials",
        "Half-colored page ad in booklet",
        "2 Promotional banners at venue",
        "1-minute advertisement video during event"
      ]
    },
    {
      name: "Bronze Partner",
      price: "Rs 75,000/=",
      color: "bg-orange-700 text-white",
      border: "border-orange-600",
      benefits: [
        "Recognized as 'Official Bronze Partner'",
        "Social media shoutouts & appreciation posts",
        "Logo on promotional materials",
        "Half-colored page ad in booklet",
        "1 Promotional banner at venue"
      ]
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">
              Join Our Mission
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Partner With Dirisavi 5.0
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Opportunities for negotiation and collaboration in future events.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Sponsorship Packages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <FadeIn>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Official Monetary Partners
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {packages.map((pkg, i) => (
            <FadeIn delay={i * 100} key={i}>
              <div
                className={`p-8 rounded-2xl shadow-xl border-4 ${pkg.border} ${pkg.color} h-full flex flex-col`}
              >
                <div className="text-center mb-6">
                  <Award className="mx-auto w-12 h-12 mb-4 opacity-80" />
                  <h3 className="text-2xl font-bold uppercase tracking-wider mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-4xl font-extrabold">{pkg.price}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-grow text-sm opacity-90">
                  {pkg.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle size={18} className="shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigateTo("contact")}
                  className="w-full py-4 rounded-xl bg-white text-gray-900 font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg"
                >
                  Become a {pkg.name.split(" ")[0]} Partner
                </button>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Other Partners */}
      <section className="bg-gray-50 py-20 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Other Partnership Opportunities
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Knowledge Partner",
                desc: "Conduct sessions or provide educational resources."
              },
              {
                title: "Printing Partner",
                desc: "Provide leaflets, banners, and posters."
              },
              {
                title: "Beverage Partner",
                desc: "Supply beverages for participants."
              },
              {
                title: "Photography Partner",
                desc: "Capture official photos and videos."
              },
              {
                title: "Media Partner",
                desc: "Support event publicity and coverage."
              },
              {
                title: "Food Partner",
                desc: "Provide meals/snacks for the event."
              },
              {
                title: "Gift Partner",
                desc: "Sponsor gifts or branded items."
              }
            ].map((item, i) => (
              <FadeIn delay={i * 50} key={i}>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-orange-500 transition-colors">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
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
