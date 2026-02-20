function LiveAppIndividual({ project, dir }) {
  const appDir = 'live-app-indi dir-' + dir;

  return (
    // ClassName common part: live-app-indi
    <div className={appDir}>
      <a href={project.liveApp} target="_blank" >
        <div className='app-image'>
          {project.id === 2 && 
            <img src={project.images[1]} />
          }
          {project.id === 3 && 
            <img src={project.images[1]} />
          }
        </div>
        
      </a>
      <div className='app-content'>
        <div className='app-title'>{project.title}</div>
        <div className='app-intro'>
          <p>{project.thumbnailDes}</p>
        </div>
        <div className='btn-group'>
          <div className='app-btn'>
            <a href={project.liveApp} target="_blank">LIVE APP</a>
          </div>
          
          <div className='app-btn'>
            <a href={project.link} target="_blank">LEARN MORE</a>
          </div>
          
        </div>
      </div>
    </div>
  )
}
export default LiveAppIndividual