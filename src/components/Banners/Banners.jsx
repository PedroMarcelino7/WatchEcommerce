import './Banners.css'
import Banner1 from '../../images/banner1.jpg'
import Banner2 from '../../images/banner2.jpg'

export default function () {
    return (
        <div className="container" id="banners-container">
            <div className="carousel slide" id="slider" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className='d-block w-100 img-fluid' src={Banner1} alt="Banner 1" />
                        <div className="carousel-caption primary-bg-color">
                            <h5>Relógios de luxo</h5>
                            <p>Para você estar pronto em qualquer situação</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img className='d-block w-100 img-fluid' src={Banner2} alt="Banner 2" />
                        <div className="carousel-caption primary-bg-color">
                            <h5>Linha importada</h5>
                            <p>Conheça os melhores relógios suíços para pronta entrega</p>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type='button' data-bs-target="#slider" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="vissualy-hidden">Previous</span>
                </button>
                
                <button className="carousel-control-next" type='button' data-bs-target="#slider" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="vissualy-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}