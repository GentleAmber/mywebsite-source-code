import projects from "../data/illustrationProjects"
import IlluProjectThumbnail from "./../components/IlluProjectThumbnail"

function IlluList() {
  return (
    <div className='works-display illustrations'>
      {projects.map(p =>
        <IlluProjectThumbnail 
          key={p.id}
          headImage={p.headImage} 
          cate={p.category}
          slug={p.slug}
        />
      )}
    </div>
  )
}  

export default IlluList