import Link from "next/link"
// async function handleDelete(router, id){
//     const response = await fetch(`http://localhost:8082/realtor/v1/lead/delete/${id}`, {
//        method: "DELETE"
//     })
   
//        if(!response.ok){
//            throw new Error("Could not delete lead")
//        }
//        router.replace("/projects")
//    }

const Lead = ({lead}) => {

    // const router = useRouter()

  return (
    <tr>
        <td>{lead.firstName}</td>
        <td>{lead.middleName}</td>
        <td>{lead.lastName}</td>
        <td>{lead.email}</td>
        <td>{lead.phone}</td>
        <td>{lead.status}</td>
        <td><Link href={`/lead/${lead.id}`}>View</Link></td>
        <td><Link href={`/lead/edit/${lead.id}`}>Edit</Link></td>
        {/* <td><button onClick={() => handleDelete(router, lead.id)}></button></td> */}
    </tr>
  )
}

export default Lead