import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button, Badge } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const MyOrder = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch("http://localhost:5000/booking")
      .then((res) => res.json())
      .then((result) => {
        const myOrderList = result.filter(
          (order) => order?.user?.email === user.email
        );
        setMyOrders(myOrderList);
      });
  }, [user.email]);
  console.log(myOrders);
  return (
    <div>
      <Container>
        <h2 className="text-center py-5">My Order list ({myOrders.length})</h2>

        {myOrders.map((myOrder) => (
          <Row
            xl={3}
            md={3}
            sm={1}
            xs={1}
            key={myOrder._id}
            className="g-3 mb-5"
          >
            <Col>
              <img className="w-100" src={myOrder.img} alt="" />
            </Col>
            <Col>
              <h2>{myOrder.name}</h2>
              <p>{myOrder.description}</p>
              <Badge pill bg="warning" className="px-3 py-2 me-2" text="dark">
                Day: {myOrder.day}
              </Badge>
              <Badge pill bg="dark" className="px-3 py-2 me-2" text="light">
                Night: {myOrder.night}
              </Badge>
              <h2 className="py-3">${myOrder.price}</h2>
            </Col>
            <Col>
              <Button variant="light" className="common-btn3 mt-4 mx-2">
                Confirm Now
              </Button>
              <Button variant="danger" className="common-btn4 mt-4 mx-2">
                Delete
              </Button>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default MyOrder;
