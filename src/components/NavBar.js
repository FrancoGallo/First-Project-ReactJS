import './NavBar.css';
import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs'; // Son los import de los iconos de react
import { AiFillHome } from 'react-icons/ai'; // Icons react
import { RiComputerLine } from 'react-icons/ri'; // Icons react
import { CartWidget } from './Cart/CartWidget';
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to={'/'}><span><i><AiFillHome/></i></span>Inicio</Link></li>
                    <li>
                        <Link to={'/'}><span><i><RiComputerLine/></i></span>Marcas</Link>
                        <ul>
                            <li><Link to={'/marca/aeroCool'}>AeroCool</Link></li>
                            <li><Link to={'/marca/asus'}>Asus</Link></li>
                            <li><Link to={'/marca/cooler-master'}>Cooler Master</Link></li>
                            <li><Link to={'/marca/corsair'}>Corsair</Link></li>
                        </ul>
                    </li>
                    <li><CartWidget/></li>
                    <li><a href="#"><span><i><BsFillTelephoneFill/></i></span>Contacto</a></li> {/* Falta este href que llevara al footer */}
                </ul>
            </nav>
        </header>
    )
}

export default NavBar