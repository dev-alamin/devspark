import { ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";
export default function Contact({ border = '', bg = '' }) {
  return (
    <section
      id="contact"
      className={`w-full py-24 px-6 md:px-20 text-white ${border} ${bg}`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"> Let's Connect</h2>
        <p className="text-gray-300 mb-8">
          Want to collaborate or hire me? Drop a message below or reach out directly on LinkedIn.
        </p>
        <ContactForm title="" />
      </div>
    </section>
  );
}
