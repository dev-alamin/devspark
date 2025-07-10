import { func } from "prop-types";
import { Sparkles } from 'lucide-react';

export default function Intro() {
    return (
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-amber-400 via-pink-500 to-fuchsia-600 text-transparent bg-clip-text tracking-wide drop-shadow-[0_2px_12px_rgba(255,255,255,0.1)] flex items-center justify-center gap-4 select-none animate-fade-in-up">
                <Sparkles className="w-10 h-10 text-yellow-300 animate-ping-slow" />
                Hey, I’m Al Amin
            </h1>
            
            <p className="mt-4 text-lg md:text-xl text-gray-300 font-medium max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                A dedicated <span className="text-yellow-300 font-semibold">WordPress Wizard</span>, 
                <span className="text-blue-400 font-semibold"> UI craftsman</span>, and 
                <span className="text-pink-400 font-semibold"> DevOps explorer</span> <br/> I blend design, code, and performance 
                into world-class digital experiences.
            </p>
        </div>
    );
}