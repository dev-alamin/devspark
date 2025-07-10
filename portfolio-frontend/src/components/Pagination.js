import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Pagination({ page, totalPages, basePath = "" }) {
  const currentPage = parseInt(page, 10);

  if (totalPages <= 1) return null;

  const createPageRange = () => {
    const range = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) range.push(i);
    } else {
      if (currentPage <= 3) {
        range.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        range.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        range.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }

    return range;
  };

  const linkHref = (pageNum) => {
    const cleanPath = basePath.replace(/\/$/, ""); // remove trailing slash
    return `${cleanPath}?page=${pageNum}`;
  };

  return (
    <div className="flex justify-center mt-10 space-x-2">
      {/* Previous */}
      {currentPage > 1 && (
        <Link
          href={linkHref(currentPage - 1)}
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition"
          aria-label="Previous Page"
        >
          <ChevronLeft size={20} />
        </Link>
      )}

      {/* Page numbers */}
      {createPageRange().map((num, idx) =>
        num === "..." ? (
          <span key={idx} className="px-3 py-2 text-gray-400">...</span>
        ) : (
          <Link
            key={num}
            href={linkHref(num)}
            className={`px-4 py-2 rounded-lg transition ${
              num === currentPage
                ? "bg-blue-500 text-white font-semibold"
                : "bg-gray-700 hover:bg-gray-600 text-white"
            }`}
          >
            {num}
          </Link>
        )
      )}

      {/* Next */}
      {currentPage < totalPages && (
        <Link
          href={linkHref(currentPage + 1)}
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition"
          aria-label="Next Page"
        >
          <ChevronRight size={20} />
        </Link>
      )}
    </div>
  );
}
