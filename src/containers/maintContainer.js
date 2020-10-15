import React, { useState } from 'react'
import CardContainer from './cardContainer'

const MainContainer = () => {

    const [profileActive, setProfileActove] = useState(true)
    return(
        <>
        <div id="card-wrapper">
            <CardContainer  profileActive={ profileActive } />
        </div>
        </>
    )

}
export default MainContainer