import Project from "../project/project"


const ProjectList = ({projects}) => {
    
  return (
    projects.map(project => {
        return <Project key={project.id} project={project} />
      })
  )
}

export default ProjectList