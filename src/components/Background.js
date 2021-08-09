import React from 'react'
import Video from '../media/bg.mp4'

function Background() {
    return (
        <div id="bg">
            <video id="bgvideo" src={Video} autoPlay loop muted></video>
        </div>
    )
}

export default Background
