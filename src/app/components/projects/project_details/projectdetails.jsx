import Link from 'next/link'

const ProjectDetails = ({project}) => {

  return (
    <>
      <div>
                <li>{project.name}</li>
                <li>{project.description}</li>
                <li>{project.status}</li>
                <li>{project.deleted}</li>
                <li><Link href={`/project/edit/${project.id}`}>Edit</Link></li>
                {/* <td><button onClick={() => handleDelete(router, project.id)}></button></td> */}
      </div>
      <div>
          <Link href={`/leads/project/${project.id}`}>Show Leads</Link>
      </div>
     
    </>
  )
}

export default ProjectDetails