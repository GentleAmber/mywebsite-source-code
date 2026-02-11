import allExperiences from './../data/allExperiences'
import Showcase from './../components/Showcase'
import { useMediaQuery } from "react-responsive"

function Resume() {
  const isMobile = useMediaQuery({
    query: "(max-width: 61rem)",
  })

  return(
    <div className='app-bg' id='resume-bg'>
      <div className='resume-content'>
        <div className='resume-compo resume-title'>
          <div className='resume-compo-title'>
            <h1>
              Amber WANG
            </h1>
          </div>
          {!isMobile && 
          <div className='resume-compo-content'>
            <span>wangkexin4321@gmail.com</span><span>Edinburgh</span>
          </div>
          }
          {isMobile && 
          <div className='resume-compo-content'>
            <span>wangkexin4321@gmail.com</span><span>Edinburgh</span>
          </div>
          }
          
        </div>
        <div className='resume-compo resume-summary'>
          <div className='resume-compo-title'>
            <h2>SUMMARY</h2>
          </div>
          <div className='resume-compo-content puretext'>
            <p>
              With a background in illustration and engineering, I build systems that are both technically solid
              and thoughtfully designed. I learn new tools quickly, value strong fundamentals, and collaborate effectively within teams.
            </p>
          </div>

        </div>
        <div className='resume-compo resume-skills'>
          <div className='resume-compo-title'>
            <h2>SKILLS</h2>
          </div>
          <div className='resume-compo-content'>
            <ul>
              <li>
                <b className='text-codepiece'>Programming Language:</b> Java, HTML, CSS, Javascript, MySQL, PostgreSQL 
              </li>
              <li>
                <b className='text-codepiece'>Web Development:</b> Express, EJS, React, Vite, Next.js, Git, Linux
              </li>
              <li>
                <b className='text-codepiece'>Software:</b> MS Excel, Adobe Indesign, Adobe Photoshop
              </li>
              <li>
                <b className='text-codepiece'>Language:</b> English, Mandarin
              </li>
            </ul>
          </div>
        </div>
        <Showcase allExperiences={allExperiences} />
        <div className='resume-compo resume-addition'></div>
      </div>
    </div>
  ) 
}
export default Resume
