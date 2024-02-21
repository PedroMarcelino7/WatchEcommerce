import './BestSellers.css'

import Relogio1 from '../../images/relogio4.png'
import Relogio2 from '../../images/relogio5.png'
import Relogio3 from '../../images/relogio6.png'
import Relogio4 from '../../images/relogio7.png'

export default function BestSellers() {
    return (
        <div className="container" id="best-sellers">
            <h2 className="title primary-color">Best Sellers</h2>

            <div className="row">
                <div className="col-12 col-md-3">
                    <div className="card primary-bg-color">
                        <div className="card-img-top img-fluid">
                            <img className='card-img-top img-fluid' src={Relogio1} alt="Relógio 1" />

                            <div className="card-body">
                                <p className="card-category secondary-color">Relógio</p>
                                <h5 className="card-title">Nome do Produto</h5>
                                <p className="card-text primary-color">R$177,77</p>
                                <a href="" className="btn btn-primary">Comprar</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-3">
                    <div className="card primary-bg-color">
                        <div className="card-img-top img-fluid">
                            <img className='card-img-top img-fluid' src={Relogio2} alt="Relógio 2" />

                            <div className="card-body">
                                <p className="card-category secondary-color">Relógio</p>
                                <h5 className="card-title">Nome do Produto</h5>
                                <p className="card-text primary-color">R$177,77</p>
                                <a href="" className="btn btn-primary">Comprar</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-3">
                    <div className="card primary-bg-color">
                        <div className="card-img-top img-fluid">
                            <img className='card-img-top img-fluid' src={Relogio3} alt="Relógio 3" />

                            <div className="card-body">
                                <p className="card-category secondary-color">Relógio</p>
                                <h5 className="card-title">Nome do Produto</h5>
                                <p className="card-text primary-color">R$177,77</p>
                                <a href="" className="btn btn-primary">Comprar</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-3">
                    <div className="card primary-bg-color">
                        <div className="card-img-top img-fluid">
                            <img className='card-img-top img-fluid' src={Relogio4} alt="Relógio 4" />

                            <div className="card-body">
                                <p className="card-category secondary-color">Relógio</p>
                                <h5 className="card-title">Nome do Produto</h5>
                                <p className="card-text primary-color">R$177,77</p>
                                <a href="" className="btn btn-primary">Comprar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}