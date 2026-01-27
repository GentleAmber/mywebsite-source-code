import { Outlet, useLocation } from "react-router-dom"
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import ScrollToTop from "./../components/ScrollToTop"

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

  const systemIsDark = useMediaQuery({
    query: "(prefers-color-scheme: dark)",
  });

  const [isDark, setIsDark] = useState(systemIsDark);

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <>
      <ScrollToTop />
      <Outlet context={{ isDark, setIsDark }}/>
    </>
  )
}