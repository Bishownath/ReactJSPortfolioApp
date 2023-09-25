import React from 'react'
import "./styles.scss"

export default function Intro() {
    return (
        <div className='intro' id='intro'>
            <div className="wrapper">
                <div className="leftSection">
                    <div className="images">
                        <img src="assets/pickachu.png" alt="Soobas Picture" className='firstImage' />
                    </div>
                </div>
                <div className="rightSection">
                    <h1>Hi, I am</h1>
                    <h2>Soo Bas</h2>
                    <h3>I am a Software Developer</h3>
                </div>
            </div>
        </div>
    )
}
