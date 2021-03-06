import React from 'react';
import "./menu.css";

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"navMenu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#intro'>Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#about'>About</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#portfolio'>Portfolio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#resume'>Resume</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
    )
}
