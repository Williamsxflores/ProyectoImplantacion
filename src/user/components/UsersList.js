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
              <img className="logo" src={assets.LOGIN.image} alt="logo" />
              <h2 className="">Como podemos ayudarte?</h2>
              <div className="">
                <input className="" />
              </div>
              <br />
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
        <div className="titulo2">
          <h2>Estamos para ayudarte a mejorar su vida...</h2>
        </div>
        <div className="ContainerAtentionCenters">
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
