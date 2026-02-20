import profileUrl from './../assets/profile.jpg'
import Timeline from './../components/Timeline'
import AboutMeCard from './../components/AboutMeCard'
import LiveApps from './../components/LiveApps'
import cardData from './../data/aboutmeCardData'
import codingProjects from './../data/codingProjects'
import { FaLinkedinIn } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"


function AboutMe() {
  return (
    <div className='app-bg' id='aboutme-bg'>
      <div id='aboutme-intro'>
        <img src={profileUrl} id='profile' width='100' height='100'/>
        <h1>
        Hi, I'm Amber.
        </h1>
        <h2>
          I do <span className='text-highlight'>Full-stack web development</span>.
        </h2>
      </div>

      <h2 className='section-heading'>
        MILESTONES
      </h2>
      <Timeline />

      <AboutMeCard aboutmeData={cardData} />

      <h2 className='section-heading project-heading'>
        LIVE APPS
      </h2>
      <LiveApps codingProjects={codingProjects}/>

      <div className='pre-footer aboutme'>
        <div id='summary'>
          <h2>
            Life learner
          </h2>
        </div>
        <div id='contact-me'>
          <p>wangkexin4321@gmail.com</p>
          <p>Edinburgh, UK</p>
          <div id="contact-me-icons">
            <a href="https://www.linkedin.com/in/amber-wang-658817252" target="_blank"><FaLinkedinIn /></a>
            <a href="https://github.com/GentleAmber" target="_blank"><FaGithub /></a>
            <a href="mailto:wangkexin4321@gmail.com" target="_blank"><FaEnvelope  /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe