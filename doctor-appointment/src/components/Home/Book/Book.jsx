import React from "react";

import Slider from 'react-slick'

import doctorImage1 from '../../../assets/img/doctors/doctor-01.jpg' ;
import doctorImage2 from '../../../assets/img/doctors/doctor-02.jpg' ;
import doctorImage3 from '../../../assets/img/doctors/doctor-03.jpg' ;
import doctorImage4 from '../../../assets/img/doctors/doctor-04.jpg' ;
import doctorImage5 from '../../../assets/img/doctors/doctor-05.jpg' ;
import doctorImage6 from '../../../assets/img/doctors/doctor-06.jpg' ;
import doctorImage7 from '../../../assets/img/doctors/doctor-07.jpg' ;
import doctorImage8 from '../../../assets/img/doctors/doctor-08.jpg' ;


const BookItem = (props) => {
    return (
        <div className="profile-widget">
            <div className="doc-img">
                <a href="doctor-profile.html">
                    <img className="img-fluid" alt="User Image"
                         src={props.image}/>
                </a>
                <a href="#" className="fav-btn">
                    <i className="far fa-bookmark"></i>
                </a>
            </div>
            <div className="pro-content">
                <h3 className="title">
                    <a href="doctor-profile.html">{props.name}</a>
                    <i className="fas fa-check-circle verified"></i>
                </h3>
                <p className="speciality">{props.speciality}</p>
                <div className="rating">
                    <i className="fas fa-star filled"/>
                    <i className="fas fa-star filled"/>
                    <i className="fas fa-star filled"/>
                    <i className="fas fa-star filled"/>
                    <i className="fas fa-star filled"/>
                    <span className="d-inline-block average-rating">{props.rating}</span>
                </div>
                <ul className="available-info">
                    <li>
                        <i className="fas fa-map-marker-alt"/> {props.place}
                    </li>
                    <li>
                        <i className="far fa-clock"/> {props.availability}
                    </li>
                    <li>
                        <i className="far fa-money-bill-alt"/> {props.price}
                        <i className="fas fa-info-circle" data-toggle="tooltip"
                           title="Lorem Ipsum"/>
                    </li>
                </ul>
                <div className="row row-sm">
                    <div className="col-6">
                        <a href="doctor-profile.html" className="btn view-btn">View Profile</a>
                    </div>
                    <div className="col-6">
                        <a href="booking.html" className="btn book-btn">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


const BookSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true
    }

    return (
        <Slider {...settings} className="doctor-slider slider">

            {/*Doctor Widget */}

            <BookItem name={"Ruby Perrin"} speciality={"MDS - Periodontology and Oral Implantology, BDS"}
                      place={"Florida, USA"} image={doctorImage1} price={"300$ - 1000$"}
                      availability={"Available on Fri, 22 Mar"}/>
            <BookItem name={"Darren Elder"} speciality={"BDS, MDS - Oral & Maxillofacial Surgery"}
                      place={"Newyork, USA"} image={doctorImage2} price={"50$ - 300$"}
                      availability={"Available on Fri, 22 Mar"}/>
            <BookItem name={"Deborah Angel"} speciality={"MBBS, MD - General Medicine, DNB - Cardiology"}
                      place={"Georgia, USA"} image={doctorImage3} price={"100$ - 400$"}
                      availability={"Available on Fri, 22 Mar"}/>
            <BookItem name={"Sofia Brient"} speciality={"MBBS, MS - General Surgery, MCh - Urology"}
                      place={"Louisiana, USA"} image={doctorImage4} price={"150$ - 300$"} availability={"Fri, 22 Mar"}/>
            <BookItem name={"Marvin Campbell"} speciality={"MBBS, MD - Ophthalmology, DNB - Ophthalmology"}
                      place={"Michigan, USA"} image={doctorImage5} price={"50$ - 700$"} availability={"Fri, 22 Mar"}/>
            <BookItem name={"Katharine Berthold"} speciality={"MS - Orthopaedics, MBBS, M.Ch - Orthopaedics"}
                      place={"Texas, USA"} image={doctorImage6} price={"100$ - 500$"} availability={"Fri, 22 Mar"}/>
            <BookItem name={"Linda Tobin"} speciality={"MBBS, MD - General Medicine, DM - Neurology"}
                      place={"Kansas, USA"} image={doctorImage7} price={"50$ - 700$"} availability={"Fri, 22 Mar"}/>
            <BookItem name={"Katharine Berthold"} speciality={"MS - Orthopaedics, MBBS, M.Ch - Orthopaedics"}
                      place={"Texas, USA"} image={doctorImage8} price={"100$ - 1000$"} availability={"Fri, 22 Mar"}/>
            <BookItem name={"Paul Richard"} speciality={"MBBS, MD - Dermatology , Venereology & Lepros"}
                      place={"California, USA"} image={doctorImage7} price={"100$ - 400$"}
                      availability={"Fri, 22 Mar"}/>

        </Slider>
    )
}

const Book = () => {
    return (
        <section className="section section-doctor">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="section-header ">
                            <h2>Book Our Doctor</h2>
                            <p>Lorem Ipsum is simply dummy text </p>
                        </div>
                        <div className="about-content">
                            <p>It is a long established fact that a reader will be distracted by the readable content of
                                a page when looking at its layout. The point of using Lorem Ipsum.</p>
                            <p>web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
                                ipsum' will uncover many web sites still in their infancy. Various versions have evolved
                                over the years, sometimes</p>
                            <a href="javascript:;">Read More..</a>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <BookSlider/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Book;