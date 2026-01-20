import profileUrl from './../assets/profile.jpeg'
import allExperiences from './../data/allExperiences'
import Showcase from './../components/Showcase'
import { FaLinkedinIn } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"


function AboutMe() {
  return (
    <div className='app-bg' id='aboutme-bg'>
      <div id='about-me-intro'>
        <img src={profileUrl} id='profile' width='100' height='100'/>
        <h1>
        Hi, I'm Amber.
        </h1>
      </div>
      
      <Showcase allExperiences={allExperiences} />

      <div id='contact-me'>
        <p>You can find more technical details about my experience on Linkedin, or email me regarding work opportunities.</p>
        <div id="contact-me-icons">
          <a href="https://www.linkedin.com/in/amber-wang-658817252/" target="_blank"><FaLinkedinIn /></a>
          <a href="mailto:wangkexin4321@gmail.com" id="emailaddress"><FaEnvelope  /></a>
        </div>
      </div>
    </div>
  )
}

export default AboutMe