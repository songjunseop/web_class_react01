// { useEffect, useState } == react hook을 사용하겠다고선언
import React, { useEffect, useState } from 'react' 
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import YoutubeList from "../includes/YoutubeList";
import YoutubeSearch from "../includes/YoutubeSearch";
import { gsap } from "gsap";
import Loading from '../basics/Loading';

// npm i dotenv 환경변수 설치
// require('dotenv').config()

function Youtube() {

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
            gsap.to(".youtube__search", {
                duration: 0.7,
                y: 0,
                opacity: 1,
                delay: 1.5,
                ease: "Power4.out"
            })
            gsap.to(".youtube__list", {
                duration: 0.7,
                y: 0,
                opacity: 1,
                delay: 1.5,
                ease: "Power4.out"
            })
        }, 10)
    }
    
    
    // 변수 --> 
    const [videos, setVideos] = useState([])

    const search = (query) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${query}&key=${process.env.REACT_APP_YOUTUBE_API}&type=video`, requestOptions)
        // fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${query}&key=AIzaSyBCZ1dZYcn9rNZshdqQTtK8ftLKBg1zsC4&type=video`, requestOptions)
        // fetch의 값을 json파일로 가져옴
        .then(response => response.json())
        // json파일의 결과
        .then(result => setVideos(result.items))
        .catch(error => console.log('error', error));
        
    }

    // react hook
    useEffect(() => {

        var requestOptions = {
        method: 'GET',
        redirect: 'follow'
        };

        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=%EB%A9%9C%EB%A1%A0&key=${process.env.REACT_APP_YOUTUBE_API}&type=video`, requestOptions)
        // fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=%EB%A9%9C%EB%A1%A0&key=AIzaSyBCZ1dZYcn9rNZshdqQTtK8ftLKBg1zsC4&type=video`, requestOptions)
        // fetch의 값을 json파일로 가져옴
        .then(response => response.json())
        // json파일의 결과
        .then(result => {
            setVideos(result.items) 
            mainAnimation();
        })
        .catch(error => console.log('error', error));
    }, []);

    console.log(videos)
  return (
    <>
        <Loading />
        <Header />
        <Contents>
            <Title title={["youtube", "reference"]} />
            <section className='youtube__cont'>
                <div className="container">
                    <div className="youtube__inner">
                        <YoutubeSearch onSearch = {search} />
                        <YoutubeList videos = {videos} />
                    </div>
                </div>
            </section>
            <Contact />
        </Contents>
        <Footer />
    </>
  )
}

export default Youtube