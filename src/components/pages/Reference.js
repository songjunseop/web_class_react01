// import React from "react";
// import Header from "../layout/Header";
// import Contents from "../layout/Contents";
// import Footer from "../layout/Footer";
// import Title from "../layout/Title";
// import Contact from "../layout/Contact";
// import ReferCont from "../includes/ReferCont";
// import Loading from "../basics/Loading";
// import { gsap } from "gsap";
// import axios from "axios";
// // function Reference(){
// //     return (
// //         <>
// //             <Header color="light" />
// //             <Contents>
// //                 <Title title={["reference","book"]} color="light" />
// //                 <ReferCont color="light" />
// //                 <Contact />
// //             </Contents>
// //             <Footer color="light" />
// //         </>
// //     )
// // }
// class Reference extends React.Component {
//     state = {
//         isLoading: true,
//         refers: [],
//     }
//     mainAnimation = () => {
//         setTimeout(() => {
//             gsap.to("#header", {
//                 duration: 0.8,
//                 top: 0,
//             });
//             gsap.to("#footer", {
//                 duration: 0.8,
//                 bottom: 0,
//                 delay: 0.2,
//             });
//             gsap.to(".cont__title strong", {
//                 duration: 0.7,
//                 y: 0,
//                 opacity: 1,
//                 delay: 1.0,
//                 ease: "power4.out"
//             });
//             gsap.to(".cont__title em", {
//                 duration: 0.7,
//                 y: 0,
//                 opacity: 1,
//                 delay: 1.3,
//                 ease: "power4.out"
//             });
//             gsap.to(".refer__inner", {
//                 duration: 0.7,
//                 y: 0,
//                 opacity: 1,
//                 delay: 1.5,
//                 ease: "power4.out"
//             });
//         }, 10)
//     }
//     getSite = async () => {
//         const {
//             data: {
//                 data: {htmlRefer},
//             },
//         } = await axios.get("https://webstoryboy.github.io/react2022/src/assets/json/refer.json");
//         this.setState({refers: htmlRefer, isLoading: false})
//         this.mainAnimation();
//     }
//     componentDidMount(){
//         setTimeout(() => {
//             document.getElementById("loading").classList.remove("loading__active");
//             document.querySelector("body").style.background = "#F0EEEB";
//             this.getSite();
//         }, 2000);
//     }
//     render(){
//         const {isLoading, refers} = this.state;
//         return (
//             <>
//                 {isLoading ? (
//                     <Loading color="light" />
//                 ) : (
//                     <>
//                         <Header color="light" />
//                         <Contents>
//                             <Title title={["Reference","book", "light"]} />
//                             <ReferCont refers={refers} color="light" />
//                             <Contact />
//                         </Contents>
//                         <Footer color="light" />
//                     </>
//                 )}
//             </>
//         )
//     }
// }
// export default Reference;

import axios from "axios";
import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import ReferCont from "../includes/ReferCont";
import Loading from "../basics/Loading";
import { gsap } from "gsap";

class Reference extends React.Component {
    state = {
        isLoading: true,
        refers: [],
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
            // gsap.to(".refer__inner", {
            //     duration: 0.9,
            //     y: 0,
            //     opacity: 1,
            //     delay: 1.5,
            //     ease: "Power4.out"
            // })
        }, 10)
    }

    getRefers = async () => {
        const {
            data: {
                data : {htmlRefer}
            },
        } = await axios.get("https://webstoryboy.github.io/react2022/src/assets/json/refer.json")

        this.setState({refers: htmlRefer, isLoading: false})
        this.mainAnimation();
    }

    componentDidMount(){
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
            this.getRefers();
        }, 2000);
    }

    render(){
        const {isLoading, refers} = this.state;

        return(
            <>
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <Header />
                        <Contents>
                            <Title title={["Reference","book"]} />
                            {/* <ReferCont refers={refers} color="light" /> */}
                            <section className="refer__cont">
                                <div className="container">
                                    <div className="refer__inner">
                                        <h2>HTML</h2>
                                        <ul className="refer__list">
                                            {refers.map((refer) => (
                                                <ReferCont 
                                                    key={refer.id}
                                                    id={refer.id}
                                                    title={refer.title}
                                                    desc={refer.desc}
                                                    use={refer.use}

                                                    desc2={refer.desc2}
                                                    element={refer.element}
                                                    tag={refer.tag}
                                                    version={refer.version}
                                                    view={refer.view}
                                                    image={refer.image}
                                                    link={refer.link}
                                                    Definition={refer.Definition}
                                                    Accessibility={refer.Accessibility}
                                                    Related={refer.Related}
                                                    mdn={refer.mdn}
                                                    w3c={refer.w3c}
                                                />
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            <Contact />
                        </Contents>
                        <Footer />
                    </>
                )}
            </>
        )
    }
}


export default Reference;