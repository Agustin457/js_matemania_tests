import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { whatsapp, instagram, facebook, youtube } from "../../assets";

export const Footer = () => {
  return (
    <footer className="text-white py-4" id="footer">
      <div className="container">
        <div className="row gy-3">
          <div className="col-lg-3 col-md-6 d-flex">
            <div>
              <h4>Menu</h4>
              <ul class="nav flex-column" id="menu">
                <li class="nav-item mb-2">
                  <Link to="inicio">
                    <a>Inicio</a>
                  </Link>
                </li>
                <li class="nav-item mb-2">
                  <Link to="productos">Productos</Link>
                </li>
                <li class="nav-item mb-2">
                  <Link to="contacto">Contacto</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer-links d-flex">
            <div>
              <h4>Contacto</h4>
              <ul class="nav flex-column ">
                <li class="nav-item mb-2">matemania@gmail.com</li>
                <li class="nav-item mb-2">4456-7888 </li>
                <li class="nav-item mb-2">Córdoba 347, CABA</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer-links d-flex">
            <div className="social-links d-flex justify-content-between">
              <ul class="list-unstyled d-flex" id="fotos_redes">
                <li class="ms-3">
                  <a class="link-dark" href="https://wa.me/542944924649">
                    <img src={whatsapp} class="img_footer" width="57px" />
                  </a>
                </li>
                <li class="ms-3">
                  <a
                    class="link-dark"
                    href="https://www.facebook.com/CheMateAr?_ga=2.88231707.1203844562.1667247646-669339932.1662398604&_gac=1.84163307.1667255571.CjwKCAjw5P2aBhAlEiwAAdY7dJ-ituxj7HhPoK6m24iAytYAevFD6qb_W1hnttgnZaaCXgbYmqfRNBoCcRIQAvD_BwE"
                  >
                    <img src={facebook} class="img_footer" width="50px" />
                  </a>
                </li>
                <li class="ms-3">
                  <a
                    class="link-dark"
                    href="https://www.instagram.com/che.mate/?_ga=2.88231707.1203844562.1667247646-669339932.1662398604&_gac=1.84163307.1667255571.CjwKCAjw5P2aBhAlEiwAAdY7dJ-ituxj7HhPoK6m24iAytYAevFD6qb_W1hnttgnZaaCXgbYmqfRNBoCcRIQAvD_BwE"
                  >
                    <img src={instagram} class="img_footer" width="50px" />
                  </a>
                </li>
                <li class="ms-3">
                  <a
                    class="link-dark"
                    href="https://www.youtube.com/watch?v=7tmDMPiu_cM&ab_channel=SudamericanMate"
                  >
                    <img src={youtube} class="img_footer" width="50px" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container text-center">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Matemania</span>
          </strong>
          . Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
};
