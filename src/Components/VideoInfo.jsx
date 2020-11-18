import React from 'react';
import "./VideoInfo.css"
import man from '../img/male-solid.svg'
import calendar from '../img/calendar-alt-regular.svg'



export const VideoInfo = ({video}) => {

    const Image = video.snippet.thumbnails.high.url
    const Title = video.snippet.title
    const Author = video.snippet.channelTitle
    const Description = video.snippet.description
    const VideoId =  video.id.videoId
    const date = video.snippet.publishedAt
    const PublishedAt = new Date(Date.parse(date)).toString().slice(4, 15);

    return (
        <div className={'all-info'}>
            <div className={'info'}>
                <div className={'container'}>
                    <div className={'first-info'}>
                        <img className={'first-img'} src={Image}/>
                        <div className={'link'}>
                        <a href={`https://www.youtube.com/watch?v=${VideoId}`} className={'video-title'}>{Title}</a>                        
                        </div>
                    </div>
                    <div className={'sec-info'}>
                            <img src={man} className={'man-img'}/><p className={'video-autor'}>{Author}</p>
                            <img src={calendar} className={'calendar-img'}/> <p className={'video-date'}>{PublishedAt}</p>
                            <p className={'video-descr'}>{Description}</p>
                    </div>
                </div>    
        </div>
        </div>
    )
}