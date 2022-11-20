import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import { data } from "./data/productos";

import "./App.css";

import { NavBar } from "./components/NavBarPP/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Productos } from "./components/pages/Productos";
import { Contacto } from "./components/pages/Contacto";
import { Inicio } from "./components/pages/Inicio";
import { SobreNosotros } from "./components/pages/Sobrenosotros";
import { Cart } from "./components/pages/Cart";

function App() {

  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (titulo) => {
    const producto = data.productos.find((item) => item.nombre === titulo);
    setCarrito([...carrito, producto])
  }

  const eliminarProducto = (titulo) => {
    const producto = carrito.filter((item) => item.nombre !== titulo);
    setCarrito(producto)
  }

  const limpiarCarrito = () => {
      setCarrito([]);
  }

  const totalCarrito = () => {
      return carrito.reduce((total, producto) => total + producto.precio, 0);
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/productos" element={<Productos props={{agregarProducto:agregarProducto}} />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/sobrenosotros" element={<SobreNosotros />} />
        <Route path="/cart" element={<Cart props={{carrito:carrito,eliminarProducto:eliminarProducto, limpiarCarrito:limpiarCarrito, totalCarrito:totalCarrito}}/>} />
        <Route path="/" element={<Inicio />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
