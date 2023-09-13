import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Accordion from "react-bootstrap/Accordion";

const CardDesign = (props) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${props.url}`;
  const backDropUrl = `https://image.tmdb.org/t/p/w500/${props.backdropUrl}`;

  return (
    <Container>
      <Row  className="mb-3">
        <Col sm={4}>
          <Row>
            <Col>
              <Image
                src={imageUrl}
                className="img-fluid"
                alt="Responsive Image"
                rounded
                style={{ width: "20vh", height: "auto" }}
              />
            </Col>
            <Col>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>Release Date {props.release}</Card.Text>
              <Card.Text>Rating {props.rating}</Card.Text>
              <Card.Text>Length{props.runtime}</Card.Text>
            </Col>
          </Row>
          <Row className="mt-5">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Overview</Accordion.Header>
                <Accordion.Body>{props.overview}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
        </Col>
        <Col>
          <Row className="mt-5">
            <Image
              src={backDropUrl}
              className="img-fluid"
              alt="Responsive Image"
              rounded
              style={{ width: "135vh", height: "auto", margin: "10px 0" }}
            />
          </Row>
        </Col>
      </Row>
      
    </Container>
  );
};

export default CardDesign;
