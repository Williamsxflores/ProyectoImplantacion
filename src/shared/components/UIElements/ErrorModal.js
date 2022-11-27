import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ErrorModal = (props) => {
  const handleClose = () => {
    props.setShowModal(false);
  };
  return (
    <>
      <Modal
        show={props.show}
        onHide={handleClose}
        centered
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title>Authentication Failed</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.errorMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ErrorModal;
