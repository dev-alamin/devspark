import Timeline from "@/components/Timeline";
import Link from "next/link";
import 'react-vertical-timeline-component/style.min.css';
import { Zap, Code, GitPullRequest, Box, ShieldCheck, Sparkles, GraduationCap, Users, ArrowRight } from 'lucide-react';
import HighlightedProjects from "@/components/HighlightedProjects";
import Intro from "@/components/Intro";

const badges = [
    { label: 'ShopSpark Plugin', icon: Zap, bg: 'bg-yellow-400', text: 'text-gray-900' },
    { label: 'Shalik Theme', icon: Box, bg: 'bg-pink-400', text: 'text-gray-900' },
    { label: 'LeetCode DSA', icon: Code, bg: 'bg-purple-400', text: 'text-gray-900' },
    { label: 'Open Source', icon: GitPullRequest, bg: 'bg-green-400', text: 'text-gray-900' },
    { label: 'CI/CD & DevOps', icon: ShieldCheck, bg: 'bg-blue-400', text: 'text-gray-900' },
];

export default function AboutPage() {
    return (
        <div className="flex flex-col items-center justify-center py-8 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen">
            <div className="max-w-5xl w-full px-6">
                <Intro />
                <div className="bg-gray-800 bg-opacity-70 rounded-lg shadow-lg p-8 mb-8">
                    <p className="text-xl text-gray-300 mb-8">
                        Hello! I’m <span className="font-semibold text-blue-400">Al Amin</span>, a passionate Software Engineer with a strong focus on WordPress, Next.js, React.js, and DevOps. My journey in web development began in 2020, and since then, I’ve been dedicated to building robust, scalable, and high-performing web solutions.
                    </p>

                    <div className="mb-8">
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 border border-blue-500 text-blue-400 font-medium px-4 py-2 rounded-2xl hover:bg-blue-50 transition">
                            View My Projects
                            <ArrowRight className="w-5 h-5 text-blue-400" />
                        </Link>
                    </div>
                    
                    <HighlightedProjects />


                    <div className="grid md:grid-cols-2 gap-6 text-gray-200">
                        {/* Education & Learning */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition duration-300">
                            <div className="flex items-center gap-3 mb-4">
                            <GraduationCap className="text-blue-400 w-6 h-6" />
                            <h3 className="text-xl font-semibold text-white">Academic & Learning</h3>
                            </div>
                            <p className="mb-2">🎓 <strong>Bachelor of Arts</strong> from the University of Dhaka</p>
                            <p className="mb-2">📘 Self-taught Computer Science fundamentals:</p>
                            <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                                <li>🧠 DSA practice on LeetCode</li>
                                <li>📡 Networking, Memory, Pointers</li>
                                <li>📚 Trusted Resources:
                                    <ul className="list-disc ml-4 mt-1">
                                    <li><span className="text-blue-300">Online:</span> W3Schools, Dev Blogs, YouTube</li>
                                    <li><span className="text-blue-300">Books:</span> Eloquent JS, PHP 7 (Rokomari), Hate Kolome JS</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        {/* Mentorship & Community */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition duration-300">
                            <div className="flex items-center gap-3 mb-4">
                            <Users className="text-blue-400 w-6 h-6" />
                            <h3 className="text-xl font-semibold text-white">Mentorship & Community</h3>
                            </div>
                            <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                            <li>👨‍🏫 Following industry experts:
                                <ul className="list-disc ml-4 mt-1">
                                <li>Tareq Hasan (weDevs Founder)</li>
                                <li>Omar Al Zabir (Meta, Kahf)</li>
                                </ul>
                            </li>
                            <li>💬 Inspired by their work in leadership, tech, faith, and growth.</li>
                            </ul>
                        </div>
                    </div>


                    <h2 className="text-3xl font-extrabold uppercase mt-6 mb-4 text-blue-400">My Journey</h2>
                    <Timeline />

                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-blue-400 mb-2">🚀 What Drives Me</h2>
                        <p className="text-gray-300">
                            I thrive on solving challenging problems and delivering solutions that make a real impact. Whether it’s building custom WordPress plugins, architecting React applications, or automating deployments with CI/CD, I bring a blend of creativity and technical depth to everything I build.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}