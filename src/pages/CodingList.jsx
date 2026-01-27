import projects from "./../data/codingProjects"
import CodingProjectThumbnail from "./../components/CodingProjectThumbnail"

function CodingList() {
  /**
   * dir=0, slug, title, images, cate, skills, techStack, thumbnailDes
   */
  return (
    <div className='works-display coding'>
      {projects.map((p, index) =>
        <CodingProjectThumbnail 
          key={p.id}
          dir={index % 2}
          slug={p.slug}
          title={p.title}
          images={p.images}
          cate={p.category}
          skills={p.skills}
          techStack={p.techStack}
          thumbnailDes={p.thumbnailDes}
        />
      )}
    </div>
  )
}

export default CodingList