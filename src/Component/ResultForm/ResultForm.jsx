import React from 'react'
import { useState, useEffect } from 'react'
import {Container, Rows, Cols, Form, Button} from "react-bootstrap"
import axios from "axios"

export default function ResultForm() {
    const [students, setStudents] = useState ([])
    const [courses, setCourse] = useState ([])
    const [forms, setForms] = useState ( {
       course: "",
       student: "", 
       result: "" 
    })

    useEffect(() => {
        async function listStudent () {
            const {data} = await axios.get ("http://localhost:3001/api/students/")
            setStudents(data)
        }
        listStudent()
    }, [])

    useEffect(() => {
        async function listCourse () {
            const {data} = await axios.get ("http://localhost:3001/api/courses/")
            setCourse(data)
        }
        listCourse()
    }, [])


    function handleChange (e) {
        setForms({...forms, [e.target.name]:e.target.value})
    }

    function handleSubmit (e) {
        e.preventDefault(); 
        axios.post ("http://localhost:3001/api/results/",forms)
    }
    
  return (
    <Container>
        <Form>
            <Form.Select name="student_id" onChange={handleChange}>
            {
                students?.map ((student)=> (
                    <option value={student?._id}>{student?.firstname}</option>          
                ))
            }     
           </Form.Select>

           <Form.Select name="course_id" onChange={handleChange()}>
            {
                courses?.map ((course)=> (
                    <option value={course?._id}>{course?.courseName}</option>          
                ))
            }     
           </Form.Select>
            <Button onSubmit={handleSubmit}>Submit</Button>
        </Form>
    </Container>
  )
}
