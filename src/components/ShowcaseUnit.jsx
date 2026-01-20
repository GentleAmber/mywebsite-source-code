function ShowcaseUnit({experience}) {
  return (
    <div className='showcase-unit'>
      <div className='showcase-unit-title'>
        <span>{experience.period}</span>
        <span>{experience.position}</span>
        <span>{experience.company}</span>
        <span>{experience.location}</span>
      </div>
      
      <p>{experience.description}</p>
    </div>
  )
}

export default ShowcaseUnit