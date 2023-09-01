import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CardDesign2 = (props) => {
  return (
    <Container>
    <Row>
      <Col><Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={imageUrl}/>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>Release Date {props.release}</Card.Text>
            <Card.Text>Rating {props.rating}</Card.Text>
            <Card.Text>{props.runtime}</Card.Text>
            <Card.Text>
            <Card.Title>Overview</Card.Title>
              {props.overview}
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
      <Col xs={6}>

      </Col>
    </Row>
  </Container>
  )
}

export default CardDesign2

