import { useLoaderData, Link } from "react-router-dom"
import { IoReturnDownBack } from "react-icons/io5"

function CodingProject() {
  const project = useLoaderData();

  return (
    <div className='coding-project'>
      {project.id === 1 && (
        <div id={project.slug}>
          <img src={project.images[2]}/>
        </div>
      )}

      <Link to='../' className='return'>
        <IoReturnDownBack />
        <span> Return</span>
      </Link>
    </div>
  )
}

export default CodingProject;