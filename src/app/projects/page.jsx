import { Qahiri } from 'next/font/google'
import Link from 'next/link'
import ProjectList from '../components/projects/project_list/projectlist'

async function getProjects(){
  const URL = `${process.env.NEXT_PUBLIC_HOST}${process.env.NEXT_PUBLIC_CONTEXT_PROJECT}all`
  console.log("URL FORMED IS ", URL)
  const response = await fetch(URL, {
    next: {
      revalidate: 5
    }
  })
 
  if(!response.ok){
    throw new Error("Failed to fetch projects")
  }
  return response.json()
}

const Projects = async () => {
  const response = await getProjects()
  return (
    <>
    <div>Projects</div>
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Hosted</th>
          <th>Project Status</th>
          <th>Action 1</th>
          <th>Action 2</th>
        </tr>
        <ProjectList projects={response.data}/>
      </tbody>
    </table>
    </>
  )
}

export default Projects