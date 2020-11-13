import React from 'react'

const VideoLinks = () => {


    return(
        <>
        <div class="videos">
            <div id="box">
                <p id="iframe-text"> Promotional video for the Table, Edinburgh</p>
                <iframe id="table-chocolate" src="https://player.vimeo.com/video/276940472" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>
            <iframe id="table-pasta" title="vimeo-player" src="https://player.vimeo.com/video/276904917" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            <iframe id="table-service" title="vimeo-player" src="https://player.vimeo.com/video/276941029" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            <iframe id="record-day-montage" width="640" height="360" src="https://www.youtube.com/embed/UBzGYQeMjA0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe id="rsd-scott" width="640" height="360" src="https://www.youtube.com/embed/IkHqRD8osfs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe id="grilling-glasgow" width="640" height="360" src="https://www.youtube.com/embed/S-50YxhB5_g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </>
    )
}
export default VideoLinks