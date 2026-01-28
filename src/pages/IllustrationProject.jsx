import { useLoaderData, Link } from "react-router-dom"
import { IoReturnDownBack } from "react-icons/io5"

function IllustrationProject() {
  const project = useLoaderData()

  /* Preparation for masonry structure */
  const column1 = [];
  const column2 = [];
  if (project.id === 6) {
    let middlePoint = Math.floor(project.contentImage.length / 2)

    for (let i = 0; i < middlePoint; i++) {
      column1.push(project.contentImage[i])
    }

    for (let i = middlePoint; i < project.contentImage.length; i++) {
      column2.push(project.contentImage[i])
    }
  }
  
  return (
    <div className='illu-project'>
      
      <h1>{project.title}</h1>
      <p>{project.shortDes}</p>

      {project.id === 1 && (
        <div className='illu-project-images grid-6-column'>
          {project.contentImage.map((img, i) => (
            <a key={i} href={img} className='zoom-in' target='_blank'>
              <img src={img} />
            </a>
          ))}
        </div>
      )}

      {project.id === 2 && (
        <div className='illu-project-images couplet'>
          <a href={project.contentImage[0]} className='zoom-in' target='_blank'>
            <img src={project.contentImage[0]} />
          </a>
          <div className='horizontal-img'>
            <a href={project.contentImage[1]} className='zoom-in' target='_blank'>
              <img src={project.contentImage[1]} />
            </a>
            <a href={project.contentImage[2]} className='zoom-in' target='_blank'>
              <img src={project.contentImage[2]} />
            </a>
          </div>
          <a href={project.contentImage[3]} className='zoom-in' target='_blank'>
            <img src={project.contentImage[3]} />
          </a>
        </div>
      )}

      {project.id === 3 && (
        <div className='illu-project-images grid-4-column'>
          {project.contentImage.map((img, i) => (
            <a key={i} href={img} className='zoom-in' target='_blank'>
              <img src={img} />
            </a>
          ))}
        </div>
      )}

      {project.id === 4 && (
        <div className='illu-project-images standard'>
          {project.contentImage.map((img, i) => (
            <a key={i} href={img} className='zoom-in' target='_blank'>
              <img src={img} />
            </a>
          ))}
        </div>
      )}

      {project.id === 5 && (
        <div className='illu-project-images grid-same-height'>
          {project.contentImage.map((img, i) => (
          <a key={i} href={img} className='zoom-in' target='_blank'>
            <img src={img} />
          </a>
          ))}
        </div>
      )} 

      {project.id === 6 && (
        <div className='illu-project-images maso-wrapper maso-switcher masonry'>
          <div className='maso-flow'>
            {column1.map((img, i) => (
              <a key={i} href={img} className='zoom-in' target='_blank'>
                <img src={img} />
              </a>
            ))}
          </div>
          <div className='maso-flow'>
            {column2.map((img, i) => (
              <a key={i} href={img} className='zoom-in' target='_blank'>
                <img src={img} />
              </a>
            ))}
          </div>
        </div>
      )}
      <Link to='../' className='return'>
        <IoReturnDownBack />
        <span> Return</span>
      </Link>
    </div>
)}


export default IllustrationProject