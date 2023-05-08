import ProjectForm from "@/app/components/projects/form/projectform"

const getProject = async (projectId) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}${process.env.NEXT_PUBLIC_CONTEXT_PROJECT}${projectId}`, {
    next: {
      revalidate: 60
    }
  })

  if(!response.ok){
    throw new Error("Could not find project")
  }

  return response.json()
}

const ProjectEdit = async ({params}) => {
  const response = await getProject(params.id)
  return (
    <ProjectForm project={response.data}/>
  )
}

export default ProjectEdit