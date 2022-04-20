import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import MainCont from "../includes/MainCont";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
// import PortCont from "../includes/PortCont";

// function Main(){
//     return (
//         <>
//             {/* color="light" */}
//             <Header />
//             <Contents>
//                 <MainCont />
//             </Contents>
//             <Footer />
//         </>
//     )
// }

// class는 함수의 집합체
class Main extends React.Component {

    // 변수 만드는것 선언
    state = {
        isLoading: true,

    }
    getSite = () => {
        setTimeout(() => {
            gsap.to("#header", {
                duration: 0.4,
                top: 0,
            });
            gsap.to("#footer", {
                duration: 0.4,
                bottom: 0,
            })
            gsap.to(".main__inner > div:nth-child(1)", {
                duration: 0.8,
                opacity: 1,
                y: 0,
                delay: 0.8,
                ease: "bounce.out"
            })
            gsap.to(".main__inner > div:nth-child(2)", {
                duration: 0.8,
                opacity: 1,
                y: 0,
                delay: 1,
                ease: "bounce.out"
            })
            gsap.to(".main__inner > div:nth-child(3)", {
                duration: 0.8,
                opacity: 1,
                y: 0,
                delay: 1.2,
                ease: "expo.out"
            })
            gsap.to(".main__inner > div:nth-child(4)", {
                duration: 0.8,
                opacity: 1,
                y: 0,
                delay: 1.4,
                ease: "bounce.out"
            })
        }, 10)
    }

    mainAnimation = () => {
        gsap.set(".main__inner", {opacity: 0})
    }

    // 생명주기 - 사이트가 로딩이 다 됐을때(componentDidMount)
    componentDidMount(){
        setTimeout(() => {
            // 변수의 상태를 바꿀때(setState)
            this.setState({isLoading:false});
            this.getSite();
        }, 3000);
    }

    // 출력해주는 함수
    render(){
        // 클래스는 자기자신을 this로 칭함
        const {isLoading} = this.state;

        return (
            <>
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <Header />
                        <Contents>
                            <MainCont />
                        </Contents>
                        <Footer />
                    </>
                )}
            </>
        )
    }
}


export default Main;