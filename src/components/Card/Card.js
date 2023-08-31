import React from 'react'
import Card from 'react-bootstrap/Card';


const Cards = (props) => {
const imageUrl=`https://image.tmdb.org/t/p/w500/${props.url}`;
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imageUrl} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>Rating {props.rating}</Card.Text>
    </Card.Body>
  </Card>
  )
}

export default Cards
