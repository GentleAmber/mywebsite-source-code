function ShowcaseUnit({experience}) {

  const des = experience.description
    .split("[n]")
    .map(line => line.trim()) 
    .filter(Boolean);

  return (
    <div className='showcase-unit'>
      <div className='showcase-unit-title'>
        <span>{experience.period}</span>
        <span>{experience.company}</span>
        <span>{experience.position}</span>
        <span>{experience.location}</span>
      </div>
      <ul className='showcase-ul'>
        {des.map((d, index) => 
        <li key={index}>{d}</li>)}
      </ul>
    </div>
  )
}

export default ShowcaseUnit