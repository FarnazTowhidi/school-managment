
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
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return ( 
    <main className="App">
      <Container >
        <Row>
          <Col xl={2}><NavBar /></Col>
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
          </Col>
        </Row>
      </Container>
      
      
    </main>
  );
}

export default App;
