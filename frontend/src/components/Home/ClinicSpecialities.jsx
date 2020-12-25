import React from "react";
import Slide from "../Slider/Slider";


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