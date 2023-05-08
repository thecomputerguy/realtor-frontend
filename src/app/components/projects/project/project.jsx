import Link from "next/link"
// async function handleDelete(router, id){
//  const response = await fetch(`http://localhost:8082/realtor/v1/project/delete/${id}`, {
//     method: "DELETE"
//  })
//     if(!response.ok){
//         throw new Error("Could not delete project")
//     }
//     router.replace("/projects")
// }

const Project = ({project}) => {

  return (
    <tr>
              <td>{project.name}</td>
              <td>{project.description}</td>
              <td>{project.hosted}</td>
              <td>{project.status}</td>
              <td><Link href={`/project/${project.id}`}>View</Link></td>
              <td><Link href={`/project/edit/${project.id}`}>Edit</Link></td>
              {/* <td><button onClick={() => handleDelete(router, project.id)}></button></td> */}
    </tr>
  )
}

export default Project