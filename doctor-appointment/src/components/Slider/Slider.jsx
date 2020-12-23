import React from "react";

import Slick from "./Slick";

// Images Here
import speciality1 from '../../assets/img/specialities/specialities-01.png'
import speciality2 from '../../assets/img/specialities/specialities-02.png'
import speciality3 from '../../assets/img/specialities/specialities-03.png'
import speciality4 from '../../assets/img/specialities/specialities-04.png'
import speciality5 from '../../assets/img/specialities/specialities-05.png'


const Slider = () => {
    return (
        <Slick className="specialities-slider slider">

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

        </Slick>
    )
}


export default Slider