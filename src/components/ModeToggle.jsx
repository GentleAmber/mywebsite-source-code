

function DarkModeToggle({ isDark, setIsDark }) {
  return (
    <div className='dark-mode-toggle' onClick={() => setIsDark(prev => !prev)}>
      {isDark ? <a>🔆</a> : <a>🌙</a>}
    </div>
  )
}

export default DarkModeToggle