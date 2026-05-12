"use client";

import { useCart } from "@/context/CartContext";
import { FaTimes, FaClock, FaTrash } from "react-icons/fa";
import { MdSpa } from "react-icons/md";

export default function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, removeItem, clearCart, total } = useCart();

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-white z-50 flex flex-col shadow-2xl">

        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-amber-50">
          <div>
            <h2 className="font-bold text-gray-900 text-lg">Your booking</h2>
            <p className="text-xs text-amber-600 mt-0.5">
              {items.length} service{items.length !== 1 ? "s" : ""} selected
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-gray-700 border border-gray-100 transition-colors"
          >
            <FaTimes className="text-xs" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
            <MdSpa className="text-6xl text-amber-200 mb-4" />
            <p className="font-semibold text-gray-700 text-lg">Nothing here yet</p>
            <p className="text-sm text-gray-400 mt-2">
              Add a service from our menu to start building your appointment.
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-2">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-4 border-b border-gray-50">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                      <FaClock className="text-xs" /> {item.duration}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="text-sm font-bold text-gray-900">
                      KSh {item.price.toLocaleString()}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-6 h-6 rounded-full bg-rose-50 text-rose-400 hover:bg-rose-100 hover:text-rose-600 transition-colors flex items-center justify-center"
                    >
                      <FaTimes className="text-xs" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-6 py-6 border-t border-gray-100 flex flex-col gap-4 bg-gray-50">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Total estimate</span>
                <span className="text-2xl font-bold text-gray-900">
                  KSh {total.toLocaleString()}
                </span>
              </div>
              <button className="w-full bg-amber-500 text-white py-3.5 rounded-full text-sm font-bold hover:bg-amber-600 active:scale-95 transition-all shadow-sm shadow-amber-200">
                Book appointment →
              </button>
              <button
                onClick={clearCart}
                className="w-full text-sm text-gray-400 hover:text-rose-500 transition-colors py-1 flex items-center justify-center gap-2"
              >
                <FaTrash className="text-xs" /> Clear all
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}