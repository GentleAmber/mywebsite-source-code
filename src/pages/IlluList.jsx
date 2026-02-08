import projects from "../data/illustrationProjects"
import IlluProjectThumbnail from "./../components/IlluProjectThumbnail"
import illuIntro from "./../assets/illu-yourowngood/yog-3.jpg"

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
        <div className="textbox">
          <h1></h1>
          <p>
            I started learning art at the age of 10. I have been doing it on and off but it is always with me there. 
            I don't have a uniform "style" which I now see as a good thing. 
          </p>
          <p>
            My projects feature a wide range of subjests. Some are comic stories, while some are just simple
            cute chat stickers for everyone to use. Most of them are created with digital device.
          </p>
        </div>
        
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