import React from 'react'
import './formulario.css'

export function FormularioContacto() {
    return (
        <><section class="conteiner"><div class="row g-4 py-5">

            <div class="col">
                <div class="card card-cover h-100 overflow-hidden text-white bg-secondary rounded-5 shadow-lg" id="contactanos">
                    <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h1><strong> CONTACTANOS !</strong></h1>

                        <form class="row g-3">
                            <div class="col-12">
                                <label for="inputEmail4" class="form-label">Nombre y Apellido</label>
                                <input type="email" class="form-control" id="inputEmail4" />
                            </div>

                            <div class="col-12">
                                <label for="inputEmail4" class="form-label">Teléfono celular</label>
                                <input type="email" class="form-control" id="inputEmail4" />
                            </div>

                            <div class="col-12">
                                <label for="email" class="form-label">E-mail<span class="text-muted"></span></label>
                                <input type="email" class="form-control" id="email" placeholder="usuario@gmail.com" />
                                <div class="invalid-feedback">
                                    Direccion de correo errónea
                                </div>
                            </div>

                            <div class="col-12">
                                <label for="inputEmail4" class="form-label">Tu consulta</label>
                                <input type="email" class="form-control" id="inputEmail4" />
                            </div>

                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                    <label class="form-check-label" for="gridCheck">
                                        Deseo suscribirme y recibir ofertas exclusivas.
                                    </label>
                                </div>

                            </div>
                            <br />
                            <button type="button" class="btn btn-dark">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>

        </div></section></> 
                

   
    )
}