import "./Footer.css"
import { Col, Container, Row } from "react-bootstrap";
function Footer() {
  return (
    <Container className ="footer" >
      <Col>
        <Row>
          <h3>To Do App</h3>
          <h4>
            <a>About me</a>
          </h4>
          <h4>
            <a>Page</a>
          </h4>
          <h6>Ⓒ 2022 Khanh Duy Nguyen</h6>
        </Row>
      </Col>

    </Container>
  );
}
export default Footer;
