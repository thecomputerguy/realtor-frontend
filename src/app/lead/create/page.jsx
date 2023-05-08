import LeadForm from "@/app/components/leads/form/leadform" 

const getProject = async (hostName) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}${process.env.NEXT_PUBLIC_CONTEXT_PROJECT}hostName/${hostName}`, {next: {revalidate : 5}})

    if(!response.ok){
        throw new Error("Could not find lead")
      }
    
      return response.json()
}

const LeadPage = async () => {
    const response = await getProject(process.env.HOSTNAME || 'localhost')
  return (
    <LeadForm projectId={response.data.id}/>
  )
}

export default LeadPage