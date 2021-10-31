import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Status.css";

const Status = () => {
  return (
    <div>
      <div className="progress-container">
        <div className="progress-items container text-center">
          <Row lg={4} md={4} sm={2} xs={1}>
            <Col>
              <div>
                <i className="progress-icon fas fa-globe-asia"></i>
                <h3 className="icon-heading">156</h3>
                <p>Countries for you</p>
              </div>
            </Col>
            <Col>
              <div>
                <i className="progress-icon fas fa-users"></i>
                <h3 className="icon-heading">253k</h3>
                <p>Our Customers</p>
              </div>
            </Col>
            <Col>
              <div>
                <i className="progress-icon far fa-smile"></i>
                <h3 className="icon-heading">149k</h3>
                <p>Highly Satisfied</p>
              </div>
            </Col>
            <Col>
              <div>
                <i className="progress-icon fas fa-concierge-bell"></i>
                <h3 className="icon-heading">590</h3>
                <p>Available Packages</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Status;
