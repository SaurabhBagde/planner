import React from 'react'
import moment from 'moment'

const ProjectSumary = ({project})=>{
    return(
        <div className="card z-depth-0 project-summary" >
            <div className="card-content grey-text text-darken-3">
            {/* <img src="img/dbblue.png" alt="testing"></img> */}
            <span className="card-title">{project.title}</span>
            <p> Posted by {project.authorFirstName} {project.authorLastName}</p>
            <p className="text-grey">{moment(project.createdAt.toDate()).calendar()}</p>
            </div>
           
        </div>
    )
}


export default ProjectSumary