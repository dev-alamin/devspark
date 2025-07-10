import SingleProjectPage from "@/components/Project/SingleProject"; // the fixed one above

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function generateMetadata({ params }) {
  const { slug } = params;
  const res = await fetch(`${API_URL}/wp-json/wp/v2/project?slug=${slug}&_embed`);
  const data = await res.json();
  const project = data[0];

  return {
    title: `${project.title.rendered} | Project`,
    description: project.excerpt?.rendered.replace(/<[^>]+>/g, "").trim(),
  };
}


export default async function ProjectPage({ params }) {
  const { slug } = params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/project?slug=${slug}&_embed`);
  const data = await res.json();

  const project = data[0];

  return <SingleProjectPage project={project} />;
}
