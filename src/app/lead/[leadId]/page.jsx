import LeadDetails from "@/app/components/leads/lead_details/leaddetails"

async function getLead(leadId){
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}${process.env.NEXT_PUBLIC_CONTEXT_LEAD}${leadId}`)
  
    if(!response.ok){
      throw new Error('Could not load leads')
    }
  
    return response.json()
  }

const LeadPage = async ({params}) => {
    const leadId = params.leadId
    const response = await getLead(leadId)
    return (
    <LeadDetails lead={response.data} />
  )
}

export default LeadPage