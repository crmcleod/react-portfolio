import React, {useState} from 'react'
import './css/card.css'
import cap from './css/capilano.JPG'
import prof from './css/profile1.jpg'
import Card1 from '../components/card1'
import Card2 from '../components/card2'

const CardContainer = ({profileActive}) => {

    const [cardPosition, setCardPosition] = useState(1)

    const restart = () => {
        document.getElementsByClassName('card')[0].style.animation = "float 3s infinite"
        document.getElementsByClassName('place-holder')[0].style = "initial"
    }

    const delayedScale = () => {
        document.getElementsByClassName('card')[0].style.transform = "scale(1)"
        document.getElementsByClassName('card')[0].style.filter = ""
        document.getElementsByClassName('card')[0].style.opacity = "1"
        document.getElementsByClassName('card')[0].style.animation = "initial"
        document.getElementsByClassName('card')[0].style.transitionDuration = "0.2s"
        document.getElementsByClassName('place-holder')[0].style.transitionDuration = "0.4s"
        document.getElementsByClassName('place-holder')[0].style.filter = "blur(10px)"
        document.getElementsByClassName('place-holder')[0].style.transform = "scale(1)"
        document.getElementsByClassName('place-holder')[0].style.zIndex= "-1"
        setTimeout(restart, 400)
    }

    const nextPosition = () => {
        document.getElementsByClassName('card')[0].style.transform = "scale(0.6)"
        document.getElementsByClassName('card')[0].style.opacity = "0"
        document.getElementsByClassName('card')[0].style.filter = "blur(20px)"
        document.getElementsByClassName('place-holder')[0].style.filter = "blur(10px)"
        document.getElementsByClassName('card')[0].style.transitionDuration = "0s"
        document.getElementsByClassName('place-holder')[0].style.transform = "scale(0.5)"
        document.getElementsByClassName('place-holder')[0].style.opacity = "0.5"
        document.getElementsByClassName('place-holder')[0].style.transitionDuration = "0s"
        
        setTimeout(delayedScale , 20)
        setCardPosition(cardPosition + 1)

        if(cardPosition === 1){
            document.getElementsByClassName('card')[0].style.backgroundImage = `url(${cap})`
        } else if (cardPosition === 2){
            document.getElementsByClassName('card')[0].style.backgroundImage = "none"
            document.getElementsByClassName('card')[0].style.backgroundColor = "rgb(94, 43, 160)"
        } else if (cardPosition === 3) {
            document.getElementsByClassName('card')[0].style.backgroundImage = `url(${prof})`
        }
    }

    function handleClick(){
        document.getElementsByClassName('card')[0].style.opacity = "0"
        document.getElementsByClassName('card')[0].style.transform = "scale(2)"
        document.getElementsByClassName('card')[0].style.transitionDuration = "1.2s"
        document.getElementsByClassName('place-holder')[0].style.opacity = "1"
        document.getElementsByClassName('place-holder')[0].style.transform = "scale(1)"
        document.getElementsByClassName('place-holder')[0].style.backgroundColor= "black"
        document.getElementsByClassName('place-holder')[0].style.zIndex= "-1"
        document.getElementsByClassName('place-holder')[0].style.transitionDuration = "3s"
        if(cardPosition === 1){
            document.getElementsByClassName('place-holder')[0].style.backgroundImage = `url(${cap})`
        } else if (cardPosition === 2){
            document.getElementsByClassName('place-holder')[0].style.backgroundColor = "rgb(94, 43, 160)"
        } else if (cardPosition === 3) {
            document.getElementsByClassName('place-holder')[0].style.backgroundImage = `url(${prof})`

            
        }

        setTimeout(nextPosition, 800)

    }

    function startTransitionChain(){
        document.getElementsByClassName('card')[0].style.animation = "none"
        setTimeout(handleClick, 10)
    }

    if (!profileActive){
        return null;
    }
    if(profileActive){
        if(cardPosition === 1){
    return (
            <>
                <div id="card-container">
                    <div className="card" >
                        <div className="homepage-items">
                            <h1 id="name"> Craig McLeod <br></br> Software Developer </h1>
                            <h1 id="enter-button" onClick={startTransitionChain}>[ ENTER ]</h1>
                                <div id="social-wrapper">
                                    <a href="https://www.linkedin.com/in/craig-r-mcleod/" target="_blank" id="linkedin" >
                                        <img alt="linkedin" src={require('./css/linkedin1.svg')}/>
                                    </a>
                                    <a href="https://github.com/crmcleod" target="_blank" id="github">
                                        <img alt="github"  src={require('./css/logo.svg')}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    <div className="place-holder"></div>
                </div>
            </>
            )
        } else if (cardPosition === 2){
            return (
                <>
                <div id="card-container">
                    <div className="card" onClick={startTransitionChain}>
                       <Card1 />
                    </div>
                    <div className="place-holder"></div>

                </div>
            </>
            )
        } 
        else if (cardPosition === 3){
            return (
                <>
                <div id="card-container">
                    <div className="card" >
                        <Card2 startTransitionChain={startTransitionChain}/>
                    </div>
                    <div className="place-holder"></div>

                </div>
            </>
            )
        } 
        else {
            setCardPosition(1)
        }
    }
        
}
export default CardContainer