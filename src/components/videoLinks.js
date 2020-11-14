import React from 'react'

const VideoLinks = ({ videoActive, setVideographyActive, setProfileActive }) => {

    const handleClick = () =>{
        setVideographyActive(false)
        setProfileActive(true)
    }
    if(!videoActive){
        return null;
    }
    return(
            <>
            <div class="videos">
                <div id="vid-area">
                    <iframe id="table-chocolate" title="vimeo-player1" src="https://player.vimeo.com/video/276940472" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    <iframe id="table-pasta" title="vimeo-player2" src="https://player.vimeo.com/video/276904917" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    <iframe id="table-service" title="vimeo-player3" src="https://player.vimeo.com/video/276941029" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    <iframe id="record-day-montage" title="youtube1" width="640" height="360" src="https://www.youtube.com/embed/UBzGYQeMjA0" frameborder="0" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe id="rsd-scott" title="youtube2" width="640" height="360" src="https://www.youtube.com/embed/IkHqRD8osfs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; fullscreen; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe id="grilling-glasgow" title="youtube3" width="640" height="360" src="https://www.youtube.com/embed/S-50YxhB5_g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; fullscreen; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <h1 id="videography">VIDEOGRAPHY</h1>
            <h2 id="go-back" onClick={handleClick} > GO BACK! </h2>
        </>
    )
}
export default VideoLinks