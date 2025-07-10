
// app/page.jsx
import Link from "next/link";
import Image from "next/image";
import {Lightbulb, NotebookText, BookMarked} from "lucide-react";
import Pagination from "@/components/Pagination";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const POSTS_PER_PAGE = 9;

async function getPosts(page = 1) {
    const url = `${API_URL}/wp-json/wp/v2/posts?_embed&per_page=${POSTS_PER_PAGE}&page=${page}`;
    const res = await fetch(url, {
        next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }

    const posts = await res.json();
    const totalPages = parseInt(res.headers.get("X-WP-TotalPages"), 10);

    return { posts, totalPages };
}

export default async function BlogPage({ searchParams }) {
    const page = parseInt(searchParams?.page || "1", 10);

    let posts = [];
    let totalPages = 1;

    try {
        const data = await getPosts(page);
        posts = data.posts;
        totalPages = data.totalPages;
    } catch (error) {
        console.error("Error loading blog posts:", error);
    }

    return (
        <section className="py-20 px-6 md:px-20 text-white bg-gray-900">
            <h1 className="flex justify-center items-center gap-3 text-4xl md:text-5xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                <BookMarked className="w-12 h-12 text-yellow-400" />
                Blog Posts
            </h1>

            <p className="text-center mb-12">Tips, stories, and solutions from my developer journey—posted often for you.</p>

            {posts.length > 0 ? (
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => {
                        const featuredImage =
                            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

                        return (
                            <div key={post.id} className="p-6 bg-gray-800 rounded-xl">
                                {featuredImage && (
                                    <Link href={`/blog/${post.slug}`}>
                                        <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden">
                                            <Image
                                                src={featuredImage}
                                                alt={post.title.rendered}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </div>
                                    </Link>
                                )}

                                <Link href={`/${post.slug}`}>
                                    <h2
                                        className="text-2xl font-bold mb-2 text-gray-200"
                                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                    />
                                </Link>

                                <p
                                    className="text-gray-300"
                                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                />

                                <Link
                                    href={`/${post.slug}`}
                                    className="text-blue-400 inline-block mt-2"
                                >
                                    Read More →
                                </Link>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <p className="text-center text-gray-400 mt-10">No posts found.</p>
            )}

            <Pagination page={page} totalPages={totalPages} className="mt-10" />
        </section>
    );
}
