import React from "react";
import Cards from "../Cards/Cards";

import "./Carrito.css"

export const Carrito = (props) => {
  let { carrito, eliminarProducto, limpiarCarrito, totalCarrito } =
    props.props.props;

  return (
    <div className="container-fluid">
      <div className="container py-4">
        <div className="row">
          <h1>Carrito</h1>
          <div>
            {carrito.map((producto, index) => (
              <div className="div">
                <Cards
                  img={producto.img}
                  titulo={producto.nombre}
                  text={producto.text}
                  precio={producto.precio}
                  eliminarProducto={eliminarProducto}
                  key={index}
                />
              </div>
            ))}
          </div>
        </div>
          {
            carrito.length > 0 ? 
            <section className="box">
              <button className="btn btn-sm btn-outline-primary limpiar" onClick={() => limpiarCarrito()}>Limpiar Carrito</button>
              <h3 className="limpiar">Total: {totalCarrito()}</h3>
            </section> : 
            <h3 Style={"text-align:center"}>No hay productos en el carrito</h3>
          }
      </div>
    </div>
  );
};
