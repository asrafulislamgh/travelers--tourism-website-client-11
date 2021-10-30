import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button, Badge } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const AllOrders = () => {
  const [allOrdersList, setAllOrdersList] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch("https://mighty-dawn-62358.herokuapp.com/booking")
      .then((res) => res.json())
      .then((result) => {
        setAllOrdersList(result);
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
          const remainingOrders = allOrdersList.filter(
            (order) => order._id !== id
          );
          setAllOrdersList(remainingOrders);
        });
    }
  };
  return (
    <div>
      <Container>
        <h2 className="text-center py-5">
          All Order list ({allOrdersList.length})
        </h2>

        {allOrdersList.map((allOrder) => (
          <Row
            xl={3}
            md={3}
            sm={1}
            xs={1}
            key={allOrder._id}
            className="g-3 mb-5"
          >
            <Col>
              <img className="w-100" src={allOrder.img} alt="" />
            </Col>
            <Col>
              <h2>{allOrder.name}</h2>
              <p>{allOrder.description}</p>
              <Badge pill bg="warning" className="px-3 py-2 me-2" text="dark">
                Day: {allOrder.day}
              </Badge>
              <Badge pill bg="dark" className="px-3 py-2 me-2" text="light">
                Night: {allOrder.night}
              </Badge>
              <h2 className="py-3">${allOrder.price}</h2>
            </Col>
            <Col>
              <Button variant="light" className="common-btn3 mt-4 mx-2">
                Confirm Now
              </Button>
              <Button
                onClick={() => handleDelete(allOrder._id)}
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

export default AllOrders;
