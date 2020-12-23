import React from "react";

// Component Imports Here
import Banner from "../components/Home/Banner";
import ClinicSpecialities from "../components/Home/ClinicSpecialities";
import BookingSection from "../components/Home/Book";
import AvailableFeature from "../components/Home/AvailableFeature";


const Home = () => {
    return (
        <>
            <Banner/>
            <ClinicSpecialities/>
            <BookingSection/>
            <AvailableFeature/>
        </>
    )
}


export default Home