import React from 'react';
import Video from './video/background.mp4';
import './VideoBackground.css';

function VideoBackground() {
    return (
        <video src={Video} autoPlay loop muted/>
    )
}

export default VideoBackground
