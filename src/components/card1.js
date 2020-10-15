import React from 'react'

const Card1 = ({startTransitionChain}) => {
    return (
        <div className="text-drop">
            <h1 className="about-me">About me</h1>
                <div className="about-info">
                    <h2>
                        Education:
                    </h2>
                        <p>2009: University of Aberdeen - BSc Neuroscience and Psychology</p>
                        <p>2020: CodeClan - PDA in Software Development, SQCF Level 8</p>

                    <h2>
                        Work:
                    </h2>
                        <p>2010-2020: PureMalt Products | Laboratory Supervisor/Analyst</p>
                    <h2>
                        About me:
                    </h2>
                        <p>
                            A scientist in a former life, I was finding myself working on more and more computer based problems,
                            getting into coding in my free time and realising that, actually, I was really enjoying it. I took a leap of faith
                            early in 2020 and signed up for the CodeClan software development course. It ended up being a completely remote learning
                            environment and so I spent the next 4 months locked away in my spare room learning and loving coding.
                        </p>
                        <h2>
                            Am I a robot?
                        </h2>
                        <p>
                            Of course not! What really makes my world go round are my wife, and my cat, Sherry. I also play guitar, bass, piano, 
                            banjo, ukulele and drums, I am a keen gym-goer, I dabble in graphic design, photography and film-making too. 
                            
                        </p>
                </div>
                <img id="sherry" alt="sherry" src={require('../containers/css/Sherry.png')} />
        </div>
    )
}
export default Card1