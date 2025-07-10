"use client";

import { useEffect, useState } from "react";

const COMMENTS_PER_PAGE = 5;

export default function CommentList({ postId }) {
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    async function fetchComments() {
      setLoading(true);
      try {
        const res = await fetch(
          `${API_URL}/wp-json/wp/v2/comments?post=${postId}&status=approve&per_page=${COMMENTS_PER_PAGE}&page=${page}`
        );

        const data = await res.json();
        const total = res.headers.get("X-WP-TotalPages");

        setComments(data);
        setTotalPages(parseInt(total));
      } catch (err) {
        console.error("Failed to fetch comments:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchComments();
  }, [postId, page]);

  return (
    <div className="max-w-5xl mx-auto mt-10 p-8 bg-gray-800 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-white">💬 Comments</h3>

      {loading ? (
        <p className="text-white">Loading comments...</p>
      ) : comments.length === 0 ? (
        <p className="text-gray-400">No comments yet. Be the first to comment!</p>
      ) : (
        <ul className="space-y-6">
          {comments.map((comment) => (
            <li key={comment.id} className="bg-gray-700 p-4 rounded-lg text-white">
              <p className="font-semibold">{comment.author_name}</p>
                <p className="text-sm text-gray-400">
                    {new Date(comment.date).toLocaleDateString()} at{" "}
                    {new Date(comment.date).toLocaleTimeString()}
                </p>
              <div
                className="text-gray-300 mt-1 text-md"
                dangerouslySetInnerHTML={{ __html: comment.content.rendered }}
              />
            </li>
          ))}
        </ul>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex gap-2 mt-6">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-3 py-1 bg-gray-600 text-white rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-white self-center">Page {page} of {totalPages}</span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-3 py-1 bg-gray-600 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}