import { Outlet, useOutletContext } from 'react-router-dom'
import AppNav from './../components/AppNav'

function AppLayout() {

  const { isDark, setIsDark } = useOutletContext();
  
  return (
    <div className='applayout-bg'>
      <AppNav context={{ isDark, setIsDark }}/>
      <Outlet />
      <footer>
        <p>© Amber Wang, 2025-{new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default AppLayout
