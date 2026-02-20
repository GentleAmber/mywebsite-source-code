import LiveAppIndividual from './LiveAppIndividual'

function LiveApps({ codingProjects }) {
  return (
    <div className='live-apps'>
      {codingProjects.map((project, index) => 
        (project.liveApp ? 
          <LiveAppIndividual 
          project={project} 
          key={project.id}
          dir={index % 2}
          /> : null
        )
      )}
    </div>
  )
}

export default LiveApps