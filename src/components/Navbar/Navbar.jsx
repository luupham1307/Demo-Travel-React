import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-container" data-aos="zoom-out">
                    {/* brand */}
                    <div className="brand">
                        <img className="brand-img" src="/img/logosvg.svg" alt="logo" />
                        <p className="brand-title"><span className="font-bold">TrapTip</span></p>
                    </div>
                    {/* nav link */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#" className="nav-link"><span className="
                      font-bold2">Home</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Rooms</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Contact</a>
                        </li>
                    </ul>
                    {/* Action Buttons */}
                    <div className="navbar-action">
                        <a href="#" className="btn">Sign Up</a>
                    </div>
                    {/* Menu button */}
                    <div className="navbar-menu">
                        <button className="btn">
                            <i className="fa-solid fa-bars" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>

    );
}