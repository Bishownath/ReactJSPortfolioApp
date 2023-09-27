import React from 'react'
import "./styles.scss"
import MenuIcon from '@mui/icons-material/Menu';
import Person from '@mui/icons-material/Person';
import Mail from '@mui/icons-material/Mail';
import CloseIcon from '@mui/icons-material/Close';

export default function Topbar({ openNav, setOpenNav }) {
    return (
        <div className={'topBar ' + (openNav && 'active')}>
            <div className="wrapper">
                <a href="#intro">
                    <h1 className={'logo ' + (openNav && "active")}>
                        SB
                    </h1>
                </a>
                <div className={"left " + (openNav && "active")}>
                    <div className="contactInformation">
                        <Person />
                        <span> <a href="tel:+">+1 (226) 984 7078</a></span>
                        <Mail />
                        <span> <a href="mailto:bishowd239@gmail.com">bishowd239@gmail.com</a></span>
                    </div>
                </div>
                <div className="right">
                    {openNav && <CloseIcon className={'menuIcon ' + (openNav && 'active')} onClick={() => setOpenNav(!openNav)} />}
                    {!openNav && <MenuIcon className={'menuIcon '} onClick={() => setOpenNav(!openNav)} />}

                </div>
            </div>
        </div>
    )
}
