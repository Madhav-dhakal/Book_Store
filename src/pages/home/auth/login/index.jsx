import styled from "styled-components";
import { Col, Container, Form, Row } from "react-bootstrap";
import { ButtonComponent } from "../../../../components/button/button.component";
import "./index.css"
import { NavLink } from "react-router-dom";

const LoginTitle = styled.h1`
  color: #001900;
  text-align: center;
`;
const Divider = styled.hr`
border-color:#001900
`;
const LoginPage = () => {
    
  return (
    <>

      <Container className="login-wrapper my-4">
        <Row>
          <Col sm={12} md={{ offset: 3, span: 6 }}>
            <LoginTitle><p className="p1">Login Page</p></LoginTitle>
          </Col>
        </Row>
        <Divider></Divider>
        <Row className="my-3 pb-5">
          <Col sm={12} md={{ offset: 3, span: 6 }}>
            <Form>
              <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3"><p className="p1">Username:</p></Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="email"
                    size="sm"
                    required
                    placeholder="Enter your Username"
                  ></Form.Control>
                  <span className="text-danger">
                    <em></em>
                  </span>
                </Col>
              </Form.Group>

              <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3"><p className="p2">Password:</p></Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="email"
                    size="sm"
                    required
                    placeholder="Enter your Password"
                  ></Form.Control>
                  <span className="text-danger">
                    <em></em>
                  </span>
                </Col>
              </Form.Group>
              <Form.Group className="row-mb-3">
               <Col sm={{offset:3,span:9}}>
                   <p className="p1"> Or</p> &nbsp;&nbsp;
                   <NavLink className={"nav-link"} to={"/forget-password"}><p className="p3">Forget Password</p></NavLink>
                   
               </Col>
              </Form.Group>

              <Form.Group className="row mb-3">
               <Col sm={{offset:3,span:9}}>
          <ButtonComponent className="btn btn-danger m-3" type='reset' label="cancel" >
                    </ButtonComponent>
           <ButtonComponent className="btn btn-success" type='submit' label="Login">
                    </ButtonComponent>
               </Col>
              </Form.Group>

            </Form>
           <p className="p1"> Or </p>&nbsp;&nbsp;&nbsp;&nbsp;<NavLink className={"nav-link"} to={"/register"}><p className="p3">Create an Account</p></NavLink>
          </Col>


        </Row>
        </Container>

        

       

        </>
    
  )
}


export default LoginPage
