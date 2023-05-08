'use client'
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import {toast} from 'react-toastify'

//Yup schema to validate the form
const schema = Yup.object().shape({
    name : Yup.string().required().min(5).max(2000),
    description: Yup.string().required().min(5).max(4000),
    hosted: Yup.string().required().min(5).max(2000),
    imageUrls: Yup.string().optional(),
    status: Yup.string().required(),
})

const ProjectForm = ({project}) => {
    const initValues = project || {
        name: "",
        description: "",
        hosted: "",
        imageUrls: "",
        status: ""
    }

    const formik = useFormik({
        initialValues: initValues,
        validationSchema: schema,
        onSubmit: async ({name, description, hosted, imageUrls, status}) => {
            //make an api call here
            try {
                if(project){
                    //edit
                    const URL = `${process.env.NEXT_PUBLIC_HOST}${process.env.NEXT_PUBLIC_CONTEXT_PROJECT}update/${project.id}`
                    const response = await axios.put(URL, {id: project.id, name, description, hosted, imageUrls, status, deleted: project.deleted})
                    toast('Project is updated successfully.', { hideProgressBar: true, autoClose: 5000, type: 'success' })
                    return response
                }else{
                    //create
                    const URL = `${process.env.NEXT_PUBLIC_HOST}${process.env.NEXT_PUBLIC_CONTEXT_PROJECT}`
                    const response = await axios.post(URL, {name, description, hosted, imageUrls, status, deleted: false})
                    toast('Project is created successfully.', { hideProgressBar: true, autoClose: 5000, type: 'success' })
                    return response
                }    
            } catch (error) {
                toast(error, { hideProgressBar: true, autoClose: 5000, type: 'error' })
                return error
            }
            
        },
    })

    const {errors, touched, values, setValues, handleChange, handleSubmit} = formik

  return (
    <form onSubmit={handleSubmit} method="POST">
        <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" value={values.name} onChange={handleChange} />
            {errors.name && touched.name && <span>{errors.name}</span>}
        </div>
        <div>
            <label htmlFor="description">Description</label>
            <input id="description" type="text" name="description" value={values.description} onChange={handleChange} />
            {errors.description && touched.description && <span>{errors.description}</span>}
        </div>
        <div>
            <label htmlFor="hosted">Hosted</label>
            <input id="hosted" type="text" name="hosted" value={values.hosted} onChange={handleChange} />
            {errors.hosted && touched.hosted && <span>{errors.hosted}</span>}
        </div>
        <div>
            <label htmlFor="imageUrls">ImageUrls</label>
            <input id="imageUrls" type="text" name="imageUrls" value={values.imageUrls} onChange={handleChange} />
            {errors.imageUrls && touched.imageUrls && <span>{errors.imageUrls}</span>}
        </div>
        <div>
            <label htmlFor="status">Status</label>
            <input id="status" type="text" name="status" value={values.status} onChange={handleChange} />
            {errors.status && touched.status && <span>{errors.status}</span>}
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}

export default ProjectForm