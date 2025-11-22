import React from "react";
import {
  Users,
  MapPin,
  Target,
  Sprout,
  Lightbulb,
  Heart,
  Check
} from "lucide-react";
import FadeIn from "../Components/FadeIn";

const AboutPage = () => (
  <div className="pt-24 pb-20 bg-white">
    {/* Header */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            About Dirisavi 5.0
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A flagship project by the Leo Club of University of Kelaniya.
          </p>
        </div>
      </FadeIn>
    </section>

    {/* Origin & Purpose */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <img
            src="https://images.unsplash.com/photo-1620619767323-b95a89183081?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Sri Lankan Villagers"
            className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
          />
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Legacy</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            The Leo Club of University of Kelaniya has a distinguished record
            of over 10 years of excellence. With over 1,600 members across six
            faculties, we are a powerhouse of youth leadership.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Previous iterations like Dirisavi 4.0 were awarded "Best Project
            for Poverty and Betterment of Life". Dirisavi 5.0 continues this
            legacy, focusing on practical education and sustainable livelihoods.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* Social Issues */}
    <section className="bg-orange-50 py-20 mb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            The Challenges We Address
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              icon: Users,
              title: "Poverty",
              desc: "Alleviating financial hardship through sustainable livelihood creation."
            },
            {
              icon: MapPin,
              title: "Skills Gap",
              desc: "Bridging the technical skills gap in rural education streams."
            },
            {
              icon: Target,
              title: "Unemployment",
              desc: "Combating youth joblessness with vocational training."
            },
            {
              icon: Sprout,
              title: "Sustainability",
              desc: "Promoting eco-friendly industries like Bee Honey farming."
            }
          ].map((item, i) => (
            <FadeIn delay={i * 100} key={i}>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow h-full border-t-4 border-orange-600">
                <item.icon className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Mission, Vision, Values */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900">Our Compass</h2>
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
  <div className="bg-white border border-gray-200 p-10 rounded-3xl h-full shadow-xl">
    <Heart className="w-12 h-12 text-orange-600 mb-6" />
    <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Values</h3>

    <ul className="space-y-3">
      <li className="flex items-start text-gray-600 gap-2">
        <Check size={16} className="text-orange-600 mt-1" />
        <p>
          <strong className="mr-1">Integrity:</strong>
          In Valor We Trust.
        </p>
      </li>

      <li className="flex items-start text-gray-600 gap-2">
        <Check size={16} className="text-orange-600 mt-1" />
        <p>
          <strong className="mr-1">Leadership:</strong>
          Empowering youth.
        </p>
      </li>

      <li className="flex items-start text-gray-600 gap-2">
        <Check size={16} className="text-orange-600 mt-1" />
        <p>
          <strong className="mr-1">Service:</strong>
          Acts of kindness.
        </p>
      </li>

      <li className="flex items-start text-gray-600 gap-2">
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

    {/* Target Communities */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Our Target Communities
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {[
          "A/L Vocational Stream Students",
          "Low-Income Families",
          "Bee Honey Farmers",
          "ICT Students",
          "Rural Schools"
        ].map((tag, i) => (
          <span
            key={i}
            className="px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-700 shadow-sm text-lg"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  </div>
);

export default AboutPage;
