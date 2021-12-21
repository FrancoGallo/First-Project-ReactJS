import React from 'react'
import ReactPlayer from 'react-player';
import './NavBar.css';

function NavBar() {
    return (
        <nav>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Categorías</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Redes</a></li>
            </ul>

            <div className = "background">
                <ReactPlayer
                    url = {require ("./video/background.mp4")}
                    width = "100%"
                    height = "100%"
                    playing
                    loop
                />
            </div>
        </nav>
    )
}

export default NavBar
