import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import AboutMe from './pages/AboutMe'
import Interests from './pages/Interests'
import WorksCoding from './pages/WorksCoding'
import './App.css'
import AppLayout from './layouts/AppLayout'
import Cover from './pages/Cover'

function App() {
  /* Switch layout based on route (Cover or AppLayout) */
  const location = useLocation()

  useEffect(() => {
    // const root = document.getElementById('root');
    const body = document.body;

    if (location.pathname === '/' || location.pathname === '') {
      body.classList.remove('applayout')
    } else {
      body.classList.add('applayout')
    }
  }, [location.pathname])

  return (
    <Routes>
      {/* Cover page */}
      <Route index element={<Cover />} />

      {/* App pages with shared navbar */}
      <Route element={<AppLayout />}>
        <Route path='aboutme' element={<AboutMe />} />
        <Route path='interests' element={<Interests />} />
        <Route path='works' element={<WorksCoding />} />
      </Route>
    </Routes>
  )
}

export default App
