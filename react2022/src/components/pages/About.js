import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import AboutCont from "../includes/AboutCont";
import Loading from "../basics/Loading";
import { gsap } from "gsap";

// function About(){
//     return (
//         <>
//             <Header color = {"light"} />
//             {/* <Header /> */}
//             <Contents>
//                 <Title title = {["About", "Me", "light"]} />
//                 <AboutCont color = {"light"} />
//                 {/* <AboutCont /> */}
//                 <Contact />
//             </Contents>
//             <Footer color = {"light"} />
//             {/* <Footer /> */}
//         </>
//     )
// }

class About extends React.Component {
    state = {
        isLoading: true,
    }

    mainAnimation = () => {
        setTimeout(() => {
            gsap.to("#header", {
                duration: 0.4,
                top: 0,
            });
            gsap.to("#footer", {
                duration: 0.4,
                bottom: 0,
            })
            gsap.to(".cont__title strong", {
                duration: 0.5,
                y: 0,
                opacity: 1,
                delay: 1.0,
                ease: "Power4.out"
            })
            gsap.to(".cont__title em", {
                duration: 0.7,
                y: 0,
                opacity: 1,
                delay: 1.3,
                ease: "Power4.out"
            })
            gsap.to(".about__inner", {
                duration: 0.5,
                y: 0,
                opacity: 1,
                delay: 1.6,
                ease: "Power4.out"
            })
        }, 10)
    }
    getSite = () => {
        setTimeout(() => {
            this.setState({isLoading: false})
            this.mainAnimation()
        }, 1600)
    }
    
    componentDidMount(){
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
            document.querySelector("body").style.background = "#f0eeeb";
            this.getSite();
        }, 2000)
    }
    
    render(){
        const {isLoading} = this.state;

        return (
            <>
                {isLoading ? (
                    <Loading color = {"light"}/>
                ) : (
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
                )}
            </>
        )
    }
}


export default About;