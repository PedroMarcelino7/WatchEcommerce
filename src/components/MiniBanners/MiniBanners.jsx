import './MiniBanners.css'

import Relogio1 from '../../images/relogio1.png'
import Relogio2 from '../../images/relogio2.png'
import Relogio3 from '../../images/relogio3.png'

export default function MiniBanners() {
    return (
        <div className="container" id='mini-banners'>
            <div className="row justify-content-around">
                <div className="col-12 dark-bg-color" id="mini-banner-1">
                    <h2>Nova Coleção</h2>
                    <img src={Relogio1} alt="Relógio 1" />
                    <a href="#">Compre Agora</a>
                </div>

                <div className="col-12 secondary-bg-color" id="mini-banner-2">
                    <h2>Promoções</h2>
                    <img src={Relogio2} alt="Relógio 2" />
                    <a href="#">Compre Agora</a>
                </div>

                <div className="col-12 light-bg-color" id="mini-banner-3">
                    <h2 className='secondary-color'>Edição Limitada</h2>
                    <img src={Relogio3} alt="Relógio 3" />
                    <a href="#">Compre Agora</a>
                </div>
            </div>
        </div>
    )
}