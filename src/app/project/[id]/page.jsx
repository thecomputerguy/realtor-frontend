import ProjectDetails from "@/app/components/projects/project_details/projectdetails"

async function getProjectDetails(id){
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}${process.env.NEXT_PUBLIC_CONTEXT_PROJECT}${id}`, {
    next: {
      revalidate: 60
    }
  })
  
  if(!response.ok){
      throw new Error('Could not load project details')
  }

  return response.json()
}

const ProjectPage = async ({params}) => {
    const id = params.id
    const response = await getProjectDetails(id)
  return (
    <ProjectDetails project={response.data}/>
  )
}

export default ProjectPage