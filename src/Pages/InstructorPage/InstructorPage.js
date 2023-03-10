import React from 'react'
import {useState, useEffect} from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import InstructorListElement from '../../Component/InstructorListElement/InstructorListElement';

export default function InstructorPage() {
  const [instructors, setInstructors] = useState()
  const [instructorAdd, setInstructorAdd] = useState(false)
  const [form, setForm]= useState( 
    {
      firstname:"",
      lastname:"",
      description: "",
      image: ""
    }
  )

  useEffect (() => {
    async function getInstructor () {
      const {data} = await axios.get ("http://localhost:3001/api/instructors/")  
      await setInstructors(data)
    }
    getInstructor()
  }, [instructorAdd])

  async function handleSubmit (e) {
    //e.preventDefault();
    alert ("sdf")
    const data = axios.post ("http://localhost:3001/api/instructors/", {form})
    setInstructorAdd (true)
  }

  function handleChange (e) {
    
    setForm ({...form, [e.target.name]:e.target.value})
    console.log (e.target.value)
  }

  return ( 
    <>
    <Form>
      <Form.Control type="text" name="firstname" placeholder="Instructor firstname" onChange={handleChange} />
      <Form.Control type="text" name="lastname" placeholder="Instructor lastname" onChange={handleChange} />
      <Form.Control type="text" name="description" placeholder="Instructor description" onChange={(()=>handleChange)} />
      <Form.Control type="file" name="image" placeholder="Instructor image" onChange={handleChange} />
      <Button type="submit" variant="secondary" onClick={handleSubmit}>Add Instructor 2</Button> 

    </Form>
      {instructors?.map ((instructor, idx) => (
        <InstructorListElement 
          name={instructor?.firstname + " " + instructor?.lastname} 
          imagesrc={instructor?.image} 
          description={instructor?.description}
          key={`instructor${idx}`}
        />
        
        ))}
    </>
  )
}
