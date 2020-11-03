import React from 'react';
import { Input, Button } from 'antd';
import { useState } from 'react';
import { VideoInfo} from "./VideoInfo";
import Slider from "react-slick";
import "./Video.css"

function SearchVideo () {
    const [Video, setVideo] = useState("");
    const [videos, setVideos] = useState([]);

    const handleClick = (e) => {
        getVideos(Video);
        setVideo(Video);
    };

    const getVideos = async (Video) => {
        const key = 'AIzaSyB7n_cvp5tzpReLD-lXJp5mgzPx-9X7mxc'
        let params = {
            part: 'snippet',    
            key: key,
            maxResults: '40',
            q: Video
        };
        var esc = encodeURIComponent;
        let query = Object.keys(params)
            .map(k => esc(k) + '=' + esc(params[k]))
            // .map(function(k) {return esc(k) + '=' + esc(params[k]);})
            .join('&');
        let url = 'https://www.googleapis.com/youtube/v3/search?' + query;
        const data = (await fetch(url))
            .json()
            .then((props) => {
                let videos = props.items
                setVideos([...videos])

            })
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
      };

    return (
        <>
        <div className={'video'}>
            <div >
                <Input value={Video} onChange={e => {setVideo(e.target.value);}}/>
                <Button onClick={handleClick}>Search video</Button>
            </div>
        </div>
        <Slider {...settings}>
        {videos.map(video => (
                    <VideoInfo video ={video} />
                ))}
        </Slider>

        <div className={'video_item'}>

        </div>
        </>
    )
}
export default SearchVideo;