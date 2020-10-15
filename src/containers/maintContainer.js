import React, { useState } from 'react'
import CardContainer from './cardContainer'

const MainContainer = () => {

       const [profileActive, setProfileActove] = useState(true)
       if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        return(
            <h1> Under Construction For Mobile Device</h1>
        )
       } 
    return(
        <>
        <div id="card-wrapper">
            <CardContainer  profileActive={ profileActive } />
        </div>
        </>
    )

}
export default MainContainer