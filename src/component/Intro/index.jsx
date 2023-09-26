import React from 'react'
import "./styles.scss"
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

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
                    <h1 className='uppercase'>Bishownath Dhakal</h1>
                    <h3 className='h3'>A Software Developer by profession.</h3>
                    <a href="#work" className='arrowDown'><KeyboardDoubleArrowDownIcon className='arrowDown' /></a>
                </div>
            </div>
        </div>
    )
}
