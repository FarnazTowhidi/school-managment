import React from 'react'
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import { Form} from 'react-bootstrap';
import axios from "axios";

export default function CoursesForm() {
    const [formData, SetFormData] = useState (
        {
            courseName: "",
        }
    )
    const [updateMessage, SetUpdateMessage] = useState ("")

    async function handleSubmit (e) {
        e.preventDefault(); 
        await axios.post ("http://localhost:3001/api/courses", formData)
        SetFormData ({
            courseName: "",
        })
        SetUpdateMessage ("New course Added")
    }

    function handleChange(e)  {
        SetFormData ({...formData, [e.target.name]:e.target.value})
    }

  return (
    <Form onSubmit={handleSubmit}>         
        <Form.Control 
            type="text" 
            placeholder="Course name" 
            name="courseName"
            required={true}
            value={formData.courseName}
            onChange={handleChange}
        />
     
        <Form.Label>{updateMessage}</Form.Label><br />
        <Button variant="primary" type="submit">
            Submit
        </Button> 
    </Form>    
    
  )
}
