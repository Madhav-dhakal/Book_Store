import { useState } from "react"
import { Navbar,Nav,Container,Form, FormControl, Row, Col } from "react-bootstrap"
import { NavLink } from "react-router-dom"
// import {FaMicrochip, FaMobile} from "react-icons/fa"

const HomeHeader =()=>{
     const [Theme,setTheme]=useState("dark")

     const ThemeChange=()=>{
          setTheme(Theme=='dark'?"light":"dark")
     }
     return(
          <>
          <Navbar expand="lg" className="bg-body-tertiary" bg={Theme} data-bs-theme={Theme}>
      <Container>
        <Navbar.Brand href="/">Book-Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to ={"/"}>Home</NavLink>
            <NavLink className="nav-link" to={"/books"}>Books</NavLink>
            <NavLink className="nav-link" to={"/Addbooks"}>AddBooks</NavLink>

          </Nav>
          
        </Navbar.Collapse>
        <Form >
          <FormControl
          type="search"
           size="sm" placeholder="Enter your search"/>
          
        </Form>
            
        <Nav>
               <button onClick={ThemeChange}>Theme</button>

          </Nav>
         
          <Nav>
               
               <NavLink className={"nav-link"} to={"/register"}>signup</NavLink>
               <NavLink className={"nav-link"} to={"/login"}>Login</NavLink>
          </Nav>
          
      </Container>
    </Navbar>
          </>
     )
}
    export default HomeHeader