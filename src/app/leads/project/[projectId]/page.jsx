import LeadList from "@/app/components/leads/lead_list/leadlist"

async function getLeads(projectId){
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}${process.env.NEXT_PUBLIC_CONTEXT_LEAD}project/${projectId}`, {
        next: {
            revalidate: 60
        }
    })
  
    if(!response.ok){
      throw new Error('Could not load leads')
    }
  
    return response.json()
  }


const LeadsPage = async ({params}) => {
    const projectId = params.projectId
    const response = await getLeads(projectId)
    return (
        <>
            <div>Leads</div>
        <table>
            <tbody>
            <tr>
                <th>Firstname</th>
                <th>Middlename</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Action 1</th>
                <th>Action 2</th>
            </tr>
            
            <LeadList leads={response.data} />
        </tbody>
      </table>
    </>
    )
}

export default LeadsPage