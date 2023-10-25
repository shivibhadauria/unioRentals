import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {Routes,Route,Link} from "react-router-dom";
import Login from './components/login';
import Register from './components/register';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">UNIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Retals</Nav.Link>
            <Nav.Link href="#pricing">Vehicles</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets"> <Link to={"/login"}><Button variant="outline-secondary">Login</Button></Link></Nav.Link>
            <Nav.Link href="#memes"> <Link to={"/register"}><Button variant="info">Register</Button></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="container-fluid mt-1" >
       <Routes>
         <Route path="/" element={<Login />}></Route>
         <Route path="/login" element={<Login />}></Route>
         <Route path="/register" element={<Register />}></Route>
       </Routes>

    </div>
    
    </div>
  );
}

export default App;

