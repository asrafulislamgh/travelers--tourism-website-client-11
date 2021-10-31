import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://mighty-dawn-62358.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Container className="text-center my-5">
        <div className="text-center about-heading">
          <h2>
            Our <span>Services</span>
          </h2>
          <p>The services are ready for you!</p>
        </div>
        <Row md={2} lg={3} sm={2} xs={1} className="gy-5">
          {services.map((service) => (
            <Col key={service._id}>
              <Service service={service}></Service>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
