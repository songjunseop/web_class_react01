import React from 'react'
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import { gsap } from "gsap";

class ReferDetail extends React.Component {
    componentDidMount(){
        document.querySelector("body").style.background = "#f0eeeb";
        this.mainAnimation();
    }

    mainAnimation = () => {
        gsap.to("#header", {
            duration: 0.4,
            top:0,
        });
        gsap.to("#footer", {
            duration: 0.4,
            bottom:0,
        });
        gsap.to(".refer__inner", {
            duration: 0.5,
            y: 0,
            opacity: 1,
            delay: 1.6,
            ease: "Power4.out"
        });
    }

    render(){
        return (
            <>
                <Header color="light" />
                <Contents>
                <section className="refer__cont">
                    <div className="container">
                        <div className="refer__inner"></div>
                    </div>
                </section>
                </Contents>
                <Footer color="light" />
            </>
        )
    }
}

export default ReferDetail