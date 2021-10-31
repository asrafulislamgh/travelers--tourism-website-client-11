import React from "react";
import { Badge, Col, Button } from "react-bootstrap";

const ManageOrder = (props) => {
  const allOrder = props.allOrder;
  const handleDelete = props.handleDelete;
  const handleUpdate = props.handleUpdate;
  return (
    <div>
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
        <br />
        <small>Ordered by: </small>
        <img
          style={{
            width: "40px",
            borderRadius: "50%",
            padding: "5px 5px 5px 0",
          }}
          src={allOrder.user?.photoURL}
          alt=""
        />
        <small>{allOrder.user?.displayName}</small>
        <h2 className="py-0">${allOrder.price}</h2>
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
    </div>
  );
};

export default ManageOrder;
