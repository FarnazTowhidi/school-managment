import React from 'react'
import { useState, useEffect } from 'react'
import StudentForm from '../../Component/StudentForm/StudentForm'
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import axios from "axios"

export default function StudentPage() {
  const [students, setStudents] = useState();
  const [studentAddFlag, setStudentAddFlag] = useState ("false")
  const [studentChanged, setStudentChanged] = useState ("false")

  //Get Students 
  useEffect(() => {
    const getStudent = async() => {
      try {
        const {data} = await axios.get ("http://localhost:3001/api/students")     
        setStudents (data)
      }
      catch (error) {
        console.log (error.message.data)
      }
    }  
    getStudent()    
  },[studentChanged])


  async function deleteStudent (idx) {
    await axios.delete (`/api/students/${idx}`)
    setStudentChanged("true")

  }


  return (
    <>
      <h1>Student Page</h1>
      <StudentForm studentAddFlag={studentAddFlag} setStudentAddFlag={setStudentAddFlag} /><br />
      <Container>
        
        <Row className="list-header">
          <Col>First Name</Col>  
          <Col>Last Name</Col>     
          <Col>Birth Date</Col>            
        </Row>    
      {
        students?.map ((student, idx)=> (
          <Row key={idx} style={{backgroundColor:"#dfe2e8", borderBottom:"1px solid #c9ccd1"}}>
            <Col>{student?.firstname}</Col>  
            <Col>{student?.familyname}</Col>     
            <Col>{student?.datebirth}</Col>  
            <Col><Button onClick={()=>deleteStudent(student?._id)}>Delete</Button></Col>          
          </Row>        
        ))  
      }
      </Container>
    </>
  )
}
