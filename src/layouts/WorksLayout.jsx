import { NavLink, Outlet } from 'react-router-dom'

function WorksLayout() {
  return (
    <div className='workslayout-bg'>
      <div className='works-content'>
        <Outlet />
      </div>
      <div className='works-sidenav'>
        {/* <NavLink to='aboutme' className='navlink'>About Me</NavLink> */}
        <NavLink to='' className='navlink'>Coding</NavLink>
        <NavLink to='illustrations' className='navlink'>Illustrations</NavLink>
      </div>

    </div>
  )
}

export default WorksLayout