"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const POSTS_PER_PAGE = 6;

export default function Blog({ title = "Recent Blog Posts", bg = "bg-gray-900" }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      try {
        const res = await fetch(
          `${API_URL}/wp-json/wp/v2/posts?_embed&per_page=${POSTS_PER_PAGE}&page=${currentPage}`
        );
        const data = await res.json();
        const total = res.headers.get("X-WP-TotalPages");

        setPosts(data);
        setTotalPages(parseInt(total));
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [currentPage]);

  const stripHtml = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]+>/g, ""); // Remove all HTML tags
 };

    const getExcerpt = (html, wordLimit = 30) => {
        const text = stripHtml(html);
        return text.split(" ").slice(0, wordLimit).join(" ") + "...";
    };

  if (loading) return <p className="text-center text-white py-24">Loading posts...</p>;

  return (
    <section
      id="blog"
      className={`py-24 px-6 md:px-20 text-white border-t border-gray-800 ${bg}`}
    >
      <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent text-center">{title}</h2>
        <p className="text-center mb-12">Tips, stories, and solutions from my developer journey—posted often for you.</p>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-shadow shadow-md hover:shadow-lg cursor-pointer"
          >

            <Link href={`/${post.slug}`}>
            <h3
              className="text-xl font-semibold mb-2 hover:text-blue-400 transition-colors"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            </Link>

            {/* Excerpt */}
            {post.excerpt?.rendered && (
              <p className="text-gray-300 mb-4">
                {getExcerpt(post.excerpt.rendered)}
              </p>
            )}

            {/* Link to full post */}
            <Link
              href={`/${post.slug}`}
              className="text-blue-400 hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
