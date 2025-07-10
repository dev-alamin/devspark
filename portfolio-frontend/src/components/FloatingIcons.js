"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  SiPhp,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiMysql,
  SiTailwindcss,
  SiLaravel,
  SiWordpress,
} from "react-icons/si";

export default function FloatingIcons() {
  const iconsRef = useRef([]);

  useEffect(() => {
    iconsRef.current.forEach((el, i) => {
      gsap.to(el, {
        y: "+=20",
        duration: 2.5 + Math.random() * 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.15,
      });
    });
  }, []);

  const icons = [
    {
      Icon: SiWordpress,
      color: "text-blue-600",
      position: "top-10 left-12",
      title: "WordPress",
    },
    {
      Icon: SiPhp,
      color: "text-purple-700",
      position: "top-32 right-16",
      title: "PHP",
    },
    {
      Icon: SiJavascript,
      color: "text-yellow-400",
      position: "top-64 left-8",
      title: "JavaScript",
    },
    {
      Icon: SiReact,
      color: "text-cyan-400",
      position: "bottom-40 right-24",
      title: "React",
    },
    {
      Icon: SiNextdotjs,
      color: "text-white",
      position: "bottom-20 left-1/3",
      title: "Next.js",
    },
    {
      Icon: SiTailwindcss,
      color: "text-sky-400",
      position: "top-1/2 right-1/4",
      title: "Tailwind CSS",
    },
    {
      Icon: SiLaravel,
      color: "text-red-600",
      position: "bottom-10 right-12",
      title: "Laravel",
    },
    {
      Icon: SiMysql,
      color: "text-blue-500",
      position: "bottom-24 left-24",
      title: "MySQL",
    },
  ];

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {icons.map(({ Icon, color, position, title }, i) => (
        <div
          key={title}
          ref={(el) => (iconsRef.current[i] = el)}
          className={`absolute ${position}`}
          title={title}
        >
          <Icon
            className={`${color} text-4xl md:text-4xl hover:scale-110 transition duration-300 bg-white/8 backdrop-blur-md rounded-full p-1 shadow-md`}
          />
        </div>
      ))}
    </div>
  );
}
