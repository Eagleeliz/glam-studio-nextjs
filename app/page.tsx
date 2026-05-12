"use client";
import { useState } from "react";
import { services } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import { GiScissors, GiNails, GiFaceToFace } from "react-icons/gi";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { ReactNode } from "react";

const categoryIcons: Record<string, ReactNode> = {
  Hair: <GiScissors className="text-lg" />,
  Nails: <GiNails className="text-lg" />,
  Skin: <MdFaceRetouchingNatural className="text-lg" />,
  "Brows & Lashes": <GiFaceToFace className="text-lg" />,
};

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const categories = [...new Set(services.map((s) => s.category))];

  return (
    <>
      <Navbar onCartClick={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <main className="relative overflow-x-hidden">
        <div className="relative bg-gradient-to-br from-amber-50 via-white to-pink-50">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-200/30 via-transparent to-transparent" />
          <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-4 bg-amber-100/50 inline-block px-4 py-1.5 rounded-full backdrop-blur-sm">
              Welcome to Glam Studio
            </p>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mt-4">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Look good,
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">
                feel amazing.
              </span>
            </h2>
            <p className="text-gray-500 mt-6 text-lg max-w-lg mx-auto">
              Browse our premium salon services and build your perfect appointment.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full mx-auto mt-8" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          {categories.map((category) => (
            <section key={category} className="mb-16 last:mb-0">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-amber-500 bg-amber-100 p-2 rounded-full shadow-sm">
                  {categoryIcons[category]}
                </span>
                <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  {category}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-200 via-amber-200 to-transparent" />
                <span className="text-xs font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                  {services.filter((s) => s.category === category).length} services
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services
                  .filter((s) => s.category === category)
                  .map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}