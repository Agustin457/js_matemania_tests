const Cards = (props) => {
    return (
        <>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4 mb-4">
                <div className="card h-100 shadow">
                    <img src={props.img} alt="" className="card-img-top img-fluid"/>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h5 className="card-title">{props.titulo}</h5>
                            <span className="fw-bolder">${props.precio}</span>
                        </div>
                        <div className="">
                            <p className="card-text">{props.text}</p>
                        </div>
                        <div className="d-grid justify-content-end mt-4">
                            <button className="btn btn-sm btn-outline-success"> Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
      
    )
}

export default Cards