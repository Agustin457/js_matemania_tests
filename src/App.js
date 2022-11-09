import './App.css'



import { NavBar } from "./components/NavBarPP/NavBar";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Inicio } from "./components/pages/Inicio";
import { Productos } from "./components/pages/Productos";
import { Contacto } from "./components/pages/Contacto";
import { Sobre_Nosotros } from "./components/pages/Sobre Nosotros";
import { Origen } from "./components/pages/Origen";



function App() {
  //  console.log(dataProducts)
  return (
    <>
    <NavBar />
      <Routes>

        <Route path="/" element={<Inicio />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Sobre_Nosotros" element={<Sobre_Nosotros />} />
        <Route path="Origen" element={<Origen/>} />

      </Routes>



    <Footer />


    </>
  );
}

export default App;
