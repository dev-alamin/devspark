import { Zap, Code, GitPullRequest, Box, ShieldCheck } from 'lucide-react';
const badges = [
    { label: 'ShopSpark Plugin', icon: Zap, bg: 'bg-yellow-400', text: 'text-gray-900', href: 'https://github.com/dev-alamin/ShopSpark' },
    { label: 'Shalik Theme', icon: Box, bg: 'bg-pink-400', text: 'text-gray-900', href: 'https://themeforest.net/user/shalik-theme' },
    { label: 'LeetCode DSA', icon: Code, bg: 'bg-purple-400', text: 'text-gray-900', href: 'https://leetcode.com/u/dev-alamin/' },
    { label: 'Open Source', icon: GitPullRequest, bg: 'bg-green-400', text: 'text-gray-900', href: 'https://github.com/dev-alamin' },
    { label: 'CI/CD & DevOps', icon: ShieldCheck, bg: 'bg-blue-400', text: 'text-gray-900', href: '#' },
];

export default function HighlightedProjects() {
    return (
        <div className="bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 rounded-lg p-8 mb-10 shadow-2xl text-white text-center max-w-5xl mx-auto">
            <h3 className="text-3xl font-extrabold mb-6 flex justify-center items-center gap-3 select-none">
                <ShieldCheck className="w-8 h-8 text-white animate-pulse" />
                Highlighted Projects & Skills
            </h3>
            <p className="mb-6 max-w-3xl mx-auto text-lg font-semibold tracking-wide leading-relaxed">
                Building <span className="text-yellow-300 font-bold">premium WordPress themes</span>, crafting <span className="text-yellow-300 font-bold">WooCommerce plugins</span>, mastering <span className="text-yellow-300 font-bold">React.js & Next.js</span>, and automating deployments with <span className="text-yellow-300 font-bold">DevOps</span>.
            </p>
            <div className="flex flex-wrap justify-center gap-5 animate-pulse">
                {badges.map(({ label, icon: Icon, bg, text, href }) => (
                    <a
                        key={label}
                        href={href}
                        className={`
                            ${bg} ${text} 
                            px-4 py-2 rounded-full font-semibold uppercase text-xs tracking-widest shadow-lg 
                            flex items-center gap-2 cursor-pointer 
                            transform transition duration-300 ease-in-out 
                            hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] 
                            hover:brightness-110
                            `}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon className="w-5 h-5 text-white animate-bounce-slow" />
                        {label}
                    </a>
                ))}
            </div>
        </div>
    );
}
