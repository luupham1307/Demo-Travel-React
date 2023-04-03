import "./Features.css"

export default function Features() {
    return (
        <section className="features">
            <div className="container">
                <div className="features-container">
                    <div data-aos="zoom-in">
                        <img src="/img/illustrations/customer2.2.png" alt="Features Illustration" />
                    </div>
                    <div data-aos="zoom-in-up">
                        <div className="feature-content">
                            <div className="feature-heading">
                                <h2>
                                    WE Recommend You The Most Beautiful Holiday Places Every Month.
                                </h2>
                                <p className=" text-md">Make your dream vacation come true,It is a long established fact that
                                    a reader will be
                                    distracted by the readable content of a page when looking.</p>
                            </div>
                            <div className="feature-list">
                                <div className="feature-list-content">
                                    <div className="feature-number">
                                        <span className="
                          font-bold2">15</span>
                                    </div>
                                    <div className="feature-item">
                                        <p className=" text-sm font-bold2">Years Of Experience</p>
                                    </div>
                                </div>
                                <div className="feature-list-content">
                                    <div className="feature-number">
                                        <span className="
                          font-bold2 ">2K</span>
                                    </div>
                                    <div className="feature-item">
                                        <p className=" text-sm font-bold2">Our Experience</p>
                                    </div>
                                </div>
                                <div className="feature-list-content">
                                    <div className="feature-number">
                                        <span className="
                          font-bold2">25K</span>
                                    </div>
                                    <div className="feature-item">
                                        <p className=" text-sm font-bold2">Happy Customer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="feature-btn">
                                <button className="btn font-bold2 ">
                                    Lean More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}