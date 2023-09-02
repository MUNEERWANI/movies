import React from 'react';
import Card from 'react-bootstrap/Card';

const CardForCast = (props) => {
const imageUrl=`https://image.tmdb.org/t/p/w500/${props.url}`;
  return (
    <Card className="mx-auto" style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Img variant="top" src={imageUrl} />
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Character {props.character}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardForCast
