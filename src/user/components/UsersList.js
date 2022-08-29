import React from "react";

import UserItem from "./UserItem";

import Card from "../../shared/components/UIElements/Card";

import { assets } from "constants.js";

import "./UsersList.css";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No hay empleos encontrados.</h2>
        </Card>
      </div>
    );
  }

  return (
    <div className="Userlist">
      <section className="ConteinerInfo">
        <div className="">
          <div className="titulo">
            <p>
              <h1 className="">Centro de atencion para la empresa</h1>
              <img className="logo" src={assets.MAIN_IMAGE.image} alt="logo" />
              <h2 className="">Como podemos ayudarte?</h2>
              <div className="">
                <input className="" />
              </div>
              <br />
              Estamos enfocados en el avance de su vida, para lograr cambios y entendernos mejor, para darles una mano a las personas 
              que no suelen tener ayuda, apoyarnos a facilitar su vida, de una manera que puedan obtener una oportunidad.
              No obstante apoyamos a las empresas que desean brindar un apoyo a las personas que desean salir adelante en su vida y 
              demostrar que son capaces de hacer un cambio por ellos mismos.
            </p>
          </div>
        </div>
        <div className="titulo2">
          <h2>Estamos para ayudarte a mejorar su vida...</h2>
        </div>
        <div className="ContainerAtentionCenters">
          <div className="description">
            <h2>VISION</h2>
            <p>
              <br></br>
             Tenemos pensado poder conectar con las empresas y que de tal forma mejorar la vida 
             de las personas, de tal manera que se les sea faciles encontrar un empleo y poder asi 
             lograr que sus vidas mejoren, de tal manera que las empresas sean mas incluyentes para todos
             ya que una incapacidad no define a una persona, lo define su corazon y su voluntad.
            </p>
          </div>
          <div className="description">
            <h2>Centro de atencion para la empresa</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="description">
            <h2>Centro de atencion para la empresa</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </section>

      <section className="ContainerUserList">
        <ul className="Userslist">
          {props.items.map((user) => (
            <UserItem
              key={user.id}
              id={user.id}
              image={assets.LOGIN.image}
              name={user.name}
              jobCount={user.jobs}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};
export default UsersList;
