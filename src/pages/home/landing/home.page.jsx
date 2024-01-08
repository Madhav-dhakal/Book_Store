import { Button, Col, Container, Row } from "react-bootstrap";
import "./home.page.css"
import Image from 'react-bootstrap/Image';


const HomePage=()=>{
               
     
     return(
          <>
          <Container>
               <Row>
                    <Col md={7}>
          <div className="store">
          <div>
          <p className="Para"> Best Book Store</p>
          </div>
          </div>
          <div>
          <p className="new">Checkout The Books From Here</p>
          </div>
          <Button href="/viewbooks" size="lg" variant="secondary" className="Butoon">View Books</Button>
          </Col>
          <Col md={5} className="Ima">
          <div >
          <Image src="../../dist/assets/images/1.jpg" height={575} width={400}/>
          </div>
          </Col>
          </Row>
          </Container>
          </>
     )
}
    export default HomePage;
