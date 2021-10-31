import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button, Badge } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const MyOrder = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch("https://mighty-dawn-62358.herokuapp.com/booking")
      .then((res) => res.json())
      .then((result) => {
        const myOrderList = result.filter(
          (order) => order?.user?.email === user.email
        );
        setMyOrders(myOrderList);
      });
  }, [user.email]);

  const handleDelete = (id) => {
    const confirmation = window.confirm("Are you sure to delete this?");
    if (confirmation) {
      fetch(`https://mighty-dawn-62358.herokuapp.com/booking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount === 1) {
            alert("One item is deleted successfully!");
          }
          const remainingOrders = myOrders.filter((order) => order._id !== id);
          setMyOrders(remainingOrders);
        });
    }
  };
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
              <small>Total Ticket: {myOrder.user.number}</small>
              <br />
              <small>Ordered by: </small>
              <img
                style={{
                  width: "40px",
                  borderRadius: "50%",
                  padding: "5px 5px 5px 0",
                }}
                src={myOrder.user?.photoURL}
                alt=""
              />
              <small>{myOrder.user?.displayName}</small>
              <h2 className="py-1">
                ${myOrder.price} x {myOrder.user.number}
              </h2>
            </Col>
            <Col>
              {!myOrder.status ? (
                <Button variant="light" className="common-btn3 mt-4 mx-2">
                  Pending
                </Button>
              ) : (
                <Button variant="success" className="btn btn-success mt-4 mx-2">
                  Confirmed
                </Button>
              )}
              {/* <Button variant="light" className="common-btn3 mt-4 mx-2">
                Confirm Now
              </Button> */}
              <Button
                onClick={() => handleDelete(myOrder._id)}
                variant="danger"
                className="common-btn4 mt-4 mx-2"
              >
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
