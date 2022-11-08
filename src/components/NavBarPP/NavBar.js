import React from 'react';
import './navbar.css';
import { logo } from '../../assets';


export const NavBar = () =>{
    return(
      <nav class="navbar navbar-expand-lg navbar-light bg-light" id='nav_menu'>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="logo" id="logo_mate"/>
            <h1>MATE MANIA ✤</h1>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-4 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="./index.html">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./productos.html">Productos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./Contacto.html">Contacto</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sobres Nostros</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Más
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Cuida tu Mate</a></li>
                  <li><a class="dropdown-item" href="#">Preguntas frecuentes</a></li>
                  <li><a class="dropdown-item" href="#">Historia</a></li>
                </ul>
              </li>
              <li id="icons">
                <div class="h3">
                  <i class="bi bi-cart-fill"></i>
                </div>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-1" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
}