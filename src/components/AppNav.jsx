import DarkModeToggle from './ModeToggle'
import { NavLink, useOutletContext } from 'react-router-dom'


function AppNav() {
  
  const { isDark, setIsDark } = useOutletContext();

  return (
    <nav className='app-nav'>
      <NavLink to='/' id='nav-home'>Amber Wang</NavLink>
      <div className='app-subnav'>
        <NavLink to='aboutme' className='app-navlink'>About Me</NavLink>
        <NavLink to='coding' className='app-navlink'>Coding</NavLink>
        <NavLink to='illustrations' className='app-navlink'>Illustrations</NavLink>
        <NavLink to='resume' className='app-navlink'>Resume</NavLink>
        <DarkModeToggle isDark={isDark} setIsDark={setIsDark}/>
      </div>
    </nav>
  )
}

export default AppNav