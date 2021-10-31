import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button, Badge } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
// import ManageOrder from "./ManageOrder";

const AllOrders = () => {
  const [allOrdersList, setAllOrdersList] = useState([]);
  const [isUpdated, setIsUpdated] = useState(null);
  const { user } = useAuth();
  useEffect(() => {
    fetch("https://mighty-dawn-62358.herokuapp.com/booking")
      .then((res) => res.json())
      .then((result) => {
        setAllOrdersList(result);
      });
  }, [user.email, isUpdated]);
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

  const handleUpdate = (id) => {
    console.log(id);
    const selectedItem = allOrdersList.find((item) => item._id === id);
    // console.log(selectedItem);
    // selectedItem._id = null;
    // selectedItem.id = id;
    // selectedItem.status = 1;

    fetch(`https://mighty-dawn-62358.herokuapp.com/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(selectedItem),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          setIsUpdated(true);
          alert("Thank you for confirming the order.");
        }
      });
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
            {/* <ManageOrder
              allOrder={allOrder}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            ></ManageOrder> */}
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
              <small>Total Ticket: {allOrder.user.number}</small>
              <br />
              <small>Ordered by: </small>
              <img
                style={{
                  width: "40px",
                  borderRadius: "50%",
                  margin: "5px 5px 5px 0",
                }}
                src={allOrder.user?.photoURL}
                alt=""
              />
              <small>{allOrder.user?.displayName}</small>
              <h2 className="py-0">
                ${allOrder.price} x {allOrder.user.number}
              </h2>
            </Col>
            <Col>
              {!allOrder.status ? (
                <Button
                  onClick={() => {
                    handleUpdate(allOrder._id);
                  }}
                  variant="light"
                  className="common-btn3 mt-4 mx-2"
                >
                  Pending
                </Button>
              ) : (
                <Button variant="success" className="btn btn-success mt-4 mx-2">
                  Confirmed
                </Button>
              )}
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
