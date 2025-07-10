"use client";
import { useState } from "react";

export default function CommentForm({ postId }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState(null);// Honeypot field to catch spam bots
  const [formData, setFormData] = useState({ honeypot: "" });


  const WP_USERNAME = process.env.WP_USERNAME;
  const WP_APP_PASSWORD = process.env.WP_APP_PASSWORD;
  const API_URL = process.env.NEXT_PUBLIC_API_URL + '/wp-json/wp/v2/comments';

  const credentials = Buffer.from(`${WP_USERNAME}:${WP_APP_PASSWORD}`).toString("base64");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    if (formData.honeypot && formData.honeypot !== "") {
        console.warn("Spam detected. Aborting request.");
        return; // Stop here — don't send the API request
    }

    // if (!formData.comment || formData.comment.length < 3) {
    //     alert("Comment must be at least 3 characters.");
    //     return;
    // }

    const res = await fetch( API_URL, {
      method: "POST",
        headers: {
        "Authorization": `Basic ${credentials}`,
        "Content-Type": "application/json",
        },
      body: JSON.stringify({
        post: postId,
        author_name: name,
        author_email: email,
        content: comment,
      }),
    });

    if (res.ok) {
      setStatus("success");
      setName("");
      setEmail("");
      setComment("");
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-16 p-8 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-white">Leave a Comment</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-gray-700 text-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
            type="text"
            name="honeypot"
            autoComplete="off"
            className="w-full p-3 rounded bg-gray-700 text-white"
            placeholder="Leave this field empty"
            onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            style={{ display: "none" }} // Hide honeypot field
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded bg-gray-700 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          rows="4"
          placeholder="Your comment..."
          className="w-full p-3 rounded bg-gray-700 text-white"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
        >
          Submit Comment
        </button>
      </form>

      {/* Status Message */}
      {status === "success" && (
        <p className="text-green-400 mt-4">✅ Comment submitted! Pending approval.</p>
      )}
      {status === "error" && (
        <p className="text-red-400 mt-4">❌ Something went wrong. Try again.</p>
      )}
    </div>
  );
}
