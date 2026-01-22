import { DarkModeToggle } from './ModeToggle'
import { NavLink } from 'react-router-dom'


function AppNav() {
  return (
    <nav className='app-nav'>
      <NavLink to='/' id='nav-home'>Amber Wang</NavLink>
      <div className='app-subnav'>
        <NavLink to='aboutme' className='navlink'>About Me</NavLink>
        <NavLink to='coding' className='navlink'>Coding</NavLink>
        <NavLink to='illustrations' className='navlink'>Illustrations</NavLink>
        <NavLink to='interests' className='navlink'>Interests</NavLink>
        <DarkModeToggle />
      </div>
    </nav>
  )
}

export default AppNav