import React from 'react'
import Button from 'react-bootstrap/Button';
import { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Form} from 'react-bootstrap';
import axios from "axios";

export default function StudentForm({setStudentAddFlag}) {
    const [formData, setFormData] = useState (
     {
        firstname:"",
        lastname: "",
        datebirth: ""
    })
    const [updateMessage, SetUpdateMessage] = useState ("")

    async function handleSubmit (e) {
       e.preventDefault(); 
       await axios.post ("http://localhost:3001/api/students", formData)
       setFormData ({
        firstname:"",
        familyname: "",
        datebirth: ""
    })
        SetUpdateMessage ("New Student has been added")
        setStudentAddFlag("true")
       .catch(error => {
        console.log (error.response.data)
    });
    }

    async function handleChange (e) {
        setFormData ({...formData, [e.target.name]: e.target.value})
    }
    return (  
        <>
            <Form onSubmit={handleSubmit}>         
                <Form.Control 
                    type="text" 
                    placeholder="first name" 
                    name="firstname"
                    required={true}
                    value={formData.firstname}
                    onChange={handleChange}
                />
                <Form.Control 
                    type="text" 
                    placeholder="Family name" 
                    name="familyname"
                    required={true}
                    value={formData.familyname}
                    onChange={handleChange}
                />
                <Form.Control 
                    type="text" 
                    placeholder="mm/dd/yyyy"
                    name="datebirth"
                    required={true}
                    value={formData.datebirth}
                    onChange={handleChange}
                />
                <Form.Label>{updateMessage}</Form.Label><br />
                <Button variant="primary" type="submit">
                    Submit
                </Button> 
            </Form>    
        </>       
    )
}
