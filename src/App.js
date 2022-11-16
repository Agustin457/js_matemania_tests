

import { Routes, Route } from "react-router-dom";

import './App.css'

import { NavBar } from "./components/NavBarPP/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Productos2 } from "./components/pages/Productos";
import { Contacto } from "./components/pages/Contacto";
import { Inicio } from "./components/pages/Inicio";
import { SobreNosotros } from "./components/pages/Sobrenosotros";


function App() {

  
  
  return (
    <>
    <NavBar />
    <Inicio />
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
