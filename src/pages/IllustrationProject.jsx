import { useLoaderData } from "react-router-dom";

function IllustrationProject() {
  const { name } = useLoaderData();

  return <h1>{ name }</h1>;
}

export default IllustrationProject;