import Link from "next/link"

const LeadDetails = ({lead}) => {
    
  return (
    <>
      <ul>
                <li>{lead.firstName}</li>
                <li>{lead.middleName}</li>
                <li>{lead.lastName}</li>
                <li>{lead.email}</li>
                <li>{lead.phone}</li>
                <li>{lead.status}</li>
                <li><Link href={`/lead/edit/${lead.id}`}>Edit</Link></li>
                {/* <td><button onClick={() => handleDelete(router, lead.id)}></button></td> */}
      </ul>
    </>
  )
}

export default LeadDetails