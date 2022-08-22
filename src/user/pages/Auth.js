import React, { useState, useContext } from "react";

import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/Util/validators";
import { useForm } from "../../shared/hooks/form-hooks";
import { AuthContext } from "../../shared/context/auth-context";
import "./Auth.css";

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
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

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
    auth.login();
  };

  return (
    <>
      <div className="Cont">
        <div className="logo2">
          <img
            src="https://scontent.ftij1-1.fna.fbcdn.net/v/t39.30808-6/283535225_5045915928811272_8059214364768120770_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHYIAhlk-gPcfQ6lT5pTbdXxHgo-n-i-HfEeCj6f6L4d4ibDTSEm7Xckt2YH0k52E6z4_Bwg-ij9WP0cnbr_JSE&_nc_ohc=GpK_f3_MROMAX8jlHjb&_nc_ht=scontent.ftij1-1.fna&oh=00_AT_1IqpC_p4JKm3IMBgVwydaiJ4YSbf82isAgEN4zFteoQ&oe=629037D3"
            alt="logo"
            //   style={{ width: props.width, height: props.width }}
          />
        </div>
        <div>
          <Card className="authentication">
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
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley
            </p>

            <Button inverse onClick={switchModeHandler}>
              SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Auth;
