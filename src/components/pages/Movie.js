import React, { useEffect, useState } from 'react'
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import MovieSearch from "../includes/MovieSearch"
import MovieList from "../includes/MovieList"
import Loading from "../basics/Loading";
import { gsap } from "gsap";

// require('dotenv').config()

function Movie(){

    const [videos, setVideos] = useState([])

    function mainAnimation(){
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");

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
            gsap.to(".movie__search", {
                duration: 0.7,
                y: 0,
                opacity: 1,
                delay: 1.5,
                ease: "Power4.out"
            })
            gsap.to(".movie__list", {
                duration: 0.7,
                y: 0,
                opacity: 1,
                delay: 1.5,
                ease: "Power4.out"
            })
        }, 10)
    }


    const search = (query) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&query=${query}&type=video&maxResults=28`, requestOptions)
        //   fetch(`https://api.themoviedb.org/3/search/movie?api_key=8b06fb071e6685e3dacb102957311047&query=${query}&type=video&maxResults=28`, requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.results))
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&query=avengers&type=video&maxResults=28`, requestOptions)
        //   fetch(`https://api.themoviedb.org/3/search/movie?api_key=8b06fb071e6685e3dacb102957311047&query=avengers&type=video&maxResults=28`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setVideos(result.results)
                mainAnimation();
            })
            .catch(error => console.log('error', error));
    }, []);
    console.log("arr",videos)

    return (
        <>
            <Loading />
            <Header />
            <Contents>
                <Title title={["The", "Movie"]} />
                <section className='movie__cont'>
                    <div className="container">
                        <div className="movie__inner">
                            <MovieSearch onSearch = {search} />
                            <MovieList videos = {videos} />
                        </div>
                    </div>
                </section>
                <Contact />
            </Contents>
            <Footer />
        </>
    )
}

export default Movie