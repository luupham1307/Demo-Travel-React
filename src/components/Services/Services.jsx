import "./Services.css";

export default function Services() {
    return (
        <section className="services">
            <div className="container">
                <div className="services-container">
                    <h2 className="services-text" data-aos="zoom-in-right">Our Services</h2>
                    <div className="service-contents">
                        {/* box 1 */}
                        <div className="services-content" data-aos="fade-right">
                            <div className="services-icons">
                                <svg width={45} height={40} viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.6816 0.0507812H24.561C25.9105 0.0507812 27.0007 1.14102 27.0007 2.49048V7.36987C27.0007 8.71933 25.9105 9.80957 24.561 9.80957H19.6816C18.3322 9.80957 17.2419 8.71933 17.2419 7.36987V2.49048C17.2419 1.14102 18.3322 0.0507812 19.6816 0.0507812ZM5.04346 4.93018H14.8022V8.58972C14.8022 10.6101 16.4414 12.2493 18.4618 12.2493H25.7809C27.8013 12.2493 29.4404 10.6101 29.4404 8.58972V4.93018H39.1992C41.8905 4.93018 44.0786 7.11828 44.0786 9.80957V34.2065C44.0786 36.8978 41.8905 39.0859 39.1992 39.0859H5.04346C2.35217 39.0859 0.164062 36.8978 0.164062 34.2065V9.80957C0.164062 7.11828 2.35217 4.93018 5.04346 4.93018ZM13.5824 33.3908C13.5824 33.8406 13.9484 34.2065 14.3982 34.2065H29.8445C30.2943 34.2065 30.6603 33.8406 30.6603 33.3908C30.6603 31.1417 28.8381 29.3271 26.5967 29.3271H17.646C15.3969 29.3271 13.5824 31.1493 13.5824 33.3908ZM22.1213 26.8875C24.8126 26.8875 27.0007 24.6993 27.0007 22.0081C27.0007 19.3168 24.8126 17.1287 22.1213 17.1287C19.43 17.1287 17.2419 19.3168 17.2419 22.0081C17.2419 24.6993 19.43 26.8875 22.1213 26.8875Z" fill="#FD5056" />
                                </svg>
                            </div>
                            <div className="services-header">
                                <h5 className="font-bold2">Hotel Booking</h5>
                                <div className="services-inf">
                                    <p className=" text-md">You Can esay Book Your acroding to your budgly hotel by Our Website
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* box 2 */}
                        <div className="services-content box" data-aos="fade-up">
                            <div className="services-icons">
                                <svg width={45} height={45} viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 1.94336H2.875V39.0684H18.4813C17.275 36.9791 16.6397 34.6093 16.6391 32.1969C16.6385 29.7844 17.2726 27.4143 18.4777 25.3245C19.6829 23.2346 21.4166 21.4986 23.5049 20.2908C25.5932 19.083 27.9626 18.4458 30.375 18.4434V14.3184H18V1.94336Z" fill="#FD5056" />
                                    <path d="M20.75 3.31836V11.5684H29L20.75 3.31836Z" fill="#FD5056" />
                                    <path d="M30.375 21.1934C28.1994 21.1934 26.0727 21.8385 24.2637 23.0472C22.4548 24.2559 21.0449 25.9739 20.2123 27.9838C19.3798 29.9938 19.1619 32.2056 19.5864 34.3394C20.0108 36.4731 21.0584 38.4332 22.5968 39.9715C24.1352 41.5099 26.0952 42.5576 28.229 42.982C30.3628 43.4064 32.5745 43.1886 34.5845 42.356C36.5945 41.5235 38.3125 40.1136 39.5212 38.3046C40.7299 36.4957 41.375 34.369 41.375 32.1934C41.375 29.276 40.2161 26.4781 38.1532 24.4152C36.0903 22.3523 33.2924 21.1934 30.375 21.1934V21.1934ZM35.4625 31.7809C35.2055 32.0328 34.8599 32.1739 34.5 32.1739C34.1401 32.1739 33.7945 32.0328 33.5375 31.7809L31.75 29.9934V37.6934C31.75 38.058 31.6051 38.4078 31.3473 38.6656C31.0894 38.9235 30.7397 39.0684 30.375 39.0684C30.0103 39.0684 29.6606 38.9235 29.4027 38.6656C29.1449 38.4078 29 38.058 29 37.6934V29.9934L27.2125 31.7809C26.9477 31.9794 26.6202 32.0759 26.29 32.0524C25.9599 32.0289 25.6493 31.8872 25.4152 31.6531C25.1812 31.4191 25.0394 31.1085 25.016 30.7783C24.9925 30.4482 25.0889 30.1206 25.2875 29.8559L30.375 24.7684L35.4625 29.8559C35.7144 30.1129 35.8556 30.4584 35.8556 30.8184C35.8556 31.1783 35.7144 31.5238 35.4625 31.7809V31.7809Z" fill="#FD5056" />
                                </svg>
                            </div>
                            <div className="services-header">
                                <h5 className="font-bold2">Triket Booking</h5>
                                <div className="services-inf">
                                    <p className=" text-md box">We booked All kind of national or international Flight
                                        ,Bus,trin,Triket .</p>
                                </div>
                            </div>
                        </div>
                        {/* box3 */}
                        <div className="services-content" data-aos="fade-left">
                            <div className="services-icons">
                                <svg width={43} height={43} viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_1_199" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x={0} y={0} width={43} height={43}>
                                        <path d="M2.125 16.5684H40.125V38.5684C40.125 39.0988 39.9143 39.6075 39.5392 39.9826C39.1641 40.3576 38.6554 40.5684 38.125 40.5684H4.125C3.59457 40.5684 3.08586 40.3576 2.71079 39.9826C2.33571 39.6075 2.125 39.0988 2.125 38.5684V16.5684Z" fill="white" stroke="white" strokeWidth={4} strokeLinejoin="round" />
                                        <path d="M2.125 7.56836C2.125 7.03793 2.33571 6.52922 2.71079 6.15415C3.08586 5.77907 3.59457 5.56836 4.125 5.56836H38.125C38.6554 5.56836 39.1641 5.77907 39.5392 6.15415C39.9143 6.52922 40.125 7.03793 40.125 7.56836V16.5684H2.125V7.56836Z" stroke="white" strokeWidth={4} strokeLinejoin="round" />
                                        <path d="M13.125 28.5684L19.125 34.5684L31.125 22.5684" stroke="black" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M13.125 2.56836V10.5684M29.125 2.56836V10.5684" stroke="white" strokeWidth={4} strokeLinecap="round" />
                                    </mask>
                                    <g mask="url(#mask0_1_199)">
                                        <path d="M-2.875 -2.43164H45.125V45.5684H-2.875V-2.43164Z" fill="#FD5056" />
                                    </g>
                                </svg>
                            </div>
                            <div className="services-header">
                                <h5 className="font-bold2">Tour Plan</h5>
                                <div className="services-inf">
                                    <p className=" text-md">We provide You The Best Best Place in world and best Services So
                                        far.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}