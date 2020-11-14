import React, { useState } from 'react'
import VideoLinks from '../components/videoLinks'
import CardContainer from './cardContainer'

const MainContainer = () => {

    const [ profileActive, setProfileActive ] = useState(true)
    const [ videographyActive, setVideographyActive ] = useState(false)
    return(
        <>
        <div id="card-wrapper">
            <CardContainer setVideographyActive={setVideographyActive} setProfileActive={ setProfileActive } profileActive={ profileActive } />
            <VideoLinks setVideographyActive={setVideographyActive} setProfileActive={ setProfileActive }videoActive={ videographyActive } />
        </div>
        </>
        )
}
export default MainContainer