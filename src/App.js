

import { Routes, Route } from "react-router-dom";

import './App.css'


import { CardGrid } from "./components/CardGrid/CardGrid";
import { productos } from "./data/productos";
import { Carrusel } from "./components/Carrusel/carrusel";
import { Confiar } from "./components/Confiar/Confiar";
import { Destacados } from "./components/Destacados/destacados";
import { NavBar } from "./components/NavBarPP/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Productos, Productos2 } from "./components/pages/Productos";
import { Contacto } from "./components/pages/Contacto";
import { Inicio } from "./components/pages/Inicio";
import { SobreNosotros } from "./components/pages/Sobrenosotros";



function App() {

  
  
  return (
    <>
    <NavBar />
      <Routes>
      
        <Route path="/productos" element={<Productos2 />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/sobrenosotros" element={<SobreNosotros />} />
        
      </Routes>

    <Footer />

    </>
  );
}

export default App;
