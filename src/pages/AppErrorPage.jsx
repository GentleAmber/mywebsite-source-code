import { useRouteError } from "react-router-dom";

function AppErrorPage() {
  const error = useRouteError();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>404 — Not Found</h1>
      <p>{error?.statusText || error?.message}</p>
    </div>
  );
}

export default AppErrorPage;