import { Link } from 'react-router-dom'
import ImageBox from './ImageBox'

// value for dir: image on the left(0), on the right(1)
function CodingProjectThumbnail({ dir=0, slug, title, images, headImgNum, cate, skills, techStack, thumbnailDes }) {
  /**
   * <IlluProjectThumbnail 
          key={p.id}
          headImage={p.headImage} 
          cate={p.category}
          slug={p.slug}
        />
   */
  const topDivClass = `coding thumb dir-${dir}`

  
  return (
    <div className={topDivClass}>
      <Link to={slug} className='coding thumb-link link-no-hover' >
        <ImageBox images={images} headImgNum={headImgNum} />
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
            <p>{thumbnailDes}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CodingProjectThumbnail


