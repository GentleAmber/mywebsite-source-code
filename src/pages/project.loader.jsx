import projects from "../data/illustrationProjects";

async function projectLoader({ params }) {
  const { name } = params;

  const projectNames = fetchData(projects);

  if (!projectNames.includes(name)) {
    throw new Response("Project not found", { status: 404 });
  }

  return { name };
}

function fetchData(projects) {
  return projects.map(p =>
    p.title.replace(/\s+/g, "-").toLowerCase()
  );
}

export default projectLoader