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


export default Slide