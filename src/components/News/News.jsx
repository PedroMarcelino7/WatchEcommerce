import './News.css'

import Relogio from '../../images/relogio7.png'

export default function News() {
    return (
        <div className="container" id="new-products">
            <h2 className="title primary-color">Novidades</h2>

            <div className="row">
                <div className="col-12 col-md-3 d-none d-md-flex" id='new-products-banner'>
                    <p className="secondary-color">Os Melhores</p>
                    <h3>Relógios</h3>
                    <p className="primary-color">pelos melhores preços</p>
                </div>

                <div className="col-12 col-md-9">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="card primary-bg-color">
                                <div className="card-img-top img-fluid">
                                    <img className='card-img-top img-fluid' src={Relogio} alt="Relógio" />

                                    <div className="card-body">
                                        <p className="card-category secondary-color">Relógio</p>
                                        <h5 className="card-title primary-color">Nome do Produto</h5>
                                        <p className="card-text primary-color">R$177,77</p>
                                        <a href="" className="btn btn-primary">Comprar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="card primary-bg-color">
                                <div className="card-img-top img-fluid">
                                    <img className='card-img-top img-fluid' src={Relogio} alt="Relógio" />

                                    <div className="card-body">
                                        <p className="card-category secondary-color">Relógio</p>
                                        <h5 className="card-title primary-color">Nome do Produto</h5>
                                        <p className="card-text primary-color">R$177,77</p>
                                        <a href="" className="btn btn-primary">Comprar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="card primary-bg-color">
                                <div className="card-img-top img-fluid">
                                    <img className='card-img-top img-fluid' src={Relogio} alt="Relógio" />

                                    <div className="card-body">
                                        <p className="card-category secondary-color">Relógio</p>
                                        <h5 className="card-title primary-color">Nome do Produto</h5>
                                        <p className="card-text primary-color">R$177,77</p>
                                        <a href="" className="btn btn-primary">Comprar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="card primary-bg-color">
                                <div className="card-img-top img-fluid">
                                    <img className='card-img-top img-fluid' src={Relogio} alt="Relógio" />

                                    <div className="card-body">
                                        <p className="card-category secondary-color">Relógio</p>
                                        <h5 className="card-title primary-color">Nome do Produto</h5>
                                        <p className="card-text primary-color">R$177,77</p>
                                        <a href="" className="btn btn-primary">Comprar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="card primary-bg-color">
                                <div className="card-img-top img-fluid">
                                    <img className='card-img-top img-fluid' src={Relogio} alt="Relógio" />

                                    <div className="card-body">
                                        <p className="card-category secondary-color">Relógio</p>
                                        <h5 className="card-title primary-color">Nome do Produto</h5>
                                        <p className="card-text primary-color">R$177,77</p>
                                        <a href="" className="btn btn-primary">Comprar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="card primary-bg-color">
                                <div className="card-img-top img-fluid">
                                    <img className='card-img-top img-fluid' src={Relogio} alt="Relógio" />

                                    <div className="card-body">
                                        <p className="card-category secondary-color">Relógio</p>
                                        <h5 className="card-title primary-color">Nome do Produto</h5>
                                        <p className="card-text primary-color">R$177,77</p>
                                        <a href="" className="btn btn-primary">Comprar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}