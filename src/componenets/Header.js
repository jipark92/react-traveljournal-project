import React from 'react'
import titleLogo from '../images/titlelogo.png'

export default function Header() {
    return (
        <header className="title">
            <img src={titleLogo} alt='icon' className="title-logo"/>
            <h1>My Travel Journal</h1>
        </header>
    )
}