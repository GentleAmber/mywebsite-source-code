import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { FaMoon } from 'react-icons/fa'
import { IoMdSunny } from 'react-icons/io'
import { useEffect } from 'react'

function AppLayout() {

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
    <div className='applayout-bg'>
      <nav className='app-nav'>
        <NavLink to='/' className='navlink' id='nav-home'>Amber Wang</NavLink>
        <div className='app-subnav'>
          <NavLink to='aboutme' className='navlink'>About Me</NavLink>
          <NavLink to='works' className='navlink'>Works</NavLink>
          <NavLink to='interests' className='navlink'>Interests</NavLink>
          <FaMoon />
          <IoMdSunny />
        </div>
      </nav>
      <Outlet />
      <footer>
        <p>© Amber Wang, 2025-{new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default AppLayout
