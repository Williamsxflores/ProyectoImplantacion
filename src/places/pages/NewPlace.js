import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/Util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from "../../shared/context/auth-context";
import "./PlaceForm.css";

const NewPlace = () => {
  const auth = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
      image: {
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
      const newJob = {
        title: formState.inputs.title.value,
        description: formState.inputs.description.value,
        image: formState.inputs.image.value,
        address: formState.inputs.address.value,
        creator: auth.userId,
      };

      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/places",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newJob),
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
    <>
      <div className="newPlaceCont">
        {isLoading && <LoadingSpinner asOverlay />}
        <form className="place-form" onSubmit={placeSubmitHandler}>
          <h2>
            Encuentra como cambiar el futuro de su vida al toque de una sola
            busqueda
          </h2>
          <Input
            id="title"
            element="input"
            type="text"
            label="Nombre"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={inputHandler}
          />
          <Input
            id="description"
            element="textarea"
            label="Descripcion"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description (at least 5 characters)."
            onInput={inputHandler}
          />
          <Input
            id="image"
            element="input"
            label="Imagen"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a image url link"
            onInput={inputHandler}
          />
          <Input
            id="address"
            element="input"
            label="Direccion"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid address.."
            onInput={inputHandler}
          />
          <Button type="submit" disabled={!formState.isValid}>
            ADD JOB
          </Button>
        </form>
      </div>
    </>
  );
};

export default NewPlace;
