// import React from 'react'
// import Header from "../layout/Header";
// import Footer from "../layout/Footer";
// import Contents from "../layout/Contents";
// import { gsap } from "gsap";

// class ReferDetail extends React.Component {
//     componentDidMount(){
//         document.querySelector("body").style.background = "#f0eeeb";
//         this.mainAnimation();
//     }

//     mainAnimation = () => {
//         gsap.to("#header", {
//             duration: 0.4,
//             top:0,
//         });
//         gsap.to("#footer", {
//             duration: 0.4,
//             bottom:0,
//         });
//         gsap.to(".refer__inner", {
//             duration: 0.5,
//             y: 0,
//             opacity: 1,
//             delay: 1.6,
//             ease: "Power4.out"
//         });
//     }

//     render(){
//         return (
//             <>
//                 <Header color="light" />
//                 <Contents>
//                 <section className="refer__cont">
//                     <div className="container">
//                         <div className="refer__inner"></div>
//                     </div>
//                 </section>
//                 </Contents>
//                 <Footer color="light" />
//             </>
//         )
//     }
// }

// export default ReferDetail

import React from 'react';
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import { gsap } from "gsap";

// function ReferDetail(props) {
//     console.log(props)
//   return (
//     <div>ReferDetail</div>
//   )
// }

class ReferDetail extends React.Component {
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined) {
            history.push("/reference");
        }

        this.mainAnimation();
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
        }, 10)
    }

    render(){

        const {location} = this.props;
        console.log(location.state);

        if(location.state === undefined){
            return <div>잘못된 페이지입니다.</div>
        } else {

            return (
                <>
                    <Header color="light" />
                    <Contents>
                    <section className="refer__cont">
                        <div className="container">
                            <div className="refer__inner">
                                <div className="refer__table">
                                    <h3>{location.state.title}</h3>
                                    <p>{location.state.desc}</p>
                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th>특징</th>
                                                <th>설명</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>요소</th>
                                                <td>{location.state.element}</td>
                                            </tr>
                                            <tr>
                                                <th>닫는 태그</th>
                                                <td>{location.state.tag}</td>
                                            </tr>
                                            <tr>
                                                <th>버전</th>
                                                <td>{location.state.version}</td>
                                            </tr>
                                            <tr>
                                                <th>시각적 표현</th>
                                                <td>{location.state.view}</td>
                                            </tr>
                                            <tr>
                                                <th>사용성</th>
                                                <td>{location.state.use}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <h3 class='defin'>정의(Definition)</h3>
                                    <p class="defin__desc">{location.state.Definition}</p>
                                    <h3 class='acce'>접근성(Accessibility)</h3>
                                    <p>{location.state.Accessibility}</p>
                                    <h3 class='refersite'>참고 사이트(Reference)</h3>
                                    <ul class="refersite__list">
                                        <li><a href="{location.state.mdn}">MDN</a></li>
                                        <li><a href="{location.state.w3c}">W3C</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    </Contents>
                    <Footer color="light" />
                </>
            )

        }

    }
}

export default ReferDetail