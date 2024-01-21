import logo from './logo.svg';
import './App.css';
import React from "react";
import Home from './Home';
import Users from './Users';
import About from './About';
import {Navbar, Nav, Container} from "react-bootstrap";
import {Link, Route, BrowserRouter as Router, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><Link to="/">Home</Link></Nav.Link>
            <Nav.Link ><Link to="/users">Users</Link></Nav.Link>
            <Nav.Link ><Link to="/about">About</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/users" element={<Users/>}></Route>
              <Route path="/about" element={<About/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
