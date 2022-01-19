import './NavBar.css';
import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs'; // Son los import de los iconos de react
import { AiFillHome } from 'react-icons/ai'; // Icons react
import { RiComputerLine } from 'react-icons/ri'; // Icons react
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <header>
            <nav>
                <ul className='ul'>
                    <li className='li'><Link to={'/'}><span><i><AiFillHome/></i></span>Inicio</Link></li>
                    <li className='li'>
                        <Link to={'/'}><span><i><RiComputerLine/></i></span>Marcas</Link>
                        <ul>
                            <li><Link to={'/marca/aeroCool'}>AeroCool</Link></li>
                            <li><Link to={'/marca/asus'}>Asus</Link></li>
                            <li><Link to={'/marca/cooler-master'}>Cooler Master</Link></li>
                            <li><Link to={'/marca/corsair'}>Corsair</Link></li>
                        </ul>
                    </li>
                    <li className='li'><Link to={'/cart'}><CartWidget/></Link></li>
                    <li className='li'><a href="#"><span><i><BsFillTelephoneFill/></i></span>Contacto</a></li> {/* Falta este href que llevara al footer */}
                </ul>
            </nav>
        </header>
    )
}

export default NavBar

// <nav>
        //     <ul>
        //         <Link to='/'>
        //             <li>Inicio</li>
        //         </Link>
        //         <li>
        //         <DropdownButton id="dropdown-basic-button" title="Marcas">
        //             <Link to='/marca/corsair'>
        //                 <Dropdown.Item href="#/action-1">Corsair</Dropdown.Item>
        //             </Link>
        //             <Link to='/marca/cooler-master'>
        //                 <Dropdown.Item href="#/action-2">Cooler Master</Dropdown.Item>
        //             </Link>
        //             <Link to='/marca/asus'>
        //                 <Dropdown.Item href="#/action-3">Asus</Dropdown.Item>
        //             </Link>
        //             <Link to='/marca/aeroCool'>
        //                 <Dropdown.Item href="#/action-4">AeroCool</Dropdown.Item>
        //             </Link>
        //         </DropdownButton>
        //         </li>
        //         <Link to='/cart'>
        //             <li><CartWidget/></li>
        //         </Link>
        //     </ul>
        // </nav>