import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const ServiceDetail = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://mighty-dawn-62358.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Container className="text-center my-5">
        <h1 className="my-5 pt-5">Our Services</h1>
        <Row md={2} lg={3} sm={2} xs={1} className="gy-4">
          {services.map(
            (service) =>
              service.key <= 6 && (
                <Col key={service.key}>
                  <Service service={service}></Service>
                </Col>
              )
          )}
        </Row>
      </Container>
    </div>
  );
};

export default ServiceDetail;
