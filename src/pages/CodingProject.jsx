import { useLoaderData } from "react-router-dom";

function CodingProject() {
  const { name } = useLoaderData();

  return <h1>{ name }</h1>;
}

export default CodingProject;