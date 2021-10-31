import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="text-center about-heading  pt-5">
          <h2>
            Welcome to <span>Travelers'</span>
          </h2>
          <p>The best institution to explore the world!</p>
        </div>
        <div className="about-container">
          <Row lg={2} md={2} sm={1} xs={1} className="g-5">
            <Col>
              <img
                className="about-img"
                src="https://3.imimg.com/data3/IQ/UY/MY-12701900/international-tour-500x500.jpg"
                alt=""
              />
            </Col>
            <Col>
              <div className="about-text">
                <h3>We are here to see the world!</h3>
                <p>
                  Find inspiration for your future getaway with Travelers' Inc.
                  and virtual visits. From scenic routes on the open road to
                  rugged trails, from the sand-covered to the well-traveled,
                  they all lead us to the beauty of nature and simple pleasures.
                  Here, you can find unique hidden gems and get lost in the
                  music of rolling waves and tranquil forests.
                </p>
                <Link to="/aboutus">
                  <Button className="common-btn3 mt-4">Learn More</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
