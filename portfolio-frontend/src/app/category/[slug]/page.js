"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function CategoryPage() {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    async function fetchPostsByCategory() {
      try {
        // 1. Get category ID from slug
        const catRes = await fetch(`${API_URL}/wp-json/wp/v2/categories?slug=${slug}`);
        const catData = await catRes.json();

        if (!catData.length) return;

        setCategoryName(catData[0].name);

        // 2. Get posts from that category ID
        const postRes = await fetch(
          `${API_URL}/wp-json/wp/v2/posts?categories=${catData[0].id}&_embed`
        );
        const postsData = await postRes.json();

        setPosts(postsData);
      } catch (err) {
        console.error("Error fetching category posts:", err);
      } finally {
        setLoading(false);
      }
    }

    if (slug) fetchPostsByCategory();
  }, [slug]);

  if (loading) return <p className="text-white text-center py-24">Loading category...</p>;

  if (!posts.length) return <p className="text-white text-center py-24">No posts found.</p>;

  return (
    <section className="bg-neutral-900 w-full py-24 px-6 md:px-20 text-white min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">
        Posts in <span className="text-blue-400">{categoryName}</span>
      </h1>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-shadow shadow-md hover:shadow-lg cursor-pointer"
          >
            {/* Featured Image */}
            {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
              <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
                <Image
                  src={post._embedded["wp:featuredmedia"][0].source_url}
                  alt={post.title.rendered}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}

            <h3 className="text-xl font-semibold mb-2">
              {parse(post.title.rendered)}
            </h3>
            <p
              className="text-gray-300 mb-4"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
            <Link
              href={`/blog/${post.slug}`}
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
