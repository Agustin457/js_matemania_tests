import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


import './index.css';
import App from './App';
import { Inicio } from './components/pages/Inicio';
import { Footer } from './components/Footer/Footer';
import { NavBar } from './components/NavBarPP/NavBar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  


);


