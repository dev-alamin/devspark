import Project from "@/components/Project/ProjectList";

export default function ProjectsPage({searchParams}) {
  return (
    <div className="flex flex-col items-center justify-center py-6 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <Project perpage={6} searchParams={searchParams} projectTitle="🔥 My Projects" basePath="/projects" />
    </div>
  );
}

export const generateMetadata = () => {
  return {
    title: "Featured WordPress & Frontend Projects",
    description: "Explore my collection of real-world projects showcasing custom plugin development, REST API integrations, and modern frontend solutions using WordPress, Tailwind, and Alpine.js.",
  };
};
