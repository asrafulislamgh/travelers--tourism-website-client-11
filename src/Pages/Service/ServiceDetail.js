import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Col, Row, Button, Card, Badge } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
// import "./Appointment.css";
import useAuth from "../../hooks/useAuth";

const ServiceDetail = () => {
  const { id } = useParams();
  const [services, setServices] = useState([]);
  const { user } = useAuth();
  const {
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    fetch("https://mighty-dawn-62358.herokuapp.com/services")
      .then((res) => res.json())
      .then((result) => setServices(result));
  }, []);

  const selectedService = services.find(
    (service) => service._id === id
    // (service) => console.log(service._id, id)
  );
  const handleBook = (id) => {
    selectedService.user = user;
    fetch("http://localhost:5000/booking", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(selectedService),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("A new booking is added successfully!");
        console.log(result);
      });
    console.log(selectedService);
    // console.log(user.displayName);
    // alert("Your Product Id is:", user.displayName);
  };
  return (
    <div className="my-5 py-5">
      <Row className="gy-3 gy-sm-5">
        <Col xl={5} md={6}>
          <div>
            <img className="w-100 rounded" src={selectedService?.img} alt="" />
          </div>
        </Col>
        <Col xl={7} md={6}>
          <div>
            <h1>{selectedService?.name}</h1>
            <p>{selectedService?.description}</p>
            <Card.Text className="card-info">
              <Badge pill bg="warning" className="px-3 me-2" text="dark">
                <h6 className="mb-0"> Day: {selectedService?.day}</h6>
              </Badge>
              <Badge pill bg="dark" className="px-3  me-2" text="light">
                <h6 className="mb-0"> Day: {selectedService?.night}</h6>
              </Badge>
            </Card.Text>
            <h3>${selectedService?.price}</h3>
          </div>

          <Button
            onClick={() => handleBook(selectedService?._id)}
            variant="light"
            className="common-btn3 mt-4"
          >
            Book Now
          </Button>

          <Link to="/services">
            <Button variant="light" className=" mt-4 ms-3">
              Back
            </Button>
          </Link>
          <Link to="/myorder">
            <Button variant="light" className=" mt-4 ms-3">
              See all of your orders
            </Button>
          </Link>
        </Col>
      </Row>
    </div>

    // <div>
    //   <div className="appointment-container">
    //     <div className="container">
    //       <Row className="d-flex justify-content-center align-items-center">
    //         <Col xl={4} lg={4} md={5} sm={5} xs={8}>
    //           <div className="text-center mb-3 text-white">
    //             <img
    //               className="service-img"
    //               src={selectedService?.img}
    //               alt=""
    //             />
    //             <h2 className="text-dark">{selectedService?.name}</h2>
    //           </div>
    //         </Col>
    //       </Row>
    //     </div>
    //     <div></div>
    //   </div>
    //   <Container className="justify-content-center my-5">
    //     <Row className="d-flex justify-content-center text-center">
    //       <Col style={{ maxWidth: "400px" }}>
    //         <h3 className="py-3">{services.name}</h3>
    //         <Form onSubmit={handleSubmit(onSubmit)}>
    //           <FormControl
    //             {...register("name")}
    //             className="input-field mb-3"
    //             placeholder={user?.displayName}
    //             aria-label="name"
    //             value={user?.displayName}
    //             aria-describedby="basic-addon2"
    //           />
    //           <FormControl
    //             {...register("email")}
    //             className="input-field mb-3"
    //             placeholder={user?.email}
    //             value={user?.email}
    //             aria-label="email"
    //             aria-describedby="basic-addon2"
    //           />
    //           <FormControl
    //             {...register("date")}
    //             className="input-field mb-3"
    //             name="meeting-time"
    //             // value="2021-10-07T00:00"
    //             min="2021-10-07T00:00"
    //             max="2022-06-14T00:00"
    //             aria-label="name"
    //             type="datetime-local"
    //             aria-describedby="basic-addon2"
    //           />

    //           <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //             <Form.Text className="text-danger"></Form.Text>
    //           </Form.Group>
    //           <Form.Group
    //             className="mb-3"
    //             controlId="exampleForm.ControlTextarea1"
    //           >
    //             <Form.Control
    //               {...register("detail")}
    //               as="textarea"
    //               rows={4}
    //               className="input-field mb-3"
    //               placeholder="Describe your problems"
    //             />
    //           </Form.Group>
    //           {errors.exampleRequired && <span>This field is required</span>}
    //           <div className="d-grid">
    //             <Button type="submit" className="btn btn-danger py-3">
    //               Make an Appointment
    //             </Button>
    //           </div>
    //         </Form>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
  );
};

export default ServiceDetail;
