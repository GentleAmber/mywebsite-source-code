import DarkModeToggle from './ModeToggle'
import { useState, useRef, useEffect } from "react"
import { NavLink, useOutletContext } from 'react-router-dom'
import { useMediaQuery } from "react-responsive"
import { IoIosArrowDropdown } from "react-icons/io"


function AppNav() {
  const { isDark, setIsDark } = useOutletContext() // For dark mode toggle
  const [open, setOpen] = useState(false) // For dropdown
  const dropdownRef = useRef(null)

  const isMobile = useMediaQuery({
    query: "(max-width: 61rem)",
  })


  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false)
      }
    }

    function handleScroll(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      document.removeEventListener("click", handleClickOutside)
      window.removeEventListener("scroll", handleScroll)
    }

  },[])


  return (
    <nav className='app-nav'>
      <NavLink to='/' id='nav-home'>Amber Wang</NavLink>
      {!isMobile && 
        <div className='app-subnav'>
          <NavLink to='coding' className='app-navlink'>Coding</NavLink>
          <NavLink to='illustrations' className='app-navlink'>Illustrations</NavLink>
          <NavLink to='resume' className='app-navlink'>Resume</NavLink>
          <DarkModeToggle isDark={isDark} setIsDark={setIsDark}/>
        </div>
      }

      {isMobile &&
        <div className='app-subnav-mobile' ref={dropdownRef}>
          <a className='nav-dropdown-button' onClick={() => setOpen(prev => !prev)}>
            <IoIosArrowDropdown />
          </a>
          <div className="nav-dropdown-items" style={{
            display: open? "block" : "none",
          }}
          >
            <NavLink to='coding' className='dropdown-link' onClick={() => setOpen(false)}>Coding</NavLink>
            <NavLink to='illustrations' className='dropdown-link' onClick={() => setOpen(false)}>Illustrations</NavLink>
            <NavLink to='resume' className='dropdown-link' onClick={() => setOpen(false)}>Resume</NavLink>
          </div>
          <DarkModeToggle isDark={isDark} setIsDark={setIsDark}/>
        </div>
      }
      
    </nav>
  )
}

export default AppNav