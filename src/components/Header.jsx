import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bt-flex">
        <img src="/logo.png" alt="Logo" width="100px" />
        <nav>
            <ul className='all-flex'>
                <li><Link to="home">Explore</Link></li>
                <li><Link to="blog">Blog</Link></li>
                <li><Link to="portfolio">Portfolio</Link></li>
                <li><Link to="contact">Contact Us</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header