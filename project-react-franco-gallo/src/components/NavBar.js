import './NavBar.css';
import React from 'react';
import { CartWidget } from './CartWidget';

function NavBar() {
    return (
        <nav>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Categorías</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Redes</a></li>
                <li><a href="#"><CartWidget/></a></li>
            </ul>
        </nav>
    )
}

export default NavBar
