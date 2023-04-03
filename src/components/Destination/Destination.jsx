import "./Destination.css";

let btnDestination = [
    "Hot Deals",
    "Honeymoon",
    "Backpack",
    "South Asia",
    "Europe",
    "More"
]
let arrDestination = [
    {
        country: "France",
        rating: "4.5",
        review: "3.2K Review",
        description: 'Enjoy The Beauty Of Sea Beach In Etretat.',
        image: "/img/destination/sea1.png"
    },
    {
        country: "Germany",
        rating: "4.5",
        review: "3.2K Review",
        description: 'Enjoy The Beauty Sea Beach In Etretat.',
        image: "/img/destination/sea2.png"
    },
    {
        country: "Italy",
        rating: "4.5",
        review: "3.2K Review",
        description: 'Enjoy The Beauty Of Rifao Bridge in Italy.',
        image: "/img/destination/sea3.png"
    }
]
export default function Destination() {
    return (
        <section className="destination">
            <div className="container">
                <div className="destination-container">
                    <div className="destination-content">
                        <div className="destination-header">
                            <h2 className="destination-text" data-aos="zoom-out">Our Popular Destination</h2>
                            <div>
                                <p className=" text-md" data-aos="zoom-out-right">We Are must explain to you how all this
                                    mistaken idea of denouncing
                                    pleasure
                                    and praising
                                    pain
                                    and I will give you a complete.</p>
                            </div>
                        </div>
                        <div className="slider-action" data-aos="zoom-out-left">
                            <div className="slider-buttons">
                                <button className="slider-btn">
                                    <i className="icon icon-lg fa-solid fa-arrow-left" />
                                </button>
                                <button className="slider-btn">
                                    <i className="icon icon-lg fa-solid fa-arrow-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration={500}>
                        <div className="destination-btn">
                            {btnDestination.map((btn, i) => (
                                <button key={i} className="btn btn-outline btn-full font-bold text-sm">
                                    {btn}
                                </button>
                            ))
                            }
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration={1500}>
                        <div className="destination-img">
                            {arrDestination.map((item, i) => (
                                <div key={i} className="destination-img-content">
                                    <img src={item.image} alt="destination sea" />
                                    <div className="destination-icons">
                                        <div className="destination-icon">
                                            <div className="destination-icon-item ">
                                                <i className="fa-solid fa-location-dot icon-items " />
                                                <p className="test-sm font-medium">{item.country}</p>
                                            </div>
                                            <div className="destination-icon-item">
                                                <i className="fa-solid fa-star icon-items" />
                                                <p className="test-sm font-medium">{item.rating}<span>({item.review})</span></p>
                                            </div>
                                        </div>
                                        <div className="destination-header">
                                            <h5>{item.description}</h5>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}