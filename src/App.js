

import { Routes, Route } from "react-router-dom";

import './App.css'


import { CardGrid } from "./components/CardGrid/CardGrid";
import { productos } from "./data/productos";
import { Carrusel } from "./components/Carrusel/carrusel";
import { Confiar } from "./components/Confiar/Confiar";
import { Destacados } from "./components/Destacados/destacados";
import { NavBar } from "./components/NavBarPP/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/pages/Home";
import data from "./data";
import { Product } from "./components/Product/Product";



function App() {
  //  console.log(dataProducts)
  return (
    <>
    <NavBar />
    <br/>
    <Carrusel/>
    <br />
    <Destacados/>

    <br/>



    {/* <CardGrid data={productos} /> */}
    <Confiar />

    <div className="productos">
      {
        data.productos.map(productos => (
        <div className="producto" key={producto.urltag}>
          <a href={"/producto/"${producto.urltag}'}>
          <img src={producto.image} alt ={producto.nombre} />
          <p>{producto.nombre}</p>
          <p>{producto.precio}</p>
        </div>))
      }
    </div>



    <Footer />


    </>
  );
}

export default App;
