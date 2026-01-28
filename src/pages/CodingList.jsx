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
        <h1>Basics</h1>
        <p>
          I believe the basics are the most important in most subjects. I started learning programming out of curiosity
          of video games, and have since learnt Java and web development thoroughly. Behind these, I taught myself 
          the fundamentals of computer engineering and architecture by playing Turing Complete and doing part
          of the course NandtoTetris. I am always curious about the foundations and composations of the whole 
          picture of computer science. And I hope my programming reflects that.
        </p>
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