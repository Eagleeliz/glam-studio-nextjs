"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { FaShoppingCart, FaStar } from "react-icons/fa";

export default function Navbar({ onCartClick }: { onCartClick: () => void }) {
  const { count } = useCart();

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-amber-100 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-gray-900 flex items-center gap-1">
              <FaStar className="text-amber-400 text-base" />
              Glam Studio
            </h1>
            <p className="text-xs text-amber-500 mt-0.5 tracking-widest uppercase">
              Premium Salon
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-8">
          <Link href="/" className="text-sm text-gray-500 hover:text-amber-600 transition-colors font-medium">
            Our Services
          </Link>
          <Link href="/about" className="text-sm text-gray-500 hover:text-amber-600 transition-colors font-medium">
            About
          </Link>
          <button
            onClick={onCartClick}
            className="relative flex items-center gap-2 bg-amber-500 text-white text-sm px-5 py-2.5 rounded-full hover:bg-amber-600 active:scale-95 transition-all font-medium shadow-sm shadow-amber-200"
          >
            <FaShoppingCart className="text-base" />
            <span>Cart</span>
            {count > 0 && (
              <span className="bg-white text-amber-600 text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}