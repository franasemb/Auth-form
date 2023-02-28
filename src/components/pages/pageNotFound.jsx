import React, { Component } from "react";
import pageNotFoundSvg from "../../assets/404.svg";

export default class pageNotFound extends Component {
  render() {
    return (
      <>
        <div className="container text-center">
          <div className="card404">
            <img src={pageNotFoundSvg} alt="Imagen de la página 404" />
            <h2>Página no encontrada</h2>
            <h3>Haz click en el botón para volver al incio</h3>
            <button>Inicio</button>
          </div>
        </div>
      </>
    );
  }
}
