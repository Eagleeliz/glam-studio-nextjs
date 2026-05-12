"use client";

import { Service } from "@/lib/services";
import { useCart } from "@/context/CartContext";
import { FaClock, FaPlus, FaTimes, FaCheck, FaCalendarAlt } from "react-icons/fa";
import { GiScissors, GiNails, GiFaceToFace } from "react-icons/gi";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { ReactNode } from "react";

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Hair: { bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200" },
  Nails: { bg: "bg-pink-50", text: "text-pink-700", border: "border-pink-200" },
  Skin: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  "Brows & Lashes": { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
};

const categoryIcons: Record<string, ReactNode> = {
  Hair: <GiScissors className="text-base" />,
  Nails: <GiNails className="text-base" />,
  Skin: <MdFaceRetouchingNatural className="text-base" />,
  "Brows & Lashes": <GiFaceToFace className="text-base" />,
};

export default function ServiceCard({ service }: { service: Service }) {
  const { addItem, items, removeItem } = useCart();
  const inCart = items.some((i) => i.id === service.id);
  const colors = categoryColors[service.category] ?? {
    bg: "bg-gray-50",
    text: "text-gray-700",
    border: "border-gray-200",
  };

  return (
    <div
      className={`group relative bg-white rounded-3xl border-2 flex flex-col transition-all duration-300
        ${service.available
          ? `${colors.border} hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]`
          : "border-gray-100 opacity-50 grayscale"
        }
        ${inCart ? "ring-2 ring-amber-400 ring-offset-2" : ""}
      `}
    >
      {inCart && (
        <div className="absolute -top-2 -right-2 bg-amber-400 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center shadow-md">
          <FaCheck className="text-xs" />
        </div>
      )}

      {/* Card content */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex items-start justify-between gap-2">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full border flex items-center gap-1.5 ${colors.bg} ${colors.text} ${colors.border}`}>
            {categoryIcons[service.category]}
            {service.category}
          </span>
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1 ${
            service.available
              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
              : "bg-gray-100 text-gray-400"
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${service.available ? "bg-emerald-500" : "bg-gray-400"}`} />
            {service.available ? "Available" : "Unavailable"}
          </span>
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-gray-900 text-lg leading-tight">{service.name}</h3>
          <p className="text-sm text-gray-500 mt-2 leading-relaxed">{service.description}</p>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-gray-400">
          <FaClock className="text-xs" />
          <span>{service.duration}</span>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <p className="text-2xl font-bold text-gray-900">
            KSh {service.price.toLocaleString()}
          </p>

          {service.available && (
            <button
              onClick={() => inCart ? removeItem(service.id) : addItem(service)}
              className={`flex items-center gap-2 text-sm px-5 py-2.5 rounded-full font-semibold transition-all duration-200 active:scale-95
                ${inCart
                  ? "bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200"
                  : "bg-amber-500 text-white hover:bg-amber-600 shadow-sm shadow-amber-200"
                }
              `}
            >
              {inCart
                ? <><FaTimes className="text-xs" /> Remove</>
                : <><FaPlus className="text-xs" /> Add</>
              }
            </button>
          )}
        </div>
      </div>

      {/* Book Now — full width footer button */}
      {service.available && (
        <div className="px-6 pb-6">
          <button className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl font-semibold text-sm bg-gradient-to-r from-amber-500 to-rose-500 text-white hover:from-amber-600 hover:to-rose-600 transition-all duration-200 active:scale-95 shadow-sm">
            <FaCalendarAlt className="text-xs" />
            Book Now
          </button>
        </div>
      )}
    </div>
  );
}