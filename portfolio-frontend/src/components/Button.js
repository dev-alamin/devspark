// components/ui/FancyButton.jsx
import React from "react";
import { Rocket } from "lucide-react";

export default function FancyButton({ text, icon, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex mt-4 items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-500 hover:to-blue-600 text-white font-semibold shadow-lg transition-transform transform hover:scale-105 ${className}`}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      <span>{text}</span>
    </button>
  );
}
