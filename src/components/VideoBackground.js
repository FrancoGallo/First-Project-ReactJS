import './VideoBackground.css';
import React from 'react';
import Video from './video/background.mp4';

function VideoBackground() {
    return (
        <video src={Video} autoPlay loop muted/>
    )
}

export default VideoBackground
