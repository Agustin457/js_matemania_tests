import React from 'react'
import './carrusel.css'
import { carrusel1 } from '../../assets'
import { carrusel2 } from '../../assets'
import { carrusel3 } from '../../assets'

export function Carrusel() {
    return (
        <div class="container-fluid">
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={carrusel1} class="d-block w-100" height="730px" width="500px" />
              </div>
              <div class="carousel-item">
                <img src={carrusel2} class="d-block w-100" height="730px" width="500px" />
              </div>
              <div class="carousel-item">
                <img src={carrusel3} class="d-block w-100" height="730x" width="500px" />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
            )
        }
