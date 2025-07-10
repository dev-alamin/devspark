"use client";

import { useState } from "react";
import FancyButton from "./Button";
import { Send } from "lucide-react";

export default function ContactForm({ title = "Send A Message" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    topic: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const honeypot = form.website?.value; // your honeypot field

    if (honeypot) {
        console.warn("Spam bot detected!");
        return;
    }
    
    setLoading(true);
    setStatus(null);

    try {
      // Replace with your API endpoint or action
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          topic: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-16 max-w-4xl w-full">
      {title && (
        <div className="mb-6 mt-8">
          <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent text-center">
            {title}
          </h2>
        </div>
      )}

      <form
        className="bg-gray-800 rounded-lg p-6 shadow-lg"
        onSubmit={handleSubmit}
      >
          {/* 👇 Honeypot Field */}
  <div className="hidden">
    <label>
      Do not fill this out:
      <input type="text" name="website" autoComplete="off" />
    </label>
  </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="px-4 py-3 rounded bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-3 rounded bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="px-4 py-3 rounded bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500"
            required
          />
          <select
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            className="px-4 py-3 rounded bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="" disabled>Select Topic</option>
            <option value="general">General Inquiry</option>
            <option value="support">Support Request</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full mt-4 px-4 py-3 rounded bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>

        <div className="mt-6">
          <FancyButton text={loading ? "Sending..." : "Submit"} icon={<Send />} disabled={loading} />
        </div>

        {status === "success" && (
          <p className="mt-4 text-green-400">✅ Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-400">❌ Something went wrong. Try again.</p>
        )}
      </form>
    </div>
  );
}
// ALTER USER 'user_almn'@'localhost' IDENTIFIED BY 'almnme';
// FLUSH PRIVILEGES;
