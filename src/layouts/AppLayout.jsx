import { NavLink, Outlet } from 'react-router-dom'
import { FaMoon } from "react-icons/fa"
import { IoMdSunny } from "react-icons/io"

function AppNav() {
  return (
    <div className='bg' id='app-bg'>
      <nav className='app-nav'>
        <NavLink to='/' className='navlink'>Amber Wang</NavLink>
        <NavLink to='aboutme' className='navlink'>About Me</NavLink>
        <NavLink to='works' className='navlink'>Works</NavLink>
        <NavLink to='interests' className='navlink'>Interests</NavLink>
        <FaMoon />
        <IoMdSunny />
      </nav>
      <Outlet />
    </div>
  )
}

export default AppNav
