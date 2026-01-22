import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"

export default function RootLayout() {
  const location = useLocation()

  useEffect(() => {
    const body = document.body

    if (location.pathname === "/" || location.pathname === "") {
      body.classList.remove("applayout")
    } else {
      body.classList.add("applayout")
    }
  }, [location.pathname])

  return <Outlet />
}