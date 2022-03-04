import React from 'react';
import "./menu.css";

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"navMenu " + (menuOpen && "active")}>
            <ul>
                <li>
                    <a href='#intro'>Home</a>
                </li>
                <li>
                    <a href='#portfolio'>Portfolio</a>
                </li>
                <li>
                    <a href='#gallery'>Gallery</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
    )
}
