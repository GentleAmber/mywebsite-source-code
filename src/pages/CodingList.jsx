import projects from "./../data/codingProjects"
import CodingProjectThumbnail from "./../components/CodingProjectThumbnail"
import codingIntro from "./../assets/coding-intro.png"

function CodingList() {
  /**
   * dir=0, slug, title, images, cate, skills, techStack, thumbnailDes
   */
  return (
    <div className='works-wrapper coding'>
      <div className='works-intro coding'
        style={{
          backgroundImage: `
            linear-gradient(
            to bottom,
            rgba(0,0,0,0) 60%,
            rgba(0,0,0,0) 80%,
            var(--color-background)  100%),
            url(${codingIntro})
          `
        }}
      >
        <div className="textbox">
          <p>
            I believe the basics are the most important in all the subjects, especially in this era of AI. 
            Therefore, on my programming journey, 
            I go deeper from the languages themselves to the fundamental structures of computers and network.
          </p>
        </div>
      </div>
      <div  className='works-display coding'>
        {projects.map((p, index) =>
          <CodingProjectThumbnail 
            key={p.id}
            dir={index % 2}
            slug={p.slug}
            title={p.title}
            images={p.images}
            headImgNum={p.headImgNum}
            cate={p.category}
            skills={p.skills}
            techStack={p.techStack}
            thumbnailDes={p.thumbnailDes}
          />
        )}
      </div>
    </div>
  )
}

export default CodingList