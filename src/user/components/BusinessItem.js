import React from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

export const BusinessItem = (props) => {
  const { business } = props;
  console.log(business);
  return (
    <Card
      border="success"
      className="text-center"
      style={{ marginBottom: "2rem" }}
    >
      <Card.Header>{business.addressFiscal}</Card.Header>
      <Card.Body>
        <Card.Title>{business.name}</Card.Title>
        <Card.Text>
          <FontAwesomeIcon icon={faBuilding} size="lg" />
        </Card.Text>
        <Card.Text>
          {`${business.attends} - ${business.email} - ${business.phone}`}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{`${business.turn} ${business.social}`}</Card.Footer>
    </Card>
  );
};

export default BusinessItem;
