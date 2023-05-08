import Lead from "../lead/lead"

const LeadList = ({leads}) => {
  
  return (
          leads.map(lead => {
            return <Lead key={lead.id} lead={lead} />
          })
    )
}

export default LeadList