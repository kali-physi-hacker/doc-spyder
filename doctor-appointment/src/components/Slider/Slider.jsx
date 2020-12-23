import React from "react";

import Slider from "react-slick";

// Images Here
import speciality1 from '../../assets/img/specialities/specialities-01.png'
import speciality2 from '../../assets/img/specialities/specialities-02.png'
import speciality3 from '../../assets/img/specialities/specialities-03.png'
import speciality4 from '../../assets/img/specialities/specialities-04.png'
import speciality5 from '../../assets/img/specialities/specialities-05.png'


const Slide = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
    }
    return (
        <Slider className={"specialities-slider slider"} {...settings}>

            <div className="speicality-item text-center">
                <div className="speicality-img">
                    <img src={speciality1} className="img-fluid"
                         alt="Speciality"/>
                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                </div>
                <p>Urology</p>
            </div>

            <div className="speicality-item text-center">
                <div className="speicality-img">
                    <img src={speciality2} className="img-fluid"
                         alt="Speciality"/>
                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                </div>
                <p>Neurology</p>
            </div>

            <div className="speicality-item text-center">
                <div className="speicality-img">
                    <img src={speciality3} className="img-fluid"
                         alt="Speciality"/>
                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                </div>
                <p>Orthopedic</p>
            </div>

            <div className="speicality-item text-center">
                <div className="speicality-img">
                    <img src={speciality4} className="img-fluid"
                         alt="Speciality"/>
                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                </div>
                <p>Cardiologist</p>
            </div>

            <div className="speicality-item text-center">
                <div className="speicality-img">
                    <img src={speciality5} className="img-fluid"
                         alt="Speciality"/>
                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                </div>
                <p>Dentist</p>
            </div>
            <div className="speicality-item text-center">
                <div className="speicality-img">
                    <img src={speciality5} className="img-fluid"
                         alt="Speciality"/>
                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                </div>
                <p>Dentist</p>
            </div>
            <div className="speicality-item text-center">
                <div className="speicality-img">
                    <img src={speciality5} className="img-fluid"
                         alt="Speciality"/>
                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                </div>
                <p>Dentist</p>
            </div>
            <div className="speicality-item text-center">
                <div className="speicality-img">
                    <img src={speciality5} className="img-fluid"
                         alt="Speciality"/>
                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                </div>
                <p>Dentist</p>
            </div>

        </Slider>
    )
}


export default Slide