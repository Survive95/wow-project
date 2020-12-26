import React, { useEffect, useState } from 'react'
import white_logo from '../assets/white_logo.svg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useHistory
  } from "react-router-dom";

function Header() {

    const [header, setHeader] = useState(false)

    document.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            setHeader(true)
        }
        else {
            setHeader(false)
        }
    })
  

    return (
        <header className={header ? "header_app active" : "header_app"}>
            <div className="header_app-container">
                <Link className="header_link" to="/"><h1 className="header_title"><img className="logo_title" src={white_logo}></img></h1></Link>
                <nav className="header_nav">
                    <NavLink exact to="/">Accueil</NavLink>
                    <NavLink exact to="/characters">Nos personnages</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header