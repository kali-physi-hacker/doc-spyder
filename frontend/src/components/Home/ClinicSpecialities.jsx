import React from "react";

import Slider from "react-slick";

// Images Here
import speciality1 from '../../assets/img/specialities/specialities-01.png'
import speciality2 from '../../assets/img/specialities/specialities-02.png'
import speciality3 from '../../assets/img/specialities/specialities-03.png'
import speciality4 from '../../assets/img/specialities/specialities-04.png'
import speciality5 from '../../assets/img/specialities/specialities-05.png'


const SliderItem = props => {
    return (
        <div className="speicality-item text-center">
            <div className="speicality-img">
                <img src={props.image} className="img-fluid"
                     alt="Speciality"/>
                <span><i className="fa fa-circle" aria-hidden="true"></i></span>
            </div>
            <p>{props.name}</p>
        </div>
    )
}

const Slide = () => {

    const settings = {
        autoplay: false,
        prevArrow: false,
        nextArrow: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    }

    return (
        <Slider className={"specialities-slider slider"} {...settings}>

            <SliderItem name={"Urology"} image={speciality1}/>
            <SliderItem name={"Neurology"} image={speciality2}/>
            <SliderItem name={"Orthopedic"} image={speciality3}/>
            <SliderItem name={"Cardiologist"} image={speciality4}/>
            <SliderItem name={"Dentist"} image={speciality5}/>

            <SliderItem name={"Urology"} image={speciality1}/>
            <SliderItem name={"Neurology"} image={speciality2}/>
            <SliderItem name={"Orthopedic"} image={speciality3}/>
            <SliderItem name={"Cardiologist"} image={speciality4}/>
            <SliderItem name={"Dentist"} image={speciality5}/>

        </Slider>
    )
}


const ClinicSpecialities = () => {
    return (
        <section className="section section-specialities">
            <div className="container-fluid">
                <div className="section-header text-center">
                    <h2>Clinic and Specialities</h2>
                    <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-9">
                        <Slide/>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default ClinicSpecialities