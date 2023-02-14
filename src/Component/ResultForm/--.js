import React from 'react'
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import { Container, Row, Col, Form} from 'react-bootstrap';
import axios from "axios";


export default function ResultForm() {
    const [students, setStudents] = useState ([])
    const [courses, setCourses] = useState ([])
    
    useEffect (() => {
        async function listStudent () {
            const {data} = await axios.get ("http://localhost:3001/api/students/")
            setStudents(data)
        }
        listStudent()    
    }, [])

    useEffect (() => {
        async function listCourses () {
            const {data} = await axios.get ("http://localhost:3001/api/courses/")
            setCourses(data)
        }
        listCourses()       
    }, [])


    async function handleSubmit () {
        await axios.post ("http://localhost:3001/api/results/")
    } 

  return (
    <>
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Select>
                    {
                        courses?.map ((course,idx) => (
                            <option key={`course_${idx}`} value={course?._id}>{course?.courseName}</option>
                        ))
                    }
                </Form.Select>



                <Form.Select>
                    {
                        students?.map ((student,idx) => (
                            <option key={`student_${idx}`} value={student?._id}>{student?.firstname}</option>
                        ))
                    }
                </Form.Select>
                <Form.Select>
                    <option value="A">Grade A</option>
                    <option value="B">Grade B</option>
                    <option value="C">Grade C</option>
                    <option value="D">Grade D</option>
                    
                </Form.Select>     
                <Button type="submit">Submit</Button>      
            </Form>
        </Container>
    </>
  )
}
