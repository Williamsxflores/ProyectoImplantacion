import React from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/Util/validators";
import { useForm } from "../../shared/hooks/form-hooks";
import "./PlaceForm.css";

const NewPlace = () => {
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
    },
    false
  );

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the bakcend;
  };

  return (
    <>
      <div className="newPlaceCont">
       
        <form className="place-form" onSubmit={placeSubmitHandler}>
          <h2>
            Encuentra como cambiar el futuro de su vida al toque de una sola
            busqueda
          </h2>
          <Input
            id="title"
            element="input"
            type="text"
            label="Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={inputHandler}
          />
          <Input
            id="description"
            element="textarea"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description (at least 5 characters)."
            onInput={inputHandler}
          />
          <Input
            id="address"
            element="input"
            label="address"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid address.."
            onInput={inputHandler}
          />
          <Input
            id="phone"
            element="input"
            label="Type"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid phone number.."
            onInput={inputHandler}
          />
          <Input
            id="Status"
            element="textarea"
            label="Validation"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description (at least 5 characters)."
            onInput={inputHandler}
          />
          <p> Your almost done, just need to validate it before adding it!</p>
          <br></br>
          <Button type="submit" disabled={!formState.isValid}>
            ADD JOB
          </Button>
        </form>

        <div className="log">
          <img
            src="https://scontent.ftij1-1.fna.fbcdn.net/v/t39.30808-6/281961696_5046350385434493_5821298273950707961_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHgEQ0oVqSN-zZx4SDTeCKjSrB_tyI4HtBKsH-3Ijge0AZ_EnG8TMCKfOZcIHTzjBlKh2tv9CmvSH4nQCdOMF57&_nc_ohc=rmnUSTgM_xEAX_Chnlb&_nc_ht=scontent.ftij1-1.fna&oh=00_AT-6UJgZz069x-Kj3dt4gPUxzEIvrmnGbAIIcUpBN6hoYQ&oe=62906A84"
            alt="logo"
            //   style={{ width: props.width, height: props.width }}
          />
        </div>

      </div>
    </>
  );
};

export default NewPlace;
