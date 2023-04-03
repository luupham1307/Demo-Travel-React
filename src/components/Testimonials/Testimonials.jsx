import "./Testimonials.css";

export default function Testimonials() {
    return (
        <section className="testimonials">
            <div className="container">
                <div className="testimonials-container">
                    <div data-aos="zoom-out-right">
                        <div className=" testimonials-img">
                            <div className=" testimonials-bg">
                                <div className="testimonials-image">
                                    <img className="customer3" src="/img/illustrations/customer3.3.png" alt="illustrations-img2" />
                                </div>
                                <div className="testimonials-box">
                                    <div className="testimonials-icons">
                                        <svg width={65} height={64} viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M31.7523 1.60818C32.0913 0.780012 33.2641 0.780011 33.6032 1.60818L39.9632 17.1432C40.1572 17.6172 40.6779 17.8679 41.1694 17.7241L57.2806 13.0106C58.1395 12.7593 58.8707 13.6763 58.4346 14.4577L50.2542 29.1161C50.0046 29.5633 50.1332 30.1267 50.5521 30.4214L64.2825 40.0788C65.0144 40.5936 64.7535 41.737 63.8706 41.8833L47.3098 44.6269C46.8046 44.7106 46.4442 45.1625 46.4751 45.6737L47.4853 62.4298C47.5392 63.323 46.4825 63.8319 45.8177 63.2328L33.3471 51.9957C32.9667 51.6529 32.3888 51.6529 32.0083 51.9957L19.5378 63.2328C18.873 63.8319 17.8163 63.323 17.8702 62.4298L18.8804 45.6737C18.9112 45.1625 18.5509 44.7106 18.0457 44.6269L1.48487 41.8833C0.602023 41.737 0.341049 40.5936 1.07301 40.0788L14.8033 30.4214C15.2222 30.1267 15.3508 29.5633 15.1013 29.1161L6.92085 14.4577C6.48475 13.6763 7.21598 12.7593 8.07486 13.0106L24.1861 17.7241C24.6776 17.8679 25.1983 17.6172 25.3923 17.1432L31.7523 1.60818Z" fill="#3AAAA6" />
                                        </svg>
                                        <i className="fa-solid fa-check" />
                                        <p><span className="font-bold2">100%</span></p>
                                        <p className="text-lg">verified</p>
                                    </div>
                                </div>
                            </div>
                            {/* <img src="/img/illustrations/customer3.3.png" alt=""> */}
                        </div>
                    </div>
                    <div className="testimonials-content" data-aos="zoom-out-left">
                        <h2>What Our Customer Say About Us.</h2>
                        <p className="text-sm testimonials-text">perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque
                            laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.
                        </p>
                        <div className="testimonials-icon">
                            <span className="font-bold2 text-xl">Park Taeyang</span>
                            <div className="icons-item">
                                <i className="fa-solid fa-star icon-items" />
                                <i className="fa-solid fa-star icon-items" />
                                <i className="fa-solid fa-star icon-items" />
                                <i className="fa-solid fa-star icon-items" />
                                <i className="fa-solid fa-star icon-items" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

