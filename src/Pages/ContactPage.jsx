import React, { useState } from "react";
import { db } from "../firebase";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import {
  Mail
} from "lucide-react";

import FadeIn from "../Components/FadeIn";

export default function ContactPage() {
  // ---------------- PARTNERSHIP FORM STATE ----------------
  const [loadingPartnership, setLoadingPartnership] = useState(false);

  const handlePartnershipSubmit = async (e) => {
    e.preventDefault();
    setLoadingPartnership(true);

    try {
      const formData = new FormData(e.target);

      const data = {
        organizationName: formData.get("organizationName"),
        contactPerson: formData.get("contactPerson"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        package: formData.get("package"),
        additionalInfo: formData.get("additionalInfo"),
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, "partnershipInquiries"), data);

      alert("Partnership inquiry sent successfully! 🙏");
      e.target.reset();
    } catch (err) {
      console.error(err);
      alert("Error sending inquiry. Please try again.");
    } finally {
      setLoadingPartnership(false);
    }
  };

  // ---------------- PAGE UI ----------------
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Contact Dirisavi 5.0 Team
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Partner with us or reach out to our dedicated committee members to
              make a difference.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* --- CONTACT SECTION WITH PROJECT COMMITTEE + FORM --- */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

    {/* LEFT SIDE — PROJECT COMMITTEE DETAILS */}
    <FadeIn delay={200}>
      <div className="h-full flex flex-col gap-8">

        {/* Committee Members */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Project Committee
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              ["Osanda Lakshan", "Co-Chair", "076 144 6604"],
              ["Janagan Thiruchelvam", "LB Lead", "070 530 0007"],
              ["Nimesha Herath", "Co-Director", "076 774 3665"],
              ["Minoja Weerasinghe", "Co-Director", "074 023 5792"],
            ].map(([name, role, phone], i) => (
              <div
                key={i}
                className="bg-orange-50 p-4 rounded-xl border border-orange-100 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900">{name}</h4>
                <p className="text-orange-600 text-sm font-bold">{role}</p>
                <p className="text-gray-600 text-sm mt-1">{phone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Email Card */}
        <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-orange-600 shrink-0 shadow-sm">
            <Mail size={24} />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg">Email Us</h4>
            <p className="text-gray-600 mt-1">
              <a
                href="mailto:povertyandhunger2025@gmail.com"
                className="hover:text-orange-600 transition-colors font-semibold"
              >
                povertyandhunger2025@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-64 w-full">
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2212177506017!2d79.91609007497121!3d6.973360818273482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae257d62d5851e3%3A0x804d79669481532a!2sUniversity%20of%20Kelaniya!5e0!3m2!1sen!2slk!4v1709229999999!5m2!1sen!2slk"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  title="University of Kelaniya"
/>

        </div>
      </div>
    </FadeIn>

    {/* RIGHT SIDE — PARTNERSHIP INQUIRY FORM (Matches screenshot perfectly) */}
    <FadeIn>
      <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">

        <h1 className="text-center text-4xl font-bold text-green-800 mb-3">
          Partnership Inquiry
        </h1>

        <p className="text-center text-gray-700 mb-10 text-lg">
          Interested in partnering with us? Fill out the form below.
        </p>

        <form onSubmit={handlePartnershipSubmit} className="space-y-8">

          {/* 2 Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Organization Name
              </label>
              <input
                name="organizationName"
                type="text"
                required
                className="w-full px-4 py-3 rounded-md border bg-white shadow-sm focus:ring-2 focus:ring-green-800"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Contact Person
              </label>
              <input
                name="contactPerson"
                type="text"
                required
                className="w-full px-4 py-3 rounded-md border bg-white shadow-sm focus:ring-2 focus:ring-green-800"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-md border bg-white shadow-sm focus:ring-2 focus:ring-green-800"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Phone Number
              </label>
              <input
                name="phone"
                type="tel"
                required
                className="w-full px-4 py-3 rounded-md border bg-white shadow-sm focus:ring-2 focus:ring-green-800"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-800 font-semibold mb-2">
                Partnership Package
              </label>

              <select
                name="package"
                className="w-full px-4 py-3 rounded-md border bg-white shadow-sm focus:ring-2 focus:ring-green-800"
                required
              >
                <option value="">Select a Package</option>
                <option value="platinum">Platinum Partner</option>
                <option value="gold">Gold Partner</option>
                <option value="silver">Silver Partner</option>
                <option value="bronze">Bronze Partner</option>
                <option value="knowledge">Knowledge Partner</option>
                <option value="printing">Printing Partner</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-800 font-semibold mb-2">
                Additional Information
              </label>

              <textarea
                name="additionalInfo"
                rows="5"
                className="w-full px-4 py-3 rounded-md border bg-white shadow-sm focus:ring-2 focus:ring-green-800"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            disabled={loadingPartnership}
            className="px-10 py-3 bg-green-800 text-white text-lg font-semibold rounded-md shadow hover:bg-green-900 transition disabled:opacity-50"
          >
            {loadingPartnership ? "Sending..." : "Submit Inquiry"}
          </button>
        </form>

      </div>
    </FadeIn>
  </div>
</section>


      {/* Support Section — unchanged */}
      {/* Keeping your existing UI here exactly the same */}
    </div>
  );
}
