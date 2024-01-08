import { Container, Col, Row, Form } from "react-bootstrap";
import styled from "styled-components";
import { ButtonComponent } from "../../../components/button/button.component";

const LoginTitle = styled.h1`
  color: #001900;
  text-align: center;
`;
const Divider = styled.hr`
border-color:#001900
`;
const AddBooks=()=>{
     return(
          <>
          <Container className="login-wrapper2 my-5 mx-6">
        <Row>
          <Col sm={12} md={{ offset: 3, span: 6 }}>
            <LoginTitle>Add Books</LoginTitle>
          </Col>
        </Row>
        <Divider></Divider>
        <Row className="my-3 pb-5">
          <Col sm={12} md={{ offset: 3, span: 6 }}>
            <Form>
              <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3">BookName:</Form.Label>
                <Col sm={9}>
                <Form.Control type="text" placeholder="Book Name" />
                  <span className="text-danger">
                    <em></em>
                  </span>
                </Col>
              </Form.Group>
               

              <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3">AuthorName:</Form.Label>
                <Col sm={9}>
                <Form.Control type="text" placeholder="Author Name" />
                  <span className="text-danger">
                    <em></em>
                  </span>
                </Col>
              </Form.Group>

              <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3">Description:</Form.Label>
                <Col sm={9}>
                <Form.Control type="text" placeholder="description" />
                  <span className="text-danger">
                    <em></em>
                  </span>
                </Col>
              </Form.Group>

              <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3">Price:</Form.Label>
                <Col sm={9}>
                <Form.Control type="Number" placeholder="Book-Price" min={0}/>
                  <span className="text-danger">
                    <em></em>
                  </span>
                </Col>
              </Form.Group>

              <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3">Files Input:</Form.Label>
                <Col sm={9}>
                <Form.Control type="file" multiple/>
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
  export default AddBooks;

  

    
  


