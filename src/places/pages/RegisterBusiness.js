import { useState } from "react";
import { useHistory } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_REQUIRE } from "../../shared/Util/validators";

import styles from "places/pages/styles/RegisterBusiness.module.css";

const RegisterBusiness = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      turn: {
        value: "",
        isValid: false,
      },
      social: {
        value: "",
        isValid: false,
      },
      addressFiscal: {
        value: "",
        isValid: false,
      },
      owner: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      phone: {
        value: "",
        isValid: false,
      },
      secondPhone: {
        value: "",
        isValid: false,
      },
      attends: {
        value: "",
        isValid: false,
      },
      attendsSecond: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const history = useHistory();

  const placeSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);

      const newBusiness = {
        name: formState.inputs.name.value,
        turn: formState.inputs.turn.value,
        social: formState.inputs.social.value,
        addressFiscal: formState.inputs.addressFiscal.value,
        owner: formState.inputs.owner.value,
        email: formState.inputs.email.value,
        phone: formState.inputs.phone.value,
        secondPhone: formState.inputs.secondPhone.value,
        attends: formState.inputs.attends.value,
        attendsSecond: formState.inputs.attendsSecond.value,
      };

      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/business",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newBusiness),
        }
      );

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      history.push("/");
    }
  };

  return (
    <div>
      <h1>Registra tu empresa</h1>
      <div className={styles.Container}>
        {isLoading && <LoadingSpinner />}
        <form className="place-form" onSubmit={placeSubmitHandler}>
          <Input
            id="name"
            element="input"
            type="text"
            label="Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid name."
            onInput={inputHandler}
          />

          <Input
            id="addressFiscal"
            element="input"
            type="text"
            label="Direccion fisca"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid address."
            onInput={inputHandler}
          />

          <Input
            id="phone"
            element="input"
            type="text"
            label="N Telefono"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid phone."
            onInput={inputHandler}
          />

          <Input
            id="secondPhone"
            element="input"
            type="text"
            label="N Telefono"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid phone."
            onInput={inputHandler}
          />

          <Input
            id="turn"
            element="input"
            type="text"
            label="Giro empresarial"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid business turn."
            onInput={inputHandler}
          />

          <Input
            id="owner"
            element="input"
            type="text"
            label="Fisica o Moral"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid business owner."
            onInput={inputHandler}
          />

          <Input
            id="attends"
            element="input"
            type="text"
            label="Atiende"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid attends."
            onInput={inputHandler}
          />

          <Input
            id="attendsSecond"
            element="input"
            type="text"
            label="Atiende"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid attendsSecond."
            onInput={inputHandler}
          />

          <Input
            id="social"
            element="input"
            type="text"
            label="Razon social"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid Razon social."
            onInput={inputHandler}
          />

          <Input
            id="email"
            element="input"
            type="text"
            label="Email"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid Email."
            onInput={inputHandler}
          />

          <div className={styles.Info}>
            <p>
              Una vez que llenes todos los datos solicitados, uno de nuestros
              colaboradores se pondra en contacto ustedes y asi poder
              asesorarlos para poder llegar a formar parte de este maravilloso
              cambio.
            </p>
          </div>
          <Button
            type="submit"
            disabled={!formState.isValid}
            className={styles.button}
          >
            ADD BUSINESS
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterBusiness;
