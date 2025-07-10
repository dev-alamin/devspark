"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import parse from "html-react-parser";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";
import CommentForm from "@/components/CommentForm"; // Adjust the import path as 
import CommentList from "@/components/CommentList";

export default function SingleBlogPage() {
const { slug } = useParams();
const [post, setPost] = useState(null);


  useEffect(() => {
    async function fetchPost() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`
      );
      const data = await res.json();
      setPost(data[0]);
    }
    fetchPost();
  }, [slug]);

  if (!post) {
    return <div className="text-white p-10">Loading...</div>;
  }

  const publishedDate = format(new Date(post.date), "MMMM d, yyyy"); // e.g., July 8, 2025
  const authorName = post._embedded?.author?.[0]?.name || "Unknown Author";
  const categories = post._embedded?.["wp:term"]?.[0]?.map(cat => cat.name).join(", ") || "Uncategorized";

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 w-full py-16 prose">
      <article className="prose prose-invert lg:prose-xl max-w-5xl mx-auto p-8 text-gray-300 bg-gray-800 rounded-lg shadow-lg leading-relaxed">
        {/* Title */}
        <h1 className="text-5xl font-extrabold mb-4">{post.title.rendered}</h1>

        {/* Meta Info */}
        <div className="text-sm text-gray-400 mb-8">
          <div>Published on <time>{publishedDate}</time> by <span className="font-medium">{authorName}</span></div>
        {post._embedded?.["wp:term"]?.[0]?.length > 0 && (
        <div className="mt-2 text-sm text-gray-400">
            in{" "}
            {post._embedded["wp:term"][0].map((cat, index) => (
            <span key={cat.id}>
                <Link
                href={`/category/${cat.slug}`}
                className="text-blue-400 hover:underline font-medium"
                >
                {cat.name}
                </Link>
                {index < post._embedded["wp:term"][0].length - 1 && ", "}
            </span>
            ))}
        </div>
        )}

        </div>

        {/* Featured Image */}
        {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
        <div className="relative w-full h-94 my-6 rounded-xl overflow-hidden">
            <Image
                src={post._embedded["wp:featuredmedia"][0].source_url}
                alt="Featured"
                fill
                className="object-cover"
                sizes="100vw"
            />
        </div>

        )}

        {/* Content */}
        <div className="content">{parse(post.content.rendered)}</div>
      </article>

      {/* Comment form */}
        <CommentForm postId={post.id} />

        <CommentList postId={post.id} />
    </section>

  );
}
