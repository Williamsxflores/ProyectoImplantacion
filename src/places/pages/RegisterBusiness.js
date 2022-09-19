import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

import styles from "places/pages/styles/RegisterBusiness.module.css";

const RegisterBusiness = () => {
  const { handleSubmit } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = async (formValues) => {};

  return (
    <div>
      <h1>Registra tu empresa</h1>
      <div className={styles.Container}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.Column}>
            <Form.Group controlId="name">
              <Form.Label>Nombre de la empresa</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Emopresa..."
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Direccion fiscal</Form.Label>
              <Form.Control
                type="text"
                name="address"
                placeholder="Colonia Calle Ciudad Pais..."
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>N Telefono</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                placeholder="999-999-9999"
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="secondPhone">
              <Form.Label>N Telefono de respaldo</Form.Label>
              <Form.Control
                type="text"
                name="secondPhone"
                placeholder="999-999-9999"
              ></Form.Control>
            </Form.Group>
          </div>
          <div className={styles.Column}>
            <Form.Group controlId="turn">
              <Form.Label>Giro empresarial</Form.Label>
              <Form.Control
                type="text"
                name="turn"
                placeholder="Giro de la empresa"
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="turn">
              <Form.Label>
                Propietario de la empresa (fisica o moral)
              </Form.Label>
              <Form.Control
                type="text"
                name="owner"
                placeholder="fisica o moral"
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="turn">
              <Form.Label>Atiende</Form.Label>
              <Form.Control
                type="text"
                name="attends"
                placeholder="Atiende"
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="turn">
              <Form.Label>Atiende</Form.Label>
              <Form.Control
                type="text"
                name="secondAttende"
                placeholder="Atiende"
              ></Form.Control>
            </Form.Group>
          </div>
          <div className={styles.Column}>
            <Form.Group controlId="socialReason">
              <Form.Label>Razon social</Form.Label>
              <Form.Control
                type="text"
                name="socialReason"
                placeholder="Razon social"
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="email@email.com"
              ></Form.Control>
            </Form.Group>
            <div className={styles.Info}>
              <p>
                Una vez que llenes todos los datos solicitados, uno de nuestros
                colaboradores se pondra en contacto ustedes y asi poder
                asesorarlos para poder llegar a formar parte de este maravilloso
                cambio.
              </p>
            </div>
            <Button
              variant="primary"
              type="button"
              onClick={handleSubmit((formValues) => onSubmit(formValues))}
              className={styles.button}
            >
              Buscar
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RegisterBusiness;
