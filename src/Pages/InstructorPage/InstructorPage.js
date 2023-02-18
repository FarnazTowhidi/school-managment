import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios";

export default function InstructorPage() {
  const [instructors, setInstructors] = useState({})

  useEffect (() => {
    async function getInstructor () {
      const {data} = await axios.get ("http://localhost:3001/api/instructors/")
      console.log (data)
      setInstructors(data)
    }
    getInstructor()
  }, [])


  return (
    
    <>
      {/* {instructors.map ((instructor) => {
        <>
          <div>dfgfdg</div>
          
        </>
      })
      } */}
    </>
  )
}
