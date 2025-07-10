"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Folder, BookOpen, User, Mail } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: Folder },
  { href: "/blog", label: "Blog", icon: BookOpen },
  { href: "/about", label: "About", icon: User },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-br from-indigo-900 via-gray-900 to-black backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          <div className="text-3xl font-extrabold text-white">
            <Link
              href="/"
            >
              Al Amin
            </Link>
          </div>
          <nav className="flex space-x-8 items-center text-lg font-semibold">
            {navItems.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`
                    flex items-center gap-1 relative
                    text-gray-300
                    hover:text-amber-400
                    focus:outline-none focus:ring-2 focus:ring-amber-400 rounded
                    after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-amber-400 after:transition-all after:duration-300
                    ${isActive ? "after:w-full text-amber-400" : "after:w-0 hover:after:w-full"}
                    hover:drop-shadow-md
                  `}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "text-amber-400" : "text-gray-400"}`} />
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
