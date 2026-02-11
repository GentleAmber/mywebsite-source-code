import ShowcaseColumn from './ShowcaseColumn'

function Showcase({allExperiences}) {
  return (
    <div className='showcase resume-compo' >
      {allExperiences.map((ex) => (
        <ShowcaseColumn 
          key={ex.id}
          id={ex.id}
          attr={ex.attr}
          experiencesInCate={ex.experiences}
        />
      ))}
    </div>
  )
}

export default Showcase