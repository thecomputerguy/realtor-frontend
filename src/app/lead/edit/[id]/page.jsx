import LeadForm from "@/app/components/leads/form/leadform" 

const getLead = async (leadId) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}${process.env.NEXT_PUBLIC_CONTEXT_LEAD}${leadId}`, {
    next: {
      revalidate: 5
    }
  })

  if(!response.ok){
    throw new Error("Could not find lead")
  }

  return response.json()
}

const LeadEdit = async ({params}) => {
  const response = await getLead(params.id)
  return (
    <LeadForm lead={response.data}/>
  )
}

export default LeadEdit