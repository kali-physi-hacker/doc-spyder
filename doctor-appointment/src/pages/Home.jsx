import React from "react";

// Component Imports Here
import Banner from "../components/Home/Banner";
import ClinicSpecialities from "../components/Home/ClinicSpecialities";
import Book from "../components/Home/Book/Book";
import AvailableFeature from "../components/Home/AvailableFeature";


const Home = () => {
    return (
        <>
            <Banner/>
            <ClinicSpecialities/>
            <Book/>
            <AvailableFeature/>
        </>
    )
}


export default Home