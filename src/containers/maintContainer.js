import React, { useState } from 'react'
import VideoLinks from '../components/videoLinks'
import CardContainer from './cardContainer'

const MainContainer = () => {

       const [profileActive, setProfileActove] = useState(true)
    return(
        <>
        <div id="card-wrapper">
            <CardContainer  profileActive={ profileActive } />
            {/* <VideoLinks /> */}
        </div>
        </>
        )
}
export default MainContainer