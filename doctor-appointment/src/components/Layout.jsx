import React from 'react'

// My Components Here
import Footer from "./Footer";
import Header from "./Header";


const Layout = props => {
    return (
        <div className="main-wrapper">
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}


export default Layout