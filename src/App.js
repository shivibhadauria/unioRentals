import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {Routes,Route,Link} from "react-router-dom";
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import Rentals from './components/rentals';
import 'bootstrap/dist/css/bootstrap.min.css';
import bgi from './components/bgi.png';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand as={Link} to="/home" className="mr-auto">
      <img
      src= {bgi} // Replace with the actual path to your logo image
      alt="UNIO Logo"
      height="50"  // Adjust the height as needed
      className="d-inline-block align-top"
      />
</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"><Link to={"/home"}>Home</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to={"/rentals"}>Rentals</Link></Nav.Link>
            <Nav.Link href="#pricing">Vehicles</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets"> <Link to={"/login"}><Button variant="outline-secondary">Login</Button></Link></Nav.Link>
            <Nav.Link href="#memes"> <Link to={"/register"}><Button variant="info">Register</Button></Link></Nav.Link>
            <Nav.Link href="#location">
                <PersonPinCircleIcon fontSize="large" sx={{ color: 'black' }} />
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="container-fluid mt-1" >
       <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/login" element={<Login />}></Route>
         <Route path="/register" element={<Register />}></Route>
         <Route path="/home" element={<Home />}></Route>
         <Route path="/rentals" element={<Rentals />}></Route>
       </Routes>

    </div>
    
    </div>
  );
}

export default App;

