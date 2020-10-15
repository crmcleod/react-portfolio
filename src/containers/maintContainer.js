import React, { useState } from 'react'
import CardContainer from './cardContainer'

const MainContainer = () => {

       const [profileActive, setProfileActove] = useState(true)
       if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        return(
            <h1 id="mobile-warning"> Under Construction <br></br>For Mobile Devices</h1>
        )
       } else {
    return(
        <>
        <div id="card-wrapper">
            <CardContainer  profileActive={ profileActive } />
        </div>
        </>
        )
    }
}
export default MainContainer