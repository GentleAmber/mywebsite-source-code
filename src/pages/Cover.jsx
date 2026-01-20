import { Link } from 'react-router-dom'

function Cover() {
  return (
    <div className='cover-bg'>
      <h1>Welcome to Amber's website</h1>
      <Link to='aboutme' className='cover-link'>About Me</Link>
      <Link to='works' className='cover-link'>Works</Link>
      <Link to='interests' className='cover-link'>Interests</Link>
    </div>
  )
}

export default Cover
