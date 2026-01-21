import { createBrowserRouter } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import WorksLayout from "./layouts/WorksLayout";

import Cover from "./pages/Cover";
import AboutMe from "./pages/AboutMe";
import Interests from "./pages/Interests";
import WorksCoding from "./pages/WorksCoding";
import WorksIllustrations from "./pages/WorksIllustrations";
import IllustrationProject from "./pages/IllustrationProject";
import AppErrorPage from "./pages/AppErrorPage";

import projectLoader from "./pages/project.loader";

const router = createBrowserRouter([
  {
    index: true,
    element: <Cover />,
    errorElement: <AppErrorPage />
  },
  {
    element: <AppLayout />, 
    errorElement: <AppErrorPage />,
    children: [
      { path: "aboutme", element: <AboutMe /> },
      { path: "interests", element: <Interests /> },
      {
        path: "works",
        element: <WorksLayout />,
        children: [
          { index: true, element: <WorksCoding /> },
          {
            path: "illustrations",
            element: <WorksIllustrations />,
            children: [
              {
                path: ":name",
                element: <IllustrationProject />,
                loader: projectLoader,
                errorElement: <AppErrorPage />,
              },
            ],
          },
        ],
      },
      {
        path: "*",
        element: <AppErrorPage />,
      }
    ],
  },
]);

export default router;
