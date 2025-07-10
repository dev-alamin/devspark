
import Project from "@/components/Project/ProjectList";
import Hero from "../components/Hero";
import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import Blog from "@/components/Home/Blog";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <Hero />
        <Project perpage={3} />
        <Blog />
        <About />
        <Contact border="border-t border-gray-800" bg="bg-gray-900" />
    </div>
  );
}
