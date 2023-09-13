import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './CardForCast.css'; // Import your custom CSS file

const CardForCast = (props) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${props.url}`;
  const fallbackImageUrl = "https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg";
  const [imageSrc, setImageSrc] = useState(imageUrl);
  const handleImageError = () => {
    setImageSrc(fallbackImageUrl);
  };

  return (
    <div className="custom-card">
      <Card>
        <div className="card-img-container">
          <Card.Img variant="top" src={imageSrc} onError={handleImageError} className="card-img" />
        </div>
        <Card.Body>
          <Card.Title className="card-title">{props.name}</Card.Title>
          <Card.Text className="card-text">Character {props.character}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardForCast;
