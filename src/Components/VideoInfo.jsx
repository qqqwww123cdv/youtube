import React from 'react';
import "./Video.css"
import man from '../img/male-solid.svg'

export const VideoInfo = ({video}) => {

    const Image = video.snippet.thumbnails.high.url
    const Title = video.snippet.title
    const Author = video.snippet.channelTitle
    const Description = video.snippet.description
    const VideoId =  video.id.videoId
    const PublishedAt = video.snippet.publishedAt

    return (
        <div className={'all-info'}>
            <div className={'info'}>
                <div className={'container'}>
                    <div className={'first-info'}>
                        <img src={Image}/>
                        <div className={'link'}>
                        <a href={`https://www.youtube.com/watch?v=${VideoId}`} className={'video-title'}>{Title}</a>                        </div>
                    </div>
                    <div className={'sec-info'}>
                        <img src={man} className={'man-img'}/><p className={'video-info'}>{Author}</p>
                        <p className={'video-info'}>{PublishedAt}</p>
                        <p>{Description}</p>
                    
                        
                    </div>
                </div>    
        </div>
        </div>
    )
}