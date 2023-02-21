import React from 'react'
import "./InstructorListElement.css"

export default function InstructorListElement({name, imagesrc, description}) {
  return (
   <div class="wrapper" >
    
    <div>{name}</div>     
    <img style={{width:"100px"}} src={imagesrc} />
    <div>{description}</div>
   </div>
  )
}
