import { NavLink, Outlet } from 'react-router-dom'
import { FaMoon } from 'react-icons/fa'
import { IoMdSunny } from 'react-icons/io'

function AppNav() {
  const currentYear = new Date().getFullYear();

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
        <p>© Amber Wang, 2025-{currentYear}</p>
      </footer>
    </div>
  )
}

export default AppNav
