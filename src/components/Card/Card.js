import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import "./Card.css";

const Cards = (props) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${props.url}`;
  const fallbackImageUrl = "https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg";
  const [imageSrc, setImageSrc] = useState(imageUrl);
  const handleImageError = () => {
    setImageSrc(fallbackImageUrl);
  };
  return (
    <Card className="mx-auto custom-card">
      <div className="card-img-container">
        <Card.Img
          variant="top"
          src={imageSrc}
          className="card-img"
          onError={handleImageError}
        />
      </div>
      <Card.Body>
        <Card.Title className="card-title">{props.title}</Card.Title>
        <Card.Text>Rating {props.rating}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
