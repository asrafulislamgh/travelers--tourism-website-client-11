import React from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import "./Service.css";
import "./Services.css";

const Service = ({ service }) => {
  const { key, name, description, img, duration, discount, rating } = service;
  return (
    <div>
      <CardGroup>
        <Card className="card-container">
          <Card.Img variant="top" src={img} />
          <Card.Body className="card-body">
            <Card.Title className="card-title">{name}</Card.Title>
            <Card.Text className="card-info">{description}</Card.Text>
            <Card.Text className="card-info">
              Day: {duration.day} Night: {duration.night}
            </Card.Text>
            <Card.Text>
              <Rating
                className="rating"
                initialRating={rating}
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                readonly
              />
            </Card.Text>
          </Card.Body>
          <Card.Footer className="card-body">
            <Link to={`/service/${key}`}>
              <Button variant="light" className="common-btn2">
                Book Now
              </Button>
            </Link>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Service;
