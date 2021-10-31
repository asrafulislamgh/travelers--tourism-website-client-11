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
                <i className="progress-icon fas fa-trophy"></i>
                <h3 className="icon-heading">93%</h3>
                <p>Passing To job Market</p>
              </div>
            </Col>
            <Col>
              <div>
                <i className="progress-icon fas fa-user-graduate"></i>
                <h3 className="icon-heading">53k</h3>
                <p>Enrolled Students</p>
              </div>
            </Col>
            <Col>
              <div>
                <i className="progress-icon far fa-smile"></i>
                <h3 className="icon-heading">49k</h3>
                <p>High Satisfation</p>
              </div>
            </Col>
            <Col>
              <div>
                <i className="progress-icon fas fa-chalkboard-teacher"></i>
                <h3 className="icon-heading">1230</h3>
                <p>Instructors</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Status;
