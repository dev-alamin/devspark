"use client";

import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { format } from "date-fns";
import Image from "next/image";

export default function SingleProjectPage({ project }) {
  if (!project) {
    return <p className="text-white text-center p-10">Loading project...</p>;
  }

  const publishedDate = format(new Date(project.date), "MMMM d, yyyy");
  const featuredImage = project._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 w-full py-16">
      <article className="prose prose-invert lg:prose-xl max-w-5xl mx-auto p-8 text-gray-300 bg-gray-800 rounded-lg shadow-lg leading-relaxed">
        {/* Title */}
        <h1 className="text-5xl font-extrabold mb-4">
          {parse(project.title.rendered)}
        </h1>

        {/* Meta */}
        <div className="text-sm text-gray-400 mb-6">
          Published on <time>{publishedDate}</time>
        </div>

        {/* Featured Image */}
        {featuredImage && (
          <div className="relative w-full h-[400px] my-6 rounded-xl overflow-hidden">
            <Image
              src={featuredImage}
              alt={project.title.rendered}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        )}

        {/* Content */}
        <div className="content">{parse(project.content.rendered)}</div>
      </article>
    </section>
  );
}
