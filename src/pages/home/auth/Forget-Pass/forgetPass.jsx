import { Container, Col, Row, Form } from "react-bootstrap";
import { ButtonComponent } from "../../../../components/button/button.component";
import styled from "styled-components";

const LoginTitle = styled.h1`
  color: #001900;
  text-align: center;
`;
const Divider = styled.hr`
border-color:#001900
`;

const ForgetPass=()=>{
     return(
          <>
           <Container className="login-wrapper3 my-5 mx-8 ">
        <Row className="my-1 pb-2">
          <Col sm={12} md={{ offset: 3, span: 6 }}>
            <LoginTitle>Password Reset</LoginTitle>
          </Col>
        </Row>
        <Divider></Divider>
        <Row>
        <Col sm={12} md={{ offset: 3, span: 6 }}>
          <p className="text-center m-3 pb-3" >Enter your email address, to receive a link to  create a new password</p>
          <Form>
          <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3">Username:</Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="name"
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
                <Form.Label className="col-sm-3">Email:</Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="email"
                    size="sm"
                    required
                    placeholder="Enter your Email"
                  ></Form.Control>
                  <span className="text-danger">
                    <em></em>
                  </span>
                </Col>
              </Form.Group>


              <Form.Group className="row mb-3">
               <Col sm={{offset:3,span:9}}>
           <ButtonComponent className="btn btn-success m-3" type='submit' label="reset">
                    </ButtonComponent>
                    <a href="/login">back to login</a>
               </Col>
              </Form.Group>
          </Form>
          </Col>
        </Row>
        </Container>
          </>
     )
}

  export default ForgetPass