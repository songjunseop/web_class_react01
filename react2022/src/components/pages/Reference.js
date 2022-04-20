import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import ReferCont from "../includes/ReferCont";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
import axios from "axios";

// function Reference(){
//     return (
//         <>
//         {/* <Header color = {"light"} /> */}
//             <Header />
//             <Contents>
//                 <Title title = {["REFERENCE", "BOOK"]}/>
//                 {/* <ReferCont color = {"light"} /> */}
//                 <ReferCont />
//                 <Contact />
//             </Contents>
//             {/* <Footer color = {"light"} /> */}
//             <Footer />
//         </>
//     )
// }

class Reference extends React.Component {
    state = {
        isLoading: true,
        refers: [],
    }
    
    mainAnimation = () =>{
        setTimeout(() => {
            gsap.to("#header", {
                duration: 0.4,
                top:0,
            });
            gsap.to("#footer", {
                duration: 0.4,
                bottom:0,
            });
            gsap.to(".cont__title strong", {
                duration: 0.5,
                y: 0,
                opacity: 1,
                delay: 1.0,
                ease: "Power4.out"
            });
            gsap.to(".cont__title em", {
                duration: 0.7,
                y: 0,
                opacity: 1,
                delay: 1.3,
                ease: "Power4.out"
            })
            gsap.to(".refer__inner", {
                duration: 0.5,
                y: 0,
                opacity: 1,
                delay: 1.6,
                ease: "Power4.out"
            })
        }, 10)
    }
    getSite = async () => {
        const {
            data: {
                data : {refer}
            },
        } = await axios.get("https://songjunseop.github.io/web_class_react01/react2022/src/assets/json/reference.json");

        this.setState({refers: refer, isLoading: false})
        
        console.log(refer)
        this.mainAnimation();
    }

    componentDidMount(){
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
            document.querySelector("body").style.background = "#f0eeeb";
            this.getSite();
        }, 2000)
    }

    render(){
        const {isLoading, refers} = this.state;

        return (
            <>
                {isLoading ? (
                    <Loading color = {"light"}/>
                ) : (
                    <>
                        <Header color = {"light"} />
                        <Contents>
                            <Title title = {["REFERENCE", "BOOK", "light"]}/>
                            {/* <ReferCont color = {"light"} /> */}
                            <ReferCont refers = {refers} color = {"light"} />
                            <Contact />
                        </Contents>
                        {/* <Footer color = {"light"} /> */}
                        <Footer color = {"light"} />
                    </>
                )}
            </>
        )
    }
}

export default Reference; 