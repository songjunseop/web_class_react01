import React from 'react'
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import MovieCont from "../includes/MovieCont"
import axios from 'axios';
import Loading from "../basics/Loading";
import { gsap } from "gsap";

class Movie extends React.Component {
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

    getMoives = async () => {
        const lists = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=8b06fb071e6685e3dacb102957311047&query=avengers&type=video")
        
        this.setState({lists, isLoading: false});
        this.mainAnimation();
    }

    componentDidMount(){
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
            this.getMoives();
        }, 2000);
    }

    render() {

        const { isLoading, lists } = this.state;
        console.log(lists)
        return (
            <>
                { isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <Header />
                        <Contents>
                            <Title title={["The", "Movie"]} />
                            <MovieCont lists = {lists} />
                            <Contact />
                        </Contents>
                        <Footer />
                    </>
                )}
            </>
        )
    }

}

export default Movie