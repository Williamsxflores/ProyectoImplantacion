import React from "react";

import UserItem from "./UserItem";

import Card from "../../shared/components/UIElements/Card";
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
    <>
      <div className="Container">
        <div className="logo">
          <img
            src="https://scontent.ftij1-1.fna.fbcdn.net/v/t39.30808-6/283535225_5045915928811272_8059214364768120770_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHYIAhlk-gPcfQ6lT5pTbdXxHgo-n-i-HfEeCj6f6L4d4ibDTSEm7Xckt2YH0k52E6z4_Bwg-ij9WP0cnbr_JSE&_nc_ohc=GpK_f3_MROMAX8jlHjb&_nc_ht=scontent.ftij1-1.fna&oh=00_AT_1IqpC_p4JKm3IMBgVwydaiJ4YSbf82isAgEN4zFteoQ&oe=629037D3"
            alt="logo"
            //   style={{ width: props.width, height: props.width }}
          />
        </div>

        <div className="info">
          <p>
            <h2 className="titulo">Centro de atencion para la empresa</h2>
            <h1 className="titulo2">Como podemos ayudarte?</h1>
            <div className="input">
              <input className="conf"/>
            </div>
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <ul className="users-list">
          {props.items.map((user) => (
            <UserItem
              key={user.id}
              id={user.id}
              image={user.image}
              name={user.name}
              jobCount={user.jobs}
            />
          ))}
        </ul>
      </div>

      <div className="cont">
        <h2 className="texto">Estamos para ayudarte a mejorar su vida...</h2>
      </div>

      <div className="containerM">
        <div>
          <p>
            <h2 className="">Centro de atencion para la empresa</h2>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div>
          <p>
            <h2 className="">Centro de atencion para la empresa</h2>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div>
          <p>
            <h2 className="">Centro de atencion para la empresa</h2>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </>
  );
};
export default UsersList;
