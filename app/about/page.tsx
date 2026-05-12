"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import { FaUsers, FaStar, FaHeart } from "react-icons/fa";
import { MdSpa } from "react-icons/md";

export default function AboutPage() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Navbar onCartClick={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <main className="max-w-3xl mx-auto px-6 py-20">
        <div className="flex items-center gap-2 mb-4">
          <MdSpa className="text-amber-400 text-xl" />
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
            Our Story
          </p>
        </div>

        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
          Beauty is our <span className="text-amber-500">craft.</span>
        </h1>

        <p className="text-gray-500 text-lg leading-relaxed mb-6">
          Glam Studio was founded with one simple belief — everyone deserves to feel
          extraordinary. Our team of skilled stylists and beauty experts bring years
          of experience and passion to every appointment.
        </p>
        <p className="text-gray-500 text-lg leading-relaxed mb-12">
          From precision haircuts to luxurious skin treatments, we use only the finest
          products and techniques to ensure you leave feeling your absolute best.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { stat: "500+", label: "Happy clients", icon: <FaUsers className="text-2xl text-amber-400" /> },
            { stat: "8+", label: "Expert stylists", icon: <FaHeart className="text-2xl text-amber-400" /> },
            { stat: "5.0", label: "Average rating", icon: <FaStar className="text-2xl text-amber-400" /> },
          ].map(({ stat, label, icon }) => (
            <div key={label} className="bg-amber-50 border border-amber-100 rounded-3xl p-6 text-center flex flex-col items-center gap-2">
              {icon}
              <p className="text-4xl font-bold text-amber-500">{stat}</p>
              <p className="text-sm text-gray-500">{label}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}