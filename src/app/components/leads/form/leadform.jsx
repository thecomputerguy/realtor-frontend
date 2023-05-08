'use client'
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import {toast} from 'react-toastify'

//Yup schema to validate the form
const schema = Yup.object().shape({
    firstName : Yup.string().required().min(5).max(2000),
    middleName: Yup.string().required().min(5).max(4000),
    lastName: Yup.string().required().min(5).max(2000),
    email: Yup.string().required().email(),
    phone: Yup.number().required().min(10),
    status: Yup.string().required(),
})

const LeadForm = ({lead, projectId}) => {
    const initValues = lead || {
        "firstName": "",
        "middleName": "",
        "lastName": "",
        "email": "",
        "phone": "",
        "status": "REGISTERED_IN_SYSTEM",
      }

    const formik = useFormik({
        initialValues: initValues,
        validationSchema: schema,
        onSubmit: async ({firstName, middleName, lastName, email, phone, status}) => {
            //make an api call here
            try {
            
                if(lead){
                    //edit
                        const URL = `${process.env.NEXT_PUBLIC_HOST}${process.env.NEXT_PUBLIC_CONTEXT_LEAD}update/${lead.id}`            
                        const response = await axios.put(URL, {id: lead.id, project: lead.project, firstName, middleName, lastName, email, phone, status, deleted: lead.deleted})    
                        toast('Lead is updated successfully.', { hideProgressBar: true, autoClose: 5000, type: 'success' })
                        return response
                }else{
                    //create
                        const URL = `${process.env.NEXT_PUBLIC_HOST}${process.env.NEXT_PUBLIC_CONTEXT_LEAD}`
                        const response = await axios.post(URL, {project: projectId, firstName, middleName, lastName, email, phone, status, deleted: false})   
                        toast('Lead is created successfully.', { hideProgressBar: true, autoClose: 5000, type: 'success' })
                        return response
                }
            } catch(error){
                toast(error, { hideProgressBar: true, autoClose: 5000, type: 'error' })
                return error
            }
        },
    })

    const {errors, touched, values, setValues, handleChange, handleSubmit} = formik

  return (
    <form onSubmit={handleSubmit} method="POST">
        <div>
            <label htmlFor="firstName">FirstName</label>
            <input id="firstName" type="text" name="firstName" value={values.firstName} onChange={handleChange} />
            {errors.firstName && touched.firstName && <span>{errors.firstName}</span>}
        </div>
        <div>
            <label htmlFor="middleName">MiddleName</label>
            <input id="middleName" type="text" name="middleName" value={values.middleName} onChange={handleChange} />
            {errors.middleName && touched.middleName && <span>{errors.middleName}</span>}
        </div>
        <div>
            <label htmlFor="lastName">LastName</label>
            <input id="lastName" type="text" name="lastName" value={values.lastName} onChange={handleChange} />
            {errors.lastName && touched.lastName && <span>{errors.lastName}</span>}
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" name="email" value={values.email} onChange={handleChange} />
            {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        <div>
            <label htmlFor="phone">Phone</label>
            <input id="phone" type="text" name="phone" value={values.phone} onChange={handleChange} />
            {errors.phone && touched.phone && <span>{errors.phone}</span>}
        </div>
        <div style={lead ? {'display':'block'} : {'display':'hidden'}}>
            <label htmlFor="status">Status</label>
            <input id="status" type="text" name="status" value={values.status} onChange={handleChange} />
            {errors.status && touched.status && <span>{errors.status}</span>}
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}

export default LeadForm