import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg primary-bg-color py-4 px-2" id="navbar">
            <div className="container">
                <a href="" className="navbar-brand">ExactTime</a>

                <div id="navbar-items">
                    <div></div>
                    <form className="d-flex" id="search-form">
                        <i className="bi bi-search primary-color"></i>
                        <input type="search" className="form-control me-2" placeholder="..." aria-label="Search" />
                        <button className="btn secondary-bg-color" type="submit">Search</button>
                    </form>

                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="bi bi-person"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="bi bi-heart"></i>
                            </a>
                            <span className="qty-info">5</span>
                        </li>
                        <li className="nav-item" id="bag-item">
                            <a href="#" className="nav-link">
                                <i className="bi bi-bag"></i>
                                <b>R$ 1000,00</b>
                            </a>
                            <span className="qty-info">7</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}