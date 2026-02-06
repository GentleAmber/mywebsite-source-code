import allExperiences from './../data/allExperiences'
import Showcase from './../components/Showcase'

function Resume() {
  return(
    <div className='app-bg' id='resume-bg'>
      <Showcase allExperiences={allExperiences} />
    </div>
  ) 
}
export default Resume
