import React, { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { Link } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";
import BusinessItem from "../../user/components/BusinessItem";
import styles from "places/pages/styles/SearchScreen.module.css";

const SearchScreen = () => {
  const { isLoading, sendRequest } = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/business"
        );

        setLoadedUsers(responseData);
      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest]);

  return (
    <>
      <div className={styles.Title}>
        <h1>FreeWorkSpace</h1>
      </div>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      <div className={styles.ContainerImg}>
        <Row>
          <Col>
            {!isLoading && loadedUsers
              ? loadedUsers.map((business) => {
                  return (
                    <BusinessItem key={business._id} business={business} />
                  );
                })
              : null}
          </Col>
        </Row>
      </div>
      <div className={styles.ContainerRegisterBusiness}>
        <Row>
          <Col>
            <h5>
              <Link to="/RegisterBusiness">
                Eres una empresa? Registrate aqui.
              </Link>
            </h5>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SearchScreen;
