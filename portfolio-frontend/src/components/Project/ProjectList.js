import Link from "next/link";
import { Box } from "lucide-react";
import Image from "next/image";
import Head from "next/head";
import parse from "html-react-parser";
import Pagination from "../Pagination";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function Project({
  perpage,
  searchParams,
  projectTitle = "🔥 Featured Projects",
  basePath = ''
}) {
  const page = parseInt(searchParams?.page || "1", 10);

  const res = await fetch(
    `${API_URL}/wp-json/wp/v2/project?per_page=${perpage}&page=${page}&_embed=1`,
    {
      next: { revalidate: 60 }, // Revalidate every 60s
    }
  );

  if (!res.ok) {
    console.error("Failed to fetch project data");
    return (
      <section className="py-24 text-center text-white">
        <h2 className="text-3xl font-bold">Failed to load projects</h2>
      </section>
    );
  }

  const projects = await res.json();
  const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);

  if (projects.length === 0) {
    return (
      <section className="py-24 text-center text-white">
        <h2 className="text-3xl font-bold">No projects found on this page.</h2>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-20 text-white border-t border-gray-800 bg-gray-900"
    >
      <Head>
        <title>Projects - Page {page}</title>
      </Head>

      <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent text-center mb-8">
        {projectTitle}
      </h2>
      <p className="text-center mb-12">
        A curated collection of real-world projects showcasing my skills in{" "}
        <br />
        WordPress, REST APIs, and modern frontend development.
      </p>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const featuredImage =
            project._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

          return (
            <div
              key={project.id}
              className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-shadow shadow-md hover:shadow-lg cursor-pointer"
            >
              {featuredImage && (
                <Link href={`/projects/${project.slug}`}>
                  <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden">
                    <Image
                      src={featuredImage}
                      alt={project.title?.rendered || "Project Image"}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </Link>
              )}

              <Link
                href={`/projects/${project.slug}`}
                className="flex items-center gap-4 mb-4"
              >
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Box className="w-6 h-6 text-blue-400" />
                  {project.title?.rendered}
                </h3>
              </Link>

              <p
                className="text-gray-300 mb-4"
                dangerouslySetInnerHTML={{
                  __html: project.excerpt?.rendered || "",
                }}
              />

              <Link
                href={`/projects/${project.slug}`}
                className="text-blue-400 hover:underline"
              >
                View Details →
              </Link>
            </div>
          );
        })}
      </div>

      <Pagination page={page} totalPages={totalPages} basePath={basePath} />
    </section>
  );
}
