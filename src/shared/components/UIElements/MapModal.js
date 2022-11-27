import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Map from "../../../shared/components/UIElements/Map";

import "./Map.css";

const MapModal = (props) => {
  const handleClose = () => {
    props.onCancel();
  };

  console.log(props);
  return (
    <>
      <Modal
        size="lg"
        show={props.show}
        onHide={handleClose}
        centered
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="map-container">
            <Map center={props.coord} zoom={12} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MapModal;
