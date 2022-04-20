import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import ReferCont from "../includes/ReferCont";

function Reference(){
    return (
        <>
        {/* <Header color = {"light"} /> */}
        <Header />
            <Contents>
                <Title title = {["REFERENCE", "BOOK"]}/>
                {/* <ReferCont color = {"light"} /> */}
                <ReferCont />
                <Contact />
            </Contents>
            {/* <Footer color = {"light"} /> */}
            <Footer />
        </>
    )
}

export default Reference;