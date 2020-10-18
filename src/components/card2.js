import React from 'react'

const Card2 = ({startTransitionChain}) => {
    return(
        <div id="project-grid">
            <div id="project-top-row">
                <a id="burger-container" href="https://condescending-kare-bb7195.netlify.app/" target="_blank">
                    <img id="burger-world" src={require("../containers/css/Screenshot 2020-07-29 at 20.48.15.jpg")}/>
                    <div class ="burger-text">
                        Burger World: 
                        <br/>
                        <p>My first ever foray into DOM manipulation. Focused on one of my favourite topics, burgers!</p>
                    </div>
                </a>
                <a id="imdb-container" href="https://seen-it-omdb.herokuapp.com/" target="_blank">
                    <img id="seen-it" src={require("../containers/css/Screenshot 2020-08-04 at 09.33.24.png")}/>
                    <div class ="imdb-text">
                        Seen-It: 
                        <br/>
                        <p>A simple Vue app for searching the oMDB API and 'favouriting' films</p>
                    </div>
                </a>
                <a id="codebreakers-container" href="https://github.com/crmcleod/CodeBreakers_game" target="_blank">
                    <img id="codebreakers" src={require("../containers/css/Screenshot 2020-07-29 at 21.10.03.png")}/>
                    <div class ="codebreakers-text">
                        CODEBREAKERS:
                    <br/>
                        <p>Codenames recreated as a browser game using Vue.js, Express and MongoDB.
                        </p>
                    </div>
                </a>
                
                <a id="pace-container" href="https://pace-vet-management-app.herokuapp.com/" target="_blank">
                    <img id="pace" src={require("../containers/css/Screenshot 2020-07-29 at 21.27.44.png")}/>
                    <div class ="pace-text">
                        PACE:
                    <br/>
                        <p>Veterinary practice management app made with Ruby, sinatra and postgreSQL.</p>
                    </div>
                </a>
            </div>
            <br/>
            <h1 id="projects-header">PROJECTS</h1>
            <br/>
            <div id="project-bottom-row">
                <a id="friendo-container"href="https://github.com/crmcleod/Friendo-Social-App" target="_blank">
                    <img id="friendo" src={require("../containers/css/friendotitle3.png")}/>
                    <div class="friendo-text">
                        Friendo:
                    <br/>
                    <p>A social media platform for finding friends. Made in React-Native, Express and postgreSQL.</p>

                    </div>
                </a>
                <a id="mh-container" href="https://github.com/crmcleod/Machine_Head_band_API" target="_blank">
                    <img id="mh" src={require("../containers/css/machine-head-1.jpg")}/>
                    <div class="mh-text">
                        Machine Head API:
                    <br/>
                        <p>An API for the band Machine Head made with Java / Spring Boot.</p>
        
                    </div>
                </a>
            </div>
          <h1 id="projexit" onClick={startTransitionChain}>[ EXIT ]</h1>
        </div>
    )
}

export default Card2