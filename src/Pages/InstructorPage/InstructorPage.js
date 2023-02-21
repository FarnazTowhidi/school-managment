import React from 'react'
import {useState, useEffect} from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import InstructorListElement from '../../Component/InstructorListElement/InstructorListElement';

export default function InstructorPage() {
  const [instructors, setInstructors] = useState()

  useEffect (() => {
    async function getInstructor () {
      const {data} = await axios.get ("http://localhost:3001/api/instructors/")  
      await setInstructors(data)
    }
    getInstructor()
  }, [])


  return ( 
    <>
    <Form>
      <Form.Control type="text" name="firstname" placeholder="Instructor firstname" />
      <Form.Control type="text" name=""lastname placeholder="Instructor lastname" />
      <Form.Control type="text" name="description" placeholder="Instructor description" />
      <Form.Control type="file" name="image" placeholder="Instructor image" />
      <Button variant="secondary">Add Instructor </Button> 

    </Form>
      {instructors?.map ((instructor) => (
        <InstructorListElement 
          name={instructor?.firstname + " " + instructor?.lastname} 
          imagesrc={instructor?.image} 
          description={instructor?.description}
        />
        
        ))}
    </>
  )
}
