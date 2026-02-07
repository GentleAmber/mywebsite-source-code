import ShowcaseUnit from './ShowcaseUnit'

function ShowcaseColumn({id, attr, experiencesInCate}) {
  return (
    <div className='showcase-column'>
      <div className='showcase-column-title'><h2>{attr}</h2></div>
      <ul>
        {experiencesInCate.map((ex) => (
          <li key={ex.id}>
            <ShowcaseUnit experience={ex}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShowcaseColumn