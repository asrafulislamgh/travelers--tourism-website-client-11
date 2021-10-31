import React from "react";
import { Col, Row } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div>
      <div className="container my-5">
        <h1 className="text-center my-5">About us</h1>

        <Row xs={1} sm={1} md={1} lg={2} className="gy-5">
          <Col>
            <img
              className="w-100"
              src="https://images.unsplash.com/photo-1564594736624-def7a10ab047?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              alt=""
            />
          </Col>
          <Col>
            <h3>Who we are?</h3>
            <p>
              Tourism is travel for pleasure or business; also the theory and
              practice of touring, the business of attracting, accommodating,
              and entertaining tourists, and the business of operating tours.[2]
              The World Tourism Organization defines tourism more generally, in
              terms which go "beyond the common perception of tourism as being
              limited to holiday activity only", as people "traveling to and
              staying in places outside their usual environment for not more
              than one consecutive year for leisure and not less than 24 hours,
              business and other purposes".[3] Tourism can be domestic (within
              the traveller's own country) or international, and international
              tourism has both incoming and outgoing implications on a country's
              balance of payments.
            </p>
            <h3 className="mt-5">What we do?</h3>
            <p>
              The official travel site for Oregon offers a full-page video loop
              of what their tagline, “Oregon Magic” really means to the state at
              large. The video inspires visitors with descriptions of the
              distinct regions that compose its cities, towns, and
              naturally-occurring destinations and with clear calls to action
              (CTA) to learn more about the Rose City, it’s hiking trails, and
              the state’s coastal beauty.
            </p>
            <h3 className="mt-5">How we do?</h3>
            <p>
              This is atypical for most websites, and even for tourist sites
              that need more information to make sure customers know what
              they’re regionally getting into. Since their information is solely
              based on visiting and climbing the famous mountain, it makes sense
              that they’d tailor specialized content to a narrower audience.
            </p>
          </Col>
        </Row>

        <Row xs={1} sm={1} md={1} lg={2} className="gy-5 my-5">
          <Col>
            <h3>Why you should come to us?</h3>
            <p>
              On the Grid is pretty unique compared to others on this list since
              they’re a travel blog that spans several countries and continents.
              Their tagline, “Explore the World” acts as both a call to action
              and a general service description on the first homepage image you
              see, and just below it is a button for choosing a specific city of
              interest.
            </p>
            <h3 className="mt-5">What made us special?</h3>
            <p>
              A district hospital typically is the major health care facility in
              its region, with many beds for intensive care and additional beds
              for patients who need long-term care. Specialized hospitals
              include trauma centers, rehabilitation hospitals, children's
              hospitals, seniors' (geriatric) hospitals, and hospitals for
              dealing with specific medical needs such as psychiatric treatment
              (see psychiatric hospital) and certain disease categories.
            </p>
            <h3 className="mt-5">What our patients say?</h3>
            <p>
              Some hospitals have outpatient departments and some have chronic
              treatment units. Common support units include a pharmacy,
              pathology, and radiology. Hospitals are typically funded by public
              funding, health organisations (for-profit or nonprofit), health
              insurance companies, or charities, including direct charitable
              donations. Historically, hospitals were often founded and funded
              by religious orders, or by charitable individuals and leaders.[3]
            </p>
          </Col>
          <Col>
            <img
              className="w-100"
              src="https://images.unsplash.com/photo-1588794624755-90a7e42ca543?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
              alt=""
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutUs;
