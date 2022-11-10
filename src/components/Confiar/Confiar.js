import React from "react"
import { precio, entrega, diseño } from "../../assets"
import './confiar.css'

export const Confiar = () => {
    return(
        <section id="confiar">
            <h2 class="titulo"> ¿Por qué confiar en nosotros? </h2>
            <container> <br/>
                <div class="row">
                <div class="col-4">
                    <img src= {entrega} width="100px"/>
                    <h4>Rápida entrega</h4>
                    <p>Preparamos productos de la mejor calidad para nuestra comunidad desde 1991.</p>
                </div>
                <div class="col-4">
                    <img src= { diseño} width="100px"/>
                    <h4>Modelos de diseño</h4>
                    <p>Preparamos productos de la mejor calidad para nuestra comunidad desde 1991.</p>
                </div>
                <div class="col-4">
                    <img src= {precio} width="100px"/>
                    <h4>Relación precio-calidad</h4>
                    <p>Preparamos productos de la mejor calidad para nuestra comunidad desde 1991.</p>
                </div>
                </div>
            </container>
      </section>
    )
}
