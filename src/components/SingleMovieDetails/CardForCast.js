import React from 'react';
import Card from 'react-bootstrap/Card';

const CardForCast = (props) => {
const imageUrl=`https://image.tmdb.org/t/p/w500/${props.url}`;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Character {props.character}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardForCast
