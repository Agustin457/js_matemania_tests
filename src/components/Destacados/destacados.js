import React from "react"
import { producto1, producto2, producto3, producto4, producto5, producto6, producto7} from "../../assets"
import './destacados.css'

export const Destacados = () =>{
    return(
        <section id="productos">
        <div class="container text-center mt-5 py-5">
        <h3>Nuestros productos destacados <br/>
        <small class="text-muted">Lo que eligen los argentinos.</small></h3>
        </div>
        <div class="container">
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row row-cols-4 row-cols-md-4">
                  <div class="col">
                    <div class="card">
                      <img src= {producto1} class="card-img-top"/>
                      <div class="card-body">
                        <h5 class="card-title">MATE DELUXE DE ALGARROBO -LISO-</h5>
                        <p class="card-text"><small class="text-muted"><del>$10.640,00</del></small><strong> $7.980,00</strong> <br/>
                          3 cuotas sin interés de <strong>$2.660,00</strong></p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card">
                      <img src= {producto2} />
                      <div class="card-body">
                        <h5 class="card-title">MATE IMPERIAL PREMIUM</h5>
                        <p class="card-text"><small class="text-muted"><del>$11.500,00</del></small><strong> $9.900,00</strong> <br/>
                          3 cuotas sin interés de <strong>$3.500,00</strong></p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card">
                      <img src= {producto3}/>
                      <div class="card-body">
                        <h5 class="card-title">MATE PAMPA</h5>
                        <p class="card-text"><small class="text-muted"><del>$9.500,00</del></small><strong> $7.400,00</strong> <br/>
                          3 cuotas sin interés de <strong>$2.550,00</strong></p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card">
                      <img src= {producto4}/>
                      <div class="card-body">
                        <h5 class="card-title">MATE BLANCO LISO</h5>
                        <p class="card-text"><small class="text-muted"><del>$12.500,00</del></small><strong> $10.400,00</strong> <br/>
                          3 cuotas sin interés de <strong>$3.700,00</strong></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row row-cols-4 row-cols-md-4 g-3">
                  <div class="col">
                    <div class="card">
                      <img src= {producto5}/>
                      <div class="card-body">
                        <h5 class="card-title">MATE GUARDA MANITOS</h5>
                        <p class="card-text"><small class="text-muted"><del>$11.000,00</del></small><strong> $9.700,00</strong> <br/>
                          3 cuotas sin interés de <strong>$3.400,00</strong></p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card">
                      <img src= {producto6}/>
                      <div class="card-body">
                        <h5 class="card-title">MATE TORPEDO</h5>
                        <p class="card-text"><small class="text-muted"><del>$10.000,00</del></small><strong> $8.700,00</strong> <br/>
                          3 cuotas sin interés de <strong>$3.000,00</strong></p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card">
                      <img src= {producto7}/>
                      <div class="card-body">
                        <h5 class="card-title">MATE HIGH SOCIETY</h5>
                        <p class="card-text"><small class="text-muted"><del>$13.000,00</del></small><strong> $11.500,00</strong> <br/>
                          3 cuotas sin interés de <strong>$4.000,00</strong></p>
                      </div>
                    </div>
                  </div>
                </div>
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
      </section>
    )
}