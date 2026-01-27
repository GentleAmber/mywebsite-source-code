import { Link } from 'react-router-dom'

function IlluProjectThumbnail({ headImage, cate, slug }) {
  return (
    <div className='illu thumb'>
      <Link to={slug} className='illu thumb-link' >
        <div className='illu thumb-wrapper'>
            <div className='imgholder'>
              <img src={headImage} id={`headimg-${slug}`}/>
            </div>
            <h2>{cate}</h2>
        </div>
      </Link>
    </div>
  )
}

export default IlluProjectThumbnail
