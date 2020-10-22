import React from 'react';

export const VideoInfo = ({video}) => {
    const Image = video.snippet.thumbnails.high.url
    const Title = video.snippet.title

    return (
        <div >
            <img src={Image}/>
            <p>{Title}</p>
        </div>
    )
}