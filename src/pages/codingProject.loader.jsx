import projects from "../data/codingProjects";

async function codingProjectLoader({ params }) {
  const { name } = params;

  const project = projects.find(
    p => p.slug === name
  );

  if (!project) {
    throw new Response("Project not found", { status: 404 });
  }

  return project;
}

export default codingProjectLoader