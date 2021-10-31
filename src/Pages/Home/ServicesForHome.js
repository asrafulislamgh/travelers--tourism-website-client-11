import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Service from "../Service/Service";
const ServicesForHome = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://mighty-dawn-62358.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Container className="text-center my-5">
        <h1 className="my-5 pt-5">Our Services</h1>
        <Row md={2} lg={3} sm={2} xs={1} className="gy-5">
          {services.map(
            (service) =>
              service.key <= 6 && (
                <Col key={service.key}>
                  <Service service={service}></Service>
                </Col>
              )
          )}
        </Row>
        <Link to="/services">
          <Button className="common-btn3 mt-4">See All the Services</Button>
        </Link>
      </Container>
    </div>
  );
};

export default ServicesForHome;
