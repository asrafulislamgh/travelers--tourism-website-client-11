import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./Gallery.css";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("https://mighty-dawn-62358.herokuapp.com/gallery")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  return (
    <div>
      <div className="text-center about-heading  pt-5">
        <h2>
          Our <span>Gallery</span>
        </h2>
        <p>Enjoy the memories and be hungry!</p>
      </div>
      <Row xl={4} lg={4} md={3} sm={2} xs={1} className="g-0">
        {photos.map((photo) => (
          <Col key={photo._id}>
            <div className="img-container">
              <img className="w-100 img-gallery" src={photo.img} alt="" />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Gallery;
