import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import ScriptCont from "../includes/ScriptCont";

function Script(){
    return (
        <>
        {/* <Header color = {"light"}  /> */}
        <Header />
            <Contents>
                <Title title={["SCRIPT", "javascript"]} />
                <ScriptCont />
                {/* <ScriptCont color = {"light"} /> */}
                <Contact />
            </Contents>
            {/* <Footer color = {"light"}  /> */}
            <Footer/>
        </>
    )
}

export default Script;