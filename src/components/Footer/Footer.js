import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import { facebook, instagram, youtube, whatsapp } from '../../assets'


export const Footer = () => {
  return (
    <footer id="footer" class="container-fluid bg-dark py-5">
      <div class="container-fluid">
        <div class="row text-white">
          <div class="col-2">
            <h4>Menu</h4>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="./NavBar.js">Inicio</a></li>
              <li class="nav-item mb-2">Productos</li>
              <li class="nav-item mb-2">Contacto</li>
            </ul>
          </div>
          <div class="col-2">
            <h4>Contacto</h4>
            <ul class="nav flex-column ">
              <li class="nav-item mb-2">matemania@gmail.com</li>
              <li class="nav-item mb-2">4456-7888 </li>
              <li class="nav-item mb-2">Córdoba 347, CABA</li>
            </ul>
          </div>
          <div class="col-8">
            <h4 id="titulo_redes">Nuestras redes sociales</h4>
            <div class="d-flex justify-content-between">
              <ul class="list-unstyled d-flex">
                <li class="ms-3"><a class="link-dark" href="https://wa.me/542944924649"><img src = {whatsapp} class="img_footer" width="57px"/></a></li>
                <li class="ms-3"><a class="link-dark" href="https://www.facebook.com/CheMateAr?_ga=2.88231707.1203844562.1667247646-669339932.1662398604&_gac=1.84163307.1667255571.CjwKCAjw5P2aBhAlEiwAAdY7dJ-ituxj7HhPoK6m24iAytYAevFD6qb_W1hnttgnZaaCXgbYmqfRNBoCcRIQAvD_BwE"><img src = {facebook} class="img_footer" width="50px"/></a></li>
                <li class="ms-3"><a class="link-dark" href="https://www.instagram.com/che.mate/?_ga=2.88231707.1203844562.1667247646-669339932.1662398604&_gac=1.84163307.1667255571.CjwKCAjw5P2aBhAlEiwAAdY7dJ-ituxj7HhPoK6m24iAytYAevFD6qb_W1hnttgnZaaCXgbYmqfRNBoCcRIQAvD_BwE"><img src= {instagram} class="img_footer" width="50px"/></a></li>
                <li class="ms-3"><a class="link-dark" href="https://www.youtube.com/watch?v=7tmDMPiu_cM&ab_channel=SudamericanMate"><img src = {youtube} class="img_footer" width="50px"/></a></li>
              </ul>
            </div>
          </div>
          <div class="py-3 my-4 border-top">
            <div class="py-3 my-4">
              <p class="text-center text-white">&copy; 2021 Company, Inc. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
