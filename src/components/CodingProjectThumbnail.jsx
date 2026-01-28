import { Link } from 'react-router-dom'

// value for dir: image on the left(0), on the right(1)
function CodingProjectThumbnail({ dir=0, slug, title, images, cate, skills, techStack, thumbnailDes }) {
  const topDivClass = `coding thumb dir-${dir}`

  
  return (
    <div className={topDivClass} id={slug}>
      <Link to={slug} className='coding thumb-link link-no-hover' >
        <div className='imgbox'>
          <img src={images[0]}></img>
        </div>
        <div className='textBox'>
          <div className='title'>
            <h2>{title}</h2>
          </div>
          <div className='tags'>
            <div className='cate tag'>
              {cate.map((c, index) => <span key={index}>{c}</span>)}
            </div>
            <div className='skills tag'>
              {skills.map((s, index) => <span key={index}>{s}</span>)}
            </div>
            <div className='tech-stack tag'>
              {techStack.map((t, index) => <span key={index}>{t}</span>)}
            </div>
          </div>
          <div className='thumb-des'>
            {thumbnailDes.split("\n").map((line, i) => (
              <p key={i}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CodingProjectThumbnail


