import React from 'react';
import Slider from 'react-slick'

import FeatureImage1 from '../../assets/img/features/feature-01.jpg';
import FeatureImage2 from '../../assets/img/features/feature-02.jpg';
import FeatureImage3 from '../../assets/img/features/feature-03.jpg';
import FeatureImage4 from '../../assets/img/features/feature-04.jpg';
import FeatureImage5 from '../../assets/img/features/feature-05.jpg';
import FeatureImage6 from '../../assets/img/features/feature-06.jpg';
import feature from '../../assets/img/features/feature.png';

const FeatureItem = (props) => {
    return (
        <div className="feature-item text-center">
            <img src={props.image} className="img-fluid" alt="Feature"/>
            <p>{props.name}</p>
        </div>
    )
}


const FeatureSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    }
    return (
        <Slider {...settings} className={"feature-slider slider"}>
            <FeatureItem image={FeatureImage1} name={"Patient Word"}/>
            <FeatureItem image={FeatureImage2} name={"Test Room"}/>
            <FeatureItem image={FeatureImage3} name={"ICU"}/>
            <FeatureItem image={FeatureImage4} name={"Laboratory"}/>
            <FeatureItem image={FeatureImage5} name={"Operation"}/>
            <FeatureItem image={FeatureImage6} name={"Medical"}/>
        </Slider>
    )
}
const AvailableFeature = () => {

    return (
        <div>
            <section className="section section-features">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 features-img">
                            <img src={feature} className="img-fluid" alt="Feature"/>
                        </div>
                        <div className="col-md-7">
                            <div className="section-header">
                                <h2 className="mt-2">Availabe Features in Our Clinic</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout. </p>
                            </div>
                            <FeatureSlider/>
                        </div>
                    </div>
                </div>
            </section>
            <Slider/>
        </div>
    );
}

export default AvailableFeature;