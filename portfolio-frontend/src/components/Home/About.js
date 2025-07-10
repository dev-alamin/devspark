import { Code2, LayoutDashboard, Zap, Database } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 px-6 md:px-20  text-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                <span className="inline-block animate-pulse drop-shadow-lg">👨‍💻</span> About Me
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                I specialize in building <span className="text-white font-semibold">custom WordPress plugins</span> and 
                <span className="text-white font-semibold"> decoupled Next.js frontends</span>. 
                With a passion for performance, REST APIs, testing, and UX — I solve real-world problems with clean architecture & attention to detail.
            </p>
        </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Card 1 */}
        <div className="flex items-start gap-4 bg-gradient-to-br from-blue-700 to-blue-900 p-6 rounded-xl shadow-lg hover:shadow-blue-400/30 transition">
          <Code2 className="text-blue-300 w-8 h-8" />
          <div>
            <h3 className="text-xl font-semibold mb-1">Custom Plugin Development</h3>
            <p className="text-blue-100 text-sm">
              Advanced WordPress plugins tailored to unique business needs with performance and security in mind.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start gap-4 bg-gradient-to-br from-purple-700 to-indigo-900 p-6 rounded-xl shadow-lg hover:shadow-purple-400/30 transition">
          <LayoutDashboard className="text-purple-300 w-8 h-8" />
          <div>
            <h3 className="text-xl font-semibold mb-1">Decoupled Frontends</h3>
            <p className="text-purple-100 text-sm">
              Build sleek and fast Next.js frontends powered by WordPress REST APIs for a seamless headless experience.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-start gap-4 bg-gradient-to-br from-yellow-600 to-yellow-800 p-6 rounded-xl shadow-lg hover:shadow-yellow-300/30 transition">
          <Database className="text-yellow-200 w-8 h-8" />
          <div>
            <h3 className="text-xl font-semibold mb-1">REST API & Database Mastery</h3>
            <p className="text-yellow-100 text-sm">
              From writing secure custom endpoints to optimizing DB queries—data flows cleanly and efficiently.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex items-start gap-4 bg-gradient-to-br from-emerald-700 to-emerald-900 p-6 rounded-xl shadow-lg hover:shadow-emerald-300/30 transition">
          <Zap className="text-emerald-300 w-8 h-8" />
          <div>
            <h3 className="text-xl font-semibold mb-1">Performance & Testing</h3>
            <p className="text-emerald-100 text-sm">
              Speed matters. So does stability. I use tools like Lighthouse, PHPUnit, and Playwright to keep projects sharp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
