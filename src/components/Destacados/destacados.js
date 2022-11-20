import React from "react";
import { m2, producto2, producto3, producto4 } from "../../assets";
import "./destacados.css";

export const Destacados = () => {
  return (
    <section id="productos">
      <div className="container text-center mt-5 py-5 d-flex">
        <h3>
          Nuestros productos destacados <br />
          <small className="text-muted">Lo que eligen los argentinos.</small>
        </h3>
      </div>
      <div className="container">
        <div className="destacados">
          <div className="row row-cols-4 row-cols-md-4">
            <div className="col">
              <div className="card">
                <img src={m2} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">
                    MATE DELUXE DE ALGARROBO -LISO-
                  </h5>
                  <p className="card-text">
                    <small className="text-muted d-flex">
                      <del>$10.640,00</del>
                    </small>
                    <strong> $7.980,00</strong> <br />3 cuotas sin interés de{" "}
                    <strong>$2.660,00</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={producto2} />
                <div className="card-body">
                  <h5 className="card-title">MATE IMPERIAL PREMIUM</h5>
                  <p className="card-text">
                    <small className="text-muted d-flex">
                      <del>$11.500,00</del>
                    </small>
                    <strong> $9.900,00</strong> <br />3 cuotas sin interés de{" "}
                    <strong>$3.500,00</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={producto3} />
                <div className="card-body">
                  <h5 className="card-title">MATE PAMPA</h5>
                  <p className="card-text">
                    <small className="text-muted d-flex">
                      <del>$9.500,00</del>
                    </small>
                    <strong> $7.400,00</strong> <br />3 cuotas sin interés de{" "}
                    <strong>$2.550,00</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={producto4} />
                <div className="card-body">
                  <h5 className="card-title">MATE BLANCO LISO</h5>
                  <p className="card-text">
                    <small className="text-muted d-flex">
                      <del>$12.500,00</del>
                    </small>
                    <strong> $10.400,00</strong> <br />3 cuotas sin interés de{" "}
                    <strong>$3.700,00</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
