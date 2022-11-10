import React from "react";
import { producto1, producto2 } from "../../assets";

 
export const Origen = () => {
    return (
        <><h3>Cursos destacados:</h3><div class="cursos_destacados">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        <div class="mx-auto">
                            <img src={producto1} class="card-img-top" />
                            <div class="card-body">
                                <h5 class="desarollo web"><strong>Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL</strong></h5>
                                <p class="card-text">Aprende Desarrollo Web con este curso 100% práctico, paso a paso y sin conocimientos previos.<br/>INCLUYE CUATRO PROYECTOS FINALES.</p>
                                <p><strong>16,99US$ </strong><small class="text-muted"><del>84,99US$</del></small></p>
                                <p class="card-text"><small>111.323 estudiantes</small></p>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={producto1} class="card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title"><strong>React: de cero a experto (Hooks y Mern)</strong></h5>
                            <p class="card-text">Context API, MERN, Hooks, Firestore, JWT, Testing, Autenticaciones, Despliegues, CRUD, Logs, MUI, Multiple Routers...</p>
                            <p><strong>16,99US$  </strong><small class="text-muted"><del>69,99US$</del></small></p>
                            <p class="card-text"><small>54.259 estudiantes</small></p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={producto1} class="card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title"><strong>Universidad Java - De Cero a Experto - Más Completo +106 hrs</strong></h5>
                            <p class="card-text">El mejor curso de Java, POO, JDBC, Servlets, JavaEE, Web Services, JSF, EJB, JPA, PrimeFaces, Hibernate, Spring, Struts!</p>
                            <p><strong>16,99US$  </strong><small class="text-muted"><del>19,99US$</del></small></p>
                            <p class="card-text"><small>214.803 estudiantes</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div></>

    )
}

    
    
  