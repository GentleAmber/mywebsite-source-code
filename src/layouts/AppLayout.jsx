import { Outlet } from 'react-router-dom'
import AppNav from './../components/AppNav'

function AppLayout() {

  return (
    <div className='applayout-bg'>
      <AppNav />
      <Outlet />
      <footer>
        <p>© Amber Wang, 2025-{new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default AppLayout
