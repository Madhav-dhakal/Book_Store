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

const RegisterPage=()=>{
     return(
          <>
          <Container className="login-wrapper2 my-5 mx-6">
        <Row>
          <Col sm={12} md={{ offset: 3, span: 6 }}>
            <LoginTitle>Registration Page</LoginTitle>
          </Col>
        </Row>
        <Divider></Divider>
        <Row className="my-3 pb-5">
          <Col sm={12} md={{ offset: 3, span: 6 }}>
            <Form>
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
                <Form.Label className="col-sm-3">Password:</Form.Label>
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
             
              <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3">Role:</Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="Role"
                    size="sm"
                    required
                    placeholder="Enter your Role"
                  ></Form.Control>
                  <span className="text-danger">
                    <em></em>
                  </span>
                </Col>
              </Form.Group>

              <Form.Group className="row mb-3">
               <Col sm={{offset:3,span:9}}>
          <ButtonComponent className="btn btn-danger m-3" type='reset' label="cancel" >
                    </ButtonComponent>
           <ButtonComponent className="btn btn-success" type='submit' label="submit">
                    </ButtonComponent>
               </Col>
              </Form.Group>
              </Form>
              </Col>
              </Row>

        </Container>
          </>
     )
}

  export default RegisterPage;