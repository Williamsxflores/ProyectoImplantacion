import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


import styles from "places/pages/styles/SearchScreen.module.css";

import { assets } from "constants.js";

const SearchScreen = () => {
  const { handleSubmit } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = async (formValues) => {};

  const searchForm = () => {
    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.Form}>
          <Form.Group controlId="job" className={styles.MarginInputs}>
            <FontAwesomeIcon icon={faSearch} className="mt-4" />
            <Form.Control
              type="text"
              name="job"
              placeholder="Que trabajo buscas"
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="location" className={styles.MarginInputs}>
            <FontAwesomeIcon icon={faSearch} className="mt-4" />
            <Form.Control
              type="text"
              name="location"
              placeholder="Donde lo buscas"
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="disabilities" className={styles.MarginInputs}>
            <FontAwesomeIcon icon={faSearch} className="mt-4" />
            <Form.Control
              type="text"
              name="disabilities"
              placeholder="Que necesidades tienes"
            ></Form.Control>
          </Form.Group>
        </div>
        <div className={styles.FormButton}>
          <Button
            variant="secondary"
            type="button"
            onClick={handleSubmit((formValues) => onSubmit(formValues))}
          >
            Buscar
          </Button>
        </div>
      </Form>
    );
  };

  return (
    <>
      <div className={styles.Title}>
        <h1>FreeWorkSpace</h1>
      </div>
      {searchForm()}
      <div className={styles.ContainerImg}>
        <Row>
          <Col>
            <img
              src={assets.SEARCH_IMG.image}
              className={styles.Img}
              alt="background"
            ></img>
          </Col>
        </Row>
      </div>
      <div className={styles.ContainerRegisterBusiness}>
        <Row>
          <Col>
            <h5>
              <Link to="/RegisterBusiness">Eres una empresa? Registrate aqui.</Link>
            </h5>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SearchScreen;
