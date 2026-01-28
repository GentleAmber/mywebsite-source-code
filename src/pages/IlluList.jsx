import projects from "../data/illustrationProjects"
import IlluProjectThumbnail from "./../components/IlluProjectThumbnail"
import illuIntro from "./../assets/illu-various/various-6.jpg"

function IlluList() {
  return (
    <div className='works-wrapper illu'>
      <div className='works-intro illu'
        style={{
          backgroundImage: `
            linear-gradient(
            to bottom,
            rgba(0,0,0,0) 60%,
            rgba(0,0,0,0) 80%,
            var(--color-background) 100%),
            url(${illuIntro})
          `
        }}
      >
        <h1></h1>
        <p>
          I believe everyone has ability to create. Drawing is a good way for me to explore my own thoughts and feelings.
          I recognise some of my own patterns or what I value most when I create a story. 
        </p>
      </div>
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
    </div>
  )
}  

export default IlluList