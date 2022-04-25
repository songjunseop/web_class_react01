import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import YoutubeCont from "../includes/YoutubeCont";
import YoutubeSearch from "../includes/YoutubeSearch";
// import YoutubeList from "../includes/YoutubeList";
import axios from "axios";
import Loading from "../basics/Loading";
import { gsap } from "gsap";

class Youtube extends React.Component {
    state = {
        isLoading: true,
        lists: [],
        searchs: []
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

    getYoutubes = async () => {
        const lists = await axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=30&q=%EB%A9%9C%EB%A1%A0&key=AIzaSyBCZ1dZYcn9rNZshdqQTtK8ftLKBg1zsC4");

        console.log(lists)
        this.setState({lists, isLoading: false});
        this.mainAnimation();
    }

    componentDidMount(){
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
            this.getYoutubes();
        }, 2000);
    }

    render() {

        const { isLoading, lists } = this.state;
        return (
            <>
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <Header />
                        <Contents>
                            <Title title={["Youtube", "Reference"]} />
                            <YoutubeSearch />
                            <YoutubeCont lists = {lists} />
                            <Contact />
                        </Contents>
                        <Footer />
                    </>
                )}
            </>
        )
    }
}

export default Youtube;