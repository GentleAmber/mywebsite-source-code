import { Link } from 'react-router-dom'

function Cover() {
  return (
    <div className='cover-bg'>
      <h1>Welcome to Amber's website</h1>
      <Link to='aboutme' className='cover-link'>About Me</Link>
      <Link to='coding' className='cover-link'>Coding</Link>
      <Link to='illustrations' className='cover-link'>Illustrations</Link>
      <Link to='interests' className='cover-link'>Interests</Link>
    </div>
  )
}

export default Cover
