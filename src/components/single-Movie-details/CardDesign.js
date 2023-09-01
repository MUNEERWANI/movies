import React from "react";
import Card from "react-bootstrap/Card";

const CardDesign = (props) => {
const imageUrl=`https://image.tmdb.org/t/p/w500/${props.url}`;

  return (
    <Card className="bg-dark text-white">
      <Card.Img src={imageUrl} alt="Card image" />
      <Card.ImgOverlay>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={imageUrl}/>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>Rating {props.rating}</Card.Text>
            <Card.Text>Rating {props.rating}</Card.Text>

            <Card.Text>
            <Card.Title>Overview</Card.Title>
              {props.overview}
            </Card.Text>
          </Card.Body>
        </Card>
      </Card.ImgOverlay>
    </Card>
  );
}

export default CardDesign;
