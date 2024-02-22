import './BottomNav.css'

export default function BottomNav() {
    return (
        <nav className="navbar navbar-expand-lg secondary-bg-color p-2" id="bottom-navbar-container">
            <div className="container">
                <h1 className='d-block d-md-none'>ExactTime</h1>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#bottom-navbar"
                    aria-controls="bottom-navbar" aria-expanded="false" aria-label="Toggle Navigation">
                    <i className="bi bi-list"></i>
                </button>

                <ul className="navbar-nav mb-2 mb-lg-0 collapse navbar-collapse" id="bottom-navbar">
                    <li className="nav-item">
                        <a href="#" className="nav-link">Home</a>
                    </li>

                    <li className="nav-item">
                        <a href="#" className="nav-link">Produtos</a>
                    </li>

                    <li className="nav-item">
                        <a href="#" className="nav-link">Promoções</a>
                    </li>

                    <li className="nav-item">
                        <a href="#" className="nav-link">Blog</a>
                    </li>

                    <li className="nav-item">
                        <a href="#" className="nav-link">Home</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}