import { useState, useEffect } from "react"
import { useMediaQuery } from 'react-responsive'

export const DarkModeToggle = () => {
  const systemIsDark = useMediaQuery({
    query: '(prefers-color-scheme: dark)'
  })
  const [isDark, setIsDark] = useState(systemIsDark)
  
  useEffect(() => {
    document.body.classList.toggle("dark", isDark)
  }, [isDark])

  return (
    <div className='dark-mode-toggle' onClick={() => setIsDark(prev => !prev)}>
      {isDark ? <a>🔆</a> : <a>🌙</a>}
    </div>
  )
}

export default DarkModeToggle