import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import AboutCont from "../includes/AboutCont";

function About(){
    return (
        <>
            <Header color = {"light"} />
            {/* <Header /> */}
            <Contents>
                <Title title = {["About", "Me", "light"]} />
                <AboutCont color = {"light"} />
                {/* <AboutCont /> */}
                <Contact />
            </Contents>
            <Footer color = {"light"} />
            {/* <Footer /> */}
        </>
    )
}

export default About;