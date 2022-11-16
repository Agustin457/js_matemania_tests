import React from "react";
import { data } from "../../data/productos";
import Cards from "../Cards/Cards";

export const Productos2 = () => {
  const [carrito, setCarrito] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  const addCarrito = (item) => {
    if (carrito.includes(item)) {
      console.log("Ya esta en el carrito");
    } else {
      setCarrito([...carrito, item]);
      console.log("Agregado al carrito");
    }
  };

  const calcularTotal = () => {
    let total = 0;
    carrito.forEach((item) => {
      total += data.productos[item].precio;
      console.log(total);
    });
    setTotal(total);
  };

  return (
    <>
      <div className="container-fluid">
        <h3 className="text-center mt-5 text-uppercase">Productos 0000</h3>
        <div className="container py-4">
          <div className="row">
            {data.productos.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    addCarrito(index);
                  }}
                >
                  <Cards
                    img={item.img}
                    titulo={item.nombre}
                    text={item.text}
                    precio={item.precio}
                    key={index}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <h1>Carrito - ir a pagar</h1>
      {carrito.length > 0 ? (
        <div>
          <button onClick={calcularTotal}>Calcular total</button>
          <h1>Total: ${total}</h1>
          {total !== 0 ? (
            <>
              {carrito.map((item) => {
                return (
                  <div>
                    <h1>
                      {data.productos[item].nombre} - $
                      {data.productos[item].precio}
                    </h1>
                  </div>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <h1>No hay productos en el carrito</h1>
      )}
    </>
  );
};
