import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <header className="head">
                <Link to="/"><p class="logo">Bakery Owner</p></Link>
                <nav>
                    <ul className="list">
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li><Link to="/products">Products</Link></li>
                        {/* <li><Link to="/about">About Us</Link></li> */}
                        <li><Link to="contact">Contact Us</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header
