import './NavBar.css';
import React from 'react';
import { CartWidget } from './CartWidget';
// import { DropdownButton, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <ul>
                <Link to='/'>
                    <li>Inicio</li>
                </Link>
                <li>
                {/* <DropdownButton id="dropdown-basic-button" title="Marcas">
                    <Link to='/marca/corsair'>
                        <Dropdown.Item href="#/action-1">Corsair</Dropdown.Item>
                    </Link>
                    <Link to='/marca/cooler-master'>
                        <Dropdown.Item href="#/action-2">Cooler Master</Dropdown.Item>
                    </Link>
                    <Link to='/marca/asus'>
                        <Dropdown.Item href="#/action-3">Asus</Dropdown.Item>
                    </Link>
                    <Link to='/marca/aeroCool'>
                        <Dropdown.Item href="#/action-4">AeroCool</Dropdown.Item>
                    </Link>
                </DropdownButton> */}
                </li>
                <Link to='/marca/corsair'>
                    <li>Corsair</li>
                </Link>
                <Link to='/marca/cooler-master'>
                    <li>Cooler Master</li>
                </Link>
                <Link to='/marca/asus'>
                    <li>Asus</li>
                </Link>
                <Link to='/marca/aeroCool'>
                    <li>AeroCool</li>
                </Link>
                <Link to='/cart'>
                    <li><CartWidget/></li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar
