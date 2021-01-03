
import React from 'react'
import '../assets/css/MemoryCard.css'

class MemoryCard extends React.Component {
        constructor( props) {
            super(props)
        }

        

        render() {
            return (
                <section className="memory-Game">
                    <div className="memory-card">
                        <img src="./img/Lion.jpg" alt="Lion" className="front-face"/>
                        <img src="./img/backface.jpg" alt="front face" className="back-face"/>
                    </div>
                    <div className="memory-card">
                        <img src="./img/elephent.jpg" alt="Elephent" className="front-face"/>
                        <img src="./img/backface.jpg" alt="front face" className="back-face"/>
                    </div>
                    <div className="memory-card">
                        <img src="./img/Pig.jpg" alt="Pig" className="front-face"/>
                        <img src="./img/backface.jpg" alt="front face" className="back-face"/>
                    </div>
                    <div className="memory-card">
                        <img src="./img/Rabbit.jpg" alt="Lion" className="front-face"/>
                        <img src="./img/backface.jpg" alt="front face" className="back-face"/>
                    </div>
                    <div className="memory-card">
                        <img src="./img/Snake.jpg" alt="Lion" className="front-face"/>
                        <img src="./img/backface.jpg" alt="front face" className="back-face"/>
                    </div>
                    <div className="memory-card">
                        <img src="./img/Urial.jpg" alt="Lion" className="front-face"/>
                        <img src="./img/backface.jpg" alt="front face" className="back-face"/>
                    </div>
                    <div className="memory-card">
                        <img src="./img/Lion.jpg" alt="Lion" className="front-face"/>
                        <img src="./img/backface.jpg" alt="front face" className="back-face"/>
                    </div>
                    <div className="memory-card">
                        <img src="./img/elephent.jpg" alt="Elephent" className="front-face"/>
                        <img src="./img/backface.jpg" alt="front face" className="back-face"/>
                    </div>
                    <div className="memory-card">
                        <img src="./img/Pig.jpg" alt="Pig" className="front-face"/>
                        <img src="./img/backface.jpg" alt="front face" className="back-face"/>
                    </div>
                    <div className="memory-card">
                        <img src="./img/Rabbit.jpg" alt="Lion" className="front-face"/>
                        <img src="./img/backface.jpg" alt="front face" className="back-face"/>
                    </div>
                    <div className="memory-card">
                        <img src="./img/Snake.jpg" alt="Lion" className="front-face"/>
                        <img src="./img/backface.jpg" alt="front face" className="back-face"/>
                    </div>
                    <div className="memory-card">
                        <img src="./img/Urial.jpg" alt="Lion" className="front-face"/>
                        <img src="./img/backface.jpg" alt="front face" className="back-face"/>
                    </div>                   
                </section>
            )
        }
}

 export default MemoryCard;