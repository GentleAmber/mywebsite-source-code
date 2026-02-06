import { createBrowserRouter } from "react-router-dom"

import RootLayout from "./layouts/RootLayout"
import AppLayout from "./layouts/AppLayout"

import Cover from "./pages/Cover"
import AboutMe from "./pages/AboutMe"
import Interests from "./pages/Interests"
import Resume from "./pages/Resume"
import Coding from "./pages/WorksCoding"
import Illustrations from "./pages/WorksIllustrations"
import IllustrationProject from "./pages/IllustrationProject"
import CodingProject from "./pages/CodingProject"
import AppErrorPage from "./pages/AppErrorPage"
import CodingList from "./pages/CodingList"
import IlluList from "./pages/IlluList"

import illuProjectLoader from "./pages/illuProject.loader"
import codingProjectLoader from "./pages/codingProject.loader"

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <AppErrorPage />,
    children: [
      {
        index: true,
        element: <Cover />,
      },
      {
        element: <AppLayout />, 
        children: [
          { 
            path: "aboutme", 
            element: <AboutMe /> 
          },
          { 
            path: "resume", 
            element: <Resume /> 
          },
          { 
            path: "coding",
            element: <Coding />,
            children: [
              {
                index: true,
                element: <CodingList />
              },
              {
                path: ":name",
                element: <CodingProject />,
                loader: codingProjectLoader,
                errorElement: <AppErrorPage />
              }
            ]
          },
          {
            path: "illustrations",
            element: <Illustrations />,
            children: [
              {
                index: true,
                element: <IlluList />
              },
              {
                path: ":name",
                element: <IllustrationProject />,
                loader: illuProjectLoader,
                errorElement: <AppErrorPage />
              },
            ],
          },
          {
            path: "*",
            element: <AppErrorPage />,
          }
        ],
      },
    ]
  }
])

export default router
