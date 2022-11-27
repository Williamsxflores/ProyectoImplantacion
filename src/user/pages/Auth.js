import React, { useState, useContext } from "react";

import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/Util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import { assets } from "constants.js";
import "./Auth.css";

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();
  const [showModal, setShowModal] = useState(false);
  const { isLoading, error, sendRequest } = useHttpClient();

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  const authSubmitHandler = async (event) => {
    event.preventDefault();

    // setIsLoading(true);

    if (isLoginMode) {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/users/login",
          "POST",
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        auth.login(responseData.user.id);
      } catch (err) {
        setShowModal(true);
      }
    } else {
      try {
        const formData = {
          email: formState.inputs.email.value,
          name: formState.inputs.name.value,
          password: formState.inputs.password.value,
        };

        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/users/signup",
          "POST",
          JSON.stringify(formData),
          {
            "Content-Type": "application/json",
          }
        );

        auth.login(responseData.user.id);
      } catch (err) {
        setShowModal(true);
      }
    }
  };

  return (
    <>
      <ErrorModal
        show={showModal}
        errorMessage={error}
        setShowModal={setShowModal}
      />
      <div className="container">
        <Card className="card">
          {isLoading && <LoadingSpinner asOverlay />}
          <div className="Cont">
            <div>
              <img className="logo" src={assets.LOG_IMAGE.image} alt="logo" />
            </div>
            <div className="authentication">
              <h2> Login or created account </h2>
              <hr />
              <form onSubmit={authSubmitHandler}>
                {!isLoginMode && (
                  <Input
                    element="input"
                    id="name"
                    type="text"
                    label="Your Name"
                    validators={[VALIDATOR_REQUIRE]}
                    erroText="Please enter a name."
                    onInput={inputHandler}
                  />
                )}
                <Input
                  element="input"
                  id="email"
                  type="email"
                  label="E-Mail"
                  validators={[VALIDATOR_EMAIL()]}
                  errorText="Please enter a valid email address."
                  onInput={inputHandler}
                />
                <Input
                  element="input"
                  id="password"
                  type="password"
                  label="Password"
                  validators={[VALIDATOR_MINLENGTH(5)]}
                  errorText="Please enter a valid password atleast 5 characters."
                  onInput={inputHandler}
                />
                <Button type="submit" disabled={!formState.isValid}>
                  {isLoginMode ? "LOGIN" : "SIGNUP"}
                </Button>
              </form>

              <p>
                Si usted desea crear una cuenta porfavor balbalbalbal and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley
              </p>

              <Button inverse onClick={switchModeHandler}>
                SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Auth;
