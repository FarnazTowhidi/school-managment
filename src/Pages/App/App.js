
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../../Component/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import StudentPage from '../StudentPage/StudentPage';
import CoursesPage from '../CoursesPage/CoursesPage';
import ResultPage from '../ResultPage/ResultPage';
import InstructorPage from '../InstructorPage/InstructorPage';
import { FaCog, FaUserTie, FaColumns, FaThList } from "react-icons/fa"; 
import {
  Menu,
  MenuItem,
  Sidebar,
  ProSidebar,
  SidebarHeader,
  SubMenu
} from "react-pro-sidebar";





function App() {
  return ( 
    <main className="App">
      <Container >
        <Row>
         
          <Col xl={2}>
            <Menu iconShape="square">
                <MenuItem icon={<FaThList />}> Dashboard</MenuItem>
                <MenuItem icon={<FaUserTie />} href="/employees">
                  Instructor
                </MenuItem>
                <SubMenu title="Classes" icon={<FaThList />}>
                  <MenuItem>Software Immersive</MenuItem>
                  
                </SubMenu>
                <MenuItem icon={<FaCog />}>Students</MenuItem>
            </Menu>



          </Col>
          <Col xl={10}>
            <Routes>
            <Route path="/" element={<HomePage />} />
              </Routes>
              <Routes>
                <Route path="/home" element={<HomePage />} />
              </Routes>
              <Routes>
                <Route path="/student" element={<StudentPage />} />
              </Routes>
              <Routes>
                <Route path="/courses" element={<CoursesPage />} />
              </Routes>
              <Routes>
                <Route path="/results" element={<ResultPage />} />
              </Routes>
              <Routes>
                <Route path="/instructors" element={<InstructorPage /> } />
              </Routes>
          </Col>
        </Row>
      </Container>     
    </main>
  );
}

export default App;
