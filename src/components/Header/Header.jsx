import About from "../About/About";
import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-container">
                    <div className="header-content">
                        <div className="header-flex" data-aos="fade-right">
                            <div className="header-text items">
                                <h1>It’s a Big World Out There, Go Explore</h1>
                                <p className=" text-lg items">
                                    Always make our customer happy by providing as many choises as possible.
                                </p>
                            </div>
                            {/* location */}
                        </div>
                        {/* img */}
                        <div className="header-flex" data-aos="fade-left">
                            <img src="/img/illustrations/cunstomer.jpeg" alt="Header Illustration" />
                        </div>
                    </div>

                    <About />
                </div>
            </div>
        </header>

    )
}