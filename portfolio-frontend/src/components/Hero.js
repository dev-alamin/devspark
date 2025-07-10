'use client';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { SiPhp, SiJavascript, SiReact, SiNextdotjs, SiMysql, SiTailwindcss, SiLaravel, SiWordpress } from 'react-icons/si';
import FloatingIcons from './FloatingIcons'; 

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center items-start px-6 md:px-20 py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-blue-200 via-pink-100 to-purple-200" />

      <p className="text-sm font-medium mb-2 uppercase tracking-wide text-blue-500">
        Hey, I'm Al Amin
      </p>

      <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-amber-400 via-pink-500 to-fuchsia-600 text-transparent bg-clip-text tracking-wide drop-shadow-[0_2px_12px_rgba(255,255,255,0.1)] flex items-center justify-center gap-4 select-none animate-fade-in-up mb-6">
        WordPress Engineer &<br /> Full-Stack Problem Solver
      </h1>

      <p className="text-lg text-gray-300 mb-8 max-w-xl">
        I build high-performance WordPress plugins, modern web apps, and love clean, scalable code. Currently focusing on DevOps & LeetCode mastery.
      </p>

      <div className="flex gap-4 mb-10">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-blue-600 text-white font-medium px-6 py-3 rounded-2xl hover:bg-blue-700 transition"
        >
          Hire Me <ArrowRight size={18} />
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 font-medium px-6 py-3 rounded-2xl hover:bg-blue-50 transition"
        >
          View Projects
        </Link>
      </div>

      {/* Tech Icons Section */}
      <FloatingIcons />
    </section>
  );
}
