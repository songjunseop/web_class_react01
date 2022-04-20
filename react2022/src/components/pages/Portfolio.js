import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import PortCont from "../includes/PortCont";
import Contact from "../layout/Contact";
import Title from "../layout/Title";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
import axios from "axios";

// function Portfolio(){
//     return (
//         <>
//             <Header />
//             <Contents>
//                 <Title title = {["Portfolio", "Site"]}/>
//                 <PortCont />
//                 <Contact />
//             </Contents>
//             <Footer />
//         </>
//     )
// }



class Portfolio extends React.Component {
    state = {
        isLoading: true,

        // 변수 저장
        ports: [],
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
            gsap.to(".port__inner", {
                duration: 0.5,
                y: 0,
                opacity: 1,
                delay: 1.6,
                ease: "Power4.out"
            })
        }, 10)
    }

    // 사이트 화면 실행
    getPorts = async () => {
        // async, await 를 사용하면 비동기 방식으로 다운로드가 다되면 로딩이 완료됨 ({data : {data : {ports}}} = data -> data -> ports만 불러오겠다)
        const {data : {data : {ports}}} = await axios.get("https://webstoryboy.github.io/dothome1/portfolio.json");
        // 위에있는 ports변수에 data -> data -> ports를 저장
        this.setState({ports : ports});

        // console.log(ports)

        setTimeout(() => {
            console.log("두번째 시작")
            this.setState({isLoading: false})
            this.mainAnimation()
        }, 1600)        
    }

    // 로딩 화면 실행
    componentDidMount() {
        setTimeout(() => {
            console.log("첫번째 시작")
            document.getElementById("loading").classList.remove("loading__active");
            document.querySelector("body").style.background = "#f0eeeb";
            this.getPorts();
        }, 2000)
    }
    
    // 화면 출력
    render(){
        const {isLoading, ports} = this.state;

        console.log(ports)
        return (
            <>
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <Header />
                        <Contents>
                            <Title title = {["Portfolio", "Site"]}/>
                            <PortCont ports = {ports} />
                            <Contact />
                        </Contents>
                        <Footer />
                    </>
                )}
            </>
        )
    }
}

export default Portfolio;