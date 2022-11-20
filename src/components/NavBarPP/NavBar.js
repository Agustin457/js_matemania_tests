import React from "react";
import "./navbar.css";
import { logo } from "../../assets";
import { Link } from "react-router-dom";

export const NavBar = () => {
  
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav_menu">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={logo} alt="logo" id="logo_mate" />
          <h1>MATE MANIA ✤</h1>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-4 mb-lg-0">
            <li class="nav-item">
              <Link to="inicio">
                <a class="nav-link">Inicio</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="productos">
                <a class="nav-link">Productos</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="contacto">
                <a class="nav-link" href="#">
                  Contacto
                </a>
              </Link>
            </li>
            <li class="nav-item"></li>
            <li class="nav-item">
              <Link to="sobrenosotros">
                <li>
                  <a class="nav-link">Sobre Nosotros</a>
                </li>
              </Link>
            </li>
            <li id="icons">
              <div class="h3">
                <Link to="Cart">
                  <li>
                    <a class="nav-link"><i class="bi bi-cart-fill"></i></a>
                  </li>
                </Link>
              </div>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-1"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
