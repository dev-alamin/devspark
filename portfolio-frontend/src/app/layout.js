// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import localFont from 'next/font/local';


const geist = localFont({
  src: [
    {
      path: '../../public/fonts/local/Geist[wght].woff2',   // relative path from src/app/layout.js or .tsx
      weight: '100 900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/local/Geist-Italic[wght].woff2',
      weight: '100 900',
      style: 'italic',
    },
  ],
  variable: '--font-geist',
  display: 'swap',
});


export const metadata = {
  title: "Al Amin - Software Engineer",
  description: "SWE | WordPress | Laravel | NextJS | Devops | LeetCode",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="antialiased sans-serif" style={{ fontFamily: 'var(--font-geist), sans-serif' }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

