import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm"; // Adjust the import path as necessary

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "hmalaminmb4@gmail.com",
    href: "mailto:hmalaminmb4@gmail.com",
    bg: "bg-gradient-to-br from-blue-700 to-purple-700",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+8801743909015",
    href: "tel:+8801743909015",
    bg: "bg-gradient-to-br from-purple-700 to-indigo-900",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: "https://maps.google.com?q=Dhaka,Bangladesh",
    bg: "bg-gradient-to-br from-yellow-600 to-yellow-800",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/alamin",
    href: "https://linkedin.com/in/contactalamin",
    bg: "bg-gradient-to-br from-emerald-700 to-emerald-900",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/alamin",
    href: "https://github.com/dev-alamin",
    bg: "bg-gradient-to-br from-blue-700 to-purple-700",
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@alaminCodes",
    href: "https://twitter.com/alaminCodes",
    bg: "bg-gradient-to-br from-purple-700 to-indigo-900",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-6 md:px-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
        Get in Touch
        </h2>
        <p className="text-center text-gray-400 text-lg mb-10 max-w-xl">
        Whether you have a project, a question, or just want to say hi — my inbox is always open. Let's build something amazing together!
        </p>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl w-full">
        {contactMethods.map(({ icon: Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 transition rounded-xl p-6 flex items-center gap-4 shadow-lg hover:shadow-2xl border border-gray-700"
          >
            <Icon className="w-6 h-6 text-blue-400" />
            <div>
              <h3 className="font-bold text-white text-lg">{label}</h3>
              <p className="text-gray-300 text-sm">{value}</p>
            </div>
          </a>
        ))}
      </div>

        <ContactForm />
    </div>
  );
}
